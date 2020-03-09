import { StyleSheet, ViewStyle } from 'react-native';

export interface MainSceenStyle {
  container: ViewStyle;
}

export const styles = StyleSheet.create<MainSceenStyle>({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
