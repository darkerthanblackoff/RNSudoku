import React, { PureComponent } from 'react';

import { View, Text } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

interface GameScreenProps extends NavigationStackScreenProps {}

interface GameScreenState {}

class GameScreen extends PureComponent<GameScreenProps, GameScreenState> {
  public render() {
    return (
      <View>
        <Text>GameScreen</Text>
      </View>
    );
  }
}

export default GameScreen;
