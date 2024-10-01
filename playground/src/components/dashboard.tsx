import {
  BuildingsIcon,
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
  SidebarList,
  SidebarListItem,
} from "@cmdrs/ui";

const Dashboard = () => {
  return (
    <div>
      <Sidebar>
        <SidebarBrand>ACME</SidebarBrand>
        <div className="px-4">
          <Separator variant="dashed" />
        </div>
        <SidebarList>
          <SidebarListItem icon={<MagnifyingGlassIcon className="size-4" />}>
            Search <span className="text-fg-subtle ml-auto mr-1.5">⌘K</span>
          </SidebarListItem>
          <SidebarListItem icon={<ShoppingCartIcon className="size-4" />}>
            Products
          </SidebarListItem>
          <SidebarListItem icon={<BuildingsIcon className="size-4" />}>
            Inventory
          </SidebarListItem>
          <SidebarListItem icon={<UsersIcon className="size-4" />}>
            Customers
          </SidebarListItem>
          <SidebarListItem icon={<ReceiptPercentIcon className="size-4" />}>
            Promotions
          </SidebarListItem>
          <SidebarListItem icon={<CurrencyDollarIcon className="size-4" />}>
            Pricing
          </SidebarListItem>
        </SidebarList>
        <div className="px-4">
          <Separator variant="dashed" />
        </div>
      </Sidebar>
    </div>
  );
};

export default Dashboard;
