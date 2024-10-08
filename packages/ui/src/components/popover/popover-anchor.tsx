"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";

interface PopoverAnchorProps
  extends React.ComponentProps<typeof PopoverPrimitive.Anchor> {}

const PopoverAnchor = PopoverPrimitive.Anchor;

export type { PopoverAnchorProps };

export default PopoverAnchor;
