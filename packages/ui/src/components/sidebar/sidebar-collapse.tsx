import { cn } from "@/lib/tw";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import React, { ElementRef, forwardRef } from "react";

interface SidebarCollapseProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {}

const SidebarCollapse = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  SidebarCollapseProps
>(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Item {...props} ref={ref} className={cn(className)}>
      {children}
    </AccordionPrimitive.Item>
  );
});

export type { SidebarCollapseProps };

export default SidebarCollapse;
