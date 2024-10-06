import { cn } from "@/lib/tw";
import { ArrowUTurnLeftIcon } from "@cmdrs/icons";
import React, { ElementRef, forwardRef } from "react";
import SidebarBrand from "./sidebar-brand";
import { useSidebarSubContext } from "./sub-context";

interface SidebarSubBackProps
  extends React.ComponentPropsWithoutRef<typeof SidebarBrand> {}

const SidebarSubBack = forwardRef<
  ElementRef<typeof SidebarBrand>,
  SidebarSubBackProps
>(({ className, ...props }, ref) => {
  const { label, closeState } = useSidebarSubContext();

  return (
    <SidebarBrand ref={ref}>
      <SidebarBrand
        role="button"
        aria-label="Back"
        {...props}
        className={cn("text-sm font-medium leading-5 text-foreground", className)}
        onClick={closeState}
      >
        <ArrowUTurnLeftIcon className="size-4 mr-2 text-muted-foreground" /> {label}
      </SidebarBrand>
    </SidebarBrand>
  );
});

export type { SidebarSubBackProps };

export default SidebarSubBack;
