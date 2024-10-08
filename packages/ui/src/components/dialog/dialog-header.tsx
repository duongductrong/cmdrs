import { cn } from "@/lib/tw";
import * as React from "react";

interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const DialogHeader = React.forwardRef<
  React.ElementRef<"div">,
  DialogHeaderProps
>(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
  />
));
DialogHeader.displayName = "DialogHeader";

export type { DialogHeaderProps };

export default DialogHeader;
