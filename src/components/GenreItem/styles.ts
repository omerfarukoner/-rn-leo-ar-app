import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

export default StyleSheet.create({
  text: {
    margin: SIZES.subBase,
    ...FONTS.h1,
    textTransform: 'capitalize',
    color: COLORS.genreGray,
  },
  chosenText: {
    color: COLORS.black,
    margin: SIZES.subBase,
    ...FONTS.h1,
    textTransform: 'capitalize',
  },
});
