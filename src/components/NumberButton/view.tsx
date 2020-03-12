import React from 'react';
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native';
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
      <TouchableOpacity
        onPress={() => {
          onPress(value);
        }}
        style={styles.container}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{value}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
