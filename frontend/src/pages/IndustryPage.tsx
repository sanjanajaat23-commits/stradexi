import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Boxes,
  CheckCircle2,
  Database,
  GitBranch,
  Layers3,
  Network,
  Settings2,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { automationCategories } from "@/lib/content";

const architecture = [
  {
    title: "Trigger layer",
    text: "Capture events from forms, email, APIs, databases and application events.",
    icon: Zap,
  },
  {
    title: "Intelligence layer",
    text: "Parse documents, classify information and apply AI where it creates useful leverage.",
    icon: Bot,
  },
  {
    title: "Decision layer",
    text: "Combine deterministic business rules with human approval points.",
    icon: GitBranch,
  },
  {
    title: "Execution layer",
    text: "Create records, send notifications, update systems and trigger follow-up actions.",
    icon: Network,
  },
];

export default function Systems() {
  return (
    <div>
      <PageHero />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-4 lg:grid-cols-2">
            {automationCategories.map((category, index) => (
              <Reveal key={category.name} delay={index * 0.06}>
                <Card className="group h-full p-7">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/10 bg-emerald-400/4">
                      <Boxes className="h-5 w-5 text-emerald-300/80" />
                    </div>

                    <span className="font-mono text-[9px] text-white/20">
                      SYSTEM 0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/40">
                    {category.description}
                  </p>

                  <div className="mt-6 grid gap-2">
                    {category.examples.map((example) => (
                      <div
                        key={example}
                        className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/2 px-3 py-2.5"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300/50" />
                        <span className="text-xs text-white/45">{example}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-white/5 bg-white/1.2">
        <div className="container-main">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <Badge>ARCHITECTURE</Badge>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Modular systems that can evolve with the operation.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/40">
                  A workflow rarely ends at one automation. The right
                  architecture creates a foundation that can support the next
                  process too.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {architecture.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Card key={item.title} className="p-5">
                      <div className="flex items-center justify-between">
                        <Icon className="h-5 w-5 text-emerald-300/70" />
                        <span className="font-mono text-[8px] text-white/20">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-5 text-sm font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-white/35">
                        {item.text}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: Layers3,
                  title: "Connected",
                  text: "Designed to work with the software your team already depends on.",
                },
                {
                  icon: Settings2,
                  title: "Configurable",
                  text: "Logic and workflow decisions are built around your specific operating rules.",
                },
                {
                  icon: Database,
                  title: "Traceable",
                  text: "Important actions and state changes can be recorded and reviewed.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <Card key={item.title} className="p-6">
                    <Icon className="h-5 w-5 text-emerald-300/70" />
                    <h3 className="mt-5 text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-white/35">
                      {item.text}
                    </p>
                  </Card>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-main">
          <Reveal>
            <Card className="p-8 sm:p-12">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <Badge variant="outline">NEXT STEP</Badge>
                  <h2 className="mt-5 text-3xl font-semibold text-white">
                    Have a process in mind?
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/40">
                    Show us the repetitive workflow and we'll map the system
                    around it.
                  </p>
                </div>

                <Link to="/contact">
                  <Button size="lg">
                    START A WORKFLOW
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function PageHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 pt-36 pb-20">
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="container-main relative">
        <Reveal>
          <div className="max-w-4xl">
            <Badge>SYSTEMS</Badge>

            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              Automation is a system, not a button.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">
              STRADEXI connects triggers, intelligence, decisions and
              execution into workflows designed around the way your team
              actually works.
            </p>

            <div className="mt-8">
              <Link to="/contact">
                <Button size="lg">
                  BUILD A SYSTEM
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}