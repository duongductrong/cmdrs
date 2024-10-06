import * as React from "react";

import { cn } from "@/lib/tw";
import { tv, VariantProps } from "tailwind-variants";
import { input } from "./input";

const textarea = tv(
  {
    extend: input,
    slots: {
      base: ["flex min-h-[60px] w-full"],
    },
    variants: {
      size: {
        default: {
          base: "px-3 py-2 text-sm",
        },
      },
    },
  },
  { twMerge: false, responsiveVariants: true }
);

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textarea> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size, ...props }, ref) => {
    const { base } = textarea({ variant, size, className });
    return (
      <textarea className={cn(base({ className }))} ref={ref} {...props} />
    );
  }
);
Textarea.displayName = "Textarea";

export type { TextareaProps };

  export { textarea };

export default Textarea;
