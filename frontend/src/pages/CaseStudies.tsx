import { useState } from "react";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Database,
  FileSearch,
  GitBranch,
  Play,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DemoStep } from "@/components/DemoStep";
import { Reveal } from "@/components/Reveal";
import { healthcareDemo } from "@/lib/demo";
import { useDemoRun } from "@/hooks/useDemoRun";

export default function Demo() {
  const { running, step, complete, run, reset } = useDemoRun();
  const [industry, setIndustry] = useState<"healthcare" | "logistics">(
    "healthcare"
  );

  const steps =
    industry === "healthcare"
      ? healthcareDemo
      : [
          {
            id: "update",
            title: "Shipment Update",
            description: "A shipment event enters the workflow.",
          },
          {
            id: "exception",
            title: "Exception Detected",
            description: "Rules determine whether the event needs attention.",
          },
          {
            id: "alert",
            title: "Operations Alert",
            description: "The right operator is notified.",
          },
          {
            id: "tms",
            title: "TMS Updated",
            description: "The operational system receives the structured update.",
          },
          {
            id: "customer",
            title: "Customer Notification",
            description: "The relevant customer communication is prepared.",
          },
        ];

  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/5 pt-36 pb-16">
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="container-main relative">
          <Reveal>
            <div className="flex items-center justify-between gap-5">
              <Badge>LIVE DEMO ENVIRONMENT</Badge>

              <span className="font-mono text-[9px] text-white/20">
                SIMULATED WORKFLOW
              </span>
            </div>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tighter text-white sm:text-6xl">
              See what an automated operation can feel like.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/40">
              Run a simulated workflow and watch each operational step execute
              in sequence.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                setIndustry("healthcare");
                reset();
              }}
              className={`rounded-lg border px-4 py-2 text-xs transition ${
                industry === "healthcare"
                  ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                  : "border-white/10 text-white/40"
              }`}
            >
              HEALTHCARE STAFFING
            </button>

            <button
              type="button"
              onClick={() => {
                setIndustry("logistics");
                reset();
              }}
              className={`rounded-lg border px-4 py-2 text-xs transition ${
                industry === "logistics"
                  ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                  : "border-white/10 text-white/40"
              }`}
            >
              LOGISTICS
            </button>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <Card className="p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-mono text-[9px] tracking-[0.18em] text-white/25 uppercase">
                      WORKFLOW ENGINE
                    </div>

                    <h2 className="mt-2 text-xl font-semibold text-white">
                      {industry === "healthcare"
                        ? "Candidate-to-job matching"
                        : "Shipment exception handling"}
                    </h2>
                  </div>

                  <Activity className="h-5 w-5 text-emerald-300/60" />
                </div>

                <div className="mt-8">
                  {steps.map((item, index) => (
                    <DemoStep
                      key={item.id}
                      index={index}
                      title={item.title}
                      description={item.description}
                      active={running && step === index}
                      complete={complete || step > index}
                    />
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  <Button
                    size="lg"
                    className="flex-1"
                    disabled={running}
                    onClick={run}
                  >
                    <Play className="h-4 w-4" />
                    {running ? "RUNNING..." : "RUN WORKFLOW"}
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    onClick={reset}
                    disabled={running}
                  >
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>

                {complete && (
                  <div className="mt-4 flex items-center gap-3 rounded-xl border border-emerald-400/10 bg-emerald-400/2.5 p-4">
                    <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                    <div>
                      <div className="text-sm font-medium text-white">
                        Workflow simulation complete
                      </div>
                      <div className="mt-1 text-xs text-white/35">
                        All demo nodes have executed.
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="p-7">
                <div className="font-mono text-[9px] tracking-[0.18em] text-white/25 uppercase">
                  SYSTEM VIEW
                </div>

                <div className="mt-7 space-y-3">
                  {[
                    {
                      label: "INPUT",
                      value: "Inbound event",
                      icon: Database,
                    },
                    {
                      label: "PARSE",
                      value: "Structured data",
                      icon: FileSearch,
                    },
                    {
                      label: "DECIDE",
                      value: "Rules + AI",
                      icon: GitBranch,
                    },
                    {
                      label: "CONTROL",
                      value: "Human approval",
                      icon: ShieldCheck,
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-4 rounded-xl border border-white/6 bg-white/2 p-4"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10">
                          <Icon className="h-4 w-4 text-emerald-300/70" />
                        </div>

                        <div>
                          <div className="font-mono text-[8px] tracking-wider text-white/25">
                            {item.label}
                          </div>
                          <div className="mt-1 text-sm text-white/55">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-xl border border-white/6 bg-black/20 p-5">
                  <div className="text-sm font-medium text-white">
                    This is a simulation.
                  </div>
                  <p className="mt-2 text-xs leading-5 text-white/35">
                    The interface demonstrates the workflow pattern. Production
                    systems are built around each client's real data sources,
                    rules, permissions and integrations.
                  </p>
                </div>

                <Link to="/contact" className="mt-6 inline-block">
                  <Button variant="outline">
                    BUILD YOUR VERSION
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            </Reveal>
          </div>

          <div className="mt-8">
            <Link to="/" className="inline-flex items-center gap-2 text-xs text-white/30 hover:text-white">
              <ArrowLeft className="h-3.5 w-3.5" />
              BACK HOME
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}