import * as React from "react";
const MagnifyingGlassIcon = React.forwardRef<
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
    <path
      d="M13.5556 13.5556L10.0311 10.0311"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.8889 11.3333C9.3435 11.3333 11.3333 9.3435 11.3333 6.8889C11.3333 4.4343 9.3435 2.44446 6.8889 2.44446C4.4343 2.44446 2.44446 4.4343 2.44446 6.8889C2.44446 9.3435 4.4343 11.3333 6.8889 11.3333Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

MagnifyingGlassIcon.displayName = "MagnifyingGlassIcon";

export default MagnifyingGlassIcon;
