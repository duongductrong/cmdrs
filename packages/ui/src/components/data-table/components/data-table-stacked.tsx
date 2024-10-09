import { cn } from "@/lib/tw";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export interface DataTableStackedProps extends ComponentPropsWithoutRef<"div"> {
  fullWidth?: boolean;
}

 const DataTableStacked = forwardRef<
  ElementRef<"div">,
  DataTableStackedProps
>(({ className, fullWidth, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cn(
      "flex items-center gap-2",
      fullWidth ? "w-full" : null,
      className
    )}
  />
));

export default DataTableStacked;