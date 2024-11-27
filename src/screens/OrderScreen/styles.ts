import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {SPACE} from '../../constants/spaces';

export default StyleSheet.create({
  productsContainer: {
    marginLeft: SPACE.lg,
  },
  mainColorText: {
    color: COLORS.mainColor,
  },
  deliveryContainer: {
    marginBottom: SPACE.sm,
  },
  totalContainer: {
    marginBottom: 0,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  emptyCartMainText: {
    marginTop: SPACE.xl,
    marginRight: SPACE.sm,
    fontSize: 20,
    fontWeight: 'bold',
  },
  emptyCartSubText: {
    textAlign: 'left',
  },
  contentScrollView: {
    flexGrow: 1,
    paddingVertical: SPACE.lg,
    paddingBottom: SPACE.lg,
  },
  buttonContainer: {
    padding: SPACE.lg,
  },
});
