import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { rem } from '../../utils/dim';

export interface LeaderBoardScreenStyle {
  container: ViewStyle;
  label: TextStyle;
  listContainer: ViewStyle;
  list: ViewStyle;
  listItem: ViewStyle;
  listText: TextStyle;
}

export const styles = StyleSheet.create<LeaderBoardScreenStyle>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    flex: 1,
    width: '100%',
    fontSize: rem(30),
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  listContainer: {
    flex: 5,
    width: '70%',
  },
  list: {},
  listItem: {
    height: rem(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listText: {
    fontSize: rem(15),
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
