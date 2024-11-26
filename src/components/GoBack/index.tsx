import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import {svg} from '../../assets/svg';

type Props = {
  onPress: () => void;
};

const GoBack: React.FC<Props> = ({onPress}): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <svg.GoBackSvg />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 1,
    paddingHorizontal: 18,
    position: 'absolute',
    zIndex: 2,
  },
});

export default GoBack;
