import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

import {theme} from '../../constants';

const LoaderView: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.mainColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoaderView;
