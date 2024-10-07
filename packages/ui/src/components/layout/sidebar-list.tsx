import { cn } from "@/lib/tw";
import * as AccordionPrimitives from "@radix-ui/react-accordion";
import React, { ElementRef, forwardRef } from "react";
import { VariantProps } from "tailwind-variants";
import { sidebarList } from "./styles";

type SidebarListProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitives.Root
> &
  VariantProps<typeof sidebarList>;

const SidebarList = forwardRef<ElementRef<"div">, SidebarListProps>(
  ({ className, collapse, type = "multiple", children, ...props }, ref) => {
    return (
      <AccordionPrimitives.Root
        {...(props as any)}
        type={type}
        collapsible
        role="list"
        aria-label="Sidebar List"
        ref={ref as any}
        asChild
      >
        <div className={cn(sidebarList({ className }))} ref={ref}>
          {children}
        </div>
      </AccordionPrimitives.Root>
    );
  }
);

export type { SidebarListProps };

export default SidebarList;
