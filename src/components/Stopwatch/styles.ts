import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export interface StopwatchStyle {
  container: ViewStyle;
  text: TextStyle;
}

export const styles = StyleSheet.create<StopwatchStyle>({
  container: {
    padding: 5,
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  },
});
