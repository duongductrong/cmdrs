"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ComponentPropsWithoutRef, useMemo } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { AccordionContext, AccordionContextState } from "./context";

const accordion = tv(
  {
    slots: {
      base: "flex flex-col",
      item: [],
      content: [
        "overflow-hidden text-sm",
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      ],
      contentItem: ["pb-4"],
      trigger: [
        "w-full p-3 rounded-md",
        "flex flex-1 items-center text-fg-base",
        "[&[data-state=open]>svg[data-type=chevron]]:rotate-90 [&[data-state=open]>svg[data-type=icon]]:text-fg-interactive",
        "text-2xs font-medium transition-all",
      ],
    },
    variants: {
      variant: {
        pills: {
          base: "gap-y-4",
          trigger: [
            "bg-bg-base hover:bg-bg-base-hover",
            "shadow-accordion",
            "min-h-12",
            "text-left",
          ],
          contentItem: ["pt-4"],
        },
        progress: {
          base: "gap-y-0",
          trigger: [
            "bg-transparent hover:bg-transparent min-h-12",
            "text-left",
          ],
          item: ["border-b border-border/80"],
          contentItem: ["pt-3 px-9"],
        },
        "pills-group": {
          base: "gap-y-4",
          item: [
            "bg-bg-base hover:bg-bg-base-hover flex flex-col justify-center",
            "shadow-accordion",
            "min-h-12",
            "rounded-md",
          ],
          trigger: ["w-full text-left"],
          contentItem: ["pt-3 px-9"],
        },
      },
    },
    defaultVariants: {
      variant: "pills",
    },
  },
  { twMerge: false, responsiveVariants: false }
);

type AccordionProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> &
  VariantProps<typeof accordion>;

const Accordion = (props: AccordionProps) => {
  console.log(props.variant);
  const value = useMemo<AccordionContextState>(
    () => ({ variant: props.variant }),
    [props.variant]
  );

  const { base } = accordion({ variant: value.variant });

  return (
    <AccordionContext.Provider value={value}>
      <AccordionPrimitive.Root {...props} className={base()} />
    </AccordionContext.Provider>
  );
};

export type { AccordionProps };

  export { accordion };

export default Accordion;
