import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {RootStackParamList} from '../types/RootStackParamList';

const RootStack = createNativeStackNavigator<RootStackParamList>();

import {screens} from '../screens';

const StackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="HomeScreen">
      <RootStack.Screen
        name="HomeScreen"
        component={screens.HomeScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default StackNavigator;
