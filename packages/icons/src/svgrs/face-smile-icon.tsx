import * as React from "react";
const FaceSmileIcon = React.forwardRef<
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
    <g clipPath="url(#clip0_508_957)">
      <path
        d="M8.0833 13.9444C11.6425 13.9444 14.5277 11.0592 14.5277 7.49999C14.5277 3.94082 11.6425 1.05554 8.0833 1.05554C4.52413 1.05554 1.63885 3.94082 1.63885 7.49999C1.63885 11.0592 4.52413 13.9444 8.0833 13.9444Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4157 9.27777C10.7784 10.4671 9.52419 11.2778 8.0833 11.2778C6.64241 11.2778 5.3873 10.4671 4.75085 9.27777"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.6944 6.61112C6.6944 6.8259 6.52029 7.00001 6.30551 7.00001C6.09074 7.00001 5.91663 6.8259 5.91663 6.61112C5.91663 6.39634 6.09074 6.22223 6.30551 6.22223C6.52029 6.22223 6.6944 6.39634 6.6944 6.61112Z"
        stroke="currentColor"
      />
      <path
        d="M10.25 6.61112C10.25 6.8259 10.0759 7.00001 9.86112 7.00001C9.64634 7.00001 9.47223 6.8259 9.47223 6.61112C9.47223 6.39634 9.64634 6.22223 9.86112 6.22223C10.0759 6.22223 10.25 6.39634 10.25 6.61112Z"
        stroke="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_508_957">
        <rect
          width={15}
          height={15}
          fill="white"
          transform="translate(0.583313)"
        />
      </clipPath>
    </defs>
  </svg>
));
FaceSmileIcon.displayName = "FaceSmileIcon";
export default FaceSmileIcon;
