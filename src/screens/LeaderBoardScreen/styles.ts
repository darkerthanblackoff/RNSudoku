import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { rem } from '../../utils/dim';

export interface LeaderBoardScreenStyle {
  container: ViewStyle;
  label: TextStyle;
  listContainer: ViewStyle;
  list: ViewStyle;
  listItem: ViewStyle;
}

export const styles = StyleSheet.create<LeaderBoardScreenStyle>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    flex: 2,
    width: '100%',
  },
  listContainer: {
    flex: 5,
    width: '70%',
  },
  list: {},
  listItem: {
    height: rem(50),
    justifyContent: 'center',
  },
});
