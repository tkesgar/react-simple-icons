import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Trulia = forwardRef(function Trulia({ color = 'currentColor', size = 24, title = 'Trulia', ...others }, ref) {
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
      <path d="M12 0C8.19.021 5.729 2.58 5.729 6.445c0 3.201 2.088 5.94 3.277 10.1.684 2.385 1.052 5.303 1.242 7.455h3.504c.192-2.152.558-5.07 1.241-7.455 1.189-4.16 3.277-6.898 3.277-10.1C18.271 2.58 15.81.021 12 0zm.02 9.852c-1.584 0-2.869-1.286-2.869-2.869 0-1.582 1.285-2.867 2.869-2.867 1.585 0 2.869 1.283 2.869 2.867s-1.285 2.869-2.869 2.869z" />
    </svg>
  );
});

Trulia.propTypes = {
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

export default Trulia;
