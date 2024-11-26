import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
  containerStyle?: object;
};

const SmartView: React.FC<Props> = ({children}): JSX.Element => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SmartView;
