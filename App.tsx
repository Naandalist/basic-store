import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import {enableScreens} from 'react-native-screens';
// import FlashMessage from 'react-native-flash-message';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {components} from './src/components';
import {persistor, store} from './src/store';
import StackNavigator from './src/navigations/StackNavigator';

enableScreens();

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <components.StatusBar /> */}
      <Provider store={store}>
        <PersistGate loading={<components.LoaderView />} persistor={persistor}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
      {/* <FlashMessage position="top" floating={true} /> */}
    </SafeAreaProvider>
  );
};

export default App;
