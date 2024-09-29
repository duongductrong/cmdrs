import * as React from "react";

import { cn } from "@/lib/tw";
import { tv, VariantProps } from "tailwind-variants";

const card = tv(
  {
    slots: {
      base: "rounded-xl border border-transparent bg-card text-card-foreground",
      header: "block",
      footer: "block",
      content: "p-0",
    },
    variants: {
      bordered: {
        true: "dark:border-border shadow-border",
      },
      shadow: {
        true: "shadow-section",
      },
    },
    defaultVariants: {
      shadow: false,
      bordered: false,
    },
  },
  { twMerge: false, responsiveVariants: true }
);

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, shadow, bordered, ...props }, ref) => {
    const { base } = card({ bordered, shadow });

    return <div {...props} ref={ref} className={cn(base({ className }))} />;
  }
);
Card.displayName = "Card";

export { card };

export type { CardProps };

export default Card;
