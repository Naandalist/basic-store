import {showMessage} from 'react-native-flash-message';
import {useSelector} from 'react-redux';
import {ProductType} from '../types';

import {StatusBar} from 'react-native';

export const addedToCartMessage = (item: ProductType) => {
  showMessage({
    message: `${item.title} added to cart`,
    type: 'success',
    icon: 'success',
    hideStatusBar: true,
    statusBarHeight: StatusBar.currentHeight,
  });
};

export const quantityInCart = (item: ProductType) => {
  const cart = useSelector((state: {cart: {list: ProductType[]}}) => {
    return state.cart.list;
  });
  const ifItemInCart = cart.find(el => el.id === item.id);
  const quantity = ifItemInCart ? ifItemInCart.quantity : 0;
  return quantity;
};

export const itemExistsInCart = (item: ProductType) => {
  const cart = useSelector((state: {wishlist: {list: ProductType[]}}) => {
    return state.wishlist.list;
  });
  const ifItemInCart = cart.find(el => el.id === item.id);
  return ifItemInCart ? true : false;
};
