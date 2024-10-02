import { cn } from "@/lib/tw";
import React, { ElementRef, forwardRef } from "react";
import SidebarProvider from "./context";
import { sidebar } from "./styles";

interface SidebarProps extends React.ComponentPropsWithoutRef<"aside"> {
  defaultSelected?: string[];
}

const Sidebar = forwardRef<ElementRef<"aside">, SidebarProps>(
  ({ children, className, defaultSelected, ...props }, ref) => {
    const { base } = sidebar();

    return (
      <SidebarProvider selectedKeys={defaultSelected}>
        <aside {...props} className={cn(base({ className }))} ref={ref}>
          {children}
        </aside>
      </SidebarProvider>
    );
  }
);

export type { SidebarProps };

export default Sidebar;
