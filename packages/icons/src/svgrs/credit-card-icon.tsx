import * as React from "react";
const CreditCardIcon = React.forwardRef<
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
    <g clipPath="url(#clip0_716_678)">
      <path
        d="M1.30542 5.94446H14.1943"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.08322 12.1667L12.4166 12.1667C13.3984 12.1667 14.1943 11.3707 14.1943 10.3889L14.1943 4.6111C14.1943 3.62926 13.3984 2.83332 12.4166 2.83332L3.08322 2.83332C2.10139 2.83332 1.30545 3.62926 1.30545 4.6111L1.30545 10.3889C1.30545 11.3707 2.10139 12.1667 3.08322 12.1667Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.52771 9.5H6.19438"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0833 9.5H11.9721"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_716_678">
        <rect
          width="15"
          height="15"
          fill="white"
          transform="translate(0.249878)"
        />
      </clipPath>
    </defs>
  </svg>
));
CreditCardIcon.displayName = "CreditCardIcon";
export default CreditCardIcon;
