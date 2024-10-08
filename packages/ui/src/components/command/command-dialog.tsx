"use client";

import { type DialogProps } from "@radix-ui/react-dialog";

import { Dialog, DialogContent } from "@/components/dialog";
import { cn } from "@/lib/tw";
import Command from "./command";

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">
        <Command
          className={cn(
            // "[&_[cmdk-group-heading]]:text-muted-foreground",
            // "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium",
            // "[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2",
            // "[&_[cmdk-input-wrapper]_svg]:h-5",
            // "[&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12",
            // "[&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3",
            // "[&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
          )}
        >
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export type { CommandDialogProps };

export default CommandDialog;
