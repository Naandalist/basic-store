import {StyleSheet} from 'react-native';
import {theme} from '../../constants';

export default StyleSheet.create({
  searchContainer: {
    width: '92%',
    marginHorizontal: 12,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#DBE9F9',
    height: 50,
    justifyContent: 'center',
  },
  searchText: {
    marginLeft: 8,
    fontSize: 14,
    color: theme.colors.textColor,
  },
  searchWrapper: {
    flexDirection: 'row',
  },
  topCategoryContainer: {
    marginHorizontal: 20,
    marginBottom: 50,
    marginTop: 20,
  },
  topCategoryTitle: {
    fontSize: 14,
    marginBottom: 10,
  },
  itemCategoryWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  highestRatingContainer: {
    marginBottom: 50,
    marginLeft: 20,
  },
});
