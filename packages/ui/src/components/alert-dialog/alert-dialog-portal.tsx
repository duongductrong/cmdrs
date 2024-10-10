"use client";

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import * as React from "react";

import { button } from "@/components/button";
import { cn } from "@/lib/tw";

interface AlertDialogPortalProps
  extends AlertDialogPrimitive.AlertDialogPortalProps {}

const AlertDialogPortal = AlertDialogPrimitive.Portal;

export type { AlertDialogPortalProps };

export default AlertDialogPortal;
