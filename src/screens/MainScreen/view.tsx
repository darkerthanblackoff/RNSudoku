import React, { PureComponent } from 'react';

import { View, Text } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';

import { ROUTES } from '../../constants';

import { MenuButton } from '../../components';
import { Play, Tips, Options } from '../../assets/svg';
import { styles } from './styles';

interface MainScreenProps extends NavigationStackScreenProps {}

interface MainScreenState {}

class MainScreen extends PureComponent<MainScreenProps, MainScreenState> {
  public render() {
    const { navigation } = this.props;
    return (
      <LinearGradient style={styles.container} colors={['#6C4E6A', '#995D76']}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>SUDOKU</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <MenuButton
            style={styles.buttonSpacing}
            label="Start Game"
            onPress={() => {
              navigation.navigate(ROUTES.GAME);
            }}
            color="#EC4F64"
            icon={<Play fill="#FFF" height={28} width={28} />}
          />
          <MenuButton
            style={styles.buttonSpacing}
            label="Tips"
            onPress={() => {}}
            color="#30AEEB"
            icon={<Tips fill="#FFF" height={28} width={28} />}
          />
          <MenuButton
            style={styles.buttonSpacing}
            label="Options"
            onPress={() => {}}
            color="#F4C956"
            icon={<Options fill="#FFF" height={28} width={28} />}
          />
        </View>
      </LinearGradient>
    );
  }
}

export default MainScreen;
