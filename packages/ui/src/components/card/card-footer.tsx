import { cn } from "@/lib/tw";
import React from "react";
import { VariantProps } from "tailwind-variants";
import { card } from ".";

interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, shadow, bordered, ...props }, ref) => {
    const { footer } = card({ shadow, bordered });

    return <div ref={ref} className={cn(footer({ className }))} {...props} />;
  }
);
CardFooter.displayName = "CardFooter";

export type { CardFooterProps };

export default CardFooter;
