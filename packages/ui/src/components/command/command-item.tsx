"use client";

import { Command as CommandPrimitive } from "cmdk";
import * as React from "react";

import { cn } from "@/lib/tw";

interface CommandItemProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> {}

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  CommandItemProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none",
      "items-center rounded-sm px-2 py-1.5 text-sm outline-none",
      "data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent",
      "data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

export type { CommandItemProps };

export default CommandItem;
