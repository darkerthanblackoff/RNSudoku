import React, { PureComponent } from 'react';

import { View, Text, TextInput } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import SwitchSelector, {
  ISwitchSelectorOption,
} from 'react-native-switch-selector';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState } from '../../interfaces';
import { setDifficulty, createNewGame, setName } from '../../redux/actions';

import { ROUTES, DIFFICULTY } from '../../constants';

import { MenuButton } from '../../components';
import { Play, Options, LeaderBoard } from '../../assets/svg';
import { styles } from './styles';

type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';

interface MainScreenProps extends NavigationStackScreenProps {
  difficulty: Difficulty;
  name: string;
  canResume: boolean;
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
    return 0;
  }
};

class MainScreen extends PureComponent<MainScreenProps, MainScreenState> {
  public render() {
    const { navigation, difficulty, name, canResume } = this.props;

    return (
      <LinearGradient style={styles.container} colors={['#6A4D6B', '#9E5D75']}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>SUDOKU</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TextInput
            style={{ ...styles.nameInput, ...styles.buttonSpacing }}
            value={name}
            onChangeText={this.props.setName}
            placeholder="Enter your name..."
          />
          <SwitchSelector
            style={{ ...styles.switch, ...styles.buttonSpacing }}
            buttonColor="#7953CF"
            options={switchOptions}
            initial={0}
            value={mapDifficultyToNum(difficulty)}
            onPress={this.props.setDifficulty}
          />
          <MenuButton
            style={styles.buttonSpacing}
            label="Start Game"
            onPress={() => {
              this.props.createNewGame(difficulty, name);
              navigation.navigate(ROUTES.GAME);
            }}
            color="#EC4F64"
            icon={<Play fill="#FFF" height={28} width={28} />}
          />
          {canResume && (
            <MenuButton
              style={styles.buttonSpacing}
              label="Resume Game"
              onPress={() => {
                navigation.navigate(ROUTES.GAME);
              }}
              color="#F4C956"
              icon={<Options fill="#FFF" height={28} width={28} />}
            />
          )}
          <MenuButton
            style={styles.buttonSpacing}
            label="Leaderboard"
            onPress={() => {}}
            color="#30AEEB"
            icon={<LeaderBoard fill="#FFF" height={28} width={28} />}
          />
        </View>
      </LinearGradient>
    );
  }
}

const mapStateToProps = (STORE: StoreState) => {
  const { GAME, SETTINGS } = STORE;
  return { ...SETTINGS, canResume: GAME.board !== null };
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
