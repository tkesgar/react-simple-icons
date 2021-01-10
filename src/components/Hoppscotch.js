import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Hoppscotch = forwardRef(function Hoppscotch(
  { color = 'currentColor', size = 24, title = 'Hoppscotch', ...others },
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
      <path d="M17.119 5.505a4.786 4.786 0 0 0-4.016-4.254c-2.188-.342-4.256.854-5.128 2.786-4.494-.278-7.784.257-7.966 1.47-.17 1.041 1.992 2.32 5.383 3.362l.001.006C5.308 8.841.333 22.807.333 22.807h18.803s-1.145-11.966-1.316-11.966c3.539.051 6-.496 6.172-1.539.178-1.188-2.662-2.682-6.873-3.797zm-.375 1.353c-.035.274-.309.479-.582.427s-.479-.308-.428-.581c.053-.273.309-.479.582-.427s.479.307.428.581zm-5.162-1.163a.67.67 0 0 1 .786-.564.67.67 0 0 1 .564.787.715.715 0 0 1-.786.564.67.67 0 0 1-.564-.787zm-3.949-.273c.051-.274.307-.479.581-.427s.479.308.427.581c-.034.273-.308.461-.581.427-.273-.051-.478-.308-.427-.581zm9.521 5.419c-.119.684-2.701.871-5.778.376-3.077-.495-5.47-1.453-5.368-2.153.068-.377.854-.599 2.051-.65-.358.067-.58.204-.614.376-.085.512 1.744 1.247 4.068 1.623 2.342.359 4.29.24 4.375-.291.018-.17-.154-.375-.479-.563 1.13.426 1.814.872 1.745 1.282z" />
    </svg>
  );
});

Hoppscotch.propTypes = {
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

export default Hoppscotch;
