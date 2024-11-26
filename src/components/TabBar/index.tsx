import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

type Props = {
  children: React.ReactNode;
};

const TabBar: React.FC<Props> = ({children}): JSX.Element => {
  const insets = useSafeAreaInsets();
  const homeIndicatorHeight = insets.bottom;
  const paddingTabVertical = 20;

  const getHomeIndicatorPadding = (): number => {
    return homeIndicatorHeight !== 0 ? homeIndicatorHeight : paddingTabVertical;
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: getHomeIndicatorPadding(),
        },
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderTopColor: '#EEEEEE',
    backgroundColor: COLORS.mainColor,
    borderRadius: 15,
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default TabBar;
