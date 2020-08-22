import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Toyota = forwardRef(function Toyota({ color = 'currentColor', size = 24, title = 'Toyota', ...others }, ref) {
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
      <path d="M12 4.236c-6.627 0-12 3.476-12 7.762 0 4.289 5.373 7.766 12 7.766s12-3.476 12-7.766-5.373-7.762-12-7.762zm0 12.196c-.986 0-1.79-1.942-1.84-4.385a21.093 21.093 0 0 0 3.68 0c-.05 2.442-.854 4.385-1.84 4.385zm-1.719-6.324c.268-1.727.937-2.953 1.719-2.953s1.45 1.226 1.719 2.953a19.436 19.436 0 0 1-3.438 0zM12 5.358c-1.287 0-2.385 1.928-2.79 4.619-2.44-.38-4.143-1.248-4.143-2.256 0-1.36 3.104-2.461 6.933-2.461 3.83 0 6.933 1.102 6.933 2.461 0 1.008-1.703 1.876-4.143 2.256-.405-2.69-1.503-4.618-2.79-4.618zm-10.28 6.35c0-1.315.507-2.55 1.388-3.61-.009.074-.015.15-.015.226 0 1.657 2.485 3.07 5.953 3.59-.003.12-.003.242-.003.364 0 3.09.866 5.705 2.063 6.593-5.26-.317-9.385-3.403-9.385-7.163zm11.174 7.163c1.197-.888 2.063-3.504 2.063-6.593 0-.123-.002-.243-.003-.363 3.466-.52 5.953-1.932 5.953-3.591 0-.076-.006-.152-.015-.226.881 1.063 1.387 2.295 1.387 3.61 0 3.76-4.125 6.846-9.385 7.163zm0 0Z" />
    </svg>
  );
});

Toyota.propTypes = {
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

export default Toyota;
