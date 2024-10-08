import {
  CircleHalfSolidIcon,
  CircleMiniSolidIcon,
  UsersIcon,
} from "@pmdrs/icons";
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
  tw,
} from "@pmdrs/ui";
import React, { ElementRef, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export interface AcmeMenuProps {
  children?: ReactNode;
}

const AcmeMenu = ({ children }: AcmeMenuProps) => {
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children || <AcmeUser />}
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
        <DropdownMenuItem onClick={() => navigate("/login")}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const AcmeUser = React.forwardRef<
  ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      {...props}
      className={tw(
        "flex items-center gap-2 px-4 py-1 mb-2 cursor-pointer shrink-0",
        className
      )}
      ref={ref}
    >
      <img
        src="https://avatars.githubusercontent.com/u/39333905?v=4"
        className="size-8 border border-border p-px rounded-full shrink-0"
      />
      <div className="flex flex-col gap-px">
        <p className="text-sm font-medium">Ludvig Rask</p>
        <p className="text-sm font-normal text-muted-foreground">
          ludvig@medusajs.com
        </p>
      </div>
    </div>
  );
});

export default AcmeMenu;
