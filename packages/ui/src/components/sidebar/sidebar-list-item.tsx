import { cn } from "@/lib/tw";
import React, { ElementRef, forwardRef } from "react";
import { sidebar } from "./styles";

interface SidebarListItemProps extends React.ComponentPropsWithoutRef<"div"> {
  icon?: React.ReactNode;
}

const SidebarListItem = forwardRef<ElementRef<"div">, SidebarListItemProps>(
  ({ className, children, icon, ...props }, ref) => {
    const { listItem } = sidebar();

    return (
      <div
        role="listitem"
        aria-label="Sidebar List Item"
        aria-selected={false}
        {...props}
        ref={ref}
        className={cn(listItem({ className }))}
      >
        {icon ? <span role="presentation">{icon}</span> : null}
        {children}
      </div>
    );
  }
);

export type { SidebarListItemProps };

export default SidebarListItem;
