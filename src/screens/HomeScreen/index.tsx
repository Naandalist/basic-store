import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useGetProductsQuery} from '../../store/slices/apiSlice';
import {components} from '../../components';
import {CATEGORIES} from '../../constants/categories';
import {useAppNavigation} from '../../hooks';
import {svg} from '../../assets/svg';
import styles from './styles';
import {ProductType} from '../../types';

const HomeScreen = () => {
  const navigation = useAppNavigation();

  const {data: productsData, isLoading: productsLoading} =
    useGetProductsQuery();

  const renderSearch = () => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('SearchProduct', {
            productsData: {
              products: productsData?.products || [],
            },
          })
        }
        style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <svg.SearchSvg />
          <Text style={styles.searchText}>Search</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderTopCategories = () => {
    return (
      <View style={styles.topCategoryContainer}>
        <Text style={styles.topCategoryTitle}>Top Categories</Text>
        <View style={styles.itemCategoryWrapper}>
          {CATEGORIES.map((item, index) => {
            return <components.CategoryItem key={index} item={item} />;
          })}
        </View>
      </View>
    );
  };

  const renderTopRatings = () => {
    const products = productsData?.products;
    const highRating = products?.filter((item: ProductType) => item.rating > 4);
    const slice = highRating?.slice(0, 5);

    return (
      <View style={styles.highestRatingContainer}>
        <Text style={styles.topCategoryTitle}>Highest Ratings</Text>
        {productsLoading && <components.SkeletonView />}

        {productsData &&
          slice?.map(
            (item: ProductType, index: number, array: ProductType[]) => {
              const lastItem = index === array.length - 1;
              return (
                <components.ProductCard
                  key={index}
                  item={item}
                  lastItem={lastItem}
                />
              );
            },
          )}
      </View>
    );
  };

  return (
    <components.SmartView>
      {renderSearch()}
      {renderTopCategories()}
      {renderTopRatings()}
    </components.SmartView>
  );
};

export default HomeScreen;
