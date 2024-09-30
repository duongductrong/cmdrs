import { createContext, useContext } from "react";
import { VariantProps } from "tailwind-variants";
import { accordion } from ".";

export interface AccordionContextState {
  variant: VariantProps<typeof accordion>["variant"];
}

export const AccordionContext = createContext<AccordionContextState>(
  {} as AccordionContextState
);

export const useAccordionContext = () => useContext(AccordionContext);
