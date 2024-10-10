import * as React from "react";
// import { ChevronRightIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/tw";
import { TriangleRightMiniIcon } from "@pmdrs/icons";

interface BreadcrumbSeparatorProps
  extends React.ComponentPropsWithoutRef<"li"> {}

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-4", className)}
    {...props}
  >
    {children ?? <TriangleRightMiniIcon className="text-muted-foreground" />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export type { BreadcrumbSeparatorProps };

export default BreadcrumbSeparator;
