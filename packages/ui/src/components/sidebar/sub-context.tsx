import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

interface SidebarSubState {
  label: string;
  state: "open" | "closed";
  selectedKeys?: string[];
}

interface SidebarSubContextState extends SidebarSubState {
  setState: Dispatch<SetStateAction<SidebarSubState>>;
  toggleState: (options: Pick<SidebarSubState, "label">) => void;
  closeState: () => void;
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
  const [state, setState] = useState<SidebarSubState>({
    label: "",
    state: "closed",
    selectedKeys: [],
  });

  const toggleState: SidebarSubContextState["toggleState"] = (options) => {
    setState((previous) => ({
      ...previous,
      ...options,
      state: previous.state === "open" ? "closed" : "open",
    }));
  };

  const closeState = () => {
    setState((previous) => ({ ...previous, state: "closed" }));
  };

  const values = useMemo<SidebarSubContextState>(
    () => ({ ...state, setState, toggleState, closeState, selectedKeys }),
    [selectedKeys, state]
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
