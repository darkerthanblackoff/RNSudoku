import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={512} height={512} viewBox="0 0 437.499 437.499" {...props}>
      <Path d="M46.875 437.498c-2.67 0-5.341-.687-7.751-2.06a15.61 15.61 0 01-7.874-13.566V15.602a15.61 15.61 0 017.874-13.566 15.797 15.797 0 0115.701.107l343.749 203.136c4.761 2.823 7.675 7.935 7.675 13.459s-2.914 10.636-7.675 13.459L54.825 435.332a15.758 15.758 0 01-7.95 2.166zM62.5 42.977v351.521l297.409-175.76z" />
    </Svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
