import { cn } from "@/lib/tw";
import * as React from "react";

interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const DialogFooter = React.forwardRef<
  React.ElementRef<"div">,
  DialogFooterProps
>(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
  />
));
DialogFooter.displayName = "DialogFooter";

export type { DialogFooterProps };

export default DialogFooter;
