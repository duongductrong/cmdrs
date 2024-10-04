import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

interface SidebarSubContextState {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  selectedKeys?: string[];
}

const SidebarSubContext = createContext<SidebarSubContextState>(
  {} as SidebarSubContextState
);

interface SidebarSubProviderProps extends PropsWithChildren {
  selectedKeys?: SidebarSubContextState["selectedKeys"];
}

const SidebarSubProvider = ({
  children,
  selectedKeys,
}: SidebarSubProviderProps) => {
  const [expanded, setExpanded] = useState(false);
  const values = useMemo(
    () => ({ expanded, setExpanded, selectedKeys }),
    [selectedKeys, expanded]
  );

  return (
    <SidebarSubContext.Provider value={values}>
      {children}
    </SidebarSubContext.Provider>
  );
};

export const useSidebarSubContext = () => {
  const context = useContext(SidebarSubContext);

  if (!context) {
    throw new Error(
      "useSidebarSubContext must be used within a SidebarSubProvider"
    );
  }

  return context;
};

export type { SidebarSubContextState };

export { SidebarSubContext };

export default SidebarSubProvider;
