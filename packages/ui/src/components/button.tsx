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
      "after:from-white after:to-transparent after:opacity-10 after:pointer-events-none",
    ],
    variants: {
      variant: {
        default: [
          "text-contrast-fg-primary bg-button-inverted",
          "hover:bg-button-inverted-hover active:bg-button-inverted-pressed",
          "disabled:bg-button-inverted",
          "[box-shadow:inset_0_1px_0_0_hsla(0,0%,100%,0.2)]",
        ],
        secondary: [
          "text-contrast-fg-base bg-button-neutral hover:bg-button-neutral-hover active:bg-button-neutral-pressed",
          "disabled:bg-button-neutral [box-shadow:0_0_0_1px_hsla(var(--button-neutral-shadow)/8%)]",
        ],
        danger: [
          "text-contrast-fg-primary bg-button-danger",
          "hover:bg-button-danger-hover active:bg-button-danger-pressed",
          "disabled:bg-button-danger",
          "[box-shadow:inset_0_1px_0_0_hsla(0,0%,100%,0.2)]",
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
        sm: "h-7 text-[0.8125rem] px-2 py-1",
        default: "h-8 text-[0.8125rem] px-2 py-1 ",
        lg: "h-10 text-sm px-3 py-2.5",
        xl: "h-12 text-sm px-4 py-3.5",
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
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
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
