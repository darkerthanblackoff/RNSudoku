import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { rem } from '../../utils/dim';

export interface MainSceenStyle {
  container: ViewStyle;
  titleContainer: ViewStyle;
  title: TextStyle;
  buttonsContainer: ViewStyle;
  buttonSpacing: ViewStyle;
  switch: ViewStyle;
  nameInput: ViewStyle;
}

export const styles = StyleSheet.create<MainSceenStyle>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFEFF',
    fontWeight: 'bold',
    fontSize: rem(40),
  },
  buttonsContainer: {
    flex: 4,
    alignItems: 'center',
  },
  buttonSpacing: {
    marginBottom: rem(20),
  },
  switch: {
    width: rem(300),
  },
  nameInput: {
    width: rem(300),
    height: rem(50),
    backgroundColor: '#FFF',
    borderRadius: rem(10),
  },
});
