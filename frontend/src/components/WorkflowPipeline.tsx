import { motion } from "framer-motion";
import {
  Bell,
  CheckCircle2,
  Database,
  FileSearch,
  GitBranch,
  MessageSquare,
  UserPlus,
  Zap,
} from "lucide-react";

const nodes = [
  {
    label: "NEW CANDIDATE",
    icon: UserPlus,
    meta: "Inbound",
  },
  {
    label: "AI EXTRACT",
    icon: FileSearch,
    meta: "Parsing",
  },
  {
    label: "SCREEN",
    icon: CheckCircle2,
    meta: "Scoring",
  },
  {
    label: "MATCH",
    icon: GitBranch,
    meta: "Rules + AI",
  },
  {
    label: "NOTIFY",
    icon: Bell,
    meta: "Recruiter",
  },
  {
    label: "CRM UPDATE",
    icon: Database,
    meta: "Sync",
  },
  {
    label: "FOLLOW-UP",
    icon: MessageSquare,
    meta: "Sequence",
  },
];

export function WorkflowPipeline() {
  return (
    <div className="relative rounded-2xl border border-white/8 bg-black/25 p-4 shadow-[0_0_80px_rgba(16,185,129,0.05)]">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
          AUTOMATION PIPELINE
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          LIVE
        </div>
      </div>

      <div className="flex flex-col gap-2 lg:flex-row lg:items-stretch">
        {nodes.map((node, index) => {
          const Icon = node.icon;

          return (
            <div
              key={node.label}
              className="flex flex-1 items-center gap-2 lg:contents"
            >
              <motion.div
                initial={{ opacity: 0.5 }}
                animate={{
                  opacity: [0.65, 1, 0.65],
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2.8,
                  delay: index * 0.18,
                  repeat: Infinity,
                }}
                className="group relative flex min-h-20.5 flex-1 flex-col justify-between rounded-xl border border-white/8 bg-white/2.5 p-3 transition-colors hover:border-emerald-400/25 hover:bg-emerald-400/2.5"
              >
                <div className="flex items-start justify-between">
                  <Icon className="h-4 w-4 text-emerald-300/80" />
                  <span className="font-mono text-[8px] text-white/20">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <div className="text-[10px] font-semibold tracking-wide text-white/80">
                    {node.label}
                  </div>
                  <div className="mt-1 text-[9px] text-white/25">
                    {node.meta}
                  </div>
                </div>
              </motion.div>

              {index < nodes.length - 1 && (
                <div className="hidden items-center lg:flex">
                  <Zap className="h-3 w-3 text-emerald-400/30" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}