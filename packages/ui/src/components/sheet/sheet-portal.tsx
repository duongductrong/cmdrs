"use client";

import * as SheetPrimitive from "@radix-ui/react-dialog";


interface SheetPortalProps extends SheetPrimitive.DialogPortalProps {}

const SheetPortal = SheetPrimitive.Portal;

export type { SheetPortalProps };

export default SheetPortal;
