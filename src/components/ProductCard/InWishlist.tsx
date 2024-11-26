import React from 'react';
import {TouchableOpacity, Alert} from 'react-native';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {
  addToWishlist,
  removeFromWishlist,
} from '../../store/slices/wishlistSlice';
import {ProductType} from '../../types';
import {svg} from '../../assets/svg';
import {COLORS} from '../../constants/colors';

type Props = {
  item: ProductType;
  version: number;
  containerStyle?: object;
};

const InWishlist: React.FC<Props> = ({
  containerStyle,
  item,
  version,
}): JSX.Element | null => {
  const dispatch = useAppDispatch();

  const wishlist = useAppSelector(state => state.wishlist.list);
  const itemExist = () => wishlist.find(i => i.id === item.id);

  const fillColor = itemExist() ? COLORS.red : COLORS.transparent;
  const strokeColor = itemExist() ? COLORS.transparent : COLORS.textColor;

  const {HeartSmallSvg} = svg;

  const itemExistMessage = () => {
    return Alert.alert(
      'Product already in wishlist',
      'Are you sure you want to delete from wishlist ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => dispatch(removeFromWishlist(item)),
        },
      ],
    );
  };

  // 16 x 16
  if (version === 1) {
    return (
      <TouchableOpacity
        style={containerStyle}
        onPress={() => {
          if (itemExist()) {
            itemExistMessage();
          }
          if (!itemExist()) {
            dispatch(addToWishlist(item));
          }
        }}>
        <HeartSmallSvg fillColor={fillColor} strokeColor={strokeColor} />
      </TouchableOpacity>
    );
  }

  // 24 x 24
  if (version === 2) {
    return (
      <TouchableOpacity
        style={containerStyle}
        onPress={() => {
          if (itemExist()) {
            itemExistMessage();
          }
          if (!itemExist()) {
            dispatch(addToWishlist(item));
          }
        }}>
        <svg.HeartBigSvg fillColor={fillColor} />
      </TouchableOpacity>
    );
  }

  return null;
};

export default InWishlist;
