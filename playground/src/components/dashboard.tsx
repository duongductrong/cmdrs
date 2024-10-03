import {
  BuildingsIcon,
  CogSixToothIcon,
  CurrencyDollarIcon,
  MagnifyingGlassIcon,
  ReceiptPercentIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "@cmdrs/icons";
import {
  Separator,
  Sidebar,
  SidebarBrand,
  SidebarCollapse,
  SidebarCollapseContent,
  SidebarCollapseTrigger,
  SidebarList,
  SidebarListItem,
  SidebarSeparator
} from "@cmdrs/ui";
import { useState } from "react";
import AcmeMenu from "./acme-menu";
import AcmeLogo from "./logo";

interface ItemSeparator {
  type: "separator";
  className?: string;
}

interface ItemRaw {
  type: "item";
  value: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

interface ItemCollapse {
  type: "collapse";
  value: string;
  icon: React.ReactNode;
  label: string;
  children: ItemRaw[];
}

type Item = ItemRaw | ItemSeparator | ItemCollapse;

const items: Item[] = [
  {
    type: "item",
    value: "search",
    icon: <MagnifyingGlassIcon className="size-4" />,
    label: "Search",
  },
  {
    type: "item",
    value: "products",
    icon: <ShoppingCartIcon className="size-4" />,
    label: "Products",
  },
  {
    type: "item",
    value: "inventory",
    icon: <BuildingsIcon className="size-4" />,
    label: "Inventory",
  },
  {
    type: "item",
    value: "customers",
    icon: <UsersIcon className="size-4" />,
    label: "Customers",
  },
  {
    type: "item",
    value: "promotions",
    icon: <ReceiptPercentIcon className="size-4" />,
    label: "Promotions",
  },
  {
    type: "item",
    value: "pricing",
    icon: <CurrencyDollarIcon className="size-4" />,
    label: "Pricing",
  },
  {
    type: "separator",
  },
  {
    type: "collapse",
    value: "extensions",
    icon: null,
    label: "Extensions",
    children: [
      {
        type: "item",
        value: "e-products",
        icon: <ShoppingCartIcon className="size-4" />,
        label: "Products",
      },
      {
        type: "item",
        value: "e-inventory",
        icon: <BuildingsIcon className="size-4" />,
        label: "Inventory",
      },
      {
        type: "item",
        value: "e-customers",
        icon: <UsersIcon className="size-4" />,
        label: "Customers",
      },
    ],
  },
  {
    type: "item",
    value: "settings",
    icon: <CogSixToothIcon className="size-4" />,
    label: "Settings",
    className: "mt-auto",
  },
  {
    type: "separator",
    className: "mb-0",
  },
];

const Dashboard = () => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>(["products"]);
  return (
    <div>
      <Sidebar defaultSelected={selectedKeys}>
        <SidebarBrand>
          <AcmeLogo size="32px" />
          <span className="text-2xs font-medium ml-2">Acme</span>
        </SidebarBrand>
        <div className="px-4">
          <Separator variant="dashed" />
        </div>
        <SidebarList className="flex-1">
          {items.map((item) => {
            if (item.type === "separator") {
              return <SidebarSeparator className={item.className} />;
            }

            if (item.type === "collapse") {
              return (
                <SidebarCollapse value={item.value}>
                  <SidebarCollapseTrigger>{item.label}</SidebarCollapseTrigger>
                  <SidebarCollapseContent>
                    {item.children.map((childItem) => (
                      <SidebarListItem
                        key={childItem.value}
                        value={childItem.value}
                        icon={childItem.icon}
                      >
                        {childItem.label}
                      </SidebarListItem>
                    ))}
                  </SidebarCollapseContent>
                </SidebarCollapse>
              );
            }

            return (
              <SidebarListItem
                key={item.value}
                value={item.value}
                icon={item.icon}
                onClick={() => setSelectedKeys([item.value])}
                className={item?.className}
              >
                {item.label}
              </SidebarListItem>
            );
          })}
        </SidebarList>
        <AcmeMenu />
      </Sidebar>
    </div>
  );
};

export default Dashboard;
