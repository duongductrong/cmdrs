import { cn } from "@/lib/tw";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import React from "react";
import { accordion } from ".";
import { useAccordionContext } from "./context";

interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {}

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ className, children, ...props }, ref) => {
  const { variant } = useAccordionContext();
  const { content, contentItem } = accordion({ variant });

  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={content({ className })}
      {...props}
    >
      <div className={cn(contentItem({ className }))}>{children}</div>
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export type { AccordionContentProps };

export default AccordionContent;
