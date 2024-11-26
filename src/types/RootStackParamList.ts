import {ProductType} from './ProductType';

export type RootStackParamList = {
  HomeScreen: undefined;
  TabNavigator: undefined;
  ProductDetail: {item: ProductType};
  SearchProduct: {products: ProductType[]};
  ShopScreen: {products?: ProductType[]; title?: string; slug?: string};
};
