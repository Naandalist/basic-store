import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export default StyleSheet.create({
  version1Button: {
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderRadius: 3,
  },
  selectedButton: {
    backgroundColor: COLORS.mainColor,
    borderColor: COLORS.mainColor,
  },
  unselectedButton: {
    backgroundColor: '#FAFCFE',
    borderColor: COLORS.lightBlue,
  },
  version1Text: {
    textTransform: 'uppercase',
    lineHeight: 12 * 1.7,
  },
  selectedText: {
    color: COLORS.white,
  },
  unselectedText: {
    color: COLORS.mainColor,
  },
  version2Button: {
    marginBottom: 14,
    borderRadius: 5,
    backgroundColor: COLORS.imageBackground,
  },
  version2Image: {
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 12,
    justifyContent: 'space-between',
  },
  imageStyle: {
    borderRadius: 5,
  },
  version3Button: {
    width: 90,
    height: 90,
    borderRadius: 5,
    backgroundColor: COLORS.imageBackground,
  },
  version3Image: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 8,
    borderRadius: 10,
    width: 90,
    height: 90,
    justifyContent: 'space-between',
  },
  version4Button: {
    width: '30%',
    height: 102,
    marginBottom: 14,
    borderRadius: 5,
    backgroundColor: COLORS.imageBackground,
  },
  version4Image: {
    width: '100%',
    height: 102,
    borderRadius: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 8,
  },
  radiusStyles: {
    borderRadius: 5,
    backgroundColor: COLORS.imageBackground,
  },
  smallText: {
    color: COLORS.mainColor,
    fontSize: 10,
    lineHeight: 10 * 1.5,
  },
});
