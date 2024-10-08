import * as React from "react";
const PaperClipIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => (
  <svg
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    ref={ref}
  >
    <path
      d="M10.0144 4.31955L5.77176 8.56221C5.25087 9.0831 5.25087 9.92755 5.77176 10.4475C6.29265 10.9684 7.13709 10.9684 7.65709 10.4475L12.0571 6.04755C13.0989 5.00577 13.0989 3.31777 12.0571 2.27599C11.0153 1.23422 9.32731 1.23422 8.28554 2.27599L3.88554 6.67599C2.32376 8.23777 2.32376 10.7711 3.88554 12.3329C5.44731 13.8947 7.98065 13.8947 9.54242 12.3329L13.7851 8.09021"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));
PaperClipIcon.displayName = "PaperClipIcon";
export default PaperClipIcon;
