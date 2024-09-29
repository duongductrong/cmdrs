import * as React from "react";

import { cn } from "@/lib/tw";
import { tv, VariantProps } from "tailwind-variants";

const card = tv(
  {
    slots: {
      base: "rounded-xl border border-transparent text-fg-base",
      header: "block",
      footer: "block",
      content: "p-0",
    },
    variants: {
      variant: {
        background: "bg-bg-base",
        card: "bg-card",
      },
      bordered: {
        true: "dark:border-border shadow-border",
      },
      shadow: {
        true: "shadow-section",
      },
    },
    defaultVariants: {
      variant: "card",
      shadow: false,
      bordered: true,
    },
  },
  { twMerge: false, responsiveVariants: true }
);

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, shadow, bordered, variant, ...props }, ref) => {
    const { base } = card({ variant, bordered, shadow });

    return <div {...props} ref={ref} className={cn(base({ className }))} />;
  }
);
Card.displayName = "Card";

export { card };

export type { CardProps };

export default Card;
