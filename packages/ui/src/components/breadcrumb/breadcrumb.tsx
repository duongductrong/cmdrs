import * as React from "react";

interface BreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {
  separator?: React.ReactNode;
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />
);
Breadcrumb.displayName = "Breadcrumb";

export type { BreadcrumbProps };

export default Breadcrumb;
