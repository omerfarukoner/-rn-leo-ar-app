import { StyleSheet } from 'react-native';
import { COLORS, STYLES, FONTS, SIZES } from '../../constants';

export default StyleSheet.create({
  flatListContainer: { ...STYLES.shaddow, backgroundColor: COLORS.offWhite },
  flatList: { flexGrow: 0 },
});
