import * as React from "react";
const ComponentIcon = React.forwardRef<
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
    <g clipPath="url(#clip0_590_1232)">
      <path
        d="M3.85829 5.22513L6.13327 7.50011L3.85829 9.77508L1.58331 7.50011L3.85829 5.22513Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.08296 1.00009L10.3579 3.27507L8.08296 5.55005L5.80798 3.27507L8.08296 1.00009Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3084 5.22513L14.5833 7.50011L12.3084 9.77508L10.0334 7.50011L12.3084 5.22513Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.08296 9.44998L10.3579 11.725L8.08296 13.9999L5.80798 11.725L8.08296 9.44998Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_590_1232">
        <rect
          width={15}
          height={15}
          fill="white"
          transform="translate(0.583313)"
        />
      </clipPath>
    </defs>
  </svg>
));
ComponentIcon.displayName = "ComponentIcon";
export default ComponentIcon;
