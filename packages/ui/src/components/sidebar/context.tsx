import { createContext, PropsWithChildren, useMemo } from "react";

export interface SidebarContextState {}

export const SidebarContext = createContext<SidebarContextState>(
  {} as SidebarContextState
);

const SidebarProvider = ({ children }: PropsWithChildren) => {
  const values = useMemo(() => ({}), []);

  return (
    <SidebarContext.Provider value={values}>{children}</SidebarContext.Provider>
  );
};

export default SidebarProvider;
