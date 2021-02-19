import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Opel = forwardRef(function Opel({ color = 'currentColor', size = 24, title = 'Opel', ...others }, ref) {
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
      <path d="M23.82 12.92l-2.256-.143-.273-.017c.02-.25.034-.504.034-.76 0-5.142-4.183-9.325-9.325-9.325-4.427 0-8.14 3.101-9.088 7.245H.85a.359.359 0 0 0-.285.14l-.528.728a.18.18 0 0 0 .142.29l2.248.14.282.019c-.02.252-.034.506-.034.763 0 5.142 4.183 9.325 9.325 9.325 4.427 0 8.14-3.101 9.088-7.245h2.061a.36.36 0 0 0 .286-.14l.527-.728a.18.18 0 0 0-.142-.29zM12 3.756c4.546 0 8.245 3.699 8.245 8.245 0 .233-.012.463-.031.692h-.004l-6.892-.439 2.99-2.05a.156.156 0 0 0-.088-.284H4.022C4.944 6.377 8.171 3.755 12 3.755zm0 16.49c-4.546 0-8.245-3.699-8.245-8.245 0-.235.012-.466.031-.696l6.893.43-2.983 2.062a.157.157 0 0 0 .089.284h12.193c-.924 3.543-4.15 6.165-7.978 6.165z" />
    </svg>
  );
});

Opel.propTypes = {
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

export default Opel;
