import * as React from "react";

const CircleHalfSolidIcon = React.forwardRef<
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
    <g clipPath="url(#clip0_7123_31664)">
      <circle
        cx={7.99998}
        cy={8.00011}
        r={6.44344}
        stroke="currentColor"
        strokeWidth={1.33312}
      />
      <path
        d="M7.99997 12.444C10.4542 12.444 12.4437 10.4544 12.4437 8.00021C12.4437 5.54599 10.4542 3.55646 7.99997 3.55646V12.444Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_7123_31664">
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
export default CircleHalfSolidIcon;
