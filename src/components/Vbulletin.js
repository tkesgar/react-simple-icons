import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Vbulletin = forwardRef(function Vbulletin(
  { color = 'currentColor', size = 24, title = 'vBulletin', ...others },
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
      <path d="M1.09 10.316V24h21.82V0h-2.417l-5.461 19.613h-6.09l-3.134-9.246zm9.283-4.444l1.363 6.308L13.955 0H1.089v5.872Z" />
    </svg>
  );
});

Vbulletin.propTypes = {
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

export default Vbulletin;
