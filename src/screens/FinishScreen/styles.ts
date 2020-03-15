import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { rem } from '../../utils/dim';

export interface FinishScreenStyle {
  container: ViewStyle;
  congratulation: TextStyle;
  buttonsContainer: ViewStyle;
  button: ViewStyle;
  resultBoard: ViewStyle;
  resultRow: ViewStyle;
  resultText: TextStyle;
  resultSeparator: ViewStyle;
  resultRowText: TextStyle;
}

export const styles = StyleSheet.create<FinishScreenStyle>({
  container: {
    flex: 1,
  },
  congratulation: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: rem(30),
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  buttonsContainer: {
    paddingHorizontal: rem(20),
    marginVertical: rem(10),
  },
  button: {
    marginBottom: rem(10),
  },
  resultBoard: {
    flex: 2,
    marginHorizontal: rem(20),
  },
  resultRow: {
    flexDirection: 'row',
    height: rem(50),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultText: {
    textAlign: 'center',
    fontSize: rem(30),
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  resultSeparator: {
    backgroundColor: '#FFFFFF',
    height: rem(1),
  },
  resultRowText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: rem(20),
  },
});
