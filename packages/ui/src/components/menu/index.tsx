import DropdownMenu from "../dropdown-menu";

interface MenuProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenu> {}

const Menu = DropdownMenu;

export type { MenuProps };

export default Menu;
