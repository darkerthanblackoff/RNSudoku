import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import { styles } from './styles';

export interface CellProps {
  label?: number | null;
  selected?: boolean;
  xSelected?: boolean;
  visible?: boolean;
  onPress: (i: number, j: number) => void;
  i: number;
  j: number;
}

const Cell = (props: CellProps) => {
  const { label = null, onPress, selected, xSelected, visible, i, j } = props;
  const bordRads = {
    borderBottomWidth: i + 1 === 3 || i + 1 === 6 ? 2 : 0,
    borderRightWidth: j + 1 === 3 || j + 1 === 6 ? 2 : 0,
    borderBottomColor: i + 1 === 3 || i + 1 === 6 ? '#682B57' : '#D5B9D0',
    borderRightColor: j + 1 === 3 || j + 1 === 6 ? '#682B57' : '#D5B9D0',
    borderTopLeftRadius: i === 0 && j === 0 ? 10 : 0,
    borderTopRightRadius: i === 0 && j === 8 ? 10 : 0,
    borderBottomLeftRadius: i === 8 && j === 0 ? 10 : 0,
    borderBottomRightRadius: i === 8 && j === 8 ? 10 : 0,
  };

  let backgroundColor = '#FFFFFF';
  if (xSelected) {
    backgroundColor = '#EFD9EE';
  }
  if (selected) {
    backgroundColor = '#9E5D75';
  }
  if (visible && selected) {
    backgroundColor = '#B4B9BC';
  }

  return (
    <TouchableWithoutFeedback onPress={() => onPress(i, j)}>
      <View style={[styles.container, bordRads, { backgroundColor }]}>
        {label && <Text style={styles.label}>{label}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(Cell);
