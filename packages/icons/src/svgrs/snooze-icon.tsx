import * as React from "react";
const SnoozeIcon = React.forwardRef<
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
    <g clipPath="url(#clip0_514_964)">
      <path
        d="M9.94553 5.6488H14.1666L10.3262 10.2791H14.4155"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.39655 10.1859H7.93401L4.76956 14H8.13748H4.76956"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.08444 1H7.19181L2.46593 6.69694H7.45692"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_514_964">
        <rect
          width={15}
          height={15}
          fill="white"
          transform="translate(0.749969)"
        />
      </clipPath>
    </defs>
  </svg>
));
SnoozeIcon.displayName = "SnoozeIcon";
export default SnoozeIcon;
