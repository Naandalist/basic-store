import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {createImageProgress} from 'react-native-image-progress';
import {View, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ImageProgress = createImageProgress(FastImage);

type Props = {
  source: {uri: string};
  style?: object;
  imageStyle?: object;
  resizeMode?: 'cover' | 'contain' | 'stretch';
  tintColor?: string;
  showSkeleton?: boolean;
};

const Image: React.FC<Props> = ({
  source,
  style,
  imageStyle,
  resizeMode,
  tintColor,
  showSkeleton = true,
}): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  // Extract width and height from style prop
  const dimensions = {
    width: (style as any)?.width || '100%',
    height: (style as any)?.height || '100%',
  };

  return (
    <View style={[styles.container, style]}>
      <ImageProgress
        style={[StyleSheet.absoluteFillObject, imageStyle]}
        source={source}
        imageStyle={imageStyle}
        resizeMode={
          resizeMode === 'cover'
            ? FastImage.resizeMode.cover
            : resizeMode === 'contain'
            ? FastImage.resizeMode.contain
            : FastImage.resizeMode.stretch
        }
        tintColor={tintColor}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
      />
      {showSkeleton && isLoading && (
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item
            width={dimensions.width}
            height={dimensions.height}
            borderRadius={(style as any)?.borderRadius || 0}
          />
        </SkeletonPlaceholder>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});

export default Image;
