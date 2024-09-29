import { cn } from "@/lib/tw";
import React from "react";
import { VariantProps } from "tailwind-variants";
import { card } from ".";

interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, shadow, bordered, ...props }, ref) => {
    const { content } = card({ shadow, bordered });

    return <div ref={ref} className={cn(content({ className }))} {...props} />;
  }
);
CardContent.displayName = "CardContent";

export type { CardContentProps };

export default CardContent;
