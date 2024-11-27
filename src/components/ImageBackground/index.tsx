import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {createImageProgress} from 'react-native-image-progress';
import {View, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ImageProgress = createImageProgress(FastImage);

type Props = {
  source: object;
  style?: object;
  imageStyle?: object;
  resizeMode?: 'cover' | 'contain' | 'stretch';
  children?: React.ReactNode;
  showSkeleton?: boolean;
};

const ImageBackground: React.FC<Props> = ({
  children,
  source,
  resizeMode,
  style,
  imageStyle,
  showSkeleton = true,
}): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  const dimensions = {
    width: (style as any)?.width || '100%',
    height: (style as any)?.height || '100%',
  };

  return (
    <View style={[styles.container, style]}>
      <ImageProgress
        source={source}
        style={[StyleSheet.absoluteFillObject, imageStyle]}
        imageStyle={imageStyle}
        resizeMode={
          resizeMode === 'cover'
            ? FastImage.resizeMode.cover
            : resizeMode === 'contain'
            ? FastImage.resizeMode.contain
            : FastImage.resizeMode.stretch
        }
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}>
        {children}
      </ImageProgress>
      {showSkeleton && isLoading && (
        <View style={StyleSheet.absoluteFillObject}>
          <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item
              width={dimensions.width}
              height={dimensions.height}
              borderRadius={(style as any)?.borderRadius || 0}
            />
          </SkeletonPlaceholder>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});

export default ImageBackground;
