import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {COLORS} from '../../constants/colors';

type Props = {
  title: string;
  price: number | string;
  lastItem?: boolean;
  containerStyle?: object;
  titleStyle?: object;
  priceStyle?: object;
};

const ContainerItem: React.FC<Props> = ({
  title,
  price,
  priceStyle,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: COLORS.textColor,
        }}
        numberOfLines={1}>
        {title}
      </Text>
      <Text
        style={{
          color: COLORS.textColor,
          ...priceStyle,
        }}
        numberOfLines={1}>
        {price}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default ContainerItem;
