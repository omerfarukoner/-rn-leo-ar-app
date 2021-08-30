import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

export default StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    width: '100%',
    padding: SIZES.base,
    flexDirection: 'row',
  },
  innerContainer: {
    flexDirection: 'row',
    flex: 0.8,
  },
  textContainer: {
    width: '60%',
    justifyContent: 'center',
    marginLeft: SIZES.base,

    alignSelf: 'center',
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: COLORS.imageBorderGray,
    borderRadius: SIZES.radius,
    padding: 3,
    alignSelf: 'center',
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: SIZES.radius - 3,
  },
  trackText: {
    ...FONTS.body2,
    color: COLORS.black,
  },
  trackSubText: {
    textTransform: 'capitalize',
    ...FONTS.body1,
    color: COLORS.darkGray,
  },
  buttonContainer: {
    backgroundColor: COLORS.buttonColor,
    paddingVertical: 12,
    paddingHorizontal: 6,
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
  },
  buttonText: {
    color: COLORS.black,
    ...FONTS.body1,
  },
});
