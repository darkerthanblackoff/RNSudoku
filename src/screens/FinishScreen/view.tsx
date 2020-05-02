import React, { PureComponent } from 'react';
import { View, Text, BackHandler } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { Play, LeaderBoard } from '../../assets/svg';
import { MenuButton } from '../../components';
import { ROUTES, COLORS as colors } from '../../constants';

import { NavigationStackScreenProps } from 'react-navigation-stack';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { StoreState } from '../../interfaces';
import { createNewGame, addLeaderboardRecord } from '../../redux/actions';
import { LeaderRecord } from '../../interfaces/LeaderRecord';
import { formatTimeString } from '../../utils/time';

import { styles } from './styles';

type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';

export interface FinishScreenProps extends NavigationStackScreenProps {
  currentDifficulty: 'EASY' | 'MEDIUM' | 'HARD';
  errorsCount: number;
  timerFine: number;
  timerValue: number;
  currentGamePlayer: string;
  leaders: Array<LeaderRecord>;
  createNewGame: (diff: Difficulty, name: string) => void;
  addLeaderboardRecord: (
    leaders: Array<LeaderRecord>,
    record: LeaderRecord,
  ) => void;
}

class FinishScreen extends PureComponent<FinishScreenProps> {
  public componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

    const {
      currentDifficulty,
      errorsCount,
      timerFine,
      timerValue,
      currentGamePlayer,
    } = this.props;
    const fineTime = formatTimeString(timerFine + '');
    const spentTime = formatTimeString(timerValue + '');
    const totalTime = formatTimeString(timerValue + timerFine + '');

    const record: LeaderRecord = {
      name: currentGamePlayer,
      difficulty: currentDifficulty,
      errorsCount,
      fineTime,
      spentTime,
      totalTime,
      date: Math.round(new Date().getTime() / 1000),
    };

    this.props.addLeaderboardRecord(this.props.leaders, record);
  }

  public componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  private handleStart = () => {
    const { navigation, currentDifficulty, currentGamePlayer } = this.props;

    this.props.createNewGame(currentDifficulty, currentGamePlayer);
    navigation.navigate(ROUTES.GAME);
  };

  private handleLeaderboard = () => {
    this.props.navigation.navigate(ROUTES.LEADER_BOARD);
  };

  private handleBackPress = () => {
    return true;
  };

  public render() {
    const {
      timerValue,
      timerFine,
      errorsCount,
      currentDifficulty,
    } = this.props;

    return (
      <LinearGradient
        colors={[colors.top, colors.bottom]}
        style={styles.container}>
        <Text style={styles.congratulation}>CONGRATULATION!</Text>
        <View style={styles.resultBoard}>
          <Text style={styles.resultText}>RESULT</Text>
          <View style={styles.resultSeparator} />
          <View style={styles.resultRow}>
            <Text style={styles.resultRowText}>Difficulty: </Text>
            <Text style={styles.resultRowText}>{currentDifficulty}</Text>
          </View>
          <View style={styles.resultRow}>
            <Text style={styles.resultRowText}>Time spent: </Text>
            <Text style={styles.resultRowText}>
              {formatTimeString(timerValue + '')}
            </Text>
          </View>
          <View style={styles.resultRow}>
            <Text
              style={
                styles.resultRowText
              }>{`Time fine (for ${errorsCount} errors): `}</Text>
            <Text style={styles.resultRowText}>
              {formatTimeString(timerFine + '')}
            </Text>
          </View>
          <View style={styles.resultSeparator} />
          <View style={styles.resultRow}>
            <Text style={styles.resultRowText}>Time total: </Text>
            <Text style={styles.resultRowText}>
              {formatTimeString(timerFine + timerValue + '')}
            </Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <MenuButton
            style={styles.button}
            label="Start new Game"
            onPress={this.handleStart}
            color={colors.start}
            icon={<Play fill={colors.menuIcon} height={28} width={28} />}
          />
          <MenuButton
            style={styles.button}
            label="Go to Leaderboard"
            onPress={this.handleLeaderboard}
            color={colors.leaderBoard}
            icon={<LeaderBoard fill={colors.menuIcon} height={28} width={28} />}
          />
        </View>
      </LinearGradient>
    );
  }
}

const mapStateToProps = (STORE: StoreState) => {
  const { GAME, LEADER_BOARD } = STORE;
  return { ...GAME, ...LEADER_BOARD };
};
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ createNewGame, addLeaderboardRecord }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FinishScreen);
