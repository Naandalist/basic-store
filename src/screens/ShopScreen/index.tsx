import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import {components} from '../../components';
import type {RootStackParamList} from '../../types';
import {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
} from '../../store/slices/apiSlice';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import GoBack from '../../components/GoBack';
import {SPACE} from '../../constants/spaces';

type Props = NativeStackScreenProps<RootStackParamList, 'ShopScreen'>;

const ShopScreen: React.FC<Props> = ({route, navigation}): JSX.Element => {
  const {data} = useGetProductsQuery();

  const {products, title, slug} = route.params || {
    products: data,
    title: 'Shop',
  };

  const {data: dataProductsByCategory, isLoading: isLoadingProductsByCategory} =
    useGetProductsByCategoryQuery(slug || '');

  if (isLoadingProductsByCategory) {
    return <components.LoaderView />;
  }

  const renderHeader = () => {
    return (
      <>
        <GoBack onPress={() => navigation.goBack()} />
        <Text style={styles.headerText}>{title} Categories</Text>
      </>
    );
  };

  const renderProducts = () => {
    const productsByCategory = dataProductsByCategory?.products;
    return (
      <FlatList
        data={products || productsByCategory}
        renderItem={({item}) => <components.ShopItem item={item} />}
        columnWrapperStyle={styles.productsColumns}
        numColumns={2}
        horizontal={false}
        contentContainerStyle={styles.productsList}
      />
    );
  };

  return (
    <components.SafeAreaView>
      {renderHeader()}
      {renderProducts()}
    </components.SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerText: {
    marginLeft: SPACE.lg,
    marginTop: SPACE.xl,
    marginBottom: SPACE.lg,
  },
  productsList: {
    paddingHorizontal: SPACE.lg,
  },
  productsColumns: {
    justifyContent: 'space-between',
  },
});
export default ShopScreen;
