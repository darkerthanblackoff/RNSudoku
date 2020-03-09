import { StyleSheet, ViewStyle } from 'react-native';

export interface GameSceenStyle {
  container: ViewStyle;
}

export const styles = StyleSheet.create<GameSceenStyle>({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
