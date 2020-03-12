import React from 'react';
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native';

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
      <TouchableOpacity onPress={onPress}>
        <View style={styles.contentWrapper}>
          {icon && <View style={styles.icon}>{icon}</View>}
          <Text style={styles.text}>{label.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(MenuButton);
