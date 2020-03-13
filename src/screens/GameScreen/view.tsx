import React, { PureComponent } from 'react';

import { View } from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StoreState } from '../../interfaces';
import {
  init,
  selectCell,
  updateBoard,
  placeImValue,
  startTimer,
} from '../../redux/actions';

import { NumberButton, Cell, InfoBox } from '../../components';
import { styles } from './styles';

import { BoardCell } from '../../gen';

interface GameScreenProps extends NavigationStackScreenProps {
  board: Array<Array<BoardCell>> | null;
  selectedRow: number | null;
  selectedColumn: number | null;
  timerTicks: boolean;
  timerResets: boolean;
  init: () => void;
  selectCell: (i: number, j: number) => void;
  updateBoard: () => void;
  placeImValue: (val: number) => void;
  startTimer: () => void;
}

interface GameScreenState {}

class GameScreen extends PureComponent<GameScreenProps, GameScreenState> {
  private topNumbers = [1, 2, 3, 4, 5];
  private bottomNumbers = [6, 7, 8, 9, -1];

  public constructor(props: GameScreenProps) {
    super(props);

    this.numberButtonPress = this.numberButtonPress.bind(this);
  }

  public componentDidMount() {
    this.props.startTimer();
  }

  private numberButtonPress(value: number) {
    if (this.props.selectedRow || this.props.selectedColumn) {
      this.props.placeImValue(value);
    }
  }

  public render() {
    const { board, selectedRow, selectedColumn, timerTicks } = this.props;

    return (
      <>
        <View style={styles.bgContainer}>
          <View style={styles.bgTopRow} />
          <View style={styles.bgBottomRow} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.boardContainer}>
            <View style={styles.topBarContainer}>
              <InfoBox label="Errors Count: 0" />
              <Stopwatch
                start={timerTicks}
                options={{
                  container: {},
                  text: { fontSize: 20, color: '#FFF', fontWeight: 'bold' },
                }}
              />
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
                  onPress={
                    val > 0
                      ? this.numberButtonPress
                      : () => {
                          this.props.updateBoard();
                        }
                  }
                />
              ))}
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
      init,
      selectCell,
      updateBoard,
      placeImValue,
      startTimer,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameScreen);
