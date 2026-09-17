import { Check, LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";

interface DemoStepProps {
  index: number;
  title: string;
  description: string;
  active: boolean;
  complete: boolean;
}

export function DemoStep({
  index,
  title,
  description,
  active,
  complete,
}: DemoStepProps) {
  return (
    <motion.div
      layout
      className="flex gap-4"
      animate={{ opacity: active || complete ? 1 : 0.45 }}
    >
      <div className="flex flex-col items-center">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full border text-[10px] font-mono transition-all ${
            complete
              ? "border-emerald-400 bg-emerald-400 text-black"
              : active
              ? "border-emerald-400/50 bg-emerald-400/10 text-emerald-300"
              : "border-white/10 bg-white/3 text-white/25"
          }`}
        >
          {complete ? (
            <Check className="h-3.5 w-3.5" />
          ) : active ? (
            <LoaderCircle className="h-3.5 w-3.5 animate-spin" />
          ) : (
            String(index + 1).padStart(2, "0")
          )}
        </div>

        {index < 4 && (
          <div className="mt-2 h-10 w-px bg-white/6" />
        )}
      </div>

      <div className="pb-7">
        <div className="text-sm font-medium text-white">{title}</div>
        <div className="mt-1 max-w-lg text-xs leading-5 text-white/40">
          {description}
        </div>
      </div>
    </motion.div>
  );
}