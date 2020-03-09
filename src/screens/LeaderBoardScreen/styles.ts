import { StyleSheet, ViewStyle } from 'react-native';

export interface LeaderBoardScreenStyle {
  container: ViewStyle;
}

export const styles = StyleSheet.create<LeaderBoardScreenStyle>({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
