import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Database,
  GitBranch,
  HeartPulse,
  Layers3,
  ShieldCheck,
  Sparkles,
  Truck,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { WorkflowPipeline } from "@/components/WorkflowPipeline";
import { CommandCenter } from "@/components/CommandCenter";
import { RoiCalculator } from "@/components/RoiCalculator";
import { Marquee } from "@/components/Marquee";
import {
  automationCategories,
  industries,
  portfolioProjects,
  siteConfig,
  technologyStack,
} from "@/lib/content";

const problems = [
  "Copying data between systems",
  "Manual status updates",
  "Resume and document screening",
  "Repetitive CRM entry",
  "Exception monitoring",
  "Follow-up coordination",
];

const workflowBlocks = [
  {
    title: "Capture",
    description: "Collect information from forms, email, APIs, files and operational systems.",
    icon: Database,
  },
  {
    title: "Understand",
    description: "Extract, classify and structure the data using rules and AI where useful.",
    icon: Bot,
  },
  {
    title: "Decide",
    description: "Apply business logic, thresholds, matching rules and human approval points.",
    icon: GitBranch,
  },
  {
    title: "Execute",
    description: "Write updates back into the systems your team already uses.",
    icon: Zap,
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />

      <Marquee
        items={[
          "WORKFLOW AUTOMATION",
          "AI OPERATIONS",
          "HEALTHCARE STAFFING",
          "LOGISTICS",
          "RECRUITING",
          "CRM AUTOMATION",
          "DATA SYSTEMS",
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <Reveal>
            <SectionIntro
              eyebrow="THE PROBLEM"
              title="Your team isn't slow. Your systems are."
              description="Teams lose hours every week moving information between spreadsheets, inboxes, CRMs, ATS platforms and operational tools. STRADEXI turns those repetitive steps into connected workflows."
            />
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <Card className="h-full p-7">
                <div className="font-mono text-[9px] tracking-[0.2em] text-white/25 uppercase">
                  Manual environment
                </div>

                <div className="mt-7 space-y-3">
                  {problems.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/2 px-4 py-3"
                    >
                      <span className="font-mono text-[9px] text-white/20">
                        0{index + 1}
                      </span>
                      <span className="text-sm text-white/50">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-xl border border-red-400/10 bg-red-400/2 p-4">
                  <div className="font-mono text-[9px] tracking-[0.16em] text-red-300/60 uppercase">
                    Operational cost
                  </div>
                  <p className="mt-2 text-xs leading-5 text-white/35">
                    The problem is rarely one big task. It is the accumulation
                    of small repetitive tasks happening all day.
                  </p>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="h-full overflow-hidden">
                <div className="border-b border-white/6 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-mono text-[9px] tracking-[0.2em] text-white/25 uppercase">
                        STRADEXI SYSTEM
                      </div>
                      <h3 className="mt-2 text-xl font-semibold text-white">
                        One workflow. Multiple systems.
                      </h3>
                    </div>

                    <Workflow className="h-5 w-5 text-emerald-300/70" />
                  </div>
                </div>

                <div className="p-5">
                  <WorkflowPipeline />
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
              eyebrow="HOW IT WORKS"
              title="We engineer the system around the work."
              description="Automation should fit your operation, not force the operation into a generic template."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {workflowBlocks.map((block, index) => {
              const Icon = block.icon;

              return (
                <Reveal key={block.title} delay={index * 0.05}>
                  <Card className="group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/15">
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/3">
                        <Icon className="h-5 w-5 text-emerald-300/80" />
                      </div>

                      <span className="font-mono text-[9px] text-white/20">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-7 text-lg font-semibold text-white">
                      {block.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/40">
                      {block.description}
                    </p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-white/5 bg-white/1.2">
        <div className="container-main">
          <Reveal>
            <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <SectionIntro
                eyebrow="LIVE AUTOMATION LAB"
                title="See the system move before you build it."
                description="Use the interactive simulation to understand how triggers, decision logic and connected actions work together."
              />

              <Link
                to="/demo"
                className="flex items-center justify-end gap-2 text-xs font-medium text-emerald-300 transition hover:text-emerald-200"
              >
                OPEN FULL DEMO
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12">
            <CommandCenter />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <Reveal>
            <SectionIntro
              eyebrow="USE CASES"
              title="Built for repetitive operational work."
              description="Start with one process. Then connect the workflows around it."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {industries.map((industry, index) => (
              <Reveal key={industry.slug} delay={index * 0.1}>
                <IndustryCard
                  title={industry.name}
                  description={industry.description}
                  href={`/industries/${industry.slug}`}
                  icon={industry.slug === "logistics" ? Truck : HeartPulse}
                  workflow={industry.workflow}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-main">
          <Reveal>
            <div className="rounded-3xl border border-emerald-400/10 bg-linear-to-br from-emerald-400/6 via-transparent to-transparent p-7 sm:p-10 lg:p-14">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <Badge>15-DAY AUTOMATION SPRINT</Badge>

                  <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    From repetitive process to working system.
                  </h2>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40">
                    We map the workflow, design the logic, build the interfaces
                    and integrations, test edge cases and prepare the system
                    for deployment.
                  </p>
                </div>

                <Link to="/how-it-works">
                  <Button size="lg">
                    SEE THE PROCESS
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-5">
                {[
                  "DISCOVER",
                  "DESIGN",
                  "BUILD",
                  "TEST",
                  "DEPLOY",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="rounded-xl border border-white/7 bg-black/20 p-4"
                  >
                    <span className="font-mono text-[9px] text-emerald-300/60">
                      0{index + 1}
                    </span>
                    <div className="mt-5 text-xs font-medium text-white/70">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-black/20">
        <div className="container-main">
          <Reveal>
            <SectionIntro
              eyebrow="PORTFOLIO"
              title="Real systems. Real implementation patterns."
              description="Selected software projects demonstrating full-stack, AI and data-system capabilities."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {portfolioProjects.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.07}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <SectionIntro
                eyebrow="ECONOMICS"
                title="Know where the manual work is costing you."
                description="Use the calculator to build an illustrative baseline from your team's current workload."
              />

              <div className="lg:pl-10">
                <RoiCalculator />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding border-y border-white/5">
        <div className="container-main">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <Badge variant="outline">TECHNOLOGY</Badge>

                <h2 className="mt-5 max-w-xl text-3xl font-semibold text-white sm:text-4xl">
                  Built with modern application infrastructure.
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-white/40">
                  STRADEXI combines application engineering, APIs, data
                  pipelines, AI services and workflow logic into maintainable
                  systems.
                </p>

                <Link
                  to="/technology"
                  className="mt-7 inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200"
                >
                  Explore the stack
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {technologyStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="rounded-xl border border-white/7 bg-white/2 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white">
                        {tech.name}
                      </span>
                      <span className="font-mono text-[9px] text-white/20">
                        {tech.category}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-white/35">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-white/2 p-8 sm:p-12 lg:p-16">
              <div className="absolute right-[-10%] top-[-30%] h-100 w-100 rounded-full bg-emerald-400/6 blur-[100px]" />

              <div className="relative">
                <Badge>START WITH ONE WORKFLOW</Badge>

                <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Show us the process your team hates doing.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-7 text-white/40">
                  We will map the repetitive steps, identify where systems can
                  take over and define what a practical automation could look
                  like.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link to="/contact">
                    <Button size="xl">
                      BUILD MY AUTOMATION
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>

                  <a
                    href={siteConfig.bookingUrl || siteConfig.bookingFallbackUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="outline" size="xl">
                      BOOK A CALL
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
                  {[
                    "Workflow-first",
                    "Human approval where needed",
                    "Real integrations",
                    "Deployable systems",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs text-white/35"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300/60" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-28">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute left-1/2 top-[18%] h-125 w-125 -translate-x-1/2 rounded-full bg-emerald-400/5.5 blur-[130px]" />

      <div className="container-main relative">
        <div className="grid min-h-[78vh] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-emerald-400" />
                <span className="font-mono text-[10px] tracking-[0.22em] text-emerald-300/80 uppercase">
                  Intelligent workflow systems
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-7 max-w-5xl text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.93] tracking-[-0.055em] text-white">
                Your Business Has Too Much Work That Should Be Automated.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
                STRADEXI designs and deploys intelligent workflow systems that
                eliminate repetitive operational work across staffing,
                logistics, recruiting, and other B2B operations.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact">
                  <Button size="xl">
                    BUILD MY AUTOMATION
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>

                <Link to="/demo">
                  <Button size="xl" variant="outline">
                    SEE THE SYSTEM
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4">
                {[
                  ["01", "Operations"],
                  ["02", "AI"],
                  ["03", "Integrations"],
                ].map(([number, text]) => (
                  <div key={number} className="flex items-center gap-3">
                    <span className="font-mono text-[9px] text-emerald-300/50">
                      {number}
                    </span>
                    <span className="text-xs text-white/35">{text}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative">
            <HeroSystem />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HeroSystem() {
  const nodes = [
    { label: "INPUT", icon: Layers3, x: "4%", y: "18%" },
    { label: "AI", icon: Bot, x: "50%", y: "6%" },
    { label: "RULES", icon: GitBranch, x: "76%", y: "30%" },
    { label: "CRM", icon: Database, x: "88%", y: "62%" },
    { label: "ALERT", icon: ShieldCheck, x: "52%", y: "84%" },
    { label: "OUTPUT", icon: CheckCircle2, x: "13%", y: "67%" },
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-155">
      <div className="absolute inset-[10%] rounded-full border border-emerald-400/10" />
      <div className="absolute inset-[22%] rounded-full border border-white/6" />
      <div className="absolute inset-[34%] rounded-full border border-white/5" />

      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.08),transparent_58%)]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[14%] rounded-full border border-dashed border-emerald-300/10"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[28%] rounded-full border border-dashed border-white/7"
      />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 600">
        <line x1="90" y1="130" x2="300" y2="105" className="stroke-white/10" />
        <line x1="300" y1="105" x2="455" y2="185" className="stroke-emerald-400/15" />
        <line x1="455" y1="185" x2="525" y2="380" className="stroke-white/10" />
        <line x1="525" y1="380" x2="315" y2="505" className="stroke-emerald-400/15" />
        <line x1="315" y1="505" x2="80" y2="405" className="stroke-white/10" />
        <line x1="80" y1="405" x2="90" y2="130" className="stroke-white/10" />

        <circle
          cx="300"
          cy="300"
          r="118"
          className="fill-emerald-400/2.5 stroke-emerald-400/15"
        />
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 items-center justify-center rounded-full border border-emerald-400/20 bg-[#0a0f0c]/90 shadow-[0_0_80px_rgba(52,211,153,0.08)]">
        <div className="text-center">
          <div className="text-xs font-semibold tracking-[0.12em] text-white">
            STRADEXI
          </div>
          <div className="mt-2 font-mono text-[8px] tracking-[0.2em] text-emerald-300/60">
            SYSTEM CORE
          </div>
        </div>
      </div>

      {nodes.map((node, index) => {
        const Icon = node.icon;

        return (
          <motion.div
            key={node.label}
            className="absolute w-23 -translate-x-1/2 -translate-y-1/2"
            style={{ left: node.x, top: node.y }}
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3.5,
              delay: index * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="rounded-xl border border-white/9 bg-[#0b0f0d]/90 p-3 backdrop-blur-xl">
              <Icon className="h-4 w-4 text-emerald-300/80" />
              <div className="mt-2 font-mono text-[8px] tracking-wider text-white/45">
                {node.label}
              </div>
            </div>
          </motion.div>
        );
      })}

      <div className="absolute bottom-[7%] left-[3%] hidden rounded-lg border border-white/6 bg-black/40 p-3 sm:block">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[8px] tracking-wider text-emerald-300/70">
            SYSTEM ACTIVE
          </span>
        </div>
        <div className="mt-2 font-mono text-[9px] text-white/25">
          workflow_engine / v1
        </div>
      </div>
    </div>
  );
}

function IndustryCard({
  title,
  description,
  href,
  icon: Icon,
  workflow,
}: {
  title: string;
  description: string;
  href: string;
  icon: typeof HeartPulse;
  workflow: string[];
}) {
  return (
    <Card className="group overflow-hidden p-0">
      <div className="p-7">
        <div className="flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/10 bg-emerald-400/4">
            <Icon className="h-5 w-5 text-emerald-300" />
          </div>

          <ArrowUpRight className="h-4 w-4 text-white/20 transition group-hover:text-emerald-300" />
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-white">{title}</h3>

        <p className="mt-3 max-w-xl text-sm leading-6 text-white/40">
          {description}
        </p>

        <Link
          to={href}
          className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-emerald-300"
        >
          VIEW WORKFLOW
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="border-t border-white/6 bg-white/1.5 px-7 py-5">
        <div className="grid gap-2 sm:grid-cols-2">
          {workflow.slice(0, 6).map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              <span className="font-mono text-[8px] text-emerald-300/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[11px] text-white/35">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof portfolioProjects)[number];
}) {
  return (
    <Card className="group h-full p-6">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/3">
          <BriefcaseBusiness className="h-4 w-4 text-emerald-300/80" />
        </div>

        <span className="font-mono text-[8px] text-white/20 uppercase">
          {project.type}
        </span>
      </div>

      <h3 className="mt-6 text-lg font-semibold text-white">
        {project.name}
      </h3>

      <p className="mt-3 text-sm leading-6 text-white/40">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 5).map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/7 px-2 py-1 font-mono text-[8px] text-white/30"
          >
            {item}
          </span>
        ))}
      </div>

      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-xs text-white/35 transition hover:text-emerald-300"
        >
          VIEW REPOSITORY
          <ArrowUpRight className="h-3 w-3" />
        </a>
      )}
    </Card>
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
      <div className="font-mono text-[9px] tracking-[0.22em] text-emerald-300/60 uppercase">
        {eyebrow}
      </div>

      <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40">
        {description}
      </p>
    </div>
  );
}