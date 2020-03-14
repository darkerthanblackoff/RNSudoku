import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg viewBox="0 0 25.64 25.64" {...props}>
      <Path
        fill={props.fill}
        d="M10.385 1.499a.78.78 0 00-.848.168L.228 8.98a.777.777 0 000 1.1l9.309 7.278a.772.772 0 00.848.17.764.764 0 00.465-.719V12.45c9.955 0 14.309 2.808 13.646 11.751C28.713 9.893 20.619 6.659 10.85 6.659V2.217a.764.764 0 00-.465-.718z"
      />
    </Svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
