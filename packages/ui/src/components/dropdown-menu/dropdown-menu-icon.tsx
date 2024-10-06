import { cn } from "@/lib/tw";
import React, { ElementRef, forwardRef } from "react";

interface DropdownMenuIconProps
  extends React.ComponentPropsWithoutRef<"span"> {}

const DropdownMenuIcon = forwardRef<ElementRef<"span">, DropdownMenuIconProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <span
        {...props}
        aria-hidden="true"
        aria-label="Icon"
        ref={ref}
        className={cn("inline-block mr-2 text-muted-foreground", className)}
      >
        {children}
      </span>
    );
  }
);

DropdownMenuIcon.displayName = "DropdownMenuIcon";

export type { DropdownMenuIconProps };

export default DropdownMenuIcon;
