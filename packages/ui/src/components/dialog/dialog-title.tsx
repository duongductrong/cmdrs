import { cn } from "@/lib/tw";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";

interface DialogTitleProps extends DialogPrimitive.DialogTitleProps {}

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  DialogTitleProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

export type { DialogTitleProps };

export default DialogTitle;
