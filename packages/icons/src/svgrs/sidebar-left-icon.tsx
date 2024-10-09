import * as React from "react";
const SidebarLeftIcon = React.forwardRef<
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
    <g clipPath="url(#clip0_4024_6727)">
      <path
        d="M12.4165 1.75H3.0832C2.10136 1.75 1.30542 2.5738 1.30542 3.59V11.41C1.30542 12.4262 2.10136 13.25 3.0832 13.25H12.4165C13.3984 13.25 14.1943 12.4262 14.1943 11.41V3.59C14.1943 2.5738 13.3984 1.75 12.4165 1.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.1499 4.5V10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_4024_6727">
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
SidebarLeftIcon.displayName = "SidebarLeftIcon";
export default SidebarLeftIcon;
