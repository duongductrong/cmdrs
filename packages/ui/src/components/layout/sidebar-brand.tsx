import { cn } from "@/lib/tw";
import React, { ElementRef, forwardRef } from "react";
import { sidebar } from "./styles";

interface SidebarBrandProps extends React.ComponentPropsWithoutRef<"div"> {}

const SidebarBrand = forwardRef<ElementRef<"div">, SidebarBrandProps>(
  ({ className, children, ...props }, ref) => {
    const { brand } = sidebar();
    return (
      <div {...props} className={cn(brand({ className }))} ref={ref}>
        {children}
      </div>
    );
  }
);

export type { SidebarBrandProps };

export default SidebarBrand;
