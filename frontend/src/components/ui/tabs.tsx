import * as React from "react";

import { cn } from "@/lib/utils";

interface TabsContextValue {
  value: string;
  setValue: (value: string) => void;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabs() {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error("Tabs components must be used inside <Tabs>");
  }

  return context;
}

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}

function Tabs({ defaultValue, children, className }: TabsProps) {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

function TabsList({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/3 p-1",
        className
      )}
    >
      {children}
    </div>
  );
}

function TabsTrigger({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { value: activeValue, setValue } = useTabs();

  return (
    <button
      type="button"
      onClick={() => setValue(value)}
      className={cn(
        "rounded-md px-3.5 py-2 text-xs font-medium transition-all",
        activeValue === value
          ? "bg-emerald-400 text-black"
          : "text-white/50 hover:bg-white/5 hover:text-white",
        className
      )}
    >
      {children}
    </button>
  );
}

function TabsContent({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { value: activeValue } = useTabs();

  if (value !== activeValue) return null;

  return <div className={className}>{children}</div>;
}

export { Tabs, TabsList, TabsTrigger, TabsContent };