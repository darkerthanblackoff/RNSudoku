import React from 'react';
import { View, Text, ViewStyle } from 'react-native';

import { styles } from './styles';

interface InfoBox {
  label: string;
  style?: ViewStyle;
}

const InfoBox = (props: InfoBox) => {
  const { label, style } = props;

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default React.memo(InfoBox);
