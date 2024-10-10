import { cn } from "@/lib/tw";
import * as React from "react";
import { tv, VariantProps } from "tailwind-variants";

const badge = tv({
  base: [
    "inline-flex items-center rounded-md border",
    "px-2.5 py-0.5 text-xs font-semibold",
    "transition-colors focus:outline-none",
    "focus:ring-2 focus:ring-ring focus:ring-offset-2",
  ],
  variants: {
    variant: {
      default:
        "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
      secondary:
        "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive:
        "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
      outline: "text-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badge> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div className={cn(badge({ variant }), className)} {...props} ref={ref} />
    );
  }
);

export type { BadgeProps };

export default Badge;
