import {View, Text, Alert, StyleSheet} from 'react-native';
import React from 'react';

import {svg} from '../../assets/svg';
import {ProductType} from '../../types';
import {components} from '../../components';
import {quantityInCart, addedToCartMessage} from '../../utils';
import {fullRemoveFromCart, addToCart} from '../../store/slices/cartSlice';
import {COLORS} from '../../constants/colors';
import GoBack from '../../components/GoBack';
import {useAppNavigation, useAppDispatch} from '../../hooks';

type Props = {item: ProductType};

const Content: React.FC<Props> = ({item}): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const quantity = quantityInCart(item) as number;

  const renderCarousel = () => {
    return <components.ProductCarousel item={item} />;
  };

  const renderNameWithRating = () => {
    return (
      <View style={styles.nameContainer}>
        <Text style={styles.priceText}>${item.price}</Text>
        <Text style={styles.titleText}>{item.title}</Text>

        <View style={styles.ratingContainer}>
          <svg.RatingStarSvg />
          <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
        </View>
      </View>
    );
  };

  const renderDescription = () => {
    return (
      <View style={styles.descriptionContainer}>
        <View>
          <Text style={styles.descriptionText} numberOfLines={5}>
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title="+ add to cart"
        containerStyle={styles.buttonContainer}
        onPress={() => {
          if (quantity > 0) {
            Alert.alert(
              'Item already in cart',
              'Do you want to add another one?',
              [
                {
                  text: 'Cancel',
                  style: 'cancel',
                },
                {
                  text: 'OK',
                  onPress: () => {
                    dispatch(fullRemoveFromCart(item));
                    dispatch(
                      addToCart({
                        ...item,
                      }),
                    );
                    addedToCartMessage(item);
                  },
                },
              ],
              {cancelable: false},
            );
            return;
          }
          dispatch(
            addToCart({
              ...item,
            }),
          );
          addedToCartMessage(item);
        }}
      />
    );
  };

  return (
    <components.SmartView>
      <GoBack onPress={() => navigation.goBack()} />
      {renderCarousel()}
      {renderNameWithRating()}
      {renderDescription()}
      {renderButton()}
    </components.SmartView>
  );
};

const styles = StyleSheet.create({
  nameContainer: {
    marginHorizontal: 14,
  },
  priceText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingText: {
    marginLeft: 4,
    color: COLORS.textColor,
  },
  descriptionContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  descriptionText: {
    color: COLORS.textColor,
    marginBottom: 14,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginTop: 0,
  },
});

export default Content;
