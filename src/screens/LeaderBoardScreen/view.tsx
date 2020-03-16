import React, { PureComponent } from 'react';

import { View, Text, FlatList } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import LinearGradient from 'react-native-linear-gradient';
import { LeaderRecord } from '../../interfaces/LeaderRecord';
import { StoreState } from '../../interfaces';
import { styles } from './styles';
import { ROUTES, COLORS as colors } from '../../constants';
import { connect } from 'react-redux';

import { MenuButton } from '../../components';

interface LeaderBoardScreenProps extends NavigationStackScreenProps {
  leaders: LeaderRecord[];
}

class LeaderBoardScreen extends PureComponent<LeaderBoardScreenProps> {
  private handleMain = () => {
    this.props.navigation.navigate(ROUTES.MAIN);
  };

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
              keyExtractor={item => JSON.stringify(item)}
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
        <MenuButton
          style={{ marginBottom: 20 }}
          label="Go to Main Menu"
          onPress={this.handleMain}
          color={colors.leaderBoard}
        />
      </LinearGradient>
    );
  }
}

const mapStateToProps = (STORE: StoreState) => ({ ...STORE.LEADER_BOARD });

export default connect(
  mapStateToProps,
  null,
)(LeaderBoardScreen);
