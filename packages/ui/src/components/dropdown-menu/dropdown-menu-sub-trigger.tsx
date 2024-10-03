import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as React from "react";

import { cn } from "@/lib/tw";
import { CircleHalfSolidIcon, TriangleRightMiniIcon } from "@cmdrs/icons";

interface DropdownMenuSubTriggerProps
  extends DropdownMenuPrimitive.DropdownMenuSubTriggerProps {
  inset?: boolean;
}

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  DropdownMenuSubTriggerProps
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-md px-2 py-1.5",
      "text-2xs outline-none focus:bg-card-hover data-[state=open]:bg-card-hover",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <TriangleRightMiniIcon className="ml-auto h-4 w-4 text-fg-muted" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

export type { DropdownMenuSubTriggerProps };

export default DropdownMenuSubTrigger;
