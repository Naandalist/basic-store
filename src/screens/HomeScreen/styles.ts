import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {SPACE} from '../../constants/spaces';

export default StyleSheet.create({
  searchContainer: {
    width: '92%',
    marginHorizontal: SPACE.xs,
    paddingVertical: SPACE.xs,
    paddingHorizontal: SPACE.xs,
    borderRadius: 4,
    marginTop: SPACE.lg,
    borderWidth: 1,
    borderColor: COLORS.lightBlue,
    height: 50,
    justifyContent: 'center',
  },
  searchText: {
    marginLeft: SPACE.xxs,
    fontSize: 14,
    color: COLORS.textColor,
  },
  searchWrapper: {
    flexDirection: 'row',
  },
  topCategoryContainer: {
    marginHorizontal: SPACE.lg,
    marginBottom: SPACE.lg,
    marginTop: SPACE.lg,
  },
  topCategoryTitle: {
    fontSize: 14,
    marginBottom: SPACE.xs,
  },
  itemCategoryWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  highestRatingContainer: {
    marginBottom: SPACE.xxxl,
    marginLeft: SPACE.lg,
  },
});
