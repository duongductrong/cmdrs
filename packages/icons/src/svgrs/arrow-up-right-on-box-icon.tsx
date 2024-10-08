import * as React from "react";
const ArrowUpRightOnBoxIcon = React.forwardRef<
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
    <path
      d="M8.91663 1.94446H13.1388V6.16668"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.1388 1.94446L7.58325 7.50001"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.361 8.83334V11.2778C11.361 12.26 10.5655 13.0556 9.58327 13.0556H3.80549C2.82327 13.0556 2.02771 12.26 2.02771 11.2778V5.50001C2.02771 4.51778 2.82327 3.72223 3.80549 3.72223H6.24993"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));
ArrowUpRightOnBoxIcon.displayName = "ArrowUpRightOnBoxIcon";
export default ArrowUpRightOnBoxIcon;
