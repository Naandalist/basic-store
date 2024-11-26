import {View, Text, ViewStyle, StyleSheet} from 'react-native';
import React from 'react';
import {svg} from '../../assets/svg';
import {theme} from '../../constants';
import type {ProductType} from '../../types';

type Props = {
  item: ProductType;
  version: number;
  containerStyle?: ViewStyle;
};

const ProductRating: React.FC<Props> = ({
  item,
  version,
  containerStyle,
}): JSX.Element | null => {
  if (version === 1) {
    return (
      <View style={[styles.container, containerStyle]}>
        <svg.RatingStarSvg />
        <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    lineHeight: 20, // Using fixed value instead of calculation
    marginLeft: 4,
    color: theme.colors.textColor,
  },
});

export default ProductRating;
