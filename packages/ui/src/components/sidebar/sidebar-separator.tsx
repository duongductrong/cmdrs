import { cn } from "@/lib/tw";
import { ElementRef, forwardRef } from "react";
import Separator, { SeparatorProps } from "../separator";

interface SidebarSeparatorProps extends SeparatorProps {}

const SidebarSeparator = forwardRef<
  ElementRef<typeof Separator>,
  SidebarSeparatorProps
>(({ className, ...props }, ref) => {
  return (
    <Separator
      variant="dashed"
      ref={ref}
      {...props}
      className={cn("my-3", className)}
    />
  );
});

export type { SidebarSeparatorProps };

export default SidebarSeparator;
