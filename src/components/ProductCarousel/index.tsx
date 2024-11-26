import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {ProductType} from '../../types';
import InWishlist from '../ProductCard/InWishlist';
import Image from '../Image';
import {SIZES} from '../../constants/sizes';
import {COLORS} from '../../constants/colors';

type Props = {
  item: ProductType;
};

const ProductCarousel: React.FC<Props> = ({item}): JSX.Element | null => {
  const images = item.images;
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const updateCurrentSlideIndex = (
    e: NativeSyntheticEvent<NativeScrollEvent>,
  ): void => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / SIZES.width);
    setCurrentSlideIndex(currentIndex);
  };

  const renderImages = () => {
    return (
      <ScrollView
        onMomentumScrollEnd={updateCurrentSlideIndex}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        contentContainerStyle={styles.scrollViewContent}
        bounces={false}
        alwaysBounceHorizontal={false}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={{uri: image}}
            style={styles.carouselImage}
            resizeMode="cover"
          />
        ))}
      </ScrollView>
    );
  };

  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentSlideIndex === index && styles.activeDot,
              {
                borderColor:
                  currentSlideIndex === index
                    ? COLORS.mainColor
                    : COLORS.textColor,
              },
            ]}
          />
        ))}
      </View>
    );
  };

  const renderInWishList = () => {
    return (
      <View style={styles.wishlistContainer}>
        <InWishlist version={2} item={item} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderImages()}
      {renderDots()}
      {renderInWishList()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  scrollViewContent: {
    backgroundColor: '#F5F9FC',
  },
  carouselImage: {
    width: SIZES.width,
    aspectRatio: 0.75,
  },
  dotsContainer: {
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    opacity: 0.5,
    borderWidth: 1,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: COLORS.mainColor,
    opacity: 1,
    borderColor: COLORS.mainColor,
  },
  wishlistContainer: {
    height: 24,
    width: 24,
    position: 'absolute',
    right: 0,
    bottom: 30,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductCarousel;
