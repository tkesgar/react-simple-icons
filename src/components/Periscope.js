import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Periscope = forwardRef(function Periscope(
  { color = 'currentColor', size = 24, title = 'Periscope', ...others },
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
      <path d="M12.135 24c1.875 0 9.314-8.439 9.314-14.096C21.449 4.49 17.22 0 12.135 0 6.78 0 2.551 4.488 2.551 9.904 2.551 15.56 9.99 24 12.135 24zM10.639 3.846c.485-.12.995-.185 1.524-.185 3 0 5.581 2.551 5.581 5.865 0 2.985-2.581 5.535-5.596 5.535-3.345 0-5.925-2.55-5.925-5.535 0-1.396.45-2.64 1.229-3.63v.03c0 1.245 1.006 2.234 2.25 2.234C10.948 8.161 12 7.14 12 5.896c0-.919-.56-1.708-1.359-2.053l-.002.003z" />
    </svg>
  );
});

Periscope.propTypes = {
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

export default Periscope;
