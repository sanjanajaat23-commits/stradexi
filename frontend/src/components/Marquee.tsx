import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
}

export function Marquee({ items, className }: MarqueeProps) {
  const repeated = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-white/6 py-4",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-[#080b09] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-[#080b09] to-transparent" />

      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10">
        {repeated.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-10 whitespace-nowrap"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] text-white/30 uppercase">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-emerald-400/60" />
          </div>
        ))}
      </div>
    </div>
  );
}