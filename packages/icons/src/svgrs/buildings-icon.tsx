import * as React from "react";
const BuildingsIcon = React.forwardRef<
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
    <g clipPath="url(#clip0_11443_3909)">
      <path
        d="M6.88892 14.4444V6.88889C6.88892 6.39822 7.28714 6 7.7778 6H12.6667C13.1574 6 13.5556 6.39822 13.5556 6.88889V14.4444"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.44446 14.4444V3.92177C2.44446 3.56444 2.65779 3.24177 2.98668 3.1031L6.98668 1.41155C7.57246 1.16355 8.22224 1.59377 8.22224 2.23021V3.77777"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.55554 14.4443H14.4444"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.11108 9.11119V8.66675"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3333 9.11119V8.66675"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.11108 11.7777V11.3333"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3333 11.7777V11.3333"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_11443_3909">
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
BuildingsIcon.displayName = "BuildingsIcon";
export default BuildingsIcon;
