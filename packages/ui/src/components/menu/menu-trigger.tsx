import React from "react";
import DropdownMenuTrigger from "../dropdown-menu/dropdown-menu-trigger";

interface MenuTriggerProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuTrigger> {}

const MenuTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuTrigger>,
  MenuTriggerProps
>((props, ref) => <DropdownMenuTrigger ref={ref} {...props} />);

export type { MenuTriggerProps };

export default MenuTrigger;
