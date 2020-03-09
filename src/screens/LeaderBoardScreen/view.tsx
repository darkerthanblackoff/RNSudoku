import React, { PureComponent } from 'react';

import { View, Text } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

interface LeaderBoardScreenProps extends NavigationStackScreenProps {}

interface LeaderBoardScreenState {}

class LeaderBoardScreen extends PureComponent<
  LeaderBoardScreenProps,
  LeaderBoardScreenState
> {
  public render() {
    return (
      <View>
        <Text>LeaderBoardScreen</Text>
      </View>
    );
  }
}

export default LeaderBoardScreen;
