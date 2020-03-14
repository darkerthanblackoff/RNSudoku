import React, { PureComponent } from 'react';

import { View, Text } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState } from '../../interfaces';
import {
  selectCell,
  placeImValue,
  startTimer,
  getMsecs,
  stopTimer,
  undo,
} from '../../redux/actions';

import { NumberButton, Cell, InfoBox, Stopwatch } from '../../components';
import { Undo } from '../../assets/svg';
import { styles } from './styles';

import { BoardCell } from '../../gen';

interface GameScreenProps extends NavigationStackScreenProps {
  board: Array<Array<BoardCell>> | null;
  selectedRow: number | null;
  selectedColumn: number | null;
  timerTicks: boolean;
  timerValue: number;
  timerResets: boolean;
  currentDifficulty: string;
  errorsCount: number;
  currentGamePlayer: string;
  isGameFinished: boolean;
  selectCell: (i: number, j: number) => void;
  placeImValue: (selRow: number, selCol: number, val: number) => void;
  startTimer: () => void;
  stopTimer: () => void;
  getMsecs: (msecs: number) => void;
  undoQueue: Array<{ i: number; j: number; prevValue: number | null }>;
  undo: (
    undoQueue: Array<{ i: number; j: number; prevValue: number | null }>,
  ) => void;
}

interface GameScreenState {}

class GameScreen extends PureComponent<GameScreenProps, GameScreenState> {
  private topNumbers = [1, 2, 3, 4, 5];
  private bottomNumbers = [6, 7, 8, 9];

  public constructor(props: GameScreenProps) {
    super(props);

    this.numberButtonPress = this.numberButtonPress.bind(this);
    this.getTimerValue = this.getTimerValue.bind(this);
  }

  public componentDidMount() {
    this.props.startTimer();
  }

  public componentDidUpdate() {
    if (this.props.isGameFinished) {
      alert('Finish');
    }
  }

  private numberButtonPress(value?: number) {
    const { selectedRow, selectedColumn } = this.props;
    if (selectedRow !== null && selectedColumn !== null && value) {
      this.props.placeImValue(selectedRow, selectedColumn, value);
    }
  }

  private getTimerValue(msecs: number) {
    if (((msecs % 60000) / 1000).toFixed(0) % 1 === 0) {
      this.props.getMsecs(msecs);
    }
  }

  public render() {
    const {
      board,
      selectedRow,
      selectedColumn,
      timerTicks,
      timerValue,
      currentDifficulty,
      errorsCount,
    } = this.props;

    return (
      <>
        <View style={styles.bgContainer}>
          <View style={styles.bgTopRow} />
          <View style={styles.bgBottomRow} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.boardContainer}>
            <View style={styles.topBarContainer}>
              <InfoBox label={`Erros: ${errorsCount}`} />
              <Stopwatch
                start={timerTicks}
                startTime={timerValue}
                textStyle={styles.stopwatchText}
                laps
              />
              <Text style={styles.difficultyText}>{currentDifficulty}</Text>
            </View>
            <View style={styles.board}>
              {board &&
                board.map((row, rIndex) => (
                  <View key={`${rIndex}`} style={styles.boardRow}>
                    {row.map((el, cIndex) => (
                      <Cell
                        key={`${rIndex}:${cIndex}:${el.getReValue()}`}
                        label={
                          el.isVisible() ? el.getReValue() : el.getImValue()
                        }
                        visible={el.isVisible()}
                        i={rIndex}
                        j={cIndex}
                        selected={
                          rIndex === selectedRow && cIndex === selectedColumn
                        }
                        xSelected={
                          rIndex === selectedRow || cIndex === selectedColumn
                        }
                        onPress={this.props.selectCell}
                      />
                    ))}
                  </View>
                ))}
            </View>
          </View>
          <View style={styles.numberButtonsContainer}>
            <View style={styles.numberButtonsRow}>
              {this.topNumbers.map(val => (
                <NumberButton
                  key={val}
                  style={styles.numberButtons}
                  value={val}
                  onPress={this.numberButtonPress}
                />
              ))}
            </View>
            <View style={styles.numberButtonsRow}>
              {this.bottomNumbers.map(val => (
                <NumberButton
                  key={val}
                  style={styles.numberButtons}
                  value={val}
                  onPress={this.numberButtonPress}
                />
              ))}
              <NumberButton
                style={styles.numberButtons}
                value={<Undo fill="#574251" width={28} height={28} />}
                onPress={() => {
                  this.props.undo(this.props.undoQueue);
                }}
              />
            </View>
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = (STORE: StoreState) => ({ ...STORE.GAME });
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      selectCell,
      placeImValue,
      startTimer,
      getMsecs,
      stopTimer,
      undo,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameScreen);
