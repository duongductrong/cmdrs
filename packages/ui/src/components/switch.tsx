"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";

import { cn } from "@/lib/tw";
import { tv, VariantProps } from "tailwind-variants";

const switchInput = tv(
  {
    slots: {
      base: [
        "peer inline-flex h-[1.125rem] w-8 shrink-0 cursor-pointer items-center",
        "rounded-full border-2 border-transparent shadow-sm transition-colors border border-border",
        "focus-visible:outline-none focus-visible:border-ring",
        "focus-visible:ring-2 focus-visible:ring-ring/20",
        "focus:ring-2 focus:border-ring focus:ring-ring/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-fg-interactive",
        "data-[state=checked]:border-fg-on-interactive/20",
        "data-[state=unchecked]:bg-switch-off",
        "data-[state=unchecked]:hover:bg-switch-off-hover",
      ],
      thumb: [
        "pointer-events-none block size-3.5 rounded-full bg-bg-base",
        "shadow-lg ring-0 transition-transform",
        "data-[state=checked]:translate-x-[0.9375rem]",
        "data-[state=unchecked]:translate-x-px",
      ],
    },
    variants: {},
    defaultVariants: {},
  },
  { twMerge: false, responsiveVariants: true }
);

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof switchInput> {}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, ...props }, ref) => {
  const { base, thumb } = switchInput();
  return (
    <SwitchPrimitives.Root
      className={cn(base({ className }))}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb className={cn(thumb())} />
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export type { SwitchProps };

export { switchInput };

export default Switch;
