import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ProductType} from '../../types';
import OrderCounter from '../OrderCounter';
import SaleBadge from '../ProductCard/SaleBadge';
import ProductName from '../ProductName';
import ProductPrice from '../ProductCard/ProductPrice';
import ImageBackground from '../ImageBackground';
import {COLORS} from '../../constants/colors';

type Props = {item: ProductType; lastElement?: boolean};

const OrderItem: React.FC<Props> = ({item, lastElement}): JSX.Element => {
  const renderImage = () => {
    return (
      <ImageBackground
        source={{uri: item.thumbnail}}
        style={styles.image}
        imageStyle={styles.imageStyle}
        resizeMode="contain">
        <SaleBadge version={1} item={item} containerStyle={styles.saleBadge} />
      </ImageBackground>
    );
  };

  const renderInfo = () => {
    return (
      <View style={styles.infoContainer}>
        <View style={styles.productDetailsContainer}>
          <ProductName item={item} version={1} style={styles.productName} />
          <ProductPrice
            item={item}
            version={1}
            containerStyle={styles.productPrice}
          />
        </View>
        <OrderCounter item={item} />
      </View>
    );
  };

  return (
    <View style={[styles.container, lastElement && styles.lastItem]}>
      {renderImage()}
      {renderInfo()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    marginBottom: 14,
  },
  lastItem: {
    marginBottom: 30,
  },
  image: {
    width: 100,
    height: '100%',
  },
  imageStyle: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: COLORS.imageBackground,
  },
  saleBadge: {
    margin: 4,
    marginTop: 'auto',
  },
  infoContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.lightBlue,
    width: '90%',
    padding: 14,
    paddingRight: 0,
    flexDirection: 'row',
    flex: 1,
    marginRight: 13,
  },
  productDetailsContainer: {
    marginRight: 'auto',
    justifyContent: 'space-between',
  },
  productName: {
    marginBottom: 3,
  },
  productPrice: {
    marginBottom: 'auto',
  },
});

export default OrderItem;
