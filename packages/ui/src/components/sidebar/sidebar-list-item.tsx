import { cn } from "@/lib/tw";
import React, { ElementRef, forwardRef } from "react";
import { useSidebarContext } from "./context";
import { sidebarListItem } from "./styles";
import { VariantProps } from "tailwind-variants";

interface SidebarListItemProps
  extends React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof sidebarListItem> {
  icon?: React.ReactNode;
  value?: string;
}

const SidebarListItem = forwardRef<ElementRef<"div">, SidebarListItemProps>(
  ({ className, children, icon, value, hovered, ...props }, ref) => {
    const { selectedKeys } = useSidebarContext();

    return (
      <div
        role="listitem"
        aria-label="Sidebar List Item"
        {...props}
        aria-selected={selectedKeys?.includes(value ?? "")}
        ref={ref}
        className={cn(sidebarListItem({ hovered, className }))}
      >
        {icon ? <span role="presentation">{icon}</span> : null}
        {children}
      </div>
    );
  }
);

export type { SidebarListItemProps };

export default SidebarListItem;
