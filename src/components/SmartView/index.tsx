import {ScrollView, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
  containerStyle?: ViewStyle;
};

const SmartView: React.FC<Props> = ({
  children,
  containerStyle,
}): JSX.Element => {
  return (
    <ScrollView
      style={[styles.container, containerStyle]}
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SmartView;
