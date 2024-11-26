import {View, TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import {text} from '../../text';
import {theme} from '../../constants';

type Props = {
  title: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
  showViewAll?: boolean;
  viewAllText?: string; // Customizable View All text
  titleStyle?: ViewStyle; // Custom style for title
  viewAllButtonStyle?: ViewStyle; // Custom style for View All button
};

const BlockHeading: React.FC<Props> = ({
  title,
  onPress,
  containerStyle,
  showViewAll = true,
  viewAllText = 'View All',
  titleStyle,
  viewAllButtonStyle,
}) => {
  const {H3} = text;

  return (
    <View style={[styles.container, containerStyle]}>
      <H3 style={titleStyle}>{title}</H3>
      {showViewAll && (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.viewAllButton, viewAllButtonStyle]}
          activeOpacity={0.7}>
          <text.Body2 style={styles.viewAllText}>{viewAllText}</text.Body2>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
    paddingHorizontal: 16, // Common padding
  },
  viewAllButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  viewAllText: {
    color: theme.colors.mainColor,
  },
});

export default BlockHeading;
