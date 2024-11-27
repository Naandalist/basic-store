import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated, Dimensions} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {svg} from '../../assets/svg';
import type {RootStackParamList} from '../../types';
import {COLORS} from '../../constants/colors';

type SplashScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SplashScreen'>;
};

const {width} = Dimensions.get('window');

const SplashScreen = ({navigation}: SplashScreenProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 10,
        friction: 2,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        navigation.replace('TabNavigator');
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [fadeAnim, scaleAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
            transform: [{scale: scaleAnim}],
          },
        ]}>
        <svg.StoreLogoSvg />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: width * 0.6,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});

export default SplashScreen;
