import { cn } from "@/lib/tw";
import { MinusMiniIcon, PlusMiniIcon } from "@cmdrs/icons";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import React, { ElementRef, forwardRef } from "react";
import SidebarListItem from "./sidebar-list-item";

interface SidebarCollapseTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {}

const SidebarCollapseTrigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  SidebarCollapseTriggerProps
>(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Trigger {...props} ref={ref} asChild>
      <SidebarListItem
        hovered={false}
        className={cn(
          "text-fg-muted text-xs [&[aria-selected=false]]:text-fg-muted",
          "[&[data-state=open]_svg[data-type=icon-open]]:hidden",
          "[&[data-state=open]_svg[data-type=icon-close]]:block",
          "[&[data-state=closed]_svg[data-type=icon-close]]:hidden",
          "[&[data-state=closed]_svg[data-type=icon-open]]:block"
        )}
      >
        {children}
        <span role="presentation" aria-label="Toggle Icon" className="ml-auto">
          <MinusMiniIcon
            data-type="icon-close"
            className="size-4 text-fg-muted"
          />
          <PlusMiniIcon
            data-type="icon-open"
            className="size-4 text-fg-muted"
          />
        </span>
      </SidebarListItem>
    </AccordionPrimitive.Trigger>
  );
});

export type { SidebarCollapseTriggerProps };

export default SidebarCollapseTrigger;
