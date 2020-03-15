import React, { PureComponent } from 'react';

import { View, Text, FlatList } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import LinearGradient from 'react-native-linear-gradient';
import { LeaderRecord } from '../../interfaces/LeaderRecord';
import { styles } from './styles';
import { COLORS as colors } from '../../constants';

interface LeaderBoardScreenProps extends NavigationStackScreenProps {
  leaders: LeaderRecord[];
}

const leaders: LeaderRecord[] = [
  { name: 'aza', fineTime: '1', spentTime: '1', totalTime: 'lol' },
  { name: 'aza', fineTime: '1', spentTime: '1', totalTime: 'lol' },
  { name: 'aza', fineTime: '1', spentTime: '1', totalTime: 'lol' },
  { name: 'aza', fineTime: '1', spentTime: '1', totalTime: 'lol' },
  { name: 'aza', fineTime: '1', spentTime: '1', totalTime: 'lol' },
  { name: 'aza', fineTime: '1', spentTime: '1', totalTime: 'lol' },
  { name: 'aza', fineTime: '1', spentTime: '1', totalTime: 'lol' },
  { name: 'aza', fineTime: '1', spentTime: '1', totalTime: 'lol' },
  { name: 'aza', fineTime: '1', spentTime: '1', totalTime: 'lol' },
  { name: 'aza', fineTime: '1', spentTime: '1', totalTime: 'lol' },
  { name: 'aza', fineTime: '1', spentTime: '1', totalTime: 'lol' },
  { name: 'aza', fineTime: '1', spentTime: '1', totalTime: 'lol' },
  { name: 'aza', fineTime: '1', spentTime: '1', totalTime: 'lol' },
];

class LeaderBoardScreen extends PureComponent<LeaderBoardScreenProps> {
  public render() {
    // const { leaders } = this.props;

    return (
      <LinearGradient
        style={styles.container}
        colors={[colors.top, colors.bottom]}>
        <Text style={styles.label}>LeaderBoardScreen</Text>
        <View style={styles.listContainer}>
          <FlatList
            style={styles.list}
            data={leaders}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text>
                  {`${item.name} ${item.spentTime} + ${item.fineTime} + ${
                    item.totalTime
                  }`}
                </Text>
              </View>
            )}
          />
        </View>
      </LinearGradient>
    );
  }
}

export default LeaderBoardScreen;
