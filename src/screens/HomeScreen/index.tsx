import React from 'react';
import {
  View,
  // ScrollView,
  Text,
  TouchableOpacity,
  // TextInput,
} from 'react-native';
import {
  useGetProductsQuery,
  //   useGetCategoriesQuery,
  // useGetBannersQuery,
} from '../../store/slices/apiSlice';
// import {useAppDispatch} from '../../hooks';
import {components} from '../../components';
import {dataCategories} from '../../constants/categories';
// import {useAppNavigation} from '../../hooks';
// import {ProductType} from '../../types';
// import {setScreen} from '../../store/slices/tabSlice';
// import {text} from '../../text';
import {svg} from '../../assets/svg';
import styles from './styles';
import {ProductType} from '../../types';

// import {theme} from '../../constants';

const HomeScreen = () => {
  //   const navigation = useAppNavigation();
  //   const dispatch = useAppDispatch();

  console.log('dataCategories: ', dataCategories);

  const {
    data: productsData,
    // error: productsError,
    // isLoading: productsLoading,
  } = useGetProductsQuery();

  console.log('productsData: ', productsData);

  //   const {
  //     data: categoriesData,
  //     error: categoriesError,
  //     isLoading: categoriesIsLoading,
  //   } = useGetCategoriesQuery();

  const renderSearch = () => {
    return (
      <TouchableOpacity onPress={() => null} style={styles.searchContainer}>
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
          {dataCategories.map((item, index) => {
            return (
              <components.CategoryItem key={index} item={item} version={4} />
            );
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
        {/* {productsLoading && <components.Loader />} */}
        {productsData &&
          slice?.map(
            (item: ProductType, index: number, array: ProductType[]) => {
              const lastItem = index === array.length - 1;
              return (
                <components.ProductCard
                  key={index}
                  item={item}
                  version={3}
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
