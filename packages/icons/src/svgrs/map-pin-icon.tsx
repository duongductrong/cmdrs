import * as React from "react";
const MapPinIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => (
  <svg
    width={16}
    height={15}
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    ref={ref}
  >
    <path
      d="M12.1869 4.81376C12.1869 7.13288 8.24997 11.2778 8.24997 11.2778C8.24997 11.2778 4.31308 7.13376 4.31308 4.81376C4.31308 2.43599 6.34775 1.05554 8.24997 1.05554C10.1522 1.05554 12.1869 2.4351 12.1869 4.81376Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.24996 6.16667C8.98634 6.16667 9.58329 5.56971 9.58329 4.83333C9.58329 4.09695 8.98634 3.5 8.24996 3.5C7.51358 3.5 6.91663 4.09695 6.91663 4.83333C6.91663 5.56971 7.51358 6.16667 8.24996 6.16667Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.8055 13.9445H2.69443"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));
MapPinIcon.displayName = "MapPinIcon";
export default MapPinIcon;
