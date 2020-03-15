import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { Play, LeaderBoard } from '../../assets/svg';
import { MenuButton } from '../../components';
import { ROUTES, COLORS as colors } from '../../constants';

import { NavigationStackScreenProps } from 'react-navigation-stack';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { StoreState } from '../../interfaces';
import { createNewGame } from '../../redux/actions';
import { formatTimeString } from '../../utils/time';

import { styles } from './styles';

type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';

export interface FinishScreenProps extends NavigationStackScreenProps {
  currentDifficulty: 'EASY' | 'MEDIUM' | 'HARD';
  errorsCount: number;
  timerFine: number;
  timerValue: number;
  currentGamePlayer: string;
  createNewGame: (diff: Difficulty, name: string) => void;
}

class FinishScreen extends PureComponent<FinishScreenProps> {
  private handleStart = () => {
    const { navigation, currentDifficulty, currentGamePlayer } = this.props;

    this.props.createNewGame(currentDifficulty, currentGamePlayer);
    navigation.navigate(ROUTES.GAME);
  };

  private handleLeaderboard = () => {
    this.props.navigation.navigate(ROUTES.LEADER_BOARD);
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

const mapStateToProps = (STORE: StoreState) => ({ ...STORE.GAME });
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ createNewGame }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FinishScreen);
