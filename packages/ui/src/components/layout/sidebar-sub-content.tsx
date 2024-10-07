import { cn } from "@/lib/tw";
import { Slot } from "@radix-ui/react-slot";
import React, { ElementRef, forwardRef, useEffect } from "react";
import { useStateTimeout } from "../use-state-timeout";
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

    const [open, setOpen, optimisticOpen] = useStateTimeout(state === "open");

    useEffect(() => {
      if (state === "open") setOpen(true);
      if (state === "closed") {
        setOpen(false, 100);
      }
    }, [state]);

    if (!open) return null;

    return (
      <Comp
        role="list"
        {...props}
        data-state={optimisticOpen ? "open" : "closed"}
        className={cn(subBase({ className }))}
        ref={ref}
      >
        {children}
      </Comp>
    );
  }
);

export type { SidebarSubContentProps };

export default SidebarSubContent;
