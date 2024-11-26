import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/colors';

type Props = {
  children: React.ReactNode;
  onPressDisabled?: boolean;
  onPress?: () => void;
  activeOpacity?: number;
};

const Container: React.FC<Props> = ({
  children,
  onPress,
  activeOpacity,
  onPressDisabled = true,
}): JSX.Element => {
  return (
    <TouchableOpacity
      disabled={onPressDisabled}
      style={styles.container}
      onPress={onPress}
      activeOpacity={activeOpacity}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.lightBlue,
    borderRadius: 3,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#FAFCFE',
    marginHorizontal: 20,
  },
});

export default Container;
