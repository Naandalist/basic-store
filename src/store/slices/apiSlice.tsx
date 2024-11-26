import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ProductType} from '../../types/ProductType';

const BASE_URL = 'https://dummyjson.com';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getProducts: builder.query<{products: ProductType[]}, void>({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetProductsQuery} = apiSlice;
