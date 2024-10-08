import * as React from "react";
// import { ChevronRightIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/tw";

interface BreadcrumbPageProps extends React.ComponentPropsWithoutRef<"span"> {}

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  )
);
BreadcrumbPage.displayName = "BreadcrumbPage";

export type { BreadcrumbPageProps };

export default BreadcrumbPage;
