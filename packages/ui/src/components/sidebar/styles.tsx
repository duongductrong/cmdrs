import { tv } from "tailwind-variants";

export const sidebar = tv({
  slots: {
    base: [
      "relative",
      "w-[var(--sidebar-width)] min-h-lvh bg-bg-subtle border-r border-[hsla(240,6%,90%,1)]",
      "flex flex-col h-full",
    ],
    brand: ["px-3 h-12 flex items-center"],
    subBase: [
      "absolute top-0 left-0 w-[var(--sidebar-width)]",
      "min-h-lvh bg-bg-subtle border-r border-[hsla(240,6%,90%,1)]",
    ],
  },
});

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
    "h-7 p-0.5 w-full flex items-center gap-x-2 text-2xs font-medium leading-5",
    "rounded-md cursor-pointer",
    "",
    "[&:not(:has(span))]:pl-2",
    "[&>span[role=presentation]]:size-6 [&>span[role=presentation]]:flex",
    "[&>span[role=presentation]]:items-center [&>span[role=presentation]]:justify-center",
    "[&>span[role=presentation]]:text-fg-subtle",
    "[&[aria-selected=false]]:text-fg-subtle",
    "[&[aria-selected=true]]:bg-bg-base [&[aria-selected=true]]:text-fg-base [&[aria-selected=true]]:shadow-sidebar",
  ],
  variants: {
    hovered: {
      true: "hover:bg-bg-base hover:shadow-sidebar",
    },
  },
  defaultVariants: {
    hovered: true,
  },
});
