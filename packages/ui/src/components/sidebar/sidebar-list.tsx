import { cn } from "@/lib/tw";
import React, { ElementRef, forwardRef } from "react";
import { sidebar } from "./styles";

interface SidebarListProps extends React.ComponentPropsWithoutRef<"div"> {}

const SidebarList = forwardRef<ElementRef<"div">, SidebarListProps>(
  ({ className, ...props }, ref) => {
    const { list } = sidebar();

    return (
      <div
        role="list"
        aria-label="Sidebar List"
        {...props}
        className={cn(list({ className }))}
        ref={ref}
      />
    );
  }
);

export type { SidebarListProps };

export default SidebarList;
