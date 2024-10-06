import * as React from "react";

import { cn } from "@/lib/tw";
import { tv, VariantProps } from "tailwind-variants";

const card = tv(
  {
    slots: {
      base: "rounded-xl border bg-card text-card-foreground shadow",
      header: "flex flex-col space-y-1.5 p-6",
      footer: "flex items-center p-6 pt-0",
      content: "p-6 pt-0",
    },
    variants: {
      variant: {
        section: "bg-background",
        card: "bg-card",
      },
      bordered: {
        true: "border-border",
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
