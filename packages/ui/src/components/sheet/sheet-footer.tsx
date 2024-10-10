"use client";

import * as React from "react";

import { cn } from "@/lib/tw";

interface SheetFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const SheetFooter = ({
  className,
  ...props
}: SheetFooterProps) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

export type { SheetFooterProps };

export default SheetFooter;
