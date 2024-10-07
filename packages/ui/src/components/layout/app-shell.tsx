import { PropsWithChildren, useMemo, useState } from "react";
import { AppShellContext, AppShellContextState } from "./context";

interface AppShellProps extends PropsWithChildren {
  selectedKeys?: AppShellContextState["selectedKeys"];
}

const AppShell = ({ children, selectedKeys }: AppShellProps) => {
  const [collapse, setCollapse] = useState(false);

  const values = useMemo<AppShellContextState>(
    () => ({ selectedKeys, collapse, setCollapse }),
    [selectedKeys, collapse]
  );

  return (
    <AppShellContext.Provider value={values}>
      {children}
    </AppShellContext.Provider>
  );
};

export default AppShell;
