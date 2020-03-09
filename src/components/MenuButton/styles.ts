import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export interface MenuButtonStyle {
  container: ViewStyle;
  contentWrapper: ViewStyle;
  text: TextStyle;
  icon: ViewStyle;
}

export const styles = StyleSheet.create<MenuButtonStyle>({
  container: {
    borderRadius: 10,
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: 300,
  },
  text: {
    flex: 3,
    paddingLeft: 40,
    color: '#FFF',
    fontWeight: 'bold',
  },
  icon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.15)',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: '100%',
    width: '100%',
  },
});
