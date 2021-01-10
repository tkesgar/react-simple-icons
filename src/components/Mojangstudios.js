import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Mojangstudios = forwardRef(function Mojangstudios(
  { color = 'currentColor', size = 24, title = 'Mojang Studios', ...others },
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
      <path d="M12.484 2.077a3.725 3.725 0 1 0 3.725 3.726 3.725 3.725 0 0 0-3.725-3.726zm-12.23.091a.182.182 0 0 0-.181.182v6.905a.182.182 0 0 0 .182.182h1.453a.182.182 0 0 0 .182-.182V4.44a.454.454 0 0 1 .455-.454h.454a.454.454 0 0 1 .454.454v2.994a.182.182 0 0 0 .182.182h1.453a.182.182 0 0 0 .182-.182V4.44a.454.454 0 0 1 .454-.454h.453a.454.454 0 0 1 .454.454l.002 4.816a.182.182 0 0 0 .182.182h1.453a.182.182 0 0 0 .182-.182V4.167a.182.182 0 0 0-.181-.182H7.34a.909.909 0 0 1-.908-.91l.001-.725a.182.182 0 0 0-.182-.182zm18.375 0a.182.182 0 0 0-.182.182v1.454a.182.182 0 0 0 .182.181h3.453v3.18a.454.454 0 0 1-.454.455h-1.363a1.82 1.82 0 0 1-1.81-1.655.18.18 0 0 0-.18-.162h-1.458a.18.18 0 0 0-.182.19 3.634 3.634 0 0 0 3.63 3.444H21.9a.182.182 0 0 0 .182-.182v-.727a.909.909 0 0 1 .908-.908h.727a.182.182 0 0 0 .182-.182V2.35a.182.182 0 0 0-.182-.182zm-6.152 1.817a1.817 1.817 0 0 1 1.824 1.818 1.82 1.82 0 0 1-1.817 1.817 1.817 1.817 0 0 1-.007-3.635zm-8.77 6.361a3.634 3.634 0 0 0-3.634 3.635v3.452a.182.182 0 0 0 .182.182h1.453a.182.182 0 0 0 .182-.182v-3.452a1.817 1.817 0 0 1 1.817-1.817h1.364a.454.454 0 0 1 .453.454v.909a.454.454 0 0 1-.454.454H3.071a.182.182 0 0 0-.181.182v1.453a.182.182 0 0 0 .181.182h2a.454.454 0 0 1 .453.454v1.181a.182.182 0 0 0 .182.182H7.16a.182.182 0 0 0 .182-.182v-5.088a.182.182 0 0 0-.182-.181l-.73-.003a.909.909 0 0 1-.906-.909v-.724a.182.182 0 0 0-.181-.181zm4.932 0a.182.182 0 0 0-.181.182v6.905a.182.182 0 0 0 .181.182h1.454a.182.182 0 0 0 .182-.182v-4.815a.454.454 0 0 1 .454-.454h2.726a.454.454 0 0 1 .454.454v4.815a.182.182 0 0 0 .182.182h1.454a.182.182 0 0 0 .181-.182v-5.088a.182.182 0 0 0-.181-.181l-.728-.001a.909.909 0 0 1-.908-.909v-.726a.182.182 0 0 0-.181-.182zm11.578 0c-1.557 0-2.955 1-3.412 2.489-.744 2.428.984 4.658 3.27 4.776a.18.18 0 0 0 .19-.183v-1.176a.454.454 0 0 1 .454-.454h.909a.454.454 0 0 1 .454.454v1.182a.182.182 0 0 0 .182.181h1.453a.182.182 0 0 0 .182-.181v-3.271a.182.182 0 0 0-.182-.182h-3.27a.182.182 0 0 0-.182.182v.96a.516.516 0 0 1-.606.51 1.175 1.175 0 0 1-.52-.226c-.587-.466-.883-1.285-.557-2.134a1.744 1.744 0 0 1 1.631-1.11h3.504a.182.182 0 0 0 .182-.181v-1.454a.182.182 0 0 0-.182-.182zM1.003 19.325c-.529 0-.922.32-.922.734 0 .361.162.575.586.759.11.039.25.096.306.113.247.072.257.196.216.308-.04.112-.205.16-.363.097-.11-.043-.283-.21-.295-.227a.083.083 0 0 0-.045-.027H.485a.082.082 0 0 0-.064.013l-.386.269a.083.083 0 0 0-.018.118c.223.288.55.44.93.44.567 0 .97-.35.97-.827 0-.313-.17-.536-.629-.73a8.734 8.734 0 0 0-.314-.129c-.203-.066-.213-.163-.179-.256s.17-.134.302-.081c.07.028.244.186.263.205a.097.097 0 0 0 .048.03.082.082 0 0 0 .067-.014l.383-.286a.083.083 0 0 0 .014-.119 1.093 1.093 0 0 0-.869-.39zm18.257 0a1.297 1.297 0 1 0 1.297 1.297 1.297 1.297 0 0 0-1.297-1.297zm3.825 0c-.528 0-.921.32-.921.734 0 .361.161.575.585.759.11.039.25.096.307.113.247.072.256.196.215.308-.04.112-.204.16-.363.097-.11-.043-.283-.21-.295-.227a.083.083 0 0 0-.045-.027.082.082 0 0 0-.065.013l-.385.269a.083.083 0 0 0-.019.118c.223.288.55.44.93.44.568 0 .971-.35.971-.827 0-.313-.17-.536-.63-.73a9.661 9.661 0 0 0-.313-.129c-.204-.066-.213-.163-.18-.256.034-.093.171-.134.302-.081.07.028.245.186.263.205a.097.097 0 0 0 .049.03.082.082 0 0 0 .066-.014l.383-.286a.083.083 0 0 0 .014-.119 1.093 1.093 0 0 0-.869-.39zm-19.443.066a.092.092 0 0 0-.092.092v.46a.092.092 0 0 0 .092.091h.55a.092.092 0 0 1 .092.092v1.635a.092.092 0 0 0 .092.092h.536a.092.092 0 0 0 .092-.092v-1.635a.092.092 0 0 1 .092-.092h.55a.092.092 0 0 0 .092-.092v-.459a.092.092 0 0 0-.092-.092zm3.878 0a.092.092 0 0 0-.092.092v1.292c0 .755.337 1.144 1.095 1.144.738 0 1.096-.41 1.096-1.147v-1.289a.092.092 0 0 0-.092-.092h-.525a.092.092 0 0 0-.092.092v1.223c0 .41-.112.553-.387.553-.274 0-.386-.143-.386-.553v-1.223a.092.092 0 0 0-.092-.092zm3.985 0a.092.092 0 0 0-.092.092v2.278a.092.092 0 0 0 .092.092h.764c.87 0 1.412-.473 1.412-1.238 0-.751-.522-1.224-1.409-1.224zm4.061 0a.092.092 0 0 0-.092.092v2.278c0 .051.041.092.092.092h.552a.092.092 0 0 0 .092-.092v-2.278a.092.092 0 0 0-.092-.092zm-3.363.63h.04c.467 0 .704.18.704.594 0 .428-.237.609-.71.609h-.034a.093.093 0 0 1-.094-.092v-1.02a.093.093 0 0 1 .094-.092zm7.052.022a.579.579 0 0 1 .584.58.58.58 0 0 1-.58.578.579.579 0 0 1-.004-1.158z" />
    </svg>
  );
});

Mojangstudios.propTypes = {
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

export default Mojangstudios;
