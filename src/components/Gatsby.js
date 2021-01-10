import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Gatsby = forwardRef(function Gatsby({ color = 'currentColor', size = 24, title = 'Gatsby', ...others }, ref) {
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
      <path d="M12 0C5.323 0 0 5.322 0 11.999A11.937 11.937 0 0012 24c6.677 0 12-5.322 12-12S18.68 0 12 0zM2.609 12.104l9.288 9.288c-5.113 0-9.288-4.174-9.288-9.288zm11.48 9.079L2.818 9.913c.937-4.174 4.695-7.305 9.181-7.305a9.481 9.48 0 017.619 3.862l-1.356 1.147a7.661 7.66 0 00-6.366-3.339 7.56 7.559 0 00-7.2 5.113l9.809 9.81c2.401-.836 4.278-2.922 4.8-5.427h-4.07V12h6.158c0 4.487-3.131 8.244-7.305 9.183z" />
    </svg>
  );
});

Gatsby.propTypes = {
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

export default Gatsby;
