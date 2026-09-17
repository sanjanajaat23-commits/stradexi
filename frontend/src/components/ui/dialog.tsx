import * as React from "react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

interface DialogContextValue {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const DialogContext = React.createContext<DialogContextValue | null>(null);

function Dialog({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  children,
}: {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (value: boolean) => void;
  children: React.ReactNode;
}) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);

  const open = controlledOpen ?? internalOpen;

  const setOpen = (value: boolean) => {
    setInternalOpen(value);
    onOpenChange?.(value);
  };

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
}

function DialogTrigger({
  children,
  asChild,
}: {
  children: React.ReactElement<{ onClick?: (event: React.MouseEvent) => void }>;
  asChild?: boolean;
}) {
  const { setOpen } = React.useContext(DialogContext)!;

  if (asChild) {
    return React.cloneElement(children, {
      onClick: (event: React.MouseEvent) => {
        children.props.onClick?.(event);
        setOpen(true);
      },
    });
  }

  return (
    <button type="button" onClick={() => setOpen(true)}>
      {children}
    </button>
  );
}

function DialogContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { open, setOpen } = React.useContext(DialogContext)!;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div
        className={cn(
          "relative max-h-[90vh] w-full max-w-lg overflow-auto rounded-2xl border border-white/10 bg-[#0d110f] p-6 shadow-2xl",
          className
        )}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-white/40 transition hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {children}
      </div>
    </div>
  );
}

function DialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mb-5 flex flex-col gap-1", className)}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("text-lg font-semibold text-white", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
};