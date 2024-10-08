import * as React from "react";

import { cn } from "@/lib/tw";

interface BreadcrumbItemProps extends React.ComponentPropsWithoutRef<"li"> {}

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
);
BreadcrumbItem.displayName = "BreadcrumbItem";

export type { BreadcrumbItemProps };

export default BreadcrumbItem;
