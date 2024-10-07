import { createContext, useContext } from "react";

interface AppShellContextState {
  selectedKeys?: string[];
  collapse?: boolean;
  setCollapse: (collapse: boolean) => void;
}

const AppShellContext = createContext<AppShellContextState>(
  {} as AppShellContextState
);

export const useAppShellContext = () => {
  const context = useContext(AppShellContext);

  if (!context) {
    throw new Error(
      "useAppShellContext must be used within a AppShellProvider"
    );
  }

  return context;
};

export type { AppShellContextState };

export { AppShellContext };
