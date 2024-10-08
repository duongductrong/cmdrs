import { cn } from "@/lib/tw";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

interface KbdProps extends ComponentPropsWithoutRef<"kbd"> {}

const Kbd = forwardRef<ElementRef<"kbd">, KbdProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <kbd
        {...props}
        ref={ref}
        className={cn(
          "pointer-events-none inline-flex h-5 select-none",
          "items-center gap-1 rounded border border-border bg-muted",
          "px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100",
          className
        )}
      >
        {children}
      </kbd>
    );
  }
);

export type { KbdProps };

export default Kbd;
