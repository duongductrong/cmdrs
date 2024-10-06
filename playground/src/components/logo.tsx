import { ComponentPropsWithoutRef } from "react";

export interface Props extends ComponentPropsWithoutRef<"div"> {
  size?: string;
}

const AcmeLogo = ({ className, size = "48px", ...props }: Props) => {
  return (
    <div
      style={{ "--size": size } as React.CSSProperties}
      className={`size-[var(--size)] grid place-items-center border border-border rounded-lg p-px ${className}`.trim()}
    >
      <div className="border-border size-[calc(var(--size)/1.25)] grid place-items-center border rounded-md bg-input-hover">
        <div className="size-[calc(var(--size)/2)] rounded-full bg-gradient-to-b from-fg-base/80 to-button-inverted"></div>
      </div>
    </div>
  );
};

export default AcmeLogo;
