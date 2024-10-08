import * as React from "react";
const RocketLaunchIcon = React.forwardRef<
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
    <g clipPath="url(#clip0_518_967)">
      <path
        d="M12.1818 8.38597C15.2992 5.11498 14.918 1.30237 14.8856 1.03114C14.6135 0.998725 10.8017 0.617465 7.53074 3.73493C5.54938 5.62333 4.88238 7.73177 4.68877 8.43715L7.47956 11.2279C8.18494 11.0343 10.2934 10.3673 12.1818 8.38597Z"
        stroke="#18181B"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6593 6.7501C11.4837 6.7501 12.1519 6.08182 12.1519 5.25746C12.1519 4.43311 11.4837 3.76483 10.6593 3.76483C9.83495 3.76483 9.16667 4.43311 9.16667 5.25746C9.16667 6.08182 9.83495 6.7501 10.6593 6.7501Z"
        fill="#18181B"
      />
      <path
        d="M5.41706 12.48C5.1825 12.9986 4.65965 13.3602 4.05322 13.3602H2.55632V11.8642C2.55632 11.2578 2.91711 10.7349 3.43655 10.5004"
        stroke="#18181B"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.128 8.44226L12.3378 9.61675C12.5289 10.6855 12.0854 11.7687 11.2 12.3956L8.93633 14C8.93633 14 9.48476 12.5662 9.17429 10.584"
        stroke="#18181B"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.47438 3.78871L6.30245 3.57889C5.23202 3.38698 4.14709 3.83135 3.51848 4.71926L1.91667 6.98038C1.91667 6.98038 3.35045 6.43195 5.33267 6.74241"
        stroke="#18181B"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_518_967">
        <rect
          width={15}
          height={15}
          fill="white"
          transform="translate(0.916656)"
        />
      </clipPath>
    </defs>
  </svg>
));
RocketLaunchIcon.displayName = "RocketLaunchIcon";
export default RocketLaunchIcon;
