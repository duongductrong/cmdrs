import React, { forwardRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

const separator = tv(
  {
    base: ["w-full h-px text-border"],
    variants: {
      variant: {
        solid: "",
        dashed: "",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  },
  { twMerge: false, responsiveVariants: true }
);

interface SeparatorProps
  extends React.ComponentPropsWithoutRef<"svg">,
    VariantProps<typeof separator> {}

const Separator = forwardRef<React.ElementRef<"svg">, SeparatorProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <svg
        role="separator"
        aria-label="Separator"
        className={separator({ variant, className })}
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props}
      >
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray={variant === "dashed" ? "1.5" : undefined}
          strokeLinejoin="round"
          strokeDashoffset={3}
        />
      </svg>
    );
  }
);
Separator.displayName = "Separator";

export type { SeparatorProps };

export { separator };

export default Separator;
