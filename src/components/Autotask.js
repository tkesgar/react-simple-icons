import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Autotask = forwardRef(function Autotask(
  { color = 'currentColor', size = 24, title = 'Autotask', ...others },
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
      <path d="M17.93 11.626l2.782 6.988h-4.298l-1.825-4.736-9.885 6.667L1 12.6h.815l4.39 3.418 7.61-4.148-1.085-2.82-1.168 2.481-4.938 2.716 3.553-9.342h5.077l2.022 5.08L24 6.32V0H0v24h24V7.532z" />
    </svg>
  );
});

Autotask.propTypes = {
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

export default Autotask;
