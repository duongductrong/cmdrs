"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/tw";

interface PopoverProps
  extends React.ComponentProps<typeof PopoverPrimitive.Root> {}

const Popover = PopoverPrimitive.Root;

export type { PopoverProps };

export default Popover;
