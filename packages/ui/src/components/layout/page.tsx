import { cn } from "@/lib/tw";
import React, { ElementRef, forwardRef } from "react";
import { useAppShellContext } from "./context";
import { page } from "./styles";

interface PageProps extends React.ComponentPropsWithoutRef<"section"> {}

const Page = forwardRef<ElementRef<"section">, PageProps>(
  ({ className, ...props }, ref) => {
    const { collapse } = useAppShellContext();
    const { base } = page({ collapse });
    return <section {...props} ref={ref} className={cn(base({ className }))} />;
  }
);

export type { PageProps };

export default Page;
