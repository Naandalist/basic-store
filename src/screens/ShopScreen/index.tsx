import React from 'react';
import {FlatList, Text} from 'react-native';

// import {svg} from '../../assets/svg';
import {components} from '../../components';
import type {RootStackParamList} from '../../types';
import {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
} from '../../store/slices/apiSlice';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import GoBack from '../../components/GoBack';

type Props = NativeStackScreenProps<RootStackParamList, 'ShopScreen'>;

const ShopScreen: React.FC<Props> = ({route, navigation}): JSX.Element => {
  const {data} = useGetProductsQuery();

  const {products, title, slug} = route.params || {
    products: data,
    title: 'Shop',
  };

  const {
    data: dataProductsByCategory,
    // error: errorProductsByCategory,
    isLoading: isLoadingProductsByCategory,
  } = useGetProductsByCategoryQuery(slug || '');

  console.log('dataProductsByCategory: ', dataProductsByCategory);

  if (isLoadingProductsByCategory) {
    return <components.LoaderView />;
  }

  const renderHeader = () => {
    return (
      <>
        <GoBack onPress={() => navigation.goBack()} />

        <Text style={{marginLeft: 20, marginTop: 40, marginBottom: 20}}>
          {title} Categories
        </Text>
      </>
    );
  };

  const renderProducts = () => {
    const productsByCategory = dataProductsByCategory?.products;
    return (
      <FlatList
        data={products || productsByCategory}
        renderItem={({item}) => <components.ShopItem item={item} />}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2}
        horizontal={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
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

export default ShopScreen;
