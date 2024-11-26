import React from 'react';
import {ScrollView} from 'react-native';
import {components} from '../../components';
import type {RootStackParamList} from '../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import Content from './Content';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;

const ProductDetail: React.FC<Props> = ({route}): JSX.Element => {
  const {item} = route.params;

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <Content item={item} />
      </ScrollView>
    );
  };

  return <components.SafeAreaView>{renderContent()}</components.SafeAreaView>;
};

export default ProductDetail;
