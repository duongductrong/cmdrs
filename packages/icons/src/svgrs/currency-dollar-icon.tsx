import * as React from "react";
const ReceiptPercentIcon = React.forwardRef<
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
    <g clipPath="url(#clip0_11443_7019)">
      <path
        d="M7.99999 14.4446C11.5592 14.4446 14.4444 11.5593 14.4444 8.00011C14.4444 4.44094 11.5592 1.55566 7.99999 1.55566C4.44082 1.55566 1.55554 4.44094 1.55554 8.00011C1.55554 11.5593 4.44082 14.4446 7.99999 14.4446Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.61512 6.17875C9.2649 5.34942 8.56356 5.16187 8.03378 5.16187C7.54134 5.16187 6.24712 5.42409 6.36712 6.66587C6.45067 7.53787 7.2729 7.86231 7.99112 7.99031C8.70934 8.11831 9.75201 8.39209 9.77778 9.44364C9.79912 10.3325 9.00001 10.9396 8.03378 10.9396C7.11112 10.9396 6.46934 10.5805 6.22223 9.76898"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 4.22217V5.16172"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10.9395V11.7777"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_11443_7019">
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
ReceiptPercentIcon.displayName = "ReceiptPercentIcon";
export default ReceiptPercentIcon;
