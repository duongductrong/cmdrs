import AcmeMenu from "@/components/acme-menu";
import AcmeLogo from "@/components/logo";
import {
  BellAlertIcon,
  BuildingsIcon,
  CogSixToothIcon,
  CurrencyDollarIcon,
  MagnifyingGlassIcon,
  ReceiptPercentIcon,
  ShoppingCartIcon,
  SidebarLeftIcon,
  SidebarRightIcon,
  UsersIcon,
} from "@cmdrs/icons";
import {
  AppShell,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Button,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  Page,
  PageBody,
  PageHeader,
  Separator,
  Sidebar,
  SidebarBrand,
  SidebarCollapse,
  SidebarCollapseContent,
  SidebarCollapseTrigger,
  SidebarList,
  SidebarListItem,
  SidebarSeparator,
  SidebarSub,
  SidebarSubBack,
  SidebarSubContent,
  SidebarSubTrigger,
  SidebarToggleButton
} from "@cmdrs/ui";
import { CalendarIcon, RocketIcon } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

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
  items?: Item[];
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
    items: [
      {
        type: "item",
        value: "s-account",
        icon: <CogSixToothIcon className="size-4" />,
        label: "Account",
      },
    ],
  },
  {
    type: "separator",
    className: "mb-0",
  },
];

export interface AdminLayoutProps {}

const AdminLayout = (props: AdminLayoutProps) => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>(["products"]);
  const [open, setOpen] = useState(false);

  return (
    <AppShell>
      <section className="flex">
        <Sidebar className="fixed top-0 left-0" defaultSelected={selectedKeys}>
          <SidebarBrand>
            <AcmeLogo size="32px" />
            <span className="text-sm font-medium ml-2">Acme</span>
          </SidebarBrand>
          <div className="px-4">
            <Separator variant="dashed" />
          </div>
          <SidebarList type="multiple" className="flex-1">
            {items.map((item) => {
              if (item.type === "separator") {
                return <SidebarSeparator className={item.className} />;
              }

              if (item.type === "collapse") {
                return (
                  <SidebarCollapse value={item.value}>
                    <SidebarCollapseTrigger>
                      {item.label}
                    </SidebarCollapseTrigger>
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

              if (item.items) {
                return (
                  <SidebarSub>
                    <SidebarSubTrigger label={item.label} asChild>
                      <SidebarListItem
                        key={item.value}
                        value={item.value}
                        icon={item.icon}
                        className={item?.className}
                      >
                        {item.label}
                      </SidebarListItem>
                    </SidebarSubTrigger>
                    <SidebarSubContent>
                      <SidebarSubBack />
                      <div className="px-4">
                        <Separator variant="dashed" />
                      </div>
                      <SidebarList
                        type="multiple"
                        defaultValue={["general", "developer"]}
                      >
                        <SidebarCollapse value="general">
                          <SidebarCollapseTrigger>
                            General
                          </SidebarCollapseTrigger>
                          <SidebarCollapseContent>
                            <SidebarListItem
                              icon={<CurrencyDollarIcon className="size-4" />}
                            >
                              Accounts
                            </SidebarListItem>
                            <SidebarListItem
                              icon={<CurrencyDollarIcon className="size-4" />}
                            >
                              Policy
                            </SidebarListItem>
                            <SidebarListItem
                              icon={<CurrencyDollarIcon className="size-4" />}
                            >
                              Billings
                            </SidebarListItem>
                          </SidebarCollapseContent>
                        </SidebarCollapse>
                        <SidebarSeparator />
                        <SidebarCollapse value="developer">
                          <SidebarCollapseTrigger>
                            Developer
                          </SidebarCollapseTrigger>
                          <SidebarCollapseContent>
                            <SidebarListItem
                              icon={<CurrencyDollarIcon className="size-4" />}
                            >
                              API Keys
                            </SidebarListItem>
                            <SidebarSub>
                              <SidebarSubTrigger label="Developers" asChild>
                                <SidebarListItem
                                  icon={<CogSixToothIcon className="size-4" />}
                                >
                                  Developers
                                </SidebarListItem>
                              </SidebarSubTrigger>
                              <SidebarSubContent>
                                <SidebarSubBack />
                                <div className="px-4">
                                  <Separator variant="dashed" />
                                </div>
                                <SidebarList type="multiple">
                                  <SidebarListItem
                                    icon={
                                      <CurrencyDollarIcon className="size-4" />
                                    }
                                  >
                                    Nested Sample 1
                                  </SidebarListItem>
                                  <SidebarListItem
                                    icon={
                                      <CurrencyDollarIcon className="size-4" />
                                    }
                                  >
                                    Nested Sample 2
                                  </SidebarListItem>
                                  <SidebarListItem
                                    icon={
                                      <CurrencyDollarIcon className="size-4" />
                                    }
                                  >
                                    Nested Sample 3
                                  </SidebarListItem>
                                </SidebarList>
                              </SidebarSubContent>
                            </SidebarSub>
                          </SidebarCollapseContent>
                        </SidebarCollapse>
                      </SidebarList>
                    </SidebarSubContent>
                  </SidebarSub>
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

        <Page>
          <PageHeader>
            <SidebarToggleButton
              className="mr-4"
              collapseIcon={<SidebarRightIcon className="size-4" />}
            >
              <SidebarLeftIcon className="size-4" />
            </SidebarToggleButton>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/admin/dashboard">
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="ml-auto flex items-center gap-x-1">
              <Button size="icon" variant="ghost">
                <BellAlertIcon className="size-4 text-muted-foreground" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setOpen((prev) => !prev)}
              >
                <MagnifyingGlassIcon className="size-4 shrink-0 text-muted-foreground" />
              </Button>
              <AcmeMenu>
                <img
                  src="https://avatars.githubusercontent.com/u/39333905?v=4"
                  className="size-8 border border-border p-px rounded-full cursor-pointer"
                />
              </AcmeMenu>
              <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                      {/* <FaceIcon className="mr-2 h-4 w-4" /> */}
                      <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem>
                      <RocketIcon className="mr-2 h-4 w-4" />
                      <span>Launch</span>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem>
                      {/* <PersonIcon className="mr-2 h-4 w-4" /> */}
                      <span>Profile</span>
                      <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      {/* <EnvelopeClosedIcon className="mr-2 h-4 w-4" /> */}
                      <span>Mail</span>
                      <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      {/* <GearIcon className="mr-2 h-4 w-4" /> */}
                      <span>Settings</span>
                      <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </CommandDialog>
            </div>
          </PageHeader>
          <PageBody>
            <Outlet />
          </PageBody>
        </Page>
      </section>
    </AppShell>
  );
};

export default AdminLayout;
