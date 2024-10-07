import * as React from "react";
const SidebarRightIcon = React.forwardRef<
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
    <g clipPath="url(#clip0_6230_117)">
      <path
        d="M3.24997 13.25L12.5833 13.25C13.5651 13.25 14.3611 12.4262 14.3611 11.41L14.3611 3.59C14.3611 2.5738 13.5651 1.75 12.5833 1.75L3.24997 1.75C2.26813 1.75 1.47219 2.5738 1.47219 3.59L1.47219 11.41C1.47219 12.4262 2.26813 13.25 3.24997 13.25Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5166 4.5V10.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_6230_117">
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
SidebarRightIcon.displayName = "SidebarRightIcon";
export default SidebarRightIcon;
