import {
  CircleHalfSolidIcon,
  CircleMiniSolidIcon,
  UsersIcon,
} from "@cmdrs/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuIcon,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  MenuItem,
  tw,
} from "@cmdrs/ui";
import React, { ElementRef, useMemo } from "react";

export interface AcmeMenuProps {}

const AcmeMenu = (props: AcmeMenuProps) => {
  const items = useMemo<MenuItem[]>(
    () => [
      {
        type: "custom",
        component: <AcmeUser />,
      },
      {
        type: "separator",
      },
      {
        type: "item",
        label: "Documentation",
        shortcut: "⌘P",
      },
      {
        type: "item",
        label: "Changelog",
        shortcut: "⌘B",
      },
      {
        type: "item",
        label: "Help",
        shortcut: "⌘A",
      },
      {
        type: "item",
        label: "Theme",
        items: [
          {
            type: "item",
            label: "Dark",
          },
        ],
      },
      {
        type: "separator",
      },
      {
        type: "item",
        label: "Log out",
        shortcut: "⌘Q",
      },
    ],
    []
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <AcmeUser />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <AcmeUser className="px-2" />
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <DropdownMenuIcon>
            <CircleHalfSolidIcon />
          </DropdownMenuIcon>
          Documentation
          <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <DropdownMenuIcon>
            <CircleMiniSolidIcon />
          </DropdownMenuIcon>
          Changelog
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <DropdownMenuIcon>
            <UsersIcon />
          </DropdownMenuIcon>
          Help <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <DropdownMenuIcon>
              <CircleHalfSolidIcon />
            </DropdownMenuIcon>
            Theme
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              System
              <DropdownMenuShortcut>
                <CircleHalfSolidIcon />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Dark</DropdownMenuItem>
            <DropdownMenuItem>Light</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const AcmeUser = React.forwardRef<
  ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      {...props}
      className={tw(
        "flex items-center gap-2 px-4 py-1 mb-2 cursor-pointer",
        className
      )}
      ref={ref}
    >
      <img
        src="https://avatars.githubusercontent.com/u/39333905?v=4"
        className="size-8 border border-border p-px rounded-full"
      />
      <div className="flex flex-col gap-px">
        <p className="text-2xs font-medium">Ludvig Rask</p>
        <p className="text-2xs font-normal text-fg-subtle">
          ludvig@medusajs.com
        </p>
      </div>
    </div>
  );
});

export default AcmeMenu;
