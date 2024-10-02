import { createContext, PropsWithChildren, useContext, useMemo } from "react";

interface SidebarContextState {
  selectedKeys?: string[];
}

const SidebarContext = createContext<SidebarContextState>(
  {} as SidebarContextState
);

interface SidebarProviderProps extends PropsWithChildren {
  selectedKeys?: SidebarContextState["selectedKeys"];
}

const SidebarProvider = ({ children, selectedKeys }: SidebarProviderProps) => {
  const values = useMemo(() => ({ selectedKeys }), [selectedKeys]);

  return (
    <SidebarContext.Provider value={values}>{children}</SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }

  return context;
};

export type { SidebarContextState };

export { SidebarContext };

export default SidebarProvider;
