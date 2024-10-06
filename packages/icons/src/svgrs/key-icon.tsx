import * as React from "react";
const KeyIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      width={16}
      height={15}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <g clipPath="url(#clip0_510_949)">
        <path
          d="M2.26199 13.4973L2.41933 10.9667L7.65577 5.73022C7.5811 5.44222 7.52777 5.14533 7.52777 4.83333C7.52777 2.86977 9.11977 1.27777 11.0833 1.27777C13.0469 1.27777 14.6389 2.86977 14.6389 4.83333C14.6389 6.79688 13.0469 8.38888 11.0833 8.38888C10.7615 8.38888 10.4549 8.33199 10.158 8.25199L8.41666 9.94444H6.41666V11.9444L4.95444 13.5027L2.26199 13.4973Z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.5278 4.77778C11.7426 4.77778 11.9167 4.60367 11.9167 4.38889C11.9167 4.17411 11.7426 4 11.5278 4C11.313 4 11.1389 4.17411 11.1389 4.38889C11.1389 4.60367 11.313 4.77778 11.5278 4.77778Z"
          stroke="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_510_949">
          <rect
            width={15}
            height={15}
            fill="white"
            transform="translate(0.916656)"
          />
        </clipPath>
      </defs>
    </svg>
  )
);
KeyIcon.displayName = "KeyIcon";
export default KeyIcon;
