import * as React from "react";

const CheckCircleSolidIcon = React.forwardRef<
  React.ElementRef<"svg">,
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
    <g clipPath="url(#clip0_7123_31668)">
      <path
        d="M8 0.888885C4.07911 0.888885 0.888885 4.07911 0.888885 8C0.888885 11.9209 4.07911 15.1111 8 15.1111C11.9209 15.1111 15.1111 11.9209 15.1111 8C15.1111 4.07911 11.9209 0.888885 8 0.888885ZM11.416 5.96266L7.63822 10.8516C7.51733 11.008 7.33333 11.1031 7.136 11.1102C7.12711 11.1102 7.11911 11.1102 7.11111 11.1102C6.92266 11.1102 6.74222 11.0302 6.61511 10.8898L4.61511 8.66755C4.36889 8.39377 4.39111 7.97244 4.66489 7.72533C4.93955 7.48 5.35911 7.50133 5.60711 7.77511L7.072 9.40355L10.3618 5.14666C10.5867 4.85511 11.0062 4.80177 11.2969 5.02666C11.5884 5.25155 11.6418 5.67022 11.4169 5.96177L11.416 5.96266Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_7123_31668">
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
export default CheckCircleSolidIcon;
