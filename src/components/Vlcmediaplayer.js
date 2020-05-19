import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Vlcmediaplayer = forwardRef(function Vlcmediaplayer(
  { color = 'currentColor', size = 24, title = 'VLC media player', ...others },
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
      <path d="M11.891 13.463c3.757 0 4.854-1.347 5.065-1.674l-1.36-4.334c-.36.34-1.327.937-3.68.937-2.292 0-3.188-.567-3.52-.91l-1.39 4.422c.228.361 1.255 1.56 4.885 1.56zM11.917 3.807a6.143 6.143 0 0 0 2.376-.507L13.435.566a.781.781 0 0 0-.406-.437S12.914 0 12.032 0s-1.055.136-1.055.136a.733.733 0 0 0-.41.43l-.884 2.815a6.77 6.77 0 0 0 2.234.426zM22.59 23.319a.395.395 0 0 0-.016-.16l-2.334-7.632a.647.647 0 0 0-.583-.431h-1.663l.2.64c-.24.485-1.488 2.38-6.303 2.38-4.6 0-5.828-1.73-6.11-2.308l.223-.712H4.343a.647.647 0 0 0-.583.431L1.426 23.16a.398.398 0 0 0-.017.15l-.002.02a1.843 1.843 0 0 0 .024.226.528.528 0 0 0 .51.445H22.06a.528.528 0 0 0 .51-.445 1.843 1.843 0 0 0 .023-.226z" />
    </svg>
  );
});

Vlcmediaplayer.propTypes = {
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

export default Vlcmediaplayer;