import { tv, VariantProps } from "tailwind-variants";

export const sidebar = tv(
  {
    slots: {
      base: [
        "relative",
        "min-h-lvh bg-background border-r border-border",
        "flex flex-col h-full overflow-x-hidden transition-width duration-300",
      ],
      brand: ["px-3 h-12 flex items-center"],
      subBase: [
        "absolute top-0 left-0 w-[var(--sidebar-width)]",
        "min-h-lvh bg-background border-r border-border",
        "data-[state=open]:animate-in data-[state=open]:slide-in-from-left",
        "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left",
      ],
      toggleButton: ["text-muted-foreground cursor-pointer"],
    },
    variants: {
      collapse: {
        true: {
          base: "w-[var(--sidebar-width-mini)]",
        },
        false: {
          base: "w-[var(--sidebar-width)]",
        },
      },
    },
  },
  { twMerge: false }
);

export const sidebarList = tv({
  base: ["p-3 flex flex-col gap-0.5"],
  variants: {
    collapse: {
      true: "",
    },
  },
});

export const sidebarListItem = tv({
  base: [
    "h-8 p-0.5 w-full flex items-center gap-x-2 text-sm font-normal leading-5",
    "rounded-md cursor-pointer",
    "",
    "[&:not(:has(span))]:pl-2",
    "[&>span[role=presentation]]:size-6 [&>span[role=presentation]]:flex",
    "[&>span[role=presentation]]:items-center [&>span[role=presentation]]:justify-center",
    "[&>span[role=presentation]]:text-muted-foreground",
    "[&[aria-selected=false]]:text-muted-foreground",
    "[&[aria-selected=true]]:bg-secondary [&[aria-selected=true]]:text-foreground",
  ],
  variants: {
    hovered: {
      true: "hover:bg-secondary",
    },
  },
  defaultVariants: {
    hovered: true,
  },
});

export const page = tv({
  slots: {
    base: "flex-1",
  },
  variants: {
    collapse: {
      true: "ml-[var(--sidebar-width-mini)]",
      false: "ml-[var(--sidebar-width)] overflow-auto",
    },
  },
});

export type SidebarVariants = VariantProps<typeof sidebar>;
