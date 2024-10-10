"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@pmdrs/ui"
import { createExternalStore, useExternalStore } from "../use-external-store"

export interface PromptState {
  title: string
  description?: string
  cancelText?: string
  confirmText?: string

  open?: boolean
  confirm?: (state: boolean) => void
}

export const initialPromptState: PromptState = {
  title: "",
  description: "",
  cancelText: "Cancel",
  confirmText: "Confirm",

  open: false,
}

export interface PrompterProps {}

export const promptStore = createExternalStore<PromptState>(initialPromptState)

export const Prompter = (props: PrompterProps) => {
  const promptState = useExternalStore(promptStore, (state) => state)

  return (
    <AlertDialog open={promptState.open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{promptState.title}</AlertDialogTitle>
          <AlertDialogDescription>{promptState.description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => promptState?.confirm?.(false)}>
            {promptState.cancelText ?? "Cancel"}
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => promptState?.confirm?.(true)}>
            {promptState.confirmText ?? "Continue"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
