import * as React from "react";
// import { ChevronRightIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/tw";

interface BreadcrumbEllipsisProps extends React.ComponentProps<"span"> {}

const BreadcrumbEllipsis = ({
  className,
  ...props
}: BreadcrumbEllipsisProps) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    {/* <DotsHorizontalIcon className="h-4 w-4" /> */}
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export type { BreadcrumbEllipsisProps };

export default BreadcrumbEllipsis;
