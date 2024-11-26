import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {enableScreens} from 'react-native-screens';

import StackNavigator from './src/navigations/StackNavigator';

enableScreens();

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
