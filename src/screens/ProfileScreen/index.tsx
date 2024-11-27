import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {components} from '../../components';
import styles from './styles';

const IMAGE_URL = 'https://avatars.githubusercontent.com/u/14960087?v=4';

const ProfileScreen: React.FC = (): JSX.Element => {
  const renderUser = () => {
    const userLink: string = IMAGE_URL;
    return (
      <View style={styles.userContainer}>
        <components.Image
          source={{uri: userLink}}
          style={styles.userImage}
          imageStyle={styles.userImageRadius}
          showSkeleton={true}
        />
        <View style={styles.userInfoContainer}>
          <View style={styles.userNameContainer}>
            <Text style={styles.userName}>Nanda Apriliawan</Text>
          </View>
          <Text style={styles.userEmail}>listiananda.apriliawan@gmail.com</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {renderUser()}
    </ScrollView>
  );
};

export default ProfileScreen;
