"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import * as React from "react";

import { cn } from "@/lib/tw";
import { tv, VariantProps } from "tailwind-variants";

const label = tv(
  {
    base: [
      "text-2xs font-medium leading-none",
      "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      "text-fg-base",
    ],
    variants: {
      variant: {
        default: "text-fg-base",
        subtle: "text-fg-subtle",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
  { twMerge: false, responsiveVariants: true }
);

interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof label> {}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, variant, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(label({ variant, className }))}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export type { LabelProps };

export { label };

export default Label;
