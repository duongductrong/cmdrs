import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";

import { cn } from "@/lib/tw";
import {
  CheckCircleSolidIcon,
  CircleHalfSolidIcon,
  CircleMiniSolidIcon,
  TriangleRightMiniIcon,
} from "@cmdrs/icons";
import { accordion } from ".";
import { useAccordionContext } from "./context";

interface AccordionTriggerProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>,
    "type"
  > {
  type?: "not-started" | "in-progress" | "completed" | "none";
  prefixIcon?: React.ComponentType<any>;
}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(
  (
    { className, children, type = "not-started", prefixIcon, ...props },
    ref
  ) => {
    const { variant } = useAccordionContext();
    const { trigger } = accordion({ variant });

    const PrefixIcon = prefixIcon
      ? prefixIcon
      : type === "not-started"
      ? CircleMiniSolidIcon
      : type === "in-progress"
      ? CircleHalfSolidIcon
      : type === "completed"
      ? CheckCircleSolidIcon
      : null;

    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          {...props}
          ref={ref}
          type="button"
          className={cn(
            trigger({
              className,
            })
          )}
        >
          {PrefixIcon ? (
            <PrefixIcon
              data-type="icon"
              className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 mr-2"
            />
          ) : null}

          {children}

          <TriangleRightMiniIcon
            data-type="chevron"
            className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 ml-auto"
          />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  }
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export type { AccordionTriggerProps };

export default AccordionTrigger;
