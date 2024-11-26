import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {useAppSelector} from '../../hooks';
import {components} from '../../components';
import {COLORS} from '../../constants/colors';

const OrderScreen: React.FC = (): JSX.Element => {
  const cart = useAppSelector(state => state.cart.list);
  const delivery = useAppSelector(state => state.cart.delivery).toFixed(1);
  const subtotal = useAppSelector(state => state.cart.total).toFixed(1);
  const total = Number(delivery) + Number(subtotal);

  const renderProducts = () => {
    return (
      <View style={styles.productsContainer}>
        {cart.map((item, index, array) => {
          const lastElement = index === array.length - 1;
          return (
            <components.OrderItem
              key={index}
              item={item}
              lastElement={lastElement}
            />
          );
        })}
      </View>
    );
  };

  const renderTotal = () => {
    return (
      <components.Container>
        <components.ContainerItem
          title="Subtotal"
          price={`$${subtotal}`}
          titleStyle={styles.mainColorText}
          priceStyle={styles.mainColorText}
        />
        <components.ContainerItem
          title="Delivery"
          price={`$${delivery}`}
          containerStyle={styles.deliveryContainer}
        />
        <components.ContainerLine />
        <components.ContainerItem
          title="Total"
          price={`$${total}`}
          containerStyle={styles.totalContainer}
        />
      </components.Container>
    );
  };

  const renderEmptyCart = () => {
    return (
      <View style={styles.emptyCartContainer}>
        <Text style={styles.emptyCartMainText}>Your cart is empty!</Text>
        <Text style={styles.emptyCartSubText}>
          Looks like you do not have{'\n'}any order yet.
        </Text>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView style={styles.contentScrollView}>
        {renderProducts()}
        {renderTotal()}
        {renderButton()}
      </ScrollView>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title="proceed to payment"
        containerStyle={styles.buttonContainer}
        transparent={true}
        onPress={() => null}
      />
    );
  };

  return <>{cart.length > 0 ? renderContent() : renderEmptyCart()}</>;
};

const styles = StyleSheet.create({
  productsContainer: {
    marginLeft: 20,
  },
  mainColorText: {
    color: COLORS.mainColor,
  },
  deliveryContainer: {
    marginBottom: 14,
  },
  totalContainer: {
    marginBottom: 0,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  emptyCartMainText: {
    marginTop: 30,
    marginRight: 14,
  },
  emptyCartSubText: {
    textAlign: 'center',
  },
  contentScrollView: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingBottom: 20,
  },
  buttonContainer: {
    padding: 20,
  },
});

export default OrderScreen;
