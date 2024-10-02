import { cn } from "@/lib/tw";
import * as AccordionPrimitives from "@radix-ui/react-accordion";
import React, { ElementRef, forwardRef } from "react";
import { VariantProps } from "tailwind-variants";
import { sidebarList } from "./styles";

interface SidebarListProps
  extends React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof sidebarList> {}

const SidebarList = forwardRef<ElementRef<"div">, SidebarListProps>(
  ({ className, collapse, ...props }, ref) => {
    return (
      <AccordionPrimitives.Root
        type="single"
        collapsible
        role="list"
        aria-label="Sidebar List"
        ref={ref}
        asChild
      >
        <div {...props} className={cn(sidebarList({ className }))} ref={ref} />
      </AccordionPrimitives.Root>
    );
  }
);

export type { SidebarListProps };

export default SidebarList;
