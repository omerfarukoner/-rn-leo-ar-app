import { StyleSheet } from 'react-native';

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const COLORS = {
  white: '#FFF',
  offWhite: '#F6F6F6',
  borderWhite: '#E7E7E7',
  genreGray: '#ABABAB',
  imageBorderGray: '#D5D6D5',
  buttonColor: '#F3F3F3',

  darkGray: '#808080',
  black: '#000',
};
export const SIZES = {
  // Global Sizes
  default: 24,
  base: 18,
  subBase: 16,

  radius: 15,

  // Font Sizes
  h1: 20,

  body1: 16,
  body2: 18,

  // App Dimensions
  width,
  height,
};

export const FONTS = {
  h1: {
    fontSize: SIZES.h1,
    lineHeight: 28,
  },
  body1: {
    fontSize: SIZES.body1,
  },
  body2: {
    fontSize: SIZES.body2,
  },
};

export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
  },

  shaddow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.84,
    elevation: 5,
  },
  headerSide: {
    padding: SIZES.default,
    ...FONTS.body1,
  },
});
