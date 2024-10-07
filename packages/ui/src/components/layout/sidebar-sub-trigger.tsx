import { cn } from "@/lib/tw";
import { composeEventHandlers } from "@/primitives/event";
import { Slot } from "@radix-ui/react-slot";
import React, { ElementRef, forwardRef } from "react";
import { useSidebarSubContext } from "./sub-context";

interface SidebarSubTriggerProps
  extends Omit<React.ComponentPropsWithoutRef<"button">, "label"> {
  asChild?: boolean;
  label: string;
}

const SidebarSubTrigger = forwardRef<
  ElementRef<"button">,
  SidebarSubTriggerProps
>(({ className, children, asChild, onClick, label, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const { toggleState } = useSidebarSubContext();

  return (
    <Comp
      {...props}
      aria-label={label}
      className={cn(className)}
      ref={ref}
      onClick={composeEventHandlers(onClick, () => toggleState({ label }))}
    >
      {children}
    </Comp>
  );
});

export type { SidebarSubTriggerProps };

export default SidebarSubTrigger;
