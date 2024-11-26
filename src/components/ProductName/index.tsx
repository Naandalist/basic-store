import React from 'react';
import {Text, TextStyle, StyleSheet} from 'react-native';
import {ProductType} from '../../types';
import {COLORS} from '../../constants/colors';

type Props = {
  item: ProductType;
  style?: TextStyle;
};

const ProductName: React.FC<Props> = ({item, style}): JSX.Element | null => {
  return (
    <Text style={[styles.text, style]} numberOfLines={2}>
      {item.title}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    marginRight: 'auto',
    color: COLORS.textColor,
    maxWidth: 200,
  },
});

export default ProductName;
