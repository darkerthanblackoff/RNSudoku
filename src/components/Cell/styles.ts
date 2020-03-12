import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { rem } from '../../utils/dim';

export interface CellStyle {
  container: ViewStyle;
  selected: ViewStyle;
  label: TextStyle;
}

const size = rem(37);

export const styles = StyleSheet.create<CellStyle>({
  container: {
    height: size,
    width: size,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#D5B9D0',
    borderWidth: 1,
  },
  selected: {},
  label: {
    fontSize: rem(25),
    color: '#574251',
  },
});
