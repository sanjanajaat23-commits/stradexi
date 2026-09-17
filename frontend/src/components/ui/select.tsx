import * as React from "react";

import { cn } from "@/lib/utils";

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "flex h-11 w-full appearance-none rounded-lg border border-white/10 bg-[#101512] px-3.5 py-2 text-sm text-white outline-none transition-all",
          "focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-400/10",
          className
        )}
        {...props}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = "Select";

export { Select };