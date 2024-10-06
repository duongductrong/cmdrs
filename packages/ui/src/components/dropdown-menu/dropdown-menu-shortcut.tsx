"use client";

import * as React from "react";

import { cn } from "@/lib/tw";

interface DropdownMenuShortcutProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

const DropdownMenuShortcut = ({
  className,
  ...props
}: DropdownMenuShortcutProps) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export type { DropdownMenuShortcutProps };

export default DropdownMenuShortcut;
