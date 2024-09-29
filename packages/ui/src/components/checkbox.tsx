"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";

import { cn } from "@/lib/tw";
import { CheckMiniIcon } from "@cmdrs/icons";
import { tv, VariantProps } from "tailwind-variants";

const checkbox = tv({
  slots: {
    base: [
      "peer size-4 shrink-0 rounded-sm",
      "border border-border shadow-input",
      "focus-visible:ring-2 focus-visible:border-ring focus-visible:ring-ring/20 focus-visible:outline-none",
      "focus:ring-2 focus:border-ring focus:ring-ring/20 focus:outline-none",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "data-[state=checked]:border-fg-on-interactive/20 data-[state=checked]:bg-fg-interactive",
      "data-[state=checked]:text-fg-inverted",
      "data-[state=indeterminate]:border-fg-on-interactive/50 data-[state=indeterminate]:bg-fg-interactive",
      "data-[state=indeterminate]:text-fg-inverted",
      "[&[data-state=checked]_path]:[box-shadow:0_0_0_5px_hsl(var(--fg-on-interactive)/50%)]",
    ],
    indicator: [
      "flex relative items-center justify-center text-current",
      "[&[data-state=indeterminate]_svg]:invisible",
      "[&[data-state=indeterminate]]:after:absolute",
      "[&[data-state=indeterminate]]:after:w-[65%] [&[data-state=indeterminate]]:after:h-[1.5px]",
      "[&[data-state=indeterminate]]:after:bg-[currentColor]",
      "[&[data-state=indeterminate]]:after:rounded-md",
    ],
  },
  variants: {
    variant: {
      default: "bg-bg-bg-input hover:bg-bg-input-hover",
      component: "bg-bg-component hover:bg-bg-component-hover",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

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
