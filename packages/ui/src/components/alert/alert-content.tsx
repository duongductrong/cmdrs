import { cn } from "@/lib/tw";
import React, { ElementRef, forwardRef } from "react";

interface AlertContentProps extends React.ComponentPropsWithoutRef<"div"> {}

const AlertContent = forwardRef<ElementRef<"div">, AlertContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div {...props} className={cn("flex flex-col gap-1", className)} ref={ref}>
        {children}
      </div>
    );
  }
);

export type { AlertContentProps };

export default AlertContent;
