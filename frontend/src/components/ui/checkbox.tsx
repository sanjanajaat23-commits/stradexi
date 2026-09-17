import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  HTMLButtonElement,
  {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
  }
>(({ checked, onCheckedChange, disabled, className }, ref) => {
  return (
    <button
      type="button"
      ref={ref}
      disabled={disabled}
      aria-pressed={checked}
      onClick={() => onCheckedChange?.(!checked)}
      className={cn(
        "flex h-4 w-4 items-center justify-center rounded border transition-all",
        checked
          ? "border-emerald-400 bg-emerald-400 text-black"
          : "border-white/15 bg-white/3",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
    >
      {checked && <Check className="h-3 w-3" />}
    </button>
  );
});

Checkbox.displayName = "Checkbox";

export { Checkbox };