import { cn } from "@/lib/tw";
import React, { ElementRef, forwardRef } from "react";
import { useAppShellContext } from "./context";
import { sidebar, SidebarVariants } from "./styles";

interface SidebarProps
  extends React.ComponentPropsWithoutRef<"aside">,
    SidebarVariants {
  defaultSelected?: string[];
}

const Sidebar = forwardRef<ElementRef<"aside">, SidebarProps>(
  ({ children, className, defaultSelected, ...props }, ref) => {
    const { collapse } = useAppShellContext();
    const { base } = sidebar({ collapse });

    return (
      <aside
        {...props}
        aria-label="Sidebar"
        aria-controls="sidebar"
        data-collapse={collapse}
        className={cn(base({ className }))}
        ref={ref}
      >
        {children}
      </aside>
    );
  }
);

export type { SidebarProps };

export default Sidebar;
