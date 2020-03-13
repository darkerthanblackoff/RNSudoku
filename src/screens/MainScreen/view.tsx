import React, { PureComponent } from 'react';

import { View, Text } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import SwitchSelector, {
  ISwitchSelectorOption,
} from 'react-native-switch-selector';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState } from '../../interfaces';
import { setDifficulty, createNewGame } from '../../redux/actions';

import { ROUTES, DIFFICULTY } from '../../constants';

import { MenuButton } from '../../components';
import { Play, Options, LeaderBoard } from '../../assets/svg';
import { styles } from './styles';

type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';

interface MainScreenProps extends NavigationStackScreenProps {
  difficulty: Difficulty;
  name: string;
  setDifficulty: (diff: Difficulty) => void;
  createNewGame: (diff: Difficulty) => void;
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
    const { navigation, difficulty } = this.props;
    return (
      <LinearGradient style={styles.container} colors={['#6A4D6B', '#9E5D75']}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>SUDOKU</Text>
        </View>
        <View style={styles.buttonsContainer}>
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
              this.props.createNewGame(difficulty);
              navigation.navigate(ROUTES.GAME);
            }}
            color="#EC4F64"
            icon={<Play fill="#FFF" height={28} width={28} />}
          />
          <MenuButton
            style={styles.buttonSpacing}
            label="Leaderboard"
            onPress={() => {}}
            color="#30AEEB"
            icon={<LeaderBoard fill="#FFF" height={28} width={28} />}
          />
          <MenuButton
            style={styles.buttonSpacing}
            label="Options"
            onPress={() => {}}
            color="#F4C956"
            icon={<Options fill="#FFF" height={28} width={28} />}
          />
        </View>
      </LinearGradient>
    );
  }
}

const mapStateToProps = (STORE: StoreState) => ({ ...STORE.SETTINGS });

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      setDifficulty,
      createNewGame,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreen);
