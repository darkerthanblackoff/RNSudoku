import React, { PureComponent } from 'react';

import { View, Text } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

interface MainScreenProps extends NavigationStackScreenProps {}

interface MainScreenState {}

class MainScreen extends PureComponent<MainScreenProps, MainScreenState> {
  public render() {
    return (
      <View>
        <Text>MainScreen</Text>
      </View>
    );
  }
}

export default MainScreen;
