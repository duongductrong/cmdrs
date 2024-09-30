import { cn } from "@/lib/tw";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import React from "react";
import { accordion } from ".";
import { useAccordionContext } from "./context";

interface AccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {}

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, ...props }, ref) => {
  const { variant } = useAccordionContext();

  const { item } = accordion({ variant });
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(item({ className }))}
      {...props}
    />
  );
});
AccordionItem.displayName = "AccordionItem";

export type { AccordionItemProps };

export default AccordionItem;
