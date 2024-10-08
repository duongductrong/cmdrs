import { cn } from "@/lib/tw";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";

interface DialogDescriptionProps
  extends DialogPrimitive.DialogDescriptionProps {}

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  DialogDescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export type { DialogDescriptionProps };

export default DialogDescription;
