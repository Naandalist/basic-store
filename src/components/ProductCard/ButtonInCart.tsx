import React from 'react';
import {TouchableOpacity, Alert, StatusBar} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {addToCart} from '../../store/slices/cartSlice';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {ProductType} from '../../types';

import {svg} from '../../assets/svg';

type Props = {
  item: ProductType;
  containerStyle?: object;
};

const InCart: React.FC<Props> = ({item, containerStyle}): JSX.Element => {
  const dispatch = useAppDispatch();

  const cart = useAppSelector(state => state.cart.list);
  const exist = () => cart.find(i => i.id === item.id);

  return (
    <TouchableOpacity
      style={{...containerStyle}}
      onPress={() => {
        if (exist()) {
          Alert.alert('Product already in cart', 'Please see your cart', [
            {text: 'Ok'},
          ]);
        }
        if (!exist()) {
          dispatch(addToCart(item));
          showMessage({
            hideStatusBar: true,
            statusBarHeight: StatusBar.currentHeight,
            message: 'Added',
            description: `${item.title} added to cart`,
            type: 'success',
          });
        }
      }}>
      <svg.PlusSvg />
    </TouchableOpacity>
  );
};

export default InCart;