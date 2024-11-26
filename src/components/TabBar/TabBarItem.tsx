import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {setScreen} from '../../store/slices/tabSlice';
import {COLORS} from '../../constants/colors';

type Props = {
  tab: {name: string; icon: React.FC<{iconColor: string; bgColor: string}>};
  currentTabScreen: string;
};

const TabBarItem: React.FC<Props> = ({tab, currentTabScreen}): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => dispatch(setScreen(tab.name))}
      style={styles.container}>
      <tab.icon
        iconColor={
          tab.name === currentTabScreen ? COLORS.mainColor : COLORS.white
        }
        bgColor={
          tab.name === currentTabScreen ? COLORS.white : COLORS.transparent
        }
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 57,
    alignItems: 'center',
  },
});

export default TabBarItem;
