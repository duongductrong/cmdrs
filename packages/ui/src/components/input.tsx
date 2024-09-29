import * as React from "react";

import { EyeIcon, EyeSlashIcon } from "@cmdrs/icons";

import { cn } from "@/lib/tw";
import { tv, VariantProps } from "tailwind-variants";

export interface InputContextState {
  type: React.ComponentPropsWithoutRef<"input">["type"];
  setType: React.Dispatch<
    React.SetStateAction<React.ComponentPropsWithoutRef<"input">["type"]>
  >;
}

const InputContext = React.createContext<InputContextState>(
  {} as InputContextState
);

const input = tv(
  {
    slots: {
      base: [
        "flex w-full rounded-md border border-border",
        "focus-visible:ring-2 focus-visible:border-ring focus-visible:ring-ring/20",
        "shadow-input transition-colors font-normal",

        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "file:text-fg-base placeholder:text-fg-muted placeholder:font-normal focus-visible:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
      ],
      password: [
        "group/input",
        "flex border border-border rounded-md shadow-input overflow-hidden",
        "[&>input]:rounded-none [&>input]:border-none [&>input]:shadow-none",
      ],
      icon: [
        "text-fg-muted shrink-0",
        "border-l border-l-border/50",
        "flex items-center justify-center",
      ],
    },
    variants: {
      variant: {
        default: {
          base: "bg-input group-hover/input:bg-input-hover hover:bg-input-hover",
          password: "",
          icon: "bg-input group-hover/input:bg-input-hover hover:bg-input-hover",
        },
        component: {
          base: "bg-input-component hover:bg-input-component-hover",
          password: "",
          icon: "bg-input-component group-hover/input:bg-input-component-hover",
        },
      },
      size: {
        sm: {
          base: ["h-7 px-2 py-1.5 text-2xs placeholder:text-2xs"],
          password: ["[&>span[role=button]]:size-7"],
        },
        default: {
          base: ["h-8 px-2 py-1.5 text-2xs placeholder:text-2xs"],
          password: ["[&>span[role=button]]:size-8"],
        },
        lg: {
          base: ["h-10 px-3 py-1.5 text-sm placeholder:text-sm"],
          password: ["[&>span[role=button]]:size-10"],
        },
        xl: {
          base: ["h-12 px-3 py-1.5 text-sm placeholder:text-sm"],
          password: ["[&>span[role=button]]:size-12"],
        },
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
  { twMerge: false, responsiveVariants: true }
);

interface InputProps
  extends Omit<React.ComponentPropsWithoutRef<"input">, "size">,
    VariantProps<typeof input> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type: htmlType, size, variant, ...props }, ref) => {
    const { base } = input({ size, variant, className });

    const [type, setType] = React.useState(htmlType);

    const Box = htmlType === "password" ? PasswordInput : React.Fragment;
    const nestedProps =
      htmlType === "password" ? { className, variant, size } : {};

    const values = React.useMemo<InputContextState>(
      () => ({ type, setType }),
      [type]
    );

    return (
      <InputContext.Provider value={values}>
        <Box {...nestedProps}>
          <input
            type={type}
            className={cn(
              base({
                className: htmlType === "password" ? undefined : className,
              })
            )}
            ref={ref}
            {...props}
          />
        </Box>
      </InputContext.Provider>
    );
  }
);

Input.displayName = "Input";

interface PasswordProps
  extends React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof input> {}

const PasswordInput = React.forwardRef<React.ElementRef<"div">, PasswordProps>(
  ({ children, className, size, variant, ...props }, ref) => {
    const { password, icon } = input({ size, variant, className });

    const { type, setType } = React.useContext(InputContext);

    return (
      <div {...props} className={cn(password({ className }))} ref={ref}>
        {children}

        <span
          role="button"
          aria-label="Show password"
          className={cn(icon())}
          onClick={() => setType(type === "password" ? "text" : "password")}
        >
          {type === "password" ? (
            <EyeIcon className="size-4" />
          ) : (
            <EyeSlashIcon className="size-4" />
          )}
        </span>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export type { InputProps, PasswordProps };

export { input, PasswordInput };

export default Input;
