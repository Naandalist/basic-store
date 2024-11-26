import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ProductType} from '../../types';
import {useAppDispatch} from '../../hooks';
import {quantityInCart} from '../../utils';
import {addToCart, removeFromCart} from '../../store/slices/cartSlice';
import OrderItemBtn from '../Button/ButtonOrderItem';
import {COLORS} from '../../constants/colors';

type Props = {
  item: ProductType;
};

const OrderCounter: React.FC<Props> = ({item}): JSX.Element => {
  const dispatch = useAppDispatch();
  const quantity = quantityInCart(item);
  return (
    <View style={styles.container}>
      <OrderItemBtn
        plus={true}
        onPress={() => {
          dispatch(addToCart(item));
        }}
      />
      <Text style={styles.textQuantity}>{quantity}</Text>
      <OrderItemBtn
        minus={true}
        onPress={() => {
          dispatch(removeFromCart(item));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  textQuantity: {
    fontSize: 12,
    color: COLORS.textColor,
  },
});

export default OrderCounter;
