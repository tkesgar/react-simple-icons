import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Codefactor = forwardRef(function Codefactor(
  { color = 'currentColor', size = 24, title = 'CodeFactor', ...others },
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
      <path d="M5.375 2.65a2.64 2.64 0 01-2.62 2.65 2.64 2.64 0 01-2.63-2.65A2.64 2.64 0 012.755 0a2.64 2.64 0 012.62 2.65zm0 9.35a2.64 2.64 0 01-2.62 2.65A2.64 2.64 0 01.125 12a2.64 2.64 0 012.63-2.65A2.64 2.64 0 015.375 12zm0 9.35A2.64 2.64 0 012.755 24a2.64 2.64 0 01-2.63-2.65 2.64 2.64 0 012.63-2.65 2.64 2.64 0 012.62 2.65zM11.315 0a2.64 2.64 0 00-2.61 2.65 2.64 2.64 0 002.6 2.65h9.94a2.64 2.64 0 002.63-2.65A2.64 2.64 0 0021.255 0zm-2.61 12a2.64 2.64 0 012.62-2.65h5.68a2.64 2.64 0 012.6 2.65 2.64 2.64 0 01-2.6 2.65h-5.7a2.64 2.64 0 01-2.6-2.65z" />
    </svg>
  );
});

Codefactor.propTypes = {
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

export default Codefactor;
