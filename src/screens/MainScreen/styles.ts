import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export interface MainSceenStyle {
  container: ViewStyle;
  titleContainer: ViewStyle;
  title: TextStyle;
  buttonsContainer: ViewStyle;
  buttonSpacing: ViewStyle;
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
    fontSize: 40,
  },
  buttonsContainer: {
    flex: 4,
    alignItems: 'center',
  },
  buttonSpacing: {
    marginBottom: 20,
  },
});
