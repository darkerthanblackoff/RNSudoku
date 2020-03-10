import React from 'react';
import { View, Text, TouchableNativeFeedback, ViewStyle } from 'react-native';

import { styles } from './styles';

export interface MenuButtonProps {
  label: string;
  onPress: () => void;
  icon?: JSX.Element;
  color?: string;
  style?: ViewStyle;
}

const MenuButton = (props: MenuButtonProps) => {
  const { label, onPress, icon, color, style } = props;

  return (
    <View style={[styles.container, { backgroundColor: color }, style]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#000', true)}>
        <View style={styles.contentWrapper}>
          {icon && <View style={styles.icon}>{icon}</View>}
          <Text style={styles.text}>{label.toUpperCase()}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default React.memo(MenuButton);
