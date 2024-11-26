import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 55,
    paddingBottom: 20,
  },
  userContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    marginRight: 14,
    width: 60,
    height: 60,
  },
  userImageRadius: {
    borderRadius: 30,
  },
  userInfoContainer: {
    flex: 1,
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    marginRight: 'auto',
    marginBottom: 4,
  },
  userEmail: {
    // Add any specific email text styles if needed
  },
});
