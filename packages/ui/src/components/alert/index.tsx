import * as React from "react";

import { cn } from "@/lib/tw";
import { tv, VariantProps } from "tailwind-variants";
import { AlertContext, AlertContextState } from "./context";

const alert = tv(
  {
    base: [
      "relative w-full h-full rounded-lg p-3 text-2xs border border-border",
      "[&>svg]:absolute [&>svg]:left-4 [&>svg~*:not([data-type=close-button])]:pl-7 [&>svg~*:not([data-type=close-button])]:pr-7",
      "[&>svg]:top-3.5 [&>svg]:text-foreground",
      "transition-all duration-300",
    ],
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
      type: {
        default: "bg-bg-base",
        component: "bg-card",
      },

      closed: {
        true: "invisible opacity-0 h-0",
      },
    },
    defaultVariants: {
      variant: "default",
      type: "default",
    },
  },
  {
    twMerge: false,
    responsiveVariants: true,
  }
);

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alert> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, type, ...props }, ref) => {
    const [open, setOpen] = React.useState(true);

    const values = React.useMemo<AlertContextState>(
      () => ({ open, setOpen }),
      [open, setOpen]
    );

    return (
      <AlertContext.Provider value={values}>
        <div
          {...props}
          ref={ref}
          role="alert"
          className={cn(alert({ variant, type, className, closed: !open }))}
        />
      </AlertContext.Provider>
    );
  }
);
Alert.displayName = "Alert";

export type { AlertProps };

  export { alert };

export default Alert;
