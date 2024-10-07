import { cn } from "@/lib/tw";
import React, { ElementRef, forwardRef } from "react";

interface PageBodyProps extends React.ComponentPropsWithoutRef<"main"> {}

const PageBody = forwardRef<ElementRef<"main">, PageBodyProps>(
  ({ className, ...props }, ref) => {
    return <main {...props} ref={ref} className={cn("p-3", className)} />;
  }
);

export type { PageBodyProps };

export default PageBody;
