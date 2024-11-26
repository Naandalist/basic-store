import {StyleSheet, View} from 'react-native';
import React from 'react';

import {COLORS} from '../../constants/colors';

const ContainerLine: React.FC = (): JSX.Element => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: COLORS.lightBlue,
    marginBottom: 10,
  },
});

export default ContainerLine;
