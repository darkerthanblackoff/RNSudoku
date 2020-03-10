import React, { PureComponent } from 'react';

import { View } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { NumberButton } from '../../components';
import { styles } from './styles';

interface GameScreenProps extends NavigationStackScreenProps {}

interface GameScreenState {}

class GameScreen extends PureComponent<GameScreenProps, GameScreenState> {
  private topNumbers = [1, 2, 3, 4, 5];
  private bottomNumbers = [6, 7, 8, 9];

  public constructor(props: GameScreenProps) {
    super(props);

    this.numberButtonPress = this.numberButtonPress.bind(this);
  }

  private numberButtonPress(value: number) {
    console.log(value);
  }

  public render() {
    return (
      <>
        <View style={styles.bgContainer}>
          <View style={styles.bgTopRow} />
          <View style={styles.bgBottomRow} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.numberButtonsContainer}>
            <View style={styles.numberButtonsRow}>
              {this.topNumbers.map(val => (
                <NumberButton
                  style={styles.numberButtons}
                  value={val}
                  onPress={this.numberButtonPress}
                />
              ))}
            </View>
            <View style={styles.numberButtonsRow}>
              {this.bottomNumbers.map(val => (
                <NumberButton
                  style={styles.numberButtons}
                  value={val}
                  onPress={this.numberButtonPress}
                />
              ))}
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default GameScreen;
