import * as React from "react";
// import { ChevronRightIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/tw";

interface BreadcrumbLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  asChild?: boolean;
}

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";

    return (
      <Comp
        ref={ref}
        className={cn("transition-colors hover:text-foreground", className)}
        {...props}
      />
    );
  }
);
BreadcrumbLink.displayName = "BreadcrumbLink";

export type { BreadcrumbLinkProps };

export default BreadcrumbLink;
