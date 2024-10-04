import { Slot } from "@radix-ui/react-slot";
import React, { ElementRef, forwardRef } from "react";
import SidebarSubProvider from "./sub-context";

interface SidebarSubProps extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

const SidebarSub = forwardRef<ElementRef<"div">, SidebarSubProps>(
  ({ className, children, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <SidebarSubProvider>
        {/* <Comp {...props} className={cn(className)} ref={ref}> */}
        {children}
        {/* </Comp> */}
      </SidebarSubProvider>
    );
  }
);

export type { SidebarSubProps };

export default SidebarSub;
