import { cn } from "@/lib/tw";
import React from "react";
import { tv } from "tailwind-variants";

export const buttonGroup = tv(
  {
    base: [
      "flex",
      "[&>*]:rounded-none",
      "[&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md",
      "shadow rounded-md",
    ],
    defaultVariants: {},
  },
  { twMerge: false, responsiveVariants: true }
);

export interface ButtonGroupProps
  extends React.ComponentPropsWithoutRef<"div"> {}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div {...props} className={cn(buttonGroup({ className }))} ref={ref}>
        {children}
      </div>
    );
  }
);

ButtonGroup.displayName = "ButtonGroup";

export default ButtonGroup;
