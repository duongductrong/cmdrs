import * as React from "react";
const ArrowUTurnLeftIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => (
  <svg
    width={15}
    height={16}
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    ref={ref}
  >
    <path
      d="M1.5 5.55554H10.1667C12.0076 5.55554 13.5 7.04799 13.5 8.88888C13.5 10.7298 12.0076 12.2222 10.1667 12.2222H6.83333"
      stroke="#52525B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.61111 8.66668L1.5 5.55557L4.61111 2.44446"
      stroke="#52525B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));
ArrowUTurnLeftIcon.displayName = "ArrowUTurnLeftIcon";
export default ArrowUTurnLeftIcon;
