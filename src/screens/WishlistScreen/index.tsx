import React from 'react';
import {ScrollView, View, Text} from 'react-native';

// import {svg} from '../../assets/svg';
// import {useAppDispatch} from '../../hooks';
import {useAppSelector} from '../../hooks';
import {components} from '../../components';
// import {setScreen} from '../../store/slices/tabSlice';

const Wishlist: React.FC = (): JSX.Element => {
  // const dispatch = useAppDispatch();
  const wishlist = useAppSelector(state => state.wishlist.list);

  const renderProducts = () => {
    return (
      <components.SmartView>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingVertical: 20,
            paddingLeft: 20,
            marginRight: 20,
          }}>
          {wishlist.map((item, index, array) => {
            const lastElement = index === array.length - 1;
            const marginBottom = lastElement ? 0 : 14;

            return (
              <components.WishlistItem
                key={index}
                item={item}
                containerStyle={{marginBottom: marginBottom}}
              />
            );
          })}
        </ScrollView>
      </components.SmartView>
    );
  };

  const renderEmptyWishlist = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{marginTop: 30, marginRight: 14}}>
          Your wishlist is empty!
        </Text>
        <Text>
          Add your favorite items into wishlist{'\n'}by clicking on the heart
          icon.
        </Text>
      </View>
    );
  };

  return <>{wishlist.length > 0 ? renderProducts() : renderEmptyWishlist()}</>;
};

export default Wishlist;
