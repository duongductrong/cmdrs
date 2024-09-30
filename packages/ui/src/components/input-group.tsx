import { cn } from "@/lib/tw";
import React, { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const inputGroup = tv(
  {
    slots: {
      base: [
        "group/input data-[state=focus]:ring-2 data-[state=focus]:border-ring data-[state=focus]:ring-ring/20",
        "flex border border-border rounded-md shadow-input overflow-hidden",

        "[&>*:last-child]:border-none",

        "[&>input]:rounded-none [&>input]:border-[0] [&>input]:shadow-none",
        "[&>input:focus-visible]:ring-0 [&>input:focus-visible]:border-[0]",

        "[&>input]:border-r [&>input]:border-border/80",
        "[&>input:focus-visible]:border-r [&>input:focus-visible]:border-border/80",
        "[&>input:focus-visible:last-child]:border-none",
      ],
      iconPrefix: [
        "text-fg-muted font-normal shrink-0 px-1.5",
        "border-r border-r-border/80",
        "flex items-center justify-center",
        "text-2xs",
      ],
      iconSuffix: [
        "text-fg-muted font-normal shrink-0 px-1.5",
        "border-l border-l-border/80",
        "flex items-center justify-center",
        "text-2xs",
      ],
    },
    variants: {
      variant: {
        default: {
          iconPrefix: "bg-bg-input group-hover/input:bg-bg-input-hover",
          iconSuffix: "bg-bg-input group-hover/input:bg-bg-input-hover",
        },
        component: {
          iconPrefix:
            "bg-bg-input-component group-hover/input:bg-bg-input-component-hover",
          iconSuffix:
            "bg-bg-input-component group-hover/input:bg-bg-input-component-hover",
        },
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
  { twMerge: false, responsiveVariants: true }
);

// export interface InputGroupContextState {
//   type: React.ComponentPropsWithoutRef<"input">["type"];
//   setType: React.Dispatch<
//     React.SetStateAction<React.ComponentPropsWithoutRef<"input">["type"]>
//   >;
// }

// const InputGroupContext = React.createContext<InputGroupContextState>(
//   {} as InputGroupContextState
// );

interface InputGroupProps
  extends React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof inputGroup> {
  prefixSlot?: ReactNode;
  suffixSlot?: ReactNode;
}

const InputGroup = React.forwardRef<React.ElementRef<"div">, InputGroupProps>(
  ({ children, className, prefixSlot, suffixSlot, variant, ...props }, ref) => {
    const { base, iconSuffix, iconPrefix } = inputGroup({ variant });

    return (
      <div
        {...props}
        onFocus={(event) =>
          event.currentTarget.setAttribute("data-state", "focus")
        }
        onBlur={(event) =>
          event.currentTarget.setAttribute("data-state", "idle")
        }
        className={cn(base({ className }))}
        ref={ref}
      >
        {prefixSlot ? (
          <div className={cn(iconPrefix())}>{prefixSlot}</div>
        ) : null}
        {children}
        {suffixSlot ? (
          <div className={cn(iconSuffix())}>{suffixSlot}</div>
        ) : null}
      </div>
    );
  }
);

InputGroup.displayName = "InputGroup";

export type { InputGroupProps };

export { inputGroup };

export default InputGroup;
