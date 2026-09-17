import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Database,
  ExternalLink,
  GitBranch,
  Layers3,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { portfolioProjects } from "@/lib/content";

const projectIcons = [GitBranch, BarChart3, BrainCircuit];

export default function CaseStudies() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/5 pt-36 pb-20">
        <div className="absolute inset-0 bg-[#050807]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(74,222,128,0.22),transparent_28%),radial-gradient(circle_at_20%_20%,rgba(74,222,128,0.18),transparent_30%)]" />
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="container-main relative">
          <Reveal>
            <div className="mb-4 text-[10px] font-medium tracking-[0.2em] text-emerald-200/80 uppercase">
              PORTFOLIO BUILDS
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              Software projects that show how we think about systems.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/45">
              These are implementation examples demonstrating full-stack
              engineering, AI, data processing and workflow orchestration.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main space-y-5">
          {portfolioProjects.map((project, index) => {
            const Icon = projectIcons[index % projectIcons.length];

            return (
              <Reveal key={project.name} delay={index * 0.08}>
                <Card className="overflow-hidden border border-emerald-400/10 bg-[#0a1513]/80">
                  <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                    <div className="border-b border-white/6 bg-[linear-gradient(180deg,rgba(12,30,25,0.75),rgba(9,15,13,0.7))] p-7 lg:border-b-0 lg:border-r">
                      <div className="flex items-start justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/10 bg-emerald-400/4">
                          <Icon className="h-5 w-5 text-emerald-300/80" />
                        </div>

                        <span className="font-mono text-[9px] text-white/20 uppercase">
                          {project.type}
                        </span>
                      </div>

                      <h2 className="mt-7 text-2xl font-semibold text-white">
                        {project.name}
                      </h2>

                      <p className="mt-3 text-sm leading-6 text-white/45">
                        {project.description}
                      </p>

                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-emerald-300 uppercase"
                        >
                          VIEW REPOSITORY
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>

                    <div className="p-7">
                      <div className="font-mono text-[9px] tracking-[0.18em] text-white/25 uppercase">
                        TECHNOLOGY
                      </div>

                      <div className="mt-5 grid gap-2 sm:grid-cols-2">
                        {project.stack.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 rounded-lg border border-white/6 bg-white/2 px-3 py-3"
                          >
                            <Layers3 className="h-3.5 w-3.5 text-emerald-300/50" />
                            <span className="text-xs text-white/45">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 rounded-xl border border-white/6 bg-[#070d0b] p-5">
                        <div className="text-sm font-medium text-white">
                          What this demonstrates
                        </div>

                        <p className="mt-2 text-xs leading-5 text-white/35">
                          Architecture, data flow, application logic,
                          interfaces and integration patterns that can be
                          adapted to operational workflows.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-main">
          <Reveal>
            <div className="rounded-3xl border border-emerald-400/10 bg-[linear-gradient(135deg,rgba(17,24,22,0.95),rgba(7,12,11,0.98))] p-8 sm:p-12">
              <div className="text-[10px] font-medium tracking-[0.2em] text-emerald-200/80 uppercase">
                YOUR WORKFLOW NEXT
              </div>

              <h2 className="mt-5 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
                Portfolio work shows the capability. Your workflow defines the
                product.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
                Bring a repetitive business process and let's turn the pattern
                into a real system.
              </p>

              <Link to="/contact">
                <Button className="mt-7 rounded-full bg-[#57f3c4] px-6 text-[11px] font-semibold tracking-[0.14em] text-[#02130f] shadow-[0_0_30px_rgba(87,243,196,0.4)] hover:bg-[#7ff9d1]" size="lg">
                  START A PROJECT
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}