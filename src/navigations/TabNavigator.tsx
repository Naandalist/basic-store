import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppSelector} from '../hooks';
import {components} from '../components';
import {screens} from '../screens';
import {TABS} from '../constants/tabs';

const TabNavigator: React.FC = (): JSX.Element => {
  const currentTabScreen = useAppSelector(state => state.tab.screen);

  const {SafeAreaView, TabBar, TabBarItem} = components;

  const renderScreen = () => {
    return (
      <View style={styles.container}>
        {currentTabScreen === 'Home' && <screens.HomeScreen />}
        {currentTabScreen === 'Order' && <screens.OrderScreen />}
        {currentTabScreen === 'Wishlist' && <screens.WishlistScreen />}
        {currentTabScreen === 'Profile' && <screens.ProfileScreen />}
      </View>
    );
  };

  const renderBottomBar = () => {
    const dataTabs = TABS;
    return (
      <TabBar>
        {dataTabs.map((tab, index) => {
          return (
            <TabBarItem
              tab={tab}
              key={index}
              currentTabScreen={currentTabScreen}
            />
          );
        })}
      </TabBar>
    );
  };

  return (
    <SafeAreaView edges={['top']}>
      {renderScreen()}
      {renderBottomBar()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TabNavigator;
