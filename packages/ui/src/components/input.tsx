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
        "flex w-full font-normal rounded-md border border-input bg-transparent px-3 py-1 text-sm",
        "shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm",
        "file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none",
        "focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      ],
      password: [
        "group/input data-[state=focus]:ring-2 data-[state=focus]:border-ring data-[state=focus]:ring-ring/20",
        "flex border border-input rounded-md shadow-sm overflow-hidden",
        "[&>input]:rounded-none [&>input]:border-none [&>input]:shadow-none",
      ],
      icon: [
        "text-muted-foreground shrink-0",
        "border-l border-l-border/80",
        "flex items-center justify-center",
      ],
    },
    variants: {
      variant: {
        default: {
          base: "bg-background",
          password: "",
          icon: "bg-background",
        },
      },
      size: {
        default: {
          base: ["h-9 px-3 py-1 text-sm placeholder:text-sm"],
          password: ["[&>span[role=button]]:size-9"],
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
      <div
        {...props}
        onFocus={(event) =>
          event.currentTarget.setAttribute("data-state", "focus")
        }
        onBlur={(event) =>
          event.currentTarget.setAttribute("data-state", "idle")
        }
        className={cn(password({ className }))}
        ref={ref}
      >
        {children}

        <span
          role="button"
          aria-label="Show password"
          className={cn(icon())}
          onClick={() => setType(type === "password" ? "text" : "password")}
        >
          {type === "password" ? (
            <EyeSlashIcon className="size-4" />
          ) : (
            <EyeIcon className="size-4" />
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
