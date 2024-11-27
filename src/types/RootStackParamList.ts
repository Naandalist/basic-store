import {ProductType} from './ProductType';

export type RootStackParamList = {
  HomeScreen: undefined;
  TabNavigator: undefined;
  SplashScreen: undefined;
  ProductDetail: {item: ProductType};
  SearchProduct: {
    productsData: {
      products: ProductType[];
    };
  };
  ShopScreen: {products?: ProductType[]; title?: string; slug?: string};
};
