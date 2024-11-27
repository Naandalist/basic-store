import {useColorScheme} from 'react-native';
import type {ThemeColors} from '../types/ThemeColors';

export const lightColors: ThemeColors = {
  primary: '#142535',
  background: '#FFFFFF',
  text: {
    primary: '#142535',
    secondary: '#4A5F73',
  },
  surface: {
    primary: '#F6F8FB',
    secondary: '#DBE9F5',
  },
  action: {
    active: '#142535',
    disabled: '#A0A0A0',
  },
  status: {
    error: '#ff7979',
    success: '#4CAF50',
    warning: '#FFA000',
  },
  utility: {
    transparent: 'transparent',
  },
};

export const darkColors: ThemeColors = {
  primary: '#DBE9F5',
  background: '#142535',
  text: {
    primary: '#FFFFFF',
    secondary: '#DBE9F5',
  },
  surface: {
    primary: '#1E3547',
    secondary: '#2A4457',
  },
  action: {
    active: '#DBE9F5',
    disabled: '#666666',
  },
  status: {
    error: '#ff7979',
    success: '#81C784',
    warning: '#FFB74D',
  },
  utility: {
    transparent: 'transparent',
  },
};

export const useThemeColors = () => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? darkColors : lightColors;
};

export const COLORS = {
  mainColor: '#142535',
  white: '#FFFFFF',
  textColor: '#4A5F73',
  lightBlue: '#DBE9F5',
  red: '#ff7979',
  imageBackground: '#F6F8FB',
  transparent: 'transparent',
  disabled: 'grey',
};
