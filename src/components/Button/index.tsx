import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/colors';

type Props = {
  title: string;
  onPress: () => void;
  containerStyle?: object;
  transparent?: boolean;
};

const Button: React.FC<Props> = ({
  title,
  onPress,
  containerStyle,
  transparent = false,
}): JSX.Element => {
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        style={[styles.button, transparent && styles.transparentButton]}
        onPress={onPress}>
        <Text
          style={[
            styles.buttonText,
            transparent && styles.transparentButtonText,
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    backgroundColor: COLORS.mainColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transparentButton: {
    backgroundColor: '#FAFCFE',
    borderWidth: 1,
    borderColor: COLORS.textColor,
  },
  buttonText: {
    color: COLORS.white,
    textTransform: 'uppercase',
    fontSize: 14,
  },
  transparentButtonText: {
    color: COLORS.mainColor,
  },
});

export default Button;
