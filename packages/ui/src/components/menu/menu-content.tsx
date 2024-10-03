import { cn } from "@/lib/tw";
import React, { ComponentPropsWithoutRef, memo } from "react";
import DropdownMenuContent from "../dropdown-menu/dropdown-menu-content";
import DropdownMenuGroup from "../dropdown-menu/dropdown-menu-group";
import DropdownMenuItem from "../dropdown-menu/dropdown-menu-item";
import DropdownMenuLabel from "../dropdown-menu/dropdown-menu-label";
import DropdownMenuPortal from "../dropdown-menu/dropdown-menu-portal";
import DropdownMenuSeparator from "../dropdown-menu/dropdown-menu-separator";
import DropdownMenuShortcut from "../dropdown-menu/dropdown-menu-shortcut";
import DropdownMenuSub from "../dropdown-menu/dropdown-menu-sub";
import DropdownMenuSubContent from "../dropdown-menu/dropdown-menu-sub-content";
import DropdownMenuSubTrigger from "../dropdown-menu/dropdown-menu-sub-trigger";

interface MenuItemRoot
  extends ComponentPropsWithoutRef<typeof DropdownMenuItem> {
  type: "item";
  label: string;
  shortcut?: string;
  disabled?: boolean;
  items?: MenuItemRoot[];
}

interface MenuItemGroup {
  type: "group";
  items: MenuItemRoot[];
}

interface MenuItemSeparator {
  type: "separator";
}

interface MenuItemLabel {
  type: "label";
  label: string;
}

interface MenuItemCustom {
  type: "custom";
  // component: React.ComponentType<React.ComponentPropsWithoutRef<"div">>;
  component: React.ReactNode;
}

type MenuItem =
  | MenuItemGroup
  | MenuItemRoot
  | MenuItemSeparator
  | MenuItemLabel
  | MenuItemCustom;

interface MenuContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuContent> {
  items: MenuItem[];
}

const MenuContentItem = ({
  item,
  index,
}: {
  item: MenuItemRoot;
  index: number;
}) => {
  return Number(item?.items?.length) > 0 ? (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>{item.label}</DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {item.items?.map((item, cIndex) => (
            <DropdownMenuItem key={`${index}.${cIndex}`}>
              {item.label}
              {item.shortcut ? (
                <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
              ) : null}
            </DropdownMenuItem>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  ) : (
    <DropdownMenuItem key={index}>
      {item.label}
      {item.shortcut ? (
        <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
      ) : null}
    </DropdownMenuItem>
  );
};

const MenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuContent>,
  MenuContentProps
>(({ className, items, ...props }, ref) => (
  <DropdownMenuContent {...props} ref={ref} className={cn("w-56", className)}>
    {items?.map((item, index) => {
      switch (item.type) {
        case "item":
          return <MenuContentItem item={item} index={index} />;
        case "group":
          return (
            <DropdownMenuGroup key={index}>
              {item.items.map((item, cIndex) => (
                <MenuContentItem item={item} index={cIndex} />
              ))}
            </DropdownMenuGroup>
          );
        case "separator":
          return <DropdownMenuSeparator key={index} />;
        case "label":
          return (
            <DropdownMenuLabel key={index}>{item.label}</DropdownMenuLabel>
          );
        case "custom":
          return item.component;
        default:
          return null;
      }
    })}
  </DropdownMenuContent>
));

export type {
  MenuContentProps,
  MenuItem,
  MenuItemGroup,
  MenuItemLabel,
  MenuItemRoot
};

export default memo(MenuContent);
