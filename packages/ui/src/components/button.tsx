import { cn } from "@/lib/tw";
import { forwardRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

export const button = tv(
  {
    base: [
      "relative overflow-hidden",
      "border border-transparent",
      "rounded-md",
      "flex items-center justify-center gap-2.5",
      "font-medium leading-5",
      "transition-colors duration-200",
      "disabled:opacity-70 disabled:cursor-not-allowed",
      "after:absolute after:inset-0 after:top-0 after:left-0 after:bg-gradient-to-b",
      "after:pointer-events-none",
    ],
    variants: {
      variant: {
        default: [
          "bg-button-inverted text-fg-inverted",
          "hover:bg-button-inverted-hover active:bg-button-inverted-pressed",
          "disabled:bg-button-inverted",
          "[box-shadow:inset_0_1px_0_0_hsla(0,0%,100%,0.2),0_1px_2px_hsla(var(--button-inverted)/10%)]",
          "after:from-button-glossed after:from-10% after:to-transparent after:opacity-10",
        ],
        secondary: [
          "text-fg-base",
          "bg-button-neutral hover:bg-button-neutral-hover active:bg-button-neutral-pressed",
          "disabled:bg-button-neutral",
          "[box-shadow:0_0_0_1px_hsla(0,0%,0%,8%),0_1px_2px_hsla(var(--button-neutral)/10%)]",
          "after:from-button-glossed after:from-10% after:to-transparent after:opacity-10",
        ],
        danger: [
          "bg-button-danger text-fg-inverted",
          "hover:bg-button-danger-hover active:bg-button-danger-pressed",
          "disabled:bg-button-danger",
          "[box-shadow:inset_0_1px_0_0_hsla(0,0%,100%,0.2),0_1px_2px_hsla(var(--button-danger)/10%)]",
          "after:from-button-glossed after:from-10% after:to-transparent after:opacity-10",
        ],
        transparent: [
          "text-contrast-fg-base bg-button-transparent hover:bg-button-transparent-hover active:bg-button-transparent-pressed",
          "disabled:bg-button-transparent",
        ],
        transmuted: [
          "text-contrast-fg-base bg-button-transparent hover:bg-button-transparent-hover active:bg-button-transparent-pressed",
          "disabled:bg-button-transparent",
          "text-fg-muted",
        ],
      },
      size: {
        sm: "h-7 text-2xs px-2 py-1",
        default: "h-8 text-2xs px-2 py-1 ",
        lg: "h-10 text-sm px-3 py-2.5",
        xl: "h-12 text-sm px-4 py-3.5",
        icon: "size-8 text-[0.125rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
  { twMerge: false, responsiveVariants: true }
);

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof button> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <button
        {...props}
        className={cn(button({ size, variant, className }))}
        ref={ref}
      />
    );
  }
);

export default Button;
