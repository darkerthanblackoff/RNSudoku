import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { rem } from '../../utils/dim';

export interface MenuButtonStyle {
  container: ViewStyle;
  contentWrapper: ViewStyle;
  text: TextStyle;
  icon: ViewStyle;
}

export const styles = StyleSheet.create<MenuButtonStyle>({
  container: {
    borderRadius: rem(10),
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: rem(50),
    width: rem(300),
  },
  text: {
    flex: 3,
    paddingLeft: rem(40),
    color: '#FFF',
    fontWeight: 'bold',
  },
  icon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.15)',
    borderTopLeftRadius: rem(10),
    borderBottomLeftRadius: rem(10),
    height: '100%',
    width: '100%',
  },
});
