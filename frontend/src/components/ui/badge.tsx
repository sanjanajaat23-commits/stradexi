import * as React from "react";

import { cn } from "@/lib/utils";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "muted";
}

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium tracking-[0.08em] uppercase",
        variant === "default" &&
          "border border-emerald-400/20 bg-emerald-400/8 text-emerald-300",
        variant === "outline" &&
          "border border-white/10 bg-transparent text-white/65",
        variant === "muted" &&
          "border border-white/5 bg-white/3.5 text-white/45",
        className
      )}
      {...props}
    />
  );
}

export { Badge };