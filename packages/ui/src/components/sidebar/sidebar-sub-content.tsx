import { cn } from "@/lib/tw";
import { Slot } from "@radix-ui/react-slot";
import React, { ElementRef, forwardRef } from "react";
import { sidebar } from "./styles";
import { useSidebarSubContext } from "./sub-context";

interface SidebarSubContentProps extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

const SidebarSubContent = forwardRef<ElementRef<"div">, SidebarSubContentProps>(
  ({ className, children, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    const { subBase } = sidebar();

    const { state } = useSidebarSubContext();

    if (state === "closed") return null;

    return (
      <Comp {...props} className={cn(subBase({ className }))} ref={ref}>
        {children}
      </Comp>
    );
  }
);

export type { SidebarSubContentProps };

export default SidebarSubContent;
