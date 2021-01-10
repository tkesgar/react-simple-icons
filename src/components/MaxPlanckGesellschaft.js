import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MaxPlanckGesellschaft = forwardRef(function MaxPlanckGesellschaft(
  { color = 'currentColor', size = 24, title = 'Max-Planck-Gesellschaft', ...others },
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
      <path d="M12 0a12 12 0 1 0 12 12A12.011 12.011 0 0 0 12 0zm-.049.331A11.669 11.669 0 0 1 23.67 12 11.68 11.68 0 0 1 12 23.669 11.669 11.669 0 0 1 11.951.33zM12 1.464A10.56 10.56 0 0 0 1.45 12c0 3.371 1.715 6.617 4.503 8.64a1.543 1.543 0 0 0 .32.183.126.126 0 0 0 .126-.023l.034-.057a.114.114 0 0 0 .035-.092c0-.08-.103-.148-.24-.343a3.166 3.166 0 0 1-.537-1.725 2.526 2.526 0 0 1 .514-1.566c.423.446 1.337 1.246 1.314 1.989-.023.743-.789.777-.617 1.394.103.389.389.229.446.526.08.503.765.834 1.062.788.08-.011.138.046.275.194.137.15.708.183.937.138.228-.046.468.16.914.103.446-.057.697-.103.937-.103.24 0 2.572-.035 4.115.205.274.046.354-.08.24-.285-.56-.983-.64-1.806-.32-2.858.57.046 1.394.195 2.468-.457a1.257 1.257 0 0 0 .583-1.085c-.011-.24-.114-.537-.057-.766.057-.229.148-.308.24-.366.411-.297.114-.525.046-.548a.389.389 0 0 0 .125-.526c-.08-.08-.308-.709-.045-.834.262-.126.605-.206.925-.355a.514.514 0 0 0 .275-.685 124.62 124.62 0 0 0-1.029-2.4c-.16-.355-.057-.583-.103-.835-.046-.251-.308-.8-.491-1.234-.08-.194.434-.148.046-.868 0-.023.537-.229 0-.629a3.017 3.017 0 0 1-.686-.766.114.114 0 0 1 0-.148c.308-.274.32-.663-.012-.857-.331-.195-.514 0-.765.16-.08.057-.126.09-.218.057l-.205-.137c.308-.298.377-.595.354-.64-.023-.046-.526-.149-1.166.114l-.045-.034c.263-.446.114-.766.102-.79h-.011a9.257 9.257 0 0 1 1.417-1.519h.012c.022-.034.034-.069-.023-.103l-.115-.068A10.56 10.56 0 0 0 12 1.464zm-.073.316a10.206 10.206 0 0 1 4.805 1.169.046.046 0 0 1 .012.08 11.12 11.12 0 0 0-1.166 1.302 8.354 8.354 0 0 0-3.577-.8A8.491 8.491 0 0 0 3.531 12a8.24 8.24 0 0 0 2.046 5.508 2.64 2.64 0 0 0-.217 1.075 2.926 2.926 0 0 0 .377 1.451C3.268 18.07 1.783 15.097 1.783 12A10.206 10.206 0 0 1 11.926 1.78zm.28.266c-.034 0-.046.023-.057.046l-.103 1.142a.046.046 0 0 0 .046.046h.125c.023.011.046-.011.046-.034l.114-1.143a.057.057 0 0 0-.046-.057zm-1.686.111c-.006 0-.011 0-.017.003h-.137c-.023.011-.046.034-.035.057l.218 1.132c0 .034.023.045.057.045l.125-.023c.023 0 .046-.022.035-.045l-.217-1.132a.038.038 0 0 0-.03-.037zm3.514.106L13.59 3.36a.046.046 0 0 0 .034.069l.126.034a.057.057 0 0 0 .057-.034l.434-1.075a.046.046 0 0 0-.034-.068l-.137-.023zm-5.313.34a.046.046 0 0 0-.013.003l-.114.034a.046.046 0 0 0-.034.068l.514 1.04.057.023.126-.045a.046.046 0 0 0 .035-.069L8.766 2.63a.046.046 0 0 0-.045-.026zm6.913.134a.046.046 0 0 0-.034.017l-.743.949c-.023.023-.011.057.023.068l.126.046c.023.012.034 0 .057-.011l.743-.949a.057.057 0 0 0-.023-.068l-.126-.046a.046.046 0 0 0-.023-.006zm-8.592.639a.028.028 0 0 0-.025.007l-.114.068c-.034.012-.034.046-.011.07l.765.879c.012.023.034.023.057.011l.115-.068a.046.046 0 0 0 .011-.069l-.766-.88a.06.06 0 0 0-.032-.018zm4.93.498a8.137 8.137 0 0 1 .028 0 8.011 8.011 0 0 1 3.383.732 2.583 2.583 0 0 0-.469.297A7.211 7.211 0 0 0 12 4.32 7.691 7.691 0 0 0 4.32 12c0 1.84.571 3.451 1.691 4.8-.057.103-.148.24-.251.4h-.011A7.909 7.909 0 0 1 3.874 12a8.137 8.137 0 0 1 8.098-8.126zm-6.51.618l-.102.09a.057.057 0 0 0 0 .08l.971.675c.023.011.046.012.058-.011l.103-.08a.057.057 0 0 0 0-.08l-.972-.674zm10.177.191c.008 0 .014 0 .018.003.069.034-.091.64-.446.983-.354.342-.925.708-.982.697-.058-.012.194-.674.491-1.017.3-.365.8-.659.919-.666zm-3.616.025a6.491 6.491 0 0 1 2.56.526 3.577 3.577 0 0 0-.423.755c0-.218-.057-.389-.046-.526.012-.137-.582.103-1.108.948a2.274 2.274 0 0 0-.252.606c-.011-.32-.08-.56-.103-.56a1.84 1.84 0 0 0-.971 1.006 2.56 2.56 0 0 0-.126.388c-.023-.217-.08-.365-.103-.365-.023 0-.674.263-.982 1.017a1.76 1.76 0 0 0-.126.526c-.057-.263-.16-.423-.194-.389-.217.274-.652.4-.87 1.097a1.509 1.509 0 0 0-.079.48c-.091-.228-.229-.366-.263-.366s-.697.629-.8 1.246a1.806 1.806 0 0 0 .023.663c-.126-.206-.286-.343-.354-.549-.103.058-.652.572-.663 1.223a2.251 2.251 0 0 0 .08.697c-.183-.331-.434-.48-.469-.468-.034.011-.457.468-.548 1.268a1.349 1.349 0 0 0 .045.526c-.171-.194-.32-.297-.33-.286a2.56 2.56 0 0 0-.413 1.018A7.474 7.474 0 0 1 4.651 12c-.16-4.046 3.235-7.303 7.372-7.292zm4.571.618a2.023 2.023 0 0 1 .035 0c.091.011-.218.548-.755.777-.537.228-.971.285-1.017.263-.046-.023.469-.663.914-.858a2.023 2.023 0 0 1 .823-.182zm-2.643.316c.003 0 .004 0 .003.004-.011.045.24.754-.297 1.188a2.4 2.4 0 0 0-.64.732c-.057.102-.217-.572.194-1.212.236-.375.693-.71.74-.712zM4.15 5.89a.031.031 0 0 0-.024.018l-.08.103a.046.046 0 0 0 .023.08l1.12.435a.046.046 0 0 0 .045-.023l.092-.103c.023-.023.011-.057-.023-.069l-1.12-.434a.057.057 0 0 0-.033-.007zm13.44.1c.048 0 .09.014.124.044.297.298-.331.469-.206.697a3.509 3.509 0 0 0 .858.96c.137.115.16.355-.377.469-.538.114-2.697.674-3.84 1.886-1.429 1.508-2.332 3.463-2.457 3.2-.126-.263-.412-.32-.366-.4 2.045-3.52 5.257-6.298 6.011-6.766a.468.468 0 0 1 .254-.09zm-1.339.113l.183.126c.115.068.16.09.103.137C13.943 8.57 12 11.372 11.154 12.72c-.023.046-.068.034-.148.034-.903-.068-1.417 1.017-1.017 2.035-.046.205-.48.605-.515.628-.034.023-.114.16.034.149.15-.012.48-.366.618-.515.045.069.251.229.148.32a7.269 7.269 0 0 1-1.588 1.2c-.297.138.48.24 1.794-.948.08-.069.171.274.286.423-.229.743.331 2.183.24 2.628a.32.32 0 0 1-.32.309c-1.303.034-1.429-.034-2.092.16-.308.091-.228.297-.011.24.217-.057.526-.172 1.931-.08.355.011.743-.069.743-.652s-.411-2.102-.274-2.32a.789.789 0 0 0 .4.16c-.023.515.8 2.172.434 3.086-.137.343-.731.309-1.76.206-1.748-.172-2.32.206-2.354 0-.034-.229.183-.446.183-.937 0-.492-.755-1.44-1.269-1.977a2.229 2.229 0 0 0 .903-.218c.754-.354.903-1.154.926-1.188a1.257 1.257 0 0 0-.435-.046l.092-.046c.731-.4.925-1.257.891-1.268a1.943 1.943 0 0 0-.457-.034l.229-.08c.777-.309.994-1.177.971-1.212a1.84 1.84 0 0 0-.4-.046l.217-.091c.709-.354.96-1.154.926-1.177a1.2 1.2 0 0 0-.377-.046 2.709 2.709 0 0 0 .514-.171c.766-.332 1.017-1.063.983-1.097a1.246 1.246 0 0 0-.343-.057 3.943 3.943 0 0 0 .503-.15c.754-.25 1.051-.97 1.006-.982l-.423-.091a2.8 2.8 0 0 0 .754-.149c.812-.274 1.097-.766 1.12-.983a.686.686 0 0 0-.263-.091 3.349 3.349 0 0 0 .538-.138c.754-.308 1.074-1.062 1.097-1.12a3.349 3.349 0 0 0 .445-.182zm-1.28.5a2.057 2.057 0 0 1 .229.014c.034.023-.286.56-.811.766-.526.206-1.006.217-1.075.171-.057-.034.492-.651.937-.823a2.057 2.057 0 0 1 .72-.127zm-2.468.105c.057-.01.217.664 0 .984-.389.582-.412.377-.834.948-.023.023-.023-.743.125-1.074.24-.538.652-.846.709-.858zm-9.36.823l-.057.023a.617.617 0 0 1-.057.126.046.046 0 0 0 .034.069l1.2.171c.023 0 .045-.011.045-.034l.07-.115a.046.046 0 0 0-.035-.068zm10.289.233a1.874 1.874 0 0 1 .476.065c.058.022-.32.571-.88.742-.56.172-1.108.149-1.097.115.012-.035.469-.675.926-.835a1.874 1.874 0 0 1 .575-.087zm-2.152.019c.068-.012.194.651-.046 1.063-.194.343-.377.263-.708.765-.035.046-.126-.411.08-1.04a1.44 1.44 0 0 1 .674-.788zm6.96.673c.034.005.06.035.034.104-.114.331-1.04.629-.994.4.046-.229 0-.251.069-.263.068-.011.4-.126.857-.24a.085.085 0 0 1 .035-.001zm-1.368.317c.03 0 .05.004.054.016.034.091-.206.685-.537.8-.332.114-.537.103-.526.045a1.257 1.257 0 0 0 .057-.468c-.02-.12.739-.389.952-.393zm1.286.187a.091.091 0 0 1 .093.069c.423 1.017.595 1.291.56 1.805-.034.515.995 2.457 1.075 2.64.08.183.091.389 0 .48-.377.332-.949.355-1.178.56-.228.206-.17.286-.045.594.126.31.125.195-.126.263-.251.069-.468.663-1.006.56-.205-.034-.057.092.023.103.297.035.423-.057.526-.16.103-.103.252-.274.412-.331.16-.057.33-.057.342.068.012.126-.217.24-.308.286.114.057.445.217.16.411-.286.195-.526-.057-.56-.08-.035-.022-.194-.022-.149.035.046.057.595.148.515.251-.4.537-.07.858-.195 1.406-.126.549-.88.857-1.463.96-1.988.354-3.92-1.326-5.051-2.606.103-.24.091-.548-.012-.434-.102.114-.08.274-.32.331-.445.115-.65-.674-.788-.81-.549-.538-.766-1.304-.446-1.978.32-.674 1.029-.537 1.303-.126.274.412.194.8.388.949.195.148.55.023.618 0 .068-.023.194.491.914.468.72-.023.674-1.222.789-1.325.982-.96.48-1.818.297-2.012-.183-.194.114-.411.171-.423a1.486 1.486 0 0 0 1.074-.88s.96-.023 1.303-.708c.092-.183.378.171 1.018-.332a.091.091 0 0 1 .066-.034zm-8.085.015c.13-.046.188.654-.016 1.094-.206.445-.331.457-.571.731-.035.046-.206-.423-.046-1.006.16-.583.457-.64.606-.8a.07.07 0 0 1 .027-.02zm1.82.027c.247.007.444.077.53.084.137.011-.149.514-.754.731-.606.217-1.029.206-1.109.172-.023-.023.389-.72.846-.903a1.21 1.21 0 0 1 .486-.084zm-8.22.22a.046.046 0 0 0-.004 0l-1.235.115-.045.034-.035.137c0 .035.023.07.057.058l1.223-.115a.034.034 0 0 0 .035-.034.869.869 0 0 0 .045-.125.046.046 0 0 0-.04-.07zm11.806.203c.032.003.044.032.052.083a1.211 1.211 0 0 1-.297.858c-.262.285-.525.263-.663.297-.137.034-.091.263-.274.388-.251.172-.606-.057-.537-.16a4.994 4.994 0 0 1 1.314-1.257c.243-.15.352-.215.405-.21zm-6.622.724c.092 0 .24.365.24.674a1.177 1.177 0 0 1-.046.343c-.148.491-.445.708-.605.926a1.794 1.794 0 0 1-.183-.663 1.737 1.737 0 0 1 .594-1.28zm2.106.104a1.783 1.783 0 0 1 .294.021c.034.035-.217.629-.743.857a2.766 2.766 0 0 1-1.177.206c-.034-.023.503-.731.96-.948a1.783 1.783 0 0 1 .665-.136zm6.614.033c-.56.023-1.211.708-1.417.8-.206.091-.149.171-.023.125.126-.045.674-.537 1.223-.731.549-.194.411.206.571.183.16-.023-.034-.389-.354-.377zm-14.262.544a.07.07 0 0 0-.023.004l-1.19.412c-.022.011-.033.023-.033.045 0 .023-.012.092-.012.138a.046.046 0 0 0 .069.045l1.177-.411a.034.034 0 0 0 .034-.034c0-.046.012-.103.012-.15 0-.033-.013-.048-.034-.049zm14.388.004c-.046.012.045.252-.195.263-.525.034-.948.537-1.268.686a1.474 1.474 0 0 1-.434.16.035.035 0 0 0 .011.068c1.337.183 1.851.126 1.863.08.011-.045-.068-.137-.046-.194a1.291 1.291 0 0 0 .012-.629c-.023-.09.205-.034.205-.148 0-.114-.068-.297-.148-.286zm-.297.537a.091.091 0 0 1 .091.069 1.211 1.211 0 0 1 0 .457c-.023.103-.628.057-.948.023-.08 0-.206-.011.034-.16s.469-.32.823-.389zm-3.848.003c.121.01.24.169.248.34.034.412-.206.64-.446.823-.24.183-.354.503-.297.583a.171.171 0 0 0 .217-.103c.171-.377.686-.56.766-.766.08-.205.034-.503.023-.64-.012-.137.102-.137.182-.125.08.011.16.16.206.308.332.857-.491 1.372-.628 1.577-.138.206.125.789-.229 1.006-.457.286-.709-.251-.777-.354a.423.423 0 0 1-.057-.355c.034-.16.057-.377-.046-1.062-.046-.309.571-1.052.72-1.189a.151.151 0 0 1 .118-.043zm-5.855.169c.057.205.423.365.423.743a1.703 1.703 0 0 1-.583 1.234 2.023 2.023 0 0 1-.251-.869c-.023-.72.274-.971.41-1.108zm2.283.046a2 2 0 0 1 .197.011c.034.011-.206.617-.709.869-.503.251-1.177.285-1.154.228.023-.046.4-.731.846-.937a2 2 0 0 1 .82-.17zm-6.738.875a.057.057 0 0 0-.025.004l-1.074.72c-.023 0-.023.023-.023.046s.011.092.011.137a.057.057 0 0 0 .08.035l1.075-.709c.01-.011.022-.023.01-.034v-.149a.057.057 0 0 0-.054-.05zm9.195.438a.057.057 0 0 1 .06.047c.068.468 0 1.12-.411 1.028-.115-.023-.16-.24-.138-.331.023-.092.355-.595.457-.732a.057.057 0 0 1 .032-.012zm-3.26.012a2.103 2.103 0 0 1 .234.012c.057.022-.194.64-.663.868-.468.229-.743.103-1.223.252.035-.172.343-.743.812-.949a2.103 2.103 0 0 1 .84-.183zm-2.44.092c.206.103.446.388.468.937.023.548-.365.994-.525 1.074-.103-.423-.297-.503-.297-.914a2.057 2.057 0 0 1 .354-1.097zm4.152.227c-.347.016-.568.511-.518 1.041a.914.914 0 0 0 .583.812c.263.091.069.457.423.457.16 0 .194-.24.103-.275-.08-.034-.057.138-.16.115-.103-.023-.023-.149-.206-.343-.183-.194-.32-.137-.491-.411-.172-.275-.035-1.372.354-1.235.388.137.183.572.114.914-.068.343.286.32.32.24.034-.08-.126-.102-.16-.217-.034-.114.4-.868-.206-1.074a.42.42 0 0 0-.156-.024zm7.24.093a.079.079 0 0 0-.066.068 4.217 4.217 0 0 1-.08.606c-.046.206.137.457.411.308.274-.148.549-.33.834-.388.069-.011.08-.114.012-.114-.103 0-.515.183-.675.286-.16.102-.502.308-.48-.092.012-.149.103-.503.103-.606 0-.051-.028-.071-.058-.068zm-14.64.772a.046.046 0 0 0-.032.016l-.88.972c-.012.011-.023.034-.012.045a.625.625 0 0 1 .046.138.046.046 0 0 0 .08.023l.869-.96c.011-.012.011-.023.011-.046l-.034-.149a.046.046 0 0 0-.047-.039zm4.976.149a.72.72 0 0 1 .226.016c.023.023-.171.674-.674.937s-1.086.309-1.143.24c-.057-.069.172-.777.697-1.006.329-.142.675-.183.894-.187zm-2.523.264c.107.011.59.419.6.997a1.646 1.646 0 0 1-.388 1.052c-.149-.137-.469-.491-.503-.949v-.068c0-.492.217-.983.274-1.029.004-.003.01-.004.017-.003zm1.985 1.07c.133.003.217.018.204.03-.034.035-.206.663-.708.915a1.383 1.383 0 0 1-.995.148c.263-.297.206-.731.64-.937.279-.129.638-.159.86-.155zm-3.866.133a.057.057 0 0 0-.044.023l-.617 1.177c-.012.012 0 .035 0 .046l.08.137a.046.046 0 0 0 .08-.011l.617-1.166c0-.011.011-.023 0-.046l-.069-.137a.057.057 0 0 0-.047-.023zm7.66.829c.014.002.03.011.044.028 1.783 1.932 2.915 2.31 3.532 2.492.057.023.046.091.023.16-.286 1.005-.435 1.406 0 2.503.057.148.103.262-.023.24-.88-.16-1.075-.297-3.852-.069-.194.023.069-.388.035-.663.251-.034.663-.148.743-.56.08-.411-.24-.868-.206-.937.4-.766-.023-1.611-.354-3.04-.026-.103.012-.16.057-.154zm-6.873.5c-.017.003-.031.014-.031.031l-.331 1.372c-.012.023 0 .034 0 .046l.114.114a.046.046 0 0 0 .08-.012l.32-1.36c.011-.011 0-.023 0-.034l-.103-.137a.049.049 0 0 0-.049-.02zm2.489 2.851c.056.007.111.04.154.083.114.115-.08.32-.103.492-.08.022-.331.034-.274-.309.036-.214.13-.277.223-.266zm1.583.096c.155-.01.304.046.297.124-.035.492-.24 1.052.137 1.612.149.217-.594.251-.731-.32-.092-.423-.126-1.143.045-1.314a.394.394 0 0 1 .252-.102zm.962.04c.203-.002.475.028.546.05.115.034-.091.777.777 1.12.08.034-.011 1.006-1.28.686-.182-.046-.685-.846-.274-1.806.013-.034.11-.048.23-.05zm1.938.018c.23.031.238.746-.112.866-.674.229-.948-.56-.834-.731.114-.172.503.114.834-.103a.164.164 0 0 1 .112-.032zm-3.78.073c.128-.004.245.022.251.085.012.126-.126.617.034 1.165-.034.08-.525.046-.662-.32-.069-.308-.046-.72.057-.834.051-.057.191-.091.32-.096z" />
    </svg>
  );
});

MaxPlanckGesellschaft.propTypes = {
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

export default MaxPlanckGesellschaft;
