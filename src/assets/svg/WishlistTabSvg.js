import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const WishlistTabSvg = ({bgColor = '#fff', iconColor = '#142535'}) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={58} fill="none">
    <Circle cx={25} cy={33} r={25} fill={bgColor} />
    <Path
      stroke={iconColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M33.84 25.61a5.5 5.5 0 0 0-7.78 0L25 26.67l-1.06-1.06a5.501 5.501 0 1 0-7.78 7.78l1.06 1.06L25 42.23l7.78-7.78 1.06-1.06a5.499 5.499 0 0 0 0-7.78v0Z"
    />
  </Svg>
);

export default WishlistTabSvg;
