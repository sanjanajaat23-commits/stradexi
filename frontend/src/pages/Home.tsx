import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Database,
  GitBranch,
  HeartPulse,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { industries, portfolioProjects } from "@/lib/content";
import HealthcareOutreachDemo from "@/components/HealthcareOutreachDemo";

const workflowStages = [
  "Email",
  "Spreadsheet",
  "ATS",
  "Slack",
  "CRM",
  "Email",
  "Spreadsheet",
];

const sprintSteps = [
  { step: "01", title: "DISCOVER", period: "Days 1–3", text: "Map the existing process." },
  { step: "02", title: "DESIGN", period: "Days 4–6", text: "Find bottlenecks and automation opportunities." },
  { step: "03", title: "BUILD", period: "Days 7–11", text: "Connect systems, APIs, databases and AI." },
  { step: "04", title: "TEST", period: "Days 12–13", text: "Validate edge cases and failure handling." },
  { step: "05", title: "DEPLOY", period: "Days 14–15", text: "Put the workflow into production." },
];

const proofMetrics = [
  { value: "42", label: "new resumes" },
  { value: "17", label: "follow-ups" },
  { value: "9", label: "facility requests" },
  { value: "31", label: "spreadsheet updates" },
  { value: "14", label: "unanswered messages" },
  { value: "8", label: "credential checks" },
];

const workflow = [
  "NEW CANDIDATE",
  "AI EXTRACT",
  "SCREEN",
  "MATCH",
  "NOTIFY",
  "CRM UPDATE",
  "FOLLOW-UP",
];

const automationTypes = [
  "Operations",
  "Recruiting",
  "Healthcare Staffing",
  "Logistics",
  "Sales / CRM",
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />

      <HealthcareOutreachDemo />

      <section className="relative border-y border-white/5 py-5">
        <div className="overflow-hidden">
          <div className="flex min-w-max gap-10 whitespace-nowrap px-4 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/45">
            {[
              "WORKFLOW SYSTEMS",
              "AI EXTRACTION",
              "ATS SYNC",
              "CREDENTIAL CHECKS",
              "TMS UPDATES",
              "LEAD ROUTING",
              "FOLLOW-UPS",
              "REPORTING",
              "EXCEPTION HANDLING",
            ].map((item, index) => (
              <span key={`${item}-${index}`} className="inline-block">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <Reveal>
            <SectionIntro
              eyebrow="01"
              title="Your team isn't slow. Your systems are."
              description="This is what a normal Tuesday looks like inside an operations team — work that exists only because the tools don't talk to each other."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_1.2fr]">
            <Reveal>
              <Card className="h-full border border-white/6 bg-[#0d1715]/90 p-7">
                <div className="font-mono text-[9px] tracking-[0.22em] text-white/25 uppercase">
                  The Problem
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {workflowStages.map((step, index) => (
                    <div
                      key={`${step}-${index}`}
                      className="flex items-center gap-2 rounded-full border border-white/6 bg-white/2 px-3 py-2 text-[11px] text-white/55"
                    >
                      <span>{step}</span>
                      {index < workflowStages.length - 1 && (
                        <ArrowRight className="h-3.5 w-3.5 text-white/25" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-xl border border-emerald-400/10 bg-[#08120f] p-4">
                  <div className="font-mono text-[9px] tracking-[0.2em] text-emerald-300/70 uppercase">
                    STRADEXI: One connected workflow
                  </div>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {proofMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/6 bg-[#0d1715]/80 p-5">
                    <div className="font-mono text-[10px] tracking-[0.2em] text-emerald-300/70 uppercase">
                      {metric.value}
                    </div>
                    <div className="mt-4 text-sm text-white/60">{metric.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-main">
          <Reveal>
            <SectionIntro
              eyebrow="02"
              title="Watch repetitive work disappear."
              description="Same input. One connected system. Every step executes in sequence, with the recruiter only stepping in where judgment actually matters."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <Card className="h-full border border-white/6 bg-[#0d1715]/90 p-7">
                <div className="flex gap-2">
                  <button className="rounded-full border border-white/10 bg-white/3 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white/60">
                    Manual
                  </button>
                  <button className="rounded-full border border-emerald-300/25 bg-emerald-300/8 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-emerald-200">
                    STRADEXI
                  </button>
                </div>

                <p className="mt-6 text-sm leading-7 text-white/45">
                  Same input. One connected system. Every step executes in sequence, with the recruiter only stepping in where judgment actually matters.
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-white/6 pt-4 text-[11px] uppercase tracking-[0.18em] text-white/40">
                  <span>7 steps</span>
                  <span>~40 sec machine time</span>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.08}>
              <Card className="border border-emerald-400/10 bg-[linear-gradient(135deg,rgba(16,185,129,0.09),rgba(9,20,17,0.9))] p-7">
                <div className="mb-5 flex items-center justify-between">
                  <div className="font-mono text-[9px] tracking-[0.18em] text-emerald-200/80 uppercase">
                    standby
                  </div>
                  <button className="flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-emerald-100">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                    Run Workflow
                  </button>
                </div>

                <div className="space-y-4">
                  {workflow.map((step, index) => (
                    <div key={step} className="flex items-center gap-4">
                      <div className="relative flex h-4 w-4 items-center justify-center">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#69f5c7] shadow-[0_0_14px_rgba(105,245,199,0.8)]" />
                        {index < workflow.length - 1 && (
                          <span className="absolute left-1/2 top-full h-5 w-px -translate-x-1/2 bg-white/10" />
                        )}
                      </div>
                      <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-white/70">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-main">
          <Reveal>
            <SectionIntro
              eyebrow="03"
              title="From messy process to deployed system in 15 days."
              description=""
            />
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {sprintSteps.map((item) => (
              <Card key={item.title} className="border border-white/6 bg-[#0d1715]/80 p-5">
                <div className="font-mono text-[9px] tracking-[0.2em] text-emerald-300/70 uppercase">
                  {item.step}
                </div>
                <div className="mt-5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/65">
                  {item.title}
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/35">
                  {item.period}
                </div>
                <p className="mt-4 text-sm leading-6 text-white/45">{item.text}</p>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link to="/contact">
              <Button className="rounded-full bg-[#57f3c4] px-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#02130f] shadow-[0_0_30px_rgba(87,243,196,0.45)] hover:bg-[#7ff9d1]">
                Start a 15-Day Sprint
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-main">
          <Reveal>
            <SectionIntro
              eyebrow="04"
              title="Built where the repetitive work is heaviest."
              description=""
            />
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {industries.map((industry, index) => (
              <Link key={industry.slug} to={`/industries/${industry.slug}`} className="block h-full">
                <Card className="group h-full overflow-hidden border border-white/6 bg-[linear-gradient(180deg,#0d1715,#0b1210)] p-0">
                  <div className="h-36 border-b border-white/6 bg-[radial-gradient(circle_at_20%_20%,rgba(74,222,128,0.18),transparent_25%),linear-gradient(135deg,#0c1a17,#0b1110)]" />
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-mono text-[9px] tracking-[0.22em] text-emerald-300/70 uppercase">
                          {index === 0 ? "Healthcare Staffing" : "Logistics"}
                        </div>
                        <h3 className="mt-3 text-2xl font-semibold text-white">{industry.name}</h3>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-white/20 transition group-hover:text-emerald-300" />
                    </div>
                    <p className="mt-4 text-sm leading-6 text-white/45">{industry.description}</p>
                    <div className="mt-5 text-[10px] uppercase tracking-[0.2em] text-white/35">
                      {index === 0 ? "8-stage workflow" : "7-stage workflow"}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-main">
          <Reveal>
            <SectionIntro
              eyebrow="05"
              title="What is the manual way costing you?"
              description=""
            />
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="border border-white/6 bg-[#0d1715]/85 p-6">
              <div className="space-y-5">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">Employees doing the process</div>
                  <div className="mt-2 h-2 rounded-full bg-white/6">
                    <div className="h-2 w-[45%] rounded-full bg-emerald-400" />
                  </div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">Hours / week per employee</div>
                  <div className="mt-2 h-2 rounded-full bg-white/6">
                    <div className="h-2 w-[62%] rounded-full bg-emerald-400" />
                  </div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">Hourly cost ($)</div>
                  <div className="mt-2 h-2 rounded-full bg-white/6">
                    <div className="h-2 w-[78%] rounded-full bg-emerald-400" />
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm leading-6 text-white/45">
                Illustrative estimate — assumes ~85% of the manual effort is automated. Not a guarantee of savings.
              </p>
            </Card>

            <Card className="border border-emerald-400/10 bg-[linear-gradient(135deg,rgba(16,185,129,0.08),rgba(9,20,17,0.9))] p-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/6 pb-3">
                  <span className="text-white/45">Current annual cost</span>
                  <span className="text-2xl font-semibold text-white">$117,000</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/6 pb-3">
                  <span className="text-white/45">Estimated automated cost</span>
                  <span className="text-2xl font-semibold text-white">$17,550</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/6 pb-3">
                  <span className="text-white/45">Potential annual savings</span>
                  <span className="text-2xl font-semibold text-white">$99,450</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/45">Estimated ROI</span>
                  <span className="text-3xl font-semibold text-emerald-300">5.7×</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-main">
          <Reveal>
            <SectionIntro
              eyebrow="06"
              title="Pick a function. See the workflow."
              description=""
            />
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-3">
            {automationTypes.map((item, index) => (
              <button
                key={item}
                className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.18em] ${
                  index === 0
                    ? "border-emerald-300/25 bg-emerald-300/10 text-emerald-100"
                    : "border-white/10 bg-white/2 text-white/50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {portfolioProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050807] pt-28">
      <div className="absolute inset-0 bg-[#050807]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(94,255,191,0.25),transparent_34%),radial-gradient(circle_at_50%_62%,rgba(94,255,191,0.18),transparent_32%),linear-gradient(180deg,#050807_0%,#06100e_100%)]" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="container-main relative z-10 pb-14 pt-6">
        <div className="grid min-h-[70vh] items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="pt-8">
            <Reveal>
              <h1 className="max-w-[840px] text-[clamp(4rem,7vw,9rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-white/95">
                Your business has
                <span className="block">too much work that</span>
                <span className="block text-white/85">should be</span>
                <span className="block text-[#aefddd]">automated.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-8 max-w-[760px] text-[clamp(1.1rem,1.5vw,1.7rem)] leading-[1.35] text-[#b7d0c6]">
                STRADEXI designs and deploys intelligent workflow systems that
                eliminate repetitive operational work across staffing,
                logistics, recruiting, and other B2B operations.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact">
                  <Button className="h-14 rounded-full bg-[#57f3c4] px-6 text-[11px] font-semibold tracking-[0.14em] text-[#02130f] shadow-[0_0_30px_rgba(87,243,196,0.45)] hover:bg-[#7ff9d1]">
                    Build My Automation
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>

                <Link to="/demo">
                  <Button variant="outline" className="h-14 rounded-full border border-white/15 bg-white/3 px-6 text-[11px] font-semibold tracking-[0.14em] text-white hover:border-emerald-300/50 hover:bg-emerald-400/5">
                    Try the Live Demo
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <div className="relative ml-auto flex w-full max-w-[470px] items-center justify-center pb-10 pt-4">
              <div className="absolute inset-0 rounded-[22px] border border-emerald-300/10 bg-[linear-gradient(135deg,rgba(21,255,185,0.22),rgba(10,30,26,0.9)_52%,rgba(6,18,16,0.88))] shadow-[0_0_90px_rgba(52,211,153,0.10)]" />

              <div className="relative w-full rounded-[22px] border border-emerald-300/10 bg-[#0a261f]/55 p-6 backdrop-blur-sm">
                <div className="mb-8 flex items-center justify-between gap-3">
                  <span className="font-mono text-[9px] font-medium tracking-[0.26em] text-emerald-100/90 uppercase">
                    Standby
                  </span>

                  <button className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-[#59f8ca]/10 px-3 py-2 text-[9px] font-medium tracking-[0.18em] text-emerald-100 uppercase shadow-[0_0_20px_rgba(89,248,202,0.12)]">
                    <span className="inline-flex h-2 w-2 rounded-full bg-[#59f8ca] shadow-[0_0_10px_rgba(89,248,202,0.9)]" />
                    Run Live Demo
                  </button>
                </div>

                <div className="space-y-5">
                  {workflow.map((step, index) => (
                    <div key={step} className="flex items-center gap-4">
                      <div className="relative flex h-4 w-4 items-center justify-center">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#59f8ca] shadow-[0_0_10px_rgba(89,248,202,0.9)]" />
                        {index < workflow.length - 1 && (
                          <span className="absolute left-1/2 top-full h-6 w-px -translate-x-1/2 bg-white/10" />
                        )}
                      </div>

                      <span className="text-[11px] font-medium tracking-[0.18em] text-white/75 uppercase">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="font-mono text-[9px] tracking-[0.18em] text-emerald-300/70 uppercase">
        {eyebrow}
      </div>
      <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/45">{description}</p>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof portfolioProjects)[number];
  index: number;
}) {
  const icons = [Database, Bot, GitBranch];
  const Icon = icons[index % icons.length];

  return (
    <Card className="group h-full border border-white/6 bg-[#0d1715]/80 p-5">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/10 bg-emerald-400/4">
          <Icon className="h-4 w-4 text-emerald-300/80" />
        </div>
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
          {project.type}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold text-white">{project.name}</h3>
      <p className="mt-3 text-sm leading-6 text-white/45">{project.description}</p>

      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        {project.stack.slice(0, 4).map((item) => (
          <div key={item} className="rounded-lg border border-white/6 bg-white/2 px-3 py-2 text-[11px] text-white/55">
            {item}
          </div>
        ))}
      </div>
    </Card>
  );
}
