"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";

import { cn } from "@/lib/tw";
import { CheckMiniIcon } from "@pmdrs/icons";
import { tv, VariantProps } from "tailwind-variants";

const checkbox = tv(
  {
    slots: {
      base: [
        "relative",
        "peer h-4 w-4 shrink-0 rounded-sm",
        "border border-muted-foreground hover:bg-input focus-visible:outline-none focus-visible:ring-1",
        "focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      ],
      indicator: [
        "flex items-center justify-center",
        "[&[data-state=indeterminate]_svg]:invisible",
        "[&[data-state=indeterminate]]:after:absolute",
        "[&[data-state=indeterminate]]:after:w-[65%] [&[data-state=indeterminate]]:after:h-[1.5px]",
        "[&[data-state=indeterminate]]:after:bg-[currentColor]",
        "[&[data-state=indeterminate]]:after:rounded-md",
      ],
    },
    variants: {
      variant: {
        default: {
          base: [
            "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
            "data-[state=checked]:border-primary",
            "[&[data-state=indeterminate]]:bg-primary",
            "[&[data-state=indeterminate]]:border-primary",
          ],
          indicator: "text-primary-foreground"
        },
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
  { twMerge: false, responsiveVariants: true }
);

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkbox> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, variant, ...props }, ref) => {
  const { base, indicator } = checkbox({ variant, className });
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(base({ className }))}
      {...props}
    >
      <CheckboxPrimitive.Indicator className={cn(indicator())}>
        <CheckMiniIcon className="size-3" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export type { CheckboxProps };

export { checkbox };

export default Checkbox;
