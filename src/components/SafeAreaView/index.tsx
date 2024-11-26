import React from 'react';
import {SafeAreaView as SafeAreaViewRN} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

type Props = {
  children: React.ReactNode;
  edges?: ['top'] | ['top' | 'bottom'];
};

const SafeAreaView: React.FC<Props> = ({children, edges}): JSX.Element => {
  return (
    <SafeAreaViewRN style={styles.container} edges={edges}>
      {children}
    </SafeAreaViewRN>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
export default SafeAreaView;
