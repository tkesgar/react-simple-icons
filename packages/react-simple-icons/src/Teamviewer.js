import React from 'react';
import PropTypes from 'prop-types';

const Teamviewer = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M22.597 24H1.406A1.41 1.41 0 0 1 0 22.594V1.406A1.41 1.41 0 0 1 1.406 0h21.191a1.41 1.41 0 0 1 1.406 1.406v21.188A1.41 1.41 0 0 1 22.597 24zM11.911 2.109c-5.405.047-9.763 4.482-9.802 9.89-.04 5.507 4.381 9.885 9.89 9.89 5.415.003 9.796-4.5 9.89-9.89.097-5.572-4.406-9.939-9.978-9.89zM9.65 8.633l-.889 2.159H15.3l-.889-2.159 6.642 3.365-6.642 3.365.889-2.159H8.761l.882 2.159-6.659-3.365z" />
    </svg>
  );
};

Teamviewer.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Teamviewer.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Teamviewer;