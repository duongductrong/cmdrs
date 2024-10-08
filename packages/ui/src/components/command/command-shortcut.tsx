"use client";

import * as React from "react";

import { cn } from "@/lib/tw";

interface CommandShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {}

const CommandShortcut = ({ className, ...props }: CommandShortcutProps) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

export type { CommandShortcutProps };

export default CommandShortcut;
