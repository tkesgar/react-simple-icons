import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Radar = forwardRef(function Radar({ color = 'currentColor', size = 24, title = 'Radar', ...others }, ref) {
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
      <path d="M12 0L2.197 23.975 12 19.952 21.803 24z" />
    </svg>
  );
});

Radar.propTypes = {
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

export default Radar;
