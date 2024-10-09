import { cn } from "@/lib/tw";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export interface DataTableToolbarProps
  extends ComponentPropsWithoutRef<"div"> {}

 const DataTableToolbar = forwardRef<
  ElementRef<"div">,
  DataTableToolbarProps
>(({ children, className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cn(
      "mb-4 flex w-full flex-wrap items-center justify-between gap-2",
      className
    )}
  >
    {children}
  </div>
));

export default DataTableToolbar;
