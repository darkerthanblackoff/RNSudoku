import React, { PureComponent } from 'react';

import { View, Text, TextInput, Alert } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import SwitchSelector, {
  ISwitchSelectorOption,
} from 'react-native-switch-selector';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState } from '../../interfaces';
import { setDifficulty, createNewGame, setName } from '../../redux/actions';

import { ROUTES, DIFFICULTY, COLORS as colors } from '../../constants';

import { KeyboardDismissView, MenuButton } from '../../components';
import { Play, Options, LeaderBoard } from '../../assets/svg';
import { styles } from './styles';

type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';

interface MainScreenProps extends NavigationStackScreenProps {
  difficulty: Difficulty;
  name: string;
  canResume: boolean;
  prevGameEnded?: boolean;
  setDifficulty: (diff: Difficulty) => void;
  setName: (value: string) => void;
  createNewGame: (diff: Difficulty, name: string) => void;
}

interface MainScreenState {}

const switchOptions: ISwitchSelectorOption[] = [
  {
    label: DIFFICULTY.EASY,
    value: DIFFICULTY.EASY,
  },
  {
    label: DIFFICULTY.MEDIUM,
    value: DIFFICULTY.MEDIUM,
  },
  {
    label: DIFFICULTY.HARD,
    value: DIFFICULTY.HARD,
  },
];

const mapDifficultyToNum = (difficulty: Difficulty): number => {
  if (difficulty === 'EASY') {
    return 0;
  } else if (difficulty === 'MEDIUM') {
    return 1;
  } else {
    return 2;
  }
};

class MainScreen extends PureComponent<MainScreenProps, MainScreenState> {
  public constructor(props: MainScreenProps) {
    super(props);

    this.props.setDifficulty('EASY');
  }

  private handleStart = () => {
    const { navigation, difficulty, name } = this.props;

    if (!name.trim().length) {
      Alert.alert("You need to enter you're name to start new game");
    }

    if (this.props.canResume) {
      Alert.alert(
        'Your will lost your progress',
        'Your saved progress of previous game will be lost. Are you sure you want to continue?',
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'New game',
            onPress: () => {
              this.props.createNewGame(difficulty, name);
              navigation.navigate(ROUTES.GAME);
            },
          },
        ],
      );
    } else {
      this.props.createNewGame(difficulty, name);
      navigation.navigate(ROUTES.GAME);
    }
  };

  private handleResume = () => {
    this.props.navigation.navigate(ROUTES.GAME);
  };

  private handleLeaderboard = () => {
    this.props.navigation.navigate(ROUTES.LEADER_BOARD);
  };

  public render() {
    const { difficulty, name, canResume } = this.props;

    return (
      <KeyboardDismissView>
        <LinearGradient
          style={styles.container}
          colors={[colors.top, colors.bottom]}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>SUDOKU</Text>
            {global.HermesInternal ? <Text>Powered by Hermes</Text> : undefined}
          </View>
          <View style={styles.buttonsContainer}>
            <TextInput
              style={{ ...styles.nameInput, ...styles.buttonSpacing }}
              value={name}
              onChangeText={this.props.setName}
              placeholder="Enter your name..."
              clearButtonMode="always"
              returnKeyType="done"
            />
            <SwitchSelector
              style={{ ...styles.switch, ...styles.buttonSpacing }}
              buttonColor={colors.difficulty}
              options={switchOptions}
              initial={0}
              value={mapDifficultyToNum(difficulty)}
              onPress={this.props.setDifficulty}
            />
            <MenuButton
              style={styles.buttonSpacing}
              label="Start Game"
              onPress={this.handleStart}
              color={colors.start}
              icon={<Play fill={colors.menuIcon} height={28} width={28} />}
            />
            {canResume && (
              <MenuButton
                style={styles.buttonSpacing}
                label="Resume Game"
                onPress={this.handleResume}
                color={colors.resume}
                icon={<Options fill={colors.menuIcon} height={28} width={28} />}
              />
            )}
            <MenuButton
              style={styles.buttonSpacing}
              label="Leaderboard"
              onPress={this.handleLeaderboard}
              color={colors.leaderBoard}
              icon={
                <LeaderBoard fill={colors.menuIcon} height={28} width={28} />
              }
            />
          </View>
        </LinearGradient>
      </KeyboardDismissView>
    );
  }
}

const mapStateToProps = (STORE: StoreState) => {
  const { GAME, SETTINGS } = STORE;
  return {
    ...SETTINGS,
    canResume: GAME.board !== null && !GAME.isGameFinished,
    prevGameEnded: !GAME.board,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      setDifficulty,
      setName,
      createNewGame,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreen);
