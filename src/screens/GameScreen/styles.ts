import { StyleSheet, ViewStyle } from 'react-native';
import { rem } from '../../utils/dim';

export interface GameSceenStyle {
  bgContainer: ViewStyle;
  bgTopRow: ViewStyle;
  bgBottomRow: ViewStyle;
  container: ViewStyle;
  contentContainer: ViewStyle;
  numberButtonsContainer: ViewStyle;
  numberButtonsRow: ViewStyle;
}

export const styles = StyleSheet.create<GameSceenStyle>({
  bgContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  bgTopRow: { flex: 1, backgroundColor: '#6A4D6B' },
  bgBottomRow: { flex: 3, backgroundColor: '#9E5D75' },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  numberButtonsContainer: {
    alignItems: 'center',
    width: '100%',
  },
  numberButtonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: rem(15),
  },
});
