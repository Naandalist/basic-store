import React from 'react';
import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import {ProductType} from '../../types';
import {COLORS} from '../../constants/colors';

type Props = {
  item: ProductType;
  containerStyle?: ViewStyle;
};

const SaleBadge: React.FC<Props> = ({
  item,
  containerStyle,
}): JSX.Element | null => {
  if (item.stock) {
    return (
      <View style={[styles.container, containerStyle]}>
        <Text style={styles.text}>Stock:{item.stock}</Text>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 3,
    alignSelf: 'flex-start',
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: COLORS.lightBlue,
  },
  text: {
    fontSize: 8,
    color: COLORS.mainColor,
    lineHeight: 8 * 1.7,
  },
});

export default SaleBadge;
