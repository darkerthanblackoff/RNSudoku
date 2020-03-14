import React from 'react';
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { styles } from './styles';

export interface NumberButtonProps {
  value: number | React.ReactNode;
  onPress: (value?: number) => void;
  style?: ViewStyle;
}

export const NumberButton = (props: NumberButtonProps) => {
  const { value, onPress, style } = props;

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={() => {
          if (typeof value === 'number') {
            onPress(value);
          } else {
            onPress();
          }
        }}
        style={styles.container}>
        <View style={styles.labelContainer}>
          {typeof value === 'number' ? (
            <Text style={styles.label}>{value}</Text>
          ) : (
            value
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
