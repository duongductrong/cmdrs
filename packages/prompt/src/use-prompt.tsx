"use client"

import { PromptState, initialPromptState, promptStore } from "."

export const usePrompt = () => {
  const promptFn = (data: Omit<PromptState, "open" | "confirm">) =>
    new Promise<boolean>((resolve) => {
      promptStore.setState((state) => ({
        ...data,
        open: true,
        confirm: async (isConfirmed) => {
          promptStore.setState(() => initialPromptState)
          resolve(isConfirmed)
        },
      }))
    })

  return promptFn
}
