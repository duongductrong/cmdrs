import React, { createContext, useContext } from "react";

export interface AlertContextState {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AlertContext = createContext<AlertContextState>({
  open: true,
} as AlertContextState);

export const useAlertContext = () => useContext(AlertContext);
