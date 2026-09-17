import { useMemo, useState } from "react";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  CircleDot,
  Clock3,
  Database,
  Gauge,
  Layers3,
  Play,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const defaultSteps = [
  "Receive trigger",
  "Extract structured data",
  "Apply decision logic",
  "Update connected system",
  "Notify operator",
];

export function CommandCenter() {
  const [running, setRunning] = useState(false);
  const [completed, setCompleted] = useState<number[]>([]);

  const progress = useMemo(() => {
    if (completed.length === 0) return 0;
    return Math.round((completed.length / defaultSteps.length) * 100);
  }, [completed]);

  const runWorkflow = () => {
    if (running) return;

    setRunning(true);
    setCompleted([]);

    defaultSteps.forEach((_, index) => {
      window.setTimeout(() => {
        setCompleted((current) => [...current, index]);

        if (index === defaultSteps.length - 1) {
          window.setTimeout(() => setRunning(false), 500);
        }
      }, 550 * (index + 1));
    });
  };

  return (
    <Card className="overflow-hidden">
      <div className="border-b border-white/7 p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-emerald-300 uppercase">
                Live demo environment
              </span>
            </div>

            <h3 className="mt-2 text-xl font-semibold text-white">
              Workflow Command Center
            </h3>

            <p className="mt-1 max-w-xl text-sm text-white/45">
              A simulated automation environment showing how a process moves
              from trigger to system update.
            </p>
          </div>

          <Badge variant="outline">SIMULATION</Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border-b border-white/7 p-5 lg:border-b-0 lg:border-r">
          <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              {
                label: "THROUGHPUT",
                value: running ? "ACTIVE" : "12.8K",
                icon: Gauge,
              },
              {
                label: "QUEUE",
                value: running ? "RUNNING" : "03",
                icon: Layers3,
              },
              {
                label: "LATENCY",
                value: "1.2s",
                icon: Clock3,
              },
              {
                label: "UPTIME",
                value: "99.9%",
                icon: Activity,
              },
            ].map((metric) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.label}
                  className="rounded-xl border border-white/6 bg-black/20 p-3"
                >
                  <Icon className="h-3.5 w-3.5 text-white/25" />
                  <div className="mt-2 font-mono text-xs text-white">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-[8px] tracking-wider text-white/25">
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-xl border border-white/6 bg-black/15">
            <div className="border-b border-white/5 px-4 py-3 font-mono text-[9px] tracking-[0.15em] text-white/30 uppercase">
              Event stream
            </div>

            <div className="divide-y divide-white/4">
              {defaultSteps.map((step, index) => {
                const done = completed.includes(index);

                return (
                  <div
                    key={step}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 transition-all",
                      done && "bg-emerald-400/2.5"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      {done ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      ) : running && index === completed.length ? (
                        <RefreshCw className="h-4 w-4 animate-spin text-emerald-300/80" />
                      ) : (
                        <CircleDot className="h-4 w-4 text-white/15" />
                      )}

                      <span
                        className={cn(
                          "text-xs",
                          done ? "text-white/80" : "text-white/45"
                        )}
                      >
                        {step}
                      </span>
                    </div>

                    <span className="font-mono text-[9px] text-white/20">
                      {done ? "DONE" : "WAIT"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="mb-5 rounded-xl border border-emerald-400/10 bg-emerald-400/2.5 p-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-300" />
              <span className="text-xs font-medium text-white/70">
                System integrity
              </span>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/6">
              <div
                className="h-full rounded-full bg-emerald-400 transition-all duration-500"
                style={{ width: `${Math.max(progress, 6)}%` }}
              />
            </div>

            <div className="mt-2 flex justify-between font-mono text-[9px] text-white/25">
              <span>{progress}% COMPLETED</span>
              <span>SIMULATED</span>
            </div>
          </div>

          <div className="space-y-2">
            <Button
              className="w-full"
              size="lg"
              onClick={runWorkflow}
              disabled={running}
            >
              <Play className="h-4 w-4" />
              {running ? "WORKFLOW RUNNING..." : "RUN WORKFLOW"}
            </Button>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setCompleted([]);
                setRunning(false);
              }}
            >
              <RefreshCw className="h-4 w-4" />
              RESET DEMO
            </Button>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-white/6 p-3">
              <Database className="h-4 w-4 text-white/30" />
              <div className="mt-2 text-xs text-white/65">
                Connected systems
              </div>
              <div className="mt-1 font-mono text-[10px] text-emerald-300">
                07
              </div>
            </div>

            <div className="rounded-lg border border-white/6 p-3">
              <ArrowRight className="h-4 w-4 text-white/30" />
              <div className="mt-2 text-xs text-white/65">
                Actions executed
              </div>
              <div className="mt-1 font-mono text-[10px] text-emerald-300">
                {completed.length.toString().padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}