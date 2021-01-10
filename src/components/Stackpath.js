import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Stackpath = forwardRef(function Stackpath(
  { color = 'currentColor', size = 24, title = 'StackPath', ...others },
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
      <path d="M3.7207 7.3402c-1.01 0-1.84.23-2.5.7-.661.46-.99 1.0799-.99 1.8399 0 .78.276 1.38.83 1.79.55.4199 1.4.7999 2.54 1.1599.55.2.93.38 1.14.56.22.17.32.42.32.74 0 .28-.1.51-.32.68-.21.1899-.54.2699-.97.2699-.57 0-1-.12-1.27-.34-.3-.24-.44-.6-.44-1.12H.0137l-.013.04c-.02.97.346 1.71 1.1 2.23.75.52 1.64.77 2.67.77 1.02 0 1.8399-.22 2.4599-.66.62-.46.94-1.09.94-1.88 0-.79-.26-1.4-.78-1.85-.53-.4499-1.3-.8299-2.33-1.1299-.67-.25-1.12-.45-1.37-.61-.2399-.16-.3599-.37-.3599-.63 0-.28.12-.51.36-.69.24-.2099.57-.2899 1-.2899.43 0 .77.12 1.01.34.25.24.37.52.37.88h2.0398l.01-.03c.03-.81-.29-1.48-.93-2-.6399-.52-1.4599-.77-2.4698-.77m4.7798.06V16.58h2.15v-3.15h1.2999c1.09 0 1.95-.27 2.59-.83.6399-.5499.9599-1.2799.9599-2.1798 0-.92-.32-1.63-.96-2.19-.64-.56-1.5-.83-2.59-.83H8.5006m9.6097 0l-3.18 9.1898h1.99l3.26-9.1898h-2.07m3.8199 0L18.75 16.59h1.99L24 7.4h-2.07m-11.2796 1.64h1.3c.46 0 .82.13 1.05.39.25.26.37.57.37 1 0 .4-.12.73-.37.98-.23.26-.59.38-1.05.38h-1.3z" />
    </svg>
  );
});

Stackpath.propTypes = {
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

export default Stackpath;
