import { cn } from "@/lib/tw";
import { XMarkIcon } from "@pmdrs/icons";
import React, { ElementRef, forwardRef } from "react";
import { useAlertContext } from "./context";

interface AlertCloseProps extends React.ComponentPropsWithoutRef<"span"> {}

const AlertClose = forwardRef<ElementRef<"span">, AlertCloseProps>(
  ({ className, ...props }, ref) => {
    const { setOpen } = useAlertContext();
    return (
      <span
        role="button"
        data-type="close-button"
        {...props}
        className={cn(
          "size-5 absolute top-3 right-4 items-center justify-center flex text-muted-foreground shrink-0",
          className
        )}
        ref={ref}
        onClick={() => setOpen(false)}
      >
        <XMarkIcon className="size-4 text-muted-foreground shrink-0" />
      </span>
    );
  }
);

export type { AlertCloseProps };

export default AlertClose;
