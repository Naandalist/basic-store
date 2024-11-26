import React, {memo} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import InWishlist from '../ProductCard/InWishlist';
import {useAppNavigation} from '../../hooks';
import ProductName from '../ProductName';
import ProductPrice from '../ProductCard/ProductPrice';
import ImageBackground from '../ImageBackground';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import type {ProductType} from '../../types';
import {COLORS} from '../../constants/colors';

type Props = {
  item: ProductType;
};

const ShopItem: React.FC<Props> = ({item}): JSX.Element => {
  const navigation = useAppNavigation();
  const blockWidth = responsiveWidth(50) - 20 - 7.5;

  return (
    <TouchableOpacity
      style={[styles.container, {width: blockWidth}]}
      onPress={() => {
        navigation.navigate('ProductDetail', {
          item,
        });
      }}>
      <ImageBackground
        source={{uri: item.thumbnail}}
        style={styles.image}
        imageStyle={styles.imageStyle}
        resizeMode="cover">
        <InWishlist
          item={item}
          version={1}
          containerStyle={styles.wishlistContainer}
        />
      </ImageBackground>
      <ProductName item={item} style={styles.productName} />
      <ProductPrice version={1} item={item} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    marginBottom: 20,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: 200,
    padding: 10,
    marginBottom: 14,
    alignItems: 'flex-end',
  },
  imageStyle: {
    borderRadius: 5,
    backgroundColor: COLORS.imageBackground,
  },
  wishlistContainer: {
    marginBottom: 'auto',
  },
  productName: {
    marginBottom: 3,
  },
});

export default memo(ShopItem);
