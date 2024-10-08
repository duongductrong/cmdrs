import { cn } from "@/lib/tw";
import React, { ElementRef, forwardRef } from "react";

interface PageHeaderProps extends React.ComponentPropsWithoutRef<"header"> {}

const PageHeader = forwardRef<ElementRef<"header">, PageHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <header
        {...props}
        ref={ref}
        className={cn(
          "sticky top-0 z-50 px-4 h-12 flex items-center border-b border-border bg-background",
          className
        )}
      />
    );
  }
);

export type { PageHeaderProps };

export default PageHeader;
