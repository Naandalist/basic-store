import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {RootStackParamList} from '../types/RootStackParamList';

const RootStack = createNativeStackNavigator<RootStackParamList>();

import TabNavigator from './TabNavigator';
import {screens} from '../screens';

const StackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="TabNavigator">
      <RootStack.Screen
        name="ProductDetail"
        component={screens.ProductDetail}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="SearchProduct"
        component={screens.SearchProduct}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="ShopScreen"
        component={screens.ShopScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default StackNavigator;
