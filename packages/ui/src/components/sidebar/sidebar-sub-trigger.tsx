import { cn } from "@/lib/tw";
import { composeEventHandlers } from "@/primitives/event";
import { Slot } from "@radix-ui/react-slot";
import React, { ElementRef, forwardRef } from "react";
import { useSidebarSubContext } from "./sub-context";

interface SidebarSubTriggerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  asChild?: boolean;
}

const SidebarSubTrigger = forwardRef<
  ElementRef<"button">,
  SidebarSubTriggerProps
>(({ className, children, asChild, onClick, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const { setExpanded } = useSidebarSubContext();

  return (
    <Comp
      {...props}
      className={cn(className)}
      ref={ref}
      onClick={composeEventHandlers(onClick, () => {
        setExpanded((prevExpanded) => !prevExpanded);
      })}
    >
      {children}
    </Comp>
  );
});

export type { SidebarSubTriggerProps };

export default SidebarSubTrigger;
