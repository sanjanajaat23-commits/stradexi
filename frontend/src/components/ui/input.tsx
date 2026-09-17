import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-lg border border-white/10 bg-white/3.5 px-3.5 py-2 text-sm text-white outline-none placeholder:text-white/25 transition-all",
          "focus:border-emerald-400/40 focus:bg-white/5 focus:ring-2 focus:ring-emerald-400/10",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };