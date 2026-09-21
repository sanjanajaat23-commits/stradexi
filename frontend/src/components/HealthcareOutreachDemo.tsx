import { useState } from "react";
import { ArrowRight, CheckCircle2, FileCheck2, Play, UserRoundCheck, Workflow } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const steps = [
  { label: "Candidate Applies", detail: "Resume received", icon: Workflow },
  { label: "AI Extract", detail: "Profile structured", icon: FileCheck2 },
  { label: "Screen", detail: "Requirements checked", icon: UserRoundCheck },
  { label: "Credential Check", detail: "Documents + status", icon: FileCheck2 },
  { label: "Job Match", detail: "94% role fit", icon: CheckCircle2 },
  { label: "Recruiter Alert", detail: "Action routed", icon: Workflow },
  { label: "Follow-up", detail: "Reminder created", icon: ArrowRight },
  { label: "ATS Update", detail: "Status synchronized", icon: CheckCircle2 },
];

export default function HealthcareOutreachDemo() {
  const [mode, setMode] = useState<"manual" | "automation">("automation");
  const [running, setRunning] = useState(false);
  const [active, setActive] = useState(-1);

  const run = () => {
    if (running) return;
    setRunning(true);
    setActive(-1);

    steps.forEach((_, index) => {
      window.setTimeout(() => {
        setActive(index);

        if (index === steps.length - 1) {
          window.setTimeout(() => {
            setRunning(false);
          }, 450);
        }
      }, index * 550);
    });
  };

  return (
    <section id="healthcare-demo" className="section-padding pt-0">
      <div className="container-main">
        <div className="mb-8">
          <div className="font-mono text-[9px] tracking-[0.2em] text-emerald-300/70 uppercase">
            Healthcare Staffing Demo
          </div>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl lg:text-5xl">
            See the workflow before we build it.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/45">
            A simulated candidate journey showing where STRADEXI can remove repetitive work between recruiting, credentialing and operations.
          </p>
        </div>

        <Card className="overflow-hidden border border-emerald-400/10 bg-[#0d1715]/90 p-5 sm:p-7">
          <div className="flex flex-col gap-4 border-b border-white/6 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-mono text-[9px] tracking-[0.18em] text-white/25 uppercase">
                Sample candidate
              </div>
              <div className="mt-1 text-lg font-semibold text-white">
                Aisha Khan · ICU Registered Nurse
              </div>
              <div className="mt-1 text-xs text-white/35">
                Chicago · immediate availability · fictional demo data
              </div>
            </div>

            <Button
              onClick={run}
              disabled={running}
              className="rounded-full bg-[#57f3c4] text-[#02130f] hover:bg-[#7ff9d1]"
            >
              <Play className="h-4 w-4" />
              {running ? "RUNNING..." : "RUN WORKFLOW"}
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isDone = active > index;
              const isActive = active === index;

              return (
                <div key={item.label} className="flex items-center gap-2">
                  <div
                    className={[
                      "min-w-[145px] rounded-xl border p-3 transition",
                      isActive
                        ? "border-emerald-300/60 bg-emerald-300/10 shadow-[0_0_24px_rgba(52,211,153,0.14)]"
                        : isDone
                          ? "border-emerald-300/20 bg-emerald-300/5"
                          : "border-white/7 bg-white/2",
                    ].join(" ")}
                  >
                    <Icon className={["h-4 w-4", isActive || isDone ? "text-emerald-300" : "text-white/30"].join(" ")} />
                    <div className="mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-white/75">
                      {item.label}
                    </div>
                    <div className="mt-1 text-[10px] text-white/35">{item.detail}</div>
                  </div>

                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden h-4 w-4 text-white/15 xl:block" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-7 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-xl border border-white/7 bg-black/15 p-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setMode("automation")}
                  className={mode === "automation"
                    ? "rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-emerald-100"
                    : "rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/45"}
                >
                  STRADEXI
                </button>
                <button
                  type="button"
                  onClick={() => setMode("manual")}
                  className={mode === "manual"
                    ? "rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-amber-100"
                    : "rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/45"}
                >
                  Manual
                </button>
              </div>

              <div className="mt-4 space-y-3">
                {(mode === "automation"
                  ? [
                      "Extract candidate data automatically",
                      "Trigger missing-credential reminders",
                      "Route candidate to the correct recruiter",
                      "Sync status and schedule follow-up",
                    ]
                  : [
                      "Recruiter downloads and re-enters resume data",
                      "Credentialing chases missing documents",
                      "Teams exchange status updates manually",
                      "Someone updates the ATS and follow-up",
                    ]
                ).map((item) => (
                  <div key={item} className="flex gap-2 text-sm leading-6 text-white/50">
                    <span className={mode === "automation" ? "mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" : "mt-2 h-1.5 w-1.5 rounded-full bg-amber-300"} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/7 bg-white/2 p-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-white/6 bg-black/10 p-4">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-white/30">Credential status</div>
                  <div className="mt-2 text-sm font-semibold text-white">3 verified · 1 pending</div>
                </div>
                <div className="rounded-lg border border-white/6 bg-black/10 p-4">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-white/30">Best match</div>
                  <div className="mt-2 text-sm font-semibold text-white">Chicago ICU RN · 94%</div>
                </div>
                <div className="rounded-lg border border-white/6 bg-black/10 p-4 sm:col-span-2">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-white/30">Automation result</div>
                  <div className="mt-2 text-sm leading-6 text-white/65">
                    Recruiter is notified only when the candidate is ready for the next decision.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 text-xs text-white/25">
            Simulation only. Production workflows use the client's real systems, permissions and business rules.
          </div>
        </Card>
      </div>
    </section>
  );
}
