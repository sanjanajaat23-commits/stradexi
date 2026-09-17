import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40",
  {
    variants: {
      variant: {
        default:
          "bg-emerald-400 text-black shadow-[0_0_24px_rgba(52,211,153,0.18)] hover:bg-emerald-300",
        secondary:
          "bg-white/6 text-white border border-white/10 hover:bg-white/10",
        outline:
          "border border-white/15 bg-transparent text-white hover:border-emerald-400/50 hover:bg-emerald-400/6",
        ghost:
          "bg-transparent text-white/70 hover:bg-white/5 hover:text-white",
        destructive:
          "bg-red-500 text-white hover:bg-red-400",
        link:
          "bg-transparent p-0 text-emerald-300 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-6 text-sm",
        xl: "h-14 rounded-lg px-7 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };