import * as React from "react";
const SparklesIcon = React.forwardRef<
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
      d="M3.83389 2.9256L3.95247 3.28136L4.30823 3.39994L4.5608 3.48413L4.30912 3.56803L3.95336 3.68661L3.83478 4.04237L3.74984 4.29716L3.66491 4.04237L3.54633 3.68661L3.19057 3.56803L2.93844 3.48398L3.19057 3.39994L3.54633 3.28136L3.66491 2.9256L3.7494 2.67214L3.83389 2.9256Z"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="M12.3082 11.3999L12.5608 11.4841L12.3091 11.568L11.9534 11.6866L11.8348 12.0424L11.7498 12.2972L11.6649 12.0424L11.5463 11.6866L11.1906 11.568L10.9384 11.484L11.1906 11.3999L11.5463 11.2814L11.6649 10.9256L11.7494 10.6721L11.8339 10.9256L11.9525 11.2814L12.3082 11.3999Z"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="M5.08322 7.26178L5.90189 9.332L7.97211 10.1507L5.90189 10.9693L5.08322 13.0396L4.26456 10.9693L2.19434 10.1507L4.26456 9.332L5.08322 7.26178Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.4166 1.92847L11.2353 3.99869L13.3055 4.81736L11.2353 5.63602L10.4166 7.70624L9.59793 5.63602L7.52771 4.81736L9.59793 3.99869L10.4166 1.92847Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));
SparklesIcon.displayName = "SparklesIcon";
export default SparklesIcon;
