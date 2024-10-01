import * as React from "react";
const UsersIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    ref={ref}
  >
    <g clipPath="url(#clip0_11443_4378)">
      <path
        d="M5.20141 7.35411C6.15257 7.35411 6.92363 6.58305 6.92363 5.63189C6.92363 4.68073 6.15257 3.90967 5.20141 3.90967C4.25025 3.90967 3.47919 4.68073 3.47919 5.63189C3.47919 6.58305 4.25025 7.35411 5.20141 7.35411Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.52445 13.2717C8.97481 13.121 9.23917 12.6311 9.07211 12.1876C8.48225 10.6221 6.97445 9.50781 5.20228 9.50781C3.43011 9.50781 1.92231 10.6221 1.33245 12.1876C1.16539 12.6319 1.42975 13.1219 1.88011 13.2717C2.7085 13.5481 3.84431 13.8125 5.20314 13.8125C6.56197 13.8125 7.69692 13.5481 8.52445 13.2717Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5833 5.20128C11.5345 5.20128 12.3055 4.43022 12.3055 3.47906C12.3055 2.5279 11.5345 1.75684 10.5833 1.75684C9.63215 1.75684 8.86108 2.5279 8.86108 3.47906C8.86108 4.43022 9.63215 5.20128 10.5833 5.20128Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2283 11.6399C12.303 11.5736 13.2123 11.3505 13.9055 11.1189C14.3559 10.9682 14.6202 10.4782 14.4532 10.0348C13.8633 8.46926 12.3555 7.35498 10.5834 7.35498C9.74204 7.35498 8.96016 7.60642 8.30743 8.03784"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_11443_4378">
        <rect
          width={15}
          height={15}
          fill="white"
          transform="translate(0.5 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
));
UsersIcon.displayName = "UsersIcon";
export default UsersIcon;
