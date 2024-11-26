import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  plus?: boolean;
  minus?: boolean;
  onPress: () => void;
  containerStyle?: object;
};
import {svg} from '../../assets/svg';

const OrderItemBtn: React.FC<Props> = ({onPress, plus, minus}): JSX.Element => {
  const {PlusSvg, MinusSvg} = svg;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {plus && <PlusSvg />}
      {minus && <MinusSvg />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OrderItemBtn;
