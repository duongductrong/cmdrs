"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import * as React from "react";

import { cn } from "@/lib/tw";
import ChevronsUpDownIcon from "../icons/chevrons-up-down-icon";
import ChevronUpIcon from "../icons/chevron-up-icon";
interface SelectScrollUpButtonProps
  extends SelectPrimitive.SelectScrollUpButtonProps {}

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUpIcon className="w-4 h-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

export type { SelectScrollUpButtonProps };
export default SelectScrollUpButton;
