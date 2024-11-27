import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {useAppSelector} from '../../hooks';
import {components} from '../../components';

const Wishlist: React.FC = (): JSX.Element => {
  const wishlist = useAppSelector(state => state.wishlist.list);

  const renderProducts = () => {
    return (
      <components.SmartView>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {wishlist.map((item, index, array) => {
            const lastElement = index === array.length - 1;
            return (
              <components.WishlistItem
                key={index}
                item={item}
                containerStyle={[!lastElement && styles.itemMargin]}
              />
            );
          })}
        </ScrollView>
      </components.SmartView>
    );
  };

  const renderEmptyWishlist = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>Your wishlist is empty!</Text>
        <Text style={styles.emptyDescription}>
          Add your favorite items into wishlist{'\n'}by clicking on the heart
          icon.
        </Text>
      </View>
    );
  };

  return <>{wishlist.length > 0 ? renderProducts() : renderEmptyWishlist()}</>;
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingLeft: 20,
    marginRight: 20,
  },
  itemMargin: {
    marginBottom: 14,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  emptyTitle: {
    marginTop: 30,
    marginRight: 14,
    fontSize: 20,
    fontWeight: 'bold',
  },
  emptyDescription: {
    textAlign: 'left',
  },
});

export default Wishlist;
