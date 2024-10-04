import { cn } from "@/lib/tw";
import { ArrowUTurnLeftIcon } from "@cmdrs/icons";
import { Slot } from "@radix-ui/react-slot";
import React, { ElementRef, forwardRef } from "react";
import Separator from "../separator";
import SidebarBrand from "./sidebar-brand";
import { sidebar } from "./styles";
import { useSidebarSubContext } from "./sub-context";

interface SidebarSubContentProps extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

const SidebarSubContent = forwardRef<ElementRef<"div">, SidebarSubContentProps>(
  ({ className, children, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    const { subBase } = sidebar();

    const { expanded, setExpanded } = useSidebarSubContext();

    if (!expanded) return null;

    return (
      <Comp {...props} className={cn(subBase({ className }))} ref={ref}>
        <SidebarBrand
          className="text-2xs font-medium leading-5 text-fg-base"
          role="button"
          aria-label="Back"
          onClick={() => setExpanded(false)}
        >
          <ArrowUTurnLeftIcon className="size-4 mr-2 text-fg-subtle" /> Settings
        </SidebarBrand>
        <div className="px-4">
          <Separator variant="dashed" />
        </div>
        {children}
      </Comp>
    );
  }
);

export type { SidebarSubContentProps };

export default SidebarSubContent;
