import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Googlenews = forwardRef(function Googlenews(
  { color = 'currentColor', size = 24, title = 'Google News', ...others },
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
      <path d="M19.0863 5.6694v-2.875a.6101.6101 0 0 0-.6114-.6073H5.5235a.6101.6101 0 0 0-.6156.6074v2.834l8.3905-3.052a.5938.5938 0 0 1 .7422.3895l.5448 1.4981zM23.582 7.343l-8.8032-2.3683.7518 2.066h5.5837a.6142.6142 0 0 1 .6128.6128v8.795l2.247-8.366a.5924.5924 0 0 0-.3921-.7395zM2.27 7.6535a.6156.6156 0 0 1 .613-.6128h12.1546l-1.2693-3.4905a.5951.5951 0 0 0-.7435-.3827L.3674 7.7748a.5938.5938 0 0 0-.3227.775l2.2253 6.112zm0 0a.6156.6156 0 0 1 .613-.6128h12.1546l-1.2693-3.4905a.5951.5951 0 0 0-.7435-.3827L.3674 7.7748a.5938.5938 0 0 0-.3227.775l2.2253 6.112zM21.2668 21.2a.6142.6142 0 0 1-.6129.6129H3.3445a.6142.6142 0 0 1-.6129-.6129V8.1153a.6142.6142 0 0 1 .6129-.6129h17.3093a.6142.6142 0 0 1 .6129.6129zm-3.0315-3.4196v-1.1958a.0804.0804 0 0 0-.0804-.0803h-5.3726v1.3619h5.3726a.0817.0817 0 0 0 .0804-.0858zm.817-2.5876v-1.2012a.0804.0804 0 0 0-.0803-.0817h-6.1897v1.3619h6.1897a.079.079 0 0 0 .0804-.0817zm-.817-2.5875v-1.2067a.0804.0804 0 0 0-.0804-.0803h-5.3726v1.3619h5.3726a.0817.0817 0 0 0 .0804-.079zm-10.086 1.4395v1.2256h1.7704c-.1457.749-.8049 1.2925-1.7704 1.2925a1.976 1.976 0 0 1 0-3.9495 1.7704 1.7704 0 0 1 1.2529.4903l.9342-.9329a3.1405 3.1405 0 0 0-2.1871-.8525 3.2685 3.2685 0 1 0 0 6.537c1.8889 0 3.1323-1.3279 3.1323-3.1977a3.9576 3.9576 0 0 0-.0518-.6183Z" />
    </svg>
  );
});

Googlenews.propTypes = {
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

export default Googlenews;
