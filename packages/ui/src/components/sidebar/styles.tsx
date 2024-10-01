import { tv } from "tailwind-variants";

export const sidebar = tv({
  slots: {
    base: [
      "w-[var(--sidebar-width)] min-h-lvh bg-bg-subtle border-r border-[hsla(240,6%,90%,1)]",
    ],
    brand: ["px-3 h-12 flex items-center"],
    list: ["p-3 flex flex-col gap-0.5"],
    listItem: [
      "h-7 p-0.5 w-full flex items-center gap-x-2 text-2xs font-medium leading-5",
      "rounded-md cursor-pointer",
      "hover:bg-bg-base hover:shadow-sidebar",
      "[&:not(:has(span))]:pl-2",
      "[&>span[role=presentation]]:size-6 [&>span[role=presentation]]:flex",
      "[&>span[role=presentation]]:items-center [&>span[role=presentation]]:justify-center",
      "[&>span[role=presentation]]:text-fg-subtle",
      "[&[aria-selected=false]]:text-fg-subtle",
      "[&[aria-selected=true]]:text-fg-base [&[aria-selected=true]]:shadow-sidebar",
    ],
  },
});
