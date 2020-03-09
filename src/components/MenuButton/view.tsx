import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

import { styles } from './styles';

export interface MenuButtonProps {
  label: string;
  onPress: () => void;
  icon?: JSX.Element;
  color?: string;
}

const MenuButton = (props: MenuButtonProps) => {
  const { label, onPress, icon, color } = props;

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
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
