import * as React from "react";

const CircleMiniSolidIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.SVGProps<SVGSVGElement>
>((props, ref) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    ref={ref}
  >
    <g clipPath="url(#clip0_7123_31654)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99997 2.22219C4.80899 2.22219 2.22219 4.80899 2.22219 7.99997C2.22219 11.1909 4.80899 13.7777 7.99997 13.7777C11.1909 13.7777 13.7777 11.1909 13.7777 7.99997C13.7777 4.80899 11.1909 2.22219 7.99997 2.22219ZM0.888855 7.99997C0.888855 4.07261 4.07261 0.888855 7.99997 0.888855C11.9273 0.888855 15.1111 4.07261 15.1111 7.99997C15.1111 11.9273 11.9273 15.1111 7.99997 15.1111C4.07261 15.1111 0.888855 11.9273 0.888855 7.99997Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_7123_31654">
        <rect
          width="15"
          height="15"
          fill="white"
          transform="translate(0.5 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
));
export default CircleMiniSolidIcon;
