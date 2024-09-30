import { createContext, useContext } from "react";

export interface AccordionContextState {
  variant: "pills" | "progress" | "pills-group";
}

export const AccordionContext = createContext<AccordionContextState>(
  {} as AccordionContextState
);

export const useAccordionContext = () => useContext(AccordionContext);
