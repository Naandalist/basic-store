import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import {svg} from '../../assets/svg';
import {theme} from '../../constants';
import {ProductType} from '../../types';
import {useAppDispatch} from '../../hooks';
import {quantityInCart} from '../../utils';
import {removeFromCart, addToCart} from '../../store/slices/cartSlice';

type Props = {
  item: ProductType;
  version: 1 | 2;
  containerStyle?: object;
  numberOfLines?: number;
};

const ProductPrice: React.FC<Props> = ({
  item,
  version,
  numberOfLines = 1,
  containerStyle,
}): JSX.Element => {
  const dispatch = useAppDispatch();

  if (version === 1) {
    return (
      <View style={[styles.containerVer1, containerStyle]}>
        <Text style={styles.textVer1} numberOfLines={numberOfLines}>
          ${item.price.toFixed(2)}
        </Text>
      </View>
    );
  }

  if (version === 2) {
    const renderPrice = () => {
      return (
        <View style={styles.wrapperPrice}>
          <Text style={styles.priceText}>${item.price}</Text>
        </View>
      );
    };

    const renderQuantity = () => {
      return (
        <View style={styles.quantityWrapper}>
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => dispatch(removeFromCart(item))}>
            <svg.CounterMinusSvg />
          </TouchableOpacity>
          <View style={{}}>
            <Text style={styles.wrapperText}>{quantityInCart(item)}</Text>
          </View>
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => dispatch(addToCart(item))}>
            <svg.CounterPlusSvg />
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View style={styles.mainContainer}>
        {renderPrice()}
        {renderQuantity()}
      </View>
    );
  }

  return <></>;
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#DBE9F5',
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    marginBottom: 30,
  },
  quantityWrapper: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    padding: 16,
  },
  wrapperPrice: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  priceText: {
    fontSize: 20,
    lineHeight: 20 * 1.4,
  },
  containerVer1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textVer1: {
    fontSize: 14,
    lineHeight: 14 * 1.5,
    color: theme.colors.mainColor,
  },
  wrapperText: {
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductPrice;
