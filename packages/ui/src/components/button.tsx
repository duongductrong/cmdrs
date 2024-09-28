import { cn } from "@/lib/tw";
import { forwardRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

export const buttonStyles = tv(
  {
    base: [
      "border border-transparent",
      "rounded-md",
      "flex items-center justify-center gap-2.5",
      "font-medium leading-5",
      "transition-colors duration-200",
      "disabled:opacity-70 disabled:cursor-not-allowed shadow",
    ],
    variants: {
      variant: {
        default: [
          "text-contrast-fg-primary bg-button-inverted",
          "hover:bg-button-inverted-hover focus:bg-button-inverted-pressed",
          "disabled:bg-button-inverted",
        ],
        secondary: [
          "text-contrast-fg-base bg-button-neutral hover:bg-button-neutral-hover focus:bg-button-neutral-pressed",
          "disabled:bg-button-neutral",
        ],
        danger: [
          "text-contrast-fg-primary bg-button-danger hover:bg-button-danger-hover focus:bg-button-danger-pressed",
          "disabled:bg-button-danger",
        ],
        transparent: "",
        transmuted: "",
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
    VariantProps<typeof buttonStyles> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <button
        {...props}
        className={cn(buttonStyles({ size, variant, className }))}
        ref={ref}
      />
    );
  }
);

export default Button;
