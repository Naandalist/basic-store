import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {CategoryType} from '../../types';
import {useAppNavigation} from '../../hooks';
import ImageBackground from '../ImageBackground';
import styles from './styles';

type Props = {
  item: CategoryType;
};

const CategoryItem: React.FC<Props> = ({item}): JSX.Element | null => {
  const navigation = useAppNavigation();

  return (
    <TouchableOpacity
      style={styles.version4Button}
      onPress={() =>
        navigation.navigate('ShopScreen', {
          title: item.title,
          slug: item.slug,
        })
      }>
      <ImageBackground
        source={{uri: item.image}}
        style={styles.version4Image}
        imageStyle={styles.radiusStyles}
        resizeMode="cover">
        <Text style={styles.smallText}>{item.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryItem;
