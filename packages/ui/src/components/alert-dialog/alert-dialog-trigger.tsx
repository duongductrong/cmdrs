"use client";

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import * as React from "react";

import { button } from "@/components/button";
import { cn } from "@/lib/tw";

interface AlertDialogTriggerProps
  extends AlertDialogPrimitive.AlertDialogTriggerProps {}

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

export type { AlertDialogTriggerProps };

export default AlertDialogTrigger;
