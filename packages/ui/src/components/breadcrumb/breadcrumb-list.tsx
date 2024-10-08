import * as React from "react";
// import { ChevronRightIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/tw";

interface BreadcrumbListProps extends React.ComponentPropsWithoutRef<"ol"> {}

const BreadcrumbList = React.forwardRef<HTMLOListElement, BreadcrumbListProps>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2",
        className
      )}
      {...props}
    />
  )
);
BreadcrumbList.displayName = "BreadcrumbList";

export type { BreadcrumbListProps };

export default BreadcrumbList;
