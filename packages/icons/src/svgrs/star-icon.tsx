import * as React from "react";
const StarIcon = React.forwardRef<
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
    <g clipPath="url(#clip0_631_640)">
      <path
        d="M7.91661 1.05554L9.90772 5.09021L14.3611 5.73732L11.1388 8.87865L11.8997 13.3133L7.91661 11.22L3.9335 13.3133L4.69439 8.87865L1.47217 5.73732L5.9255 5.09021L7.91661 1.05554Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_631_640">
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
StarIcon.displayName = "StarIcon";
export default StarIcon;
