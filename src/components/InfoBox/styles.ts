import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { rem } from '../../utils/dim';

interface InfoBoxStyle {
  container: ViewStyle;
  label: TextStyle;
}

export const styles = StyleSheet.create<InfoBoxStyle>({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: rem(35),
    backgroundColor: '#B591B7',
    paddingHorizontal: rem(10),
    borderRadius: rem(50),
  },
  label: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
