import React from 'react';
import { View, Text, TouchableNativeFeedback, ViewStyle } from 'react-native';
import { styles } from './styles';

export interface NumberButtonProps {
  value: number;
  onPress: (value: number) => void;
  style?: ViewStyle;
}

export const NumberButton = (props: NumberButtonProps) => {
  const { value, onPress, style } = props;

  return (
    <View style={[styles.container, style]}>
      <TouchableNativeFeedback
        onPress={() => {
          onPress(value);
        }}
        style={styles.container}
        background={TouchableNativeFeedback.Ripple('#000', true)}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{value}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
