import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { rem } from '../../utils/dim';

export interface NumberButtonStyle {
  container: ViewStyle;
  labelContainer: ViewStyle;
  label: TextStyle;
}

const buttonSize = rem(40);

export const styles = StyleSheet.create<NumberButtonStyle>({
  container: {
    borderRadius: rem(10),
    backgroundColor: '#EBD5EA',
  },
  labelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: buttonSize,
    width: buttonSize,
  },
  label: {
    fontSize: rem(30),
    color: '#574251',
  },
});
