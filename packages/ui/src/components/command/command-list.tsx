"use client";

import { cn } from "@/lib/tw";
import { Command as CommandPrimitive } from "cmdk";
import * as React from "react";

interface CommandListProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> {}

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  CommandListProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

export type { CommandListProps };

export default CommandList;
