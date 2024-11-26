import React from 'react';
import {View, StyleSheet} from 'react-native';
import InCart from '../ProductCard/ButtonInCart';
import SaleBadge from '../ProductCard/SaleBadge';
import InWishlist from '../ProductCard/InWishlist';
import ProductName from '../ProductName';
import ProductPrice from '../ProductCard/ProductPrice';
import ProductRating from '../ProductCard/ProductRating';
import ImageBackground from '../ImageBackground';
import {COLORS} from '../../constants/colors';
import {ProductType} from '../../types';

type Props = {
  item: ProductType;
  containerStyle?: object;
};

const WishlistItem: React.FC<Props> = ({item, containerStyle}): JSX.Element => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.thumbnailContainer}>
        <ImageBackground
          source={{uri: item.thumbnail}}
          style={styles.imageBackground}
          imageStyle={styles.imageStyle}
          resizeMode="cover">
          <SaleBadge item={item} containerStyle={styles.saleBadge} />
        </ImageBackground>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <ProductName item={item} style={styles.productName} />
          <InWishlist item={item} version={1} />
        </View>
        <ProductPrice
          item={item}
          version={1}
          containerStyle={styles.priceContainer}
        />
        <View style={styles.footerContainer}>
          <ProductRating item={item} version={1} />
          <InCart item={item} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  thumbnailContainer: {
    width: 100,
    height: 100,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  imageStyle: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: COLORS.imageBackground,
  },
  saleBadge: {
    margin: 10,
    marginTop: 'auto',
  },
  contentContainer: {
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.lightBlue,
    paddingTop: 14,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 14,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    marginBottom: 3,
  },
  priceContainer: {
    marginBottom: 'auto',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default WishlistItem;
