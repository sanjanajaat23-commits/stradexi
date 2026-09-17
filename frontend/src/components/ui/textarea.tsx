import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "min-h-32 w-full resize-y rounded-lg border border-white/10 bg-white/3.5 px-3.5 py-3 text-sm text-white outline-none placeholder:text-white/25 transition-all",
        "focus:border-emerald-400/40 focus:bg-white/5 focus:ring-2 focus:ring-emerald-400/10",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };