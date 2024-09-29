import { cn } from "@/lib/tw";
import React from "react";
import { VariantProps } from "tailwind-variants";
import { card } from ".";

interface CardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, shadow, bordered, ...props }, ref) => {
    const { header } = card({ shadow, bordered });
    return <div ref={ref} className={cn(header({ className }))} {...props} />;
  }
);
CardHeader.displayName = "CardHeader";

export type { CardHeaderProps };

export default CardHeader;
