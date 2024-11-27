import React from 'react';
import {View, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonView: React.FC = (): JSX.Element => {
  const renderSkeletonItems = (): JSX.Element => {
    return (
      <View style={styles.container}>
        {[...Array(4)].map((_, index) => (
          <View key={index}>
            <SkeletonPlaceholder borderRadius={4}>
              <SkeletonPlaceholder.Item flexDirection="row">
                <SkeletonPlaceholder.Item
                  width={100}
                  height={100}
                  borderRadius={4}
                />
                <SkeletonPlaceholder.Item marginLeft={10}>
                  <SkeletonPlaceholder.Item width={250} height={20} />
                  <SkeletonPlaceholder.Item
                    marginTop={6}
                    width={80}
                    height={20}
                  />
                  <SkeletonPlaceholder.Item
                    marginTop={6}
                    width={80}
                    height={20}
                  />
                </SkeletonPlaceholder.Item>
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
          </View>
        ))}
      </View>
    );
  };

  return <View style={styles.mainContainer}>{renderSkeletonItems()}</View>;
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    gap: 10,
  },
});

export default SkeletonView;
