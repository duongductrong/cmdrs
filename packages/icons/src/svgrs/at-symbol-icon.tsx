import * as React from "react";
const AtSymbolIcon = React.forwardRef<
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
    <g clipPath="url(#clip0_509_960)">
      <path
        d="M7.80549 10.1667C9.21689 10.1667 10.3611 8.92302 10.3611 7.38889C10.3611 5.85477 9.21689 4.61111 7.80549 4.61111C6.3941 4.61111 5.24994 5.85477 5.24994 7.38889C5.24994 8.92302 6.3941 10.1667 7.80549 10.1667Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3611 4.61112V9.21823C10.3611 10.5996 12.4375 10.8378 13.5362 8.97024C14.4677 7.38979 14.2393 4.97912 13.0757 3.39335C11.3637 1.05824 7.40551 0.185346 4.53084 2.11512C1.88818 3.88935 0.947731 7.47779 2.40729 10.3782C3.85173 13.2485 7.24284 14.6396 10.3122 13.6013"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_509_960">
        <rect
          width={15}
          height={15}
          fill="white"
          transform="translate(0.416626)"
        />
      </clipPath>
    </defs>
  </svg>
));
AtSymbolIcon.displayName = "AtSymbolIcon";
export default AtSymbolIcon;
