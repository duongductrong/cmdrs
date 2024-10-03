"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

interface DropdownMenuPortalProps
  extends DropdownMenuPrimitive.DropdownMenuPortalProps {}

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

export type { DropdownMenuPortalProps };

export default DropdownMenuPortal;
