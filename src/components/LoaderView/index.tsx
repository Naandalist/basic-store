import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

const LoaderView: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.mainColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoaderView;
