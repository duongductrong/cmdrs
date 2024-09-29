import * as React from "react";
const EyeIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <g clipPath="url(#clip0_11359_7693)">
        <path
          d="M1.85591 9.00618C1.45591 8.39906 1.45591 7.59995 1.85591 6.99284C2.7608 5.62129 4.75546 3.3324 7.99991 3.3324C11.2444 3.3324 13.2399 5.6204 14.1439 6.99284C14.5439 7.59995 14.5439 8.39906 14.1439 9.00618C13.239 10.3777 11.2444 12.6666 7.99991 12.6666C4.75546 12.6666 2.75991 10.3786 1.85591 9.00618Z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.00011 10.4444C9.35014 10.4444 10.4446 9.35002 10.4446 7.99999C10.4446 6.64996 9.35014 5.55554 8.00011 5.55554C6.65008 5.55554 5.55566 6.64996 5.55566 7.99999C5.55566 9.35002 6.65008 10.4444 8.00011 10.4444Z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_11359_7693">
          <rect
            width={15}
            height={15}
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
);
EyeIcon.displayName = "EyeIcon";
export default EyeIcon;
