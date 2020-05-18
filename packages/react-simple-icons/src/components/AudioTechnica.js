import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AudioTechnica = forwardRef(function AudioTechnica(
  { color = 'currentColor', size = 24, title = 'Audio-Technica', ...others },
  ref
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <title>{title}</title>
      <path d="M 12,0 A 12.007568,12.007568 0 0 0 0,12 12.034059,12.034059 0 0 0 12,24.030275 12.034059,12.034059 0 0 0 24,12 12.007568,12.007568 0 0 0 12.003784,0 Z m 0,0.90444656 A 11.09177,11.09177 0 0 1 23.099338,11.996216 c 0,6.130558 -4.964995,11.125828 -11.099338,11.125828 A 11.118259,11.118259 0 0 1 0.90823086,12 11.09177,11.09177 0 0 1 11.996216,0.90823086 Z M 12.08704,2.0662252 11.65563,3.3188269 5.9754032,19.402081 5.7710512,20.007569 H 18.440871 L 18.210029,19.402081 12.526017,3.3150427 Z m 0,2.8003785 2.009461,5.6499533 -3.027437,8.563859 H 7.050142 Z m 2.505204,7.0463573 2.535478,7.163671 h -5.097446 z" />
    </svg>
  );
});

AudioTechnica.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The title provides an accessible short text description to the SVG
   */
  title: PropTypes.string,
};

export default AudioTechnica;
