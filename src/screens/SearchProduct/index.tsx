import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
// import {NavigationProp, RouteProp} from '@react-navigation/native';
import GoBack from '../../components/GoBack';
import {COLORS} from '../../constants/colors';
import {svg} from '../../assets/svg';
import {useSearchProductsQuery} from '../../store/slices/apiSlice';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, 'SearchProduct'>;

const SearchProduct: React.FC<Props> = ({
  route,
  navigation,
}): JSX.Element | null => {
  const {productsData} = route.params;
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedQuery, setDebouncedQuery] = useState<string>('');

  // Debounce search query
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const {
    data: searchResults,
    isFetching,
    isError,
  } = useSearchProductsQuery(debouncedQuery, {
    skip: debouncedQuery.length < 2,
  });

  console.log('searchResults: ', searchResults);

  const renderResults = () => {
    if (searchQuery.length < 2) {
      // Show initial suggestions from productsData
      return productsData?.products?.slice(0, 4).map((product, index) => (
        <TouchableOpacity key={index} style={styles.suggestionItem}>
          <svg.SearchSvg />
          <Text style={styles.suggestionText}>{product.title}</Text>
          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.shareIcon}>↗</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ));
    }

    if (isFetching) {
      return (
        <View style={styles.messageContainer}>
          <Text>Searching...</Text>
        </View>
      );
    }

    if (isError) {
      return (
        <View style={styles.messageContainer}>
          <Text>Error fetching results</Text>
        </View>
      );
    }

    if (searchResults?.products?.length === 0) {
      return (
        <View style={styles.messageContainer}>
          <Text>No results found</Text>
        </View>
      );
    }

    return searchResults?.products?.map((product, index) => (
      <TouchableOpacity
        key={index}
        style={styles.suggestionItem}
        // onPress={() => navigation.navigate('ProductDetail', {product})}>
        onPress={() => null}>
        <svg.SearchSvg />
        <Text style={styles.suggestionText}>{product.title}</Text>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareIcon}>↗</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <GoBack onPress={() => navigation.goBack()} />

        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoFocus
        />
      </View>

      <ScrollView style={styles.resultsContainer}>{renderResults()}</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  searchInput: {
    flex: 1,
    height: 50,
    marginHorizontal: 8,
    paddingHorizontal: 12,
    backgroundColor: '#F5F5F5',
    marginVertical: 10,
    borderRadius: 4,
    fontSize: 16,
    borderWidth: 1,
    borderColor: COLORS.lightBlue,
    marginLeft: 35,
  },
  resultsContainer: {
    flex: 1,
    paddingTop: 8,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  suggestionText: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
    marginLeft: 20,
  },
  shareButton: {
    padding: 8,
  },
  shareIcon: {
    fontSize: 16,
    color: '#666666',
  },
  messageContainer: {
    padding: 16,
    alignItems: 'center',
  },
});

export default SearchProduct;
