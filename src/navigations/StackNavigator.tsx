import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../types/RootStackParamList';
import TabNavigator from './TabNavigator';
import {screens} from '../screens';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="SplashScreen">
      <RootStack.Screen
        name="SplashScreen"
        component={screens.SplashScreen}
        options={{headerShown: false}}
      />
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
