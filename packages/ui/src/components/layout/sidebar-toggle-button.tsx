import { cn } from "@/lib/tw";
import { composeEventHandlers } from "@/primitives/event";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { useAppShellContext } from "./context";
import { sidebar } from "./styles";

interface SidebarToggleButtonProps extends ComponentPropsWithoutRef<"button"> {
  collapseIcon: React.ReactNode;
}

const SidebarToggleButton = forwardRef<
  ElementRef<"button">,
  SidebarToggleButtonProps
>(({ className, children, onClick, collapseIcon, ...props }, ref) => {
  const { collapse, setCollapse } = useAppShellContext();
  const { toggleButton } = sidebar({ collapse });

  return (
    <button
      {...props}
      aria-label="Toggle sidebar"
      aria-controls="sidebar"
      className={cn(toggleButton({ className }))}
      onClick={composeEventHandlers(onClick, () => setCollapse(!collapse))}
      ref={ref}
    >
      {collapse ? collapseIcon : children}
    </button>
  );
});

export type { SidebarToggleButtonProps };

export default SidebarToggleButton;
