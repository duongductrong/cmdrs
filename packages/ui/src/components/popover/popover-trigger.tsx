"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";

type PopoverTriggerProps = React.ComponentProps<
  typeof PopoverPrimitive.Trigger
>;

const PopoverTrigger = PopoverPrimitive.Trigger;

export type { PopoverTriggerProps };

export default PopoverTrigger;
