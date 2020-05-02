import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Wolframmathematica = forwardRef(function Wolframmathematica(
  { color = 'currentColor', size = 24, title = 'Wolfram Mathematica', ...others },
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
      <path d="M15.74 10.7c-.53-1.53.14-4 .14-4S13.6 8.01 11.93 8 8.13 6.7 8.13 6.7s.56 2.46.07 4.04c-.48 1.58-2.47 3.34-2.47 3.34s2.58.23 3.85 1.1S12 18.64 12 18.64s.78-2.35 2.32-3.41c1.54-1.07 3.96-1.15 3.96-1.15s-2-1.84-2.54-3.37zm-2 3.69c-1.09.81-1.75 2.19-1.75 2.19s-.76-1.43-1.8-2.22c-1.05-.79-2.57-.97-2.57-.97a5.06 5.06 0 0 0 1.53-2.37c.46-1.54.18-2.73.18-2.73s.92.7 2.62.7c1.7 0 2.79-.7 2.79-.7s-.38 1.58.07 2.7c.44 1.14 1.57 2.41 1.57 2.41s-1.56.17-2.64.99zM13.73 9.6s-.95.38-1.77.37c-.82 0-1.7-.37-1.7-.37.05.58 0 1.15-.17 1.7-.27.86-.91 1.64-.91 1.64A4.23 4.23 0 0 1 12 14.95s.45-.85 1.18-1.33c.5-.31 1.05-.55 1.63-.7 0 0-.74-.78-1.02-1.57-.28-.78-.06-1.75-.06-1.75zM20.1 12l3.31-3.7-4.85-1.07.5-4.94-4.56 2L12 0 9.5 4.29l-4.55-2 .49 4.95L.59 8.29 3.89 12 .6 15.7l4.85 1.07-.5 4.94 4.55-2L12 24l2.5-4.29 4.56 2-.5-4.94 4.85-1.06-3.3-3.71zm-5.27 3.95C14 16.56 12 20.81 12 20.81S10.5 16.95 9 15.95c-1.48-1-5.38-1.22-5.38-1.22s2.99-2.37 3.57-4.47c.59-2.1-.37-5.37-.37-5.37s2.9 2.1 5.08 2.1c2.17 0 5.26-2.1 5.26-2.1s-.82 4.5-.53 5.46c.3.96 3.73 4.38 3.73 4.38s-4.7.62-5.54 1.22z" />
    </svg>
  );
});

Wolframmathematica.propTypes = {
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

export default Wolframmathematica;