import React, {memo} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import InCart from './ButtonInCart';
import {ProductType} from '../../types';
import ProductPrice from './ProductPrice';
import ProductRating from './ProductRating';
import SaleBadge from './SaleBadge';
import {useAppNavigation} from '../../hooks';
import InWishlist from './InWishlist';
import ImageBackground from '../ImageBackground';
import {COLORS} from '../../constants/colors';

type Props = {
  item: ProductType;
  lastItem?: boolean;
};

const ProductCard: React.FC<Props> = ({item, lastItem}): JSX.Element | null => {
  const navigation = useAppNavigation();

  return (
    <TouchableOpacity
      style={[styles.container, lastItem ? null : styles.marginBottom]}
      onPress={() => navigation.navigate('ProductDetail', {item})}>
      <ImageBackground
        source={{uri: item.thumbnail}}
        style={styles.image}
        imageStyle={styles.imageStyle}
        resizeMode="cover">
        <SaleBadge item={item} containerStyle={styles.saleBadge} />
      </ImageBackground>
      <View style={styles.contentContainer}>
        <View style={styles.rowSpaceBetween}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <InWishlist item={item} version={1} />
        </View>
        <ProductPrice item={item} version={1} />
        <View style={styles.rowSpaceBetween}>
          <ProductRating item={item} version={1} />
          <InCart item={item} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    maxWidth: 220,
  },
  marginBottom: {
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  imageStyle: {
    backgroundColor: COLORS.imageBackground,
    borderRadius: 3,
  },
  saleBadge: {
    marginTop: 'auto',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    justifyContent: 'center',
    borderColor: COLORS.lightBlue,
    marginRight: 14,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default memo(ProductCard);
