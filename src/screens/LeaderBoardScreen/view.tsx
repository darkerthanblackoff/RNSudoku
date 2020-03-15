import React, { PureComponent } from 'react';

import { View, Text, FlatList } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import LinearGradient from 'react-native-linear-gradient';
import { LeaderRecord } from '../../interfaces/LeaderRecord';
import { StoreState } from '../../interfaces';
import { styles } from './styles';
import { COLORS as colors } from '../../constants';
import { connect } from 'react-redux';

interface LeaderBoardScreenProps extends NavigationStackScreenProps {
  leaders: LeaderRecord[];
}

class LeaderBoardScreen extends PureComponent<LeaderBoardScreenProps> {
  public render() {
    const { leaders } = this.props;

    return (
      <LinearGradient
        style={styles.container}
        colors={[colors.top, colors.bottom]}>
        <Text style={styles.label}>Leaderboard</Text>
        <View style={styles.listContainer}>
          {leaders.length > 0 ? (
            <FlatList
              style={styles.list}
              data={leaders}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={styles.listItem}>
                  <Text style={styles.listText}>{item.name}</Text>
                  <View>
                    <Text style={styles.listText}>{`${item.difficulty} ${
                      item.errorsCount
                    } ${item.totalTime}`}</Text>
                  </View>
                </View>
              )}
            />
          ) : (
            <Text style={styles.listText}>There is nothing to show :(</Text>
          )}
        </View>
      </LinearGradient>
    );
  }
}

const mapStateToProps = (STORE: StoreState) => ({ ...STORE.LEADER_BOARD });

export default connect(
  mapStateToProps,
  null,
)(LeaderBoardScreen);
