import { cn } from "@/lib/tw";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import React, { ElementRef, forwardRef } from "react";

interface SidebarCollapseContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {}

const SidebarCollapseContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  SidebarCollapseContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Content {...props} ref={ref} className={cn(className)}>
      {children}
    </AccordionPrimitive.Content>
  );
});

export type { SidebarCollapseContentProps };

export default SidebarCollapseContent;
