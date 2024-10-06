import { cn } from "@/lib/tw";
import React from "react";

interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const AlertTitle = React.forwardRef<HTMLParagraphElement, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn(
        "mb-1 font-medium leading-none tracking-tight text-sm",
        className
      )}
      {...props}
    />
  )
);
AlertTitle.displayName = "AlertTitle";

export type { AlertTitleProps };

export default AlertTitle;
