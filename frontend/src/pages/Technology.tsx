import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  CheckCircle2,
  Database,
  FileSearch,
  GitBranch,
  HeartPulse,
  MessageSquare,
  ShieldCheck,
  Truck,
  UserPlus,
  Workflow,
  Zap,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { industries } from "@/lib/content";

const healthcareIcons = [
  UserPlus,
  FileSearch,
  CheckCircle2,
  GitBranch,
  ShieldCheck,
  Bell,
  MessageSquare,
  Database,
];
const logisticsIcons = [
  Database,
  ShieldCheck,
  Bell,
  Workflow,
  MessageSquare,
  CheckCircle2,
];

export default function IndustryPage() {
  const { slug } = useParams();

  const industry = industries.find((item) => item.slug === slug);

  if (!industry) {
    return <NotFoundIndustry />;
  }

  const isHealthcare = industry.slug === "healthcare-staffing";
  const icons = isHealthcare ? healthcareIcons : logisticsIcons;

  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/5 pt-36 pb-20">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="container-main relative">
          <Reveal>
            <div className="flex items-center gap-3">
              {isHealthcare ? (
                <HeartPulse className="h-5 w-5 text-emerald-300" />
              ) : (
                <Truck className="h-5 w-5 text-emerald-300" />
              )}

              <Badge>{industry.name}</Badge>
            </div>

            <h1 className="mt-7 max-w-5xl text-5xl font-semibold tracking-tighter text-white sm:text-6xl lg:text-7xl">
              {isHealthcare
                ? "Turn candidate-to-placement work into a connected operating system."
                : "Turn shipment updates and exception handling into a connected operating system."}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">
              {industry.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact">
                <Button size="lg">
                  BUILD THIS WORKFLOW
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link to="/demo">
                <Button size="lg" variant="outline">
                  SEE LIVE DEMO
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <Reveal>
            <Badge variant="outline">WORKFLOW MAP</Badge>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
              From trigger to completed system update.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40">
              Each step can be automated independently or connected into one
              orchestration layer.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {industry.workflow.map((step, index) => {
              const Icon = icons[index % icons.length];

              return (
                <Reveal key={step} delay={index * 0.05}>
                  <Card className="group h-full p-5">
                    <div className="flex items-center justify-between">
                      <Icon className="h-5 w-5 text-emerald-300/75" />

                      <span className="font-mono text-[8px] text-white/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-7 text-sm font-semibold text-white">
                      {step}
                    </div>

                    <p className="mt-2 text-xs leading-5 text-white/30">
                      Workflow node ready for rules, integrations and human
                      approval where required.
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
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              {
                title: "Fewer handoffs",
                description:
                  "Move information through the workflow automatically instead of relying on manual copying.",
              },
              {
                title: "Faster visibility",
                description:
                  "Surface the right state change, exception or candidate at the right moment.",
              },
              {
                title: "Cleaner systems",
                description:
                  "Keep connected systems synchronized with less repetitive data entry.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <Card className="p-6">
                  <div className="font-mono text-[9px] text-emerald-300/50">
                    0{index + 1}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/35">
                    {item.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-emerald-400/10 bg-emerald-400/3 p-8 sm:p-12">
              <div className="absolute right-[-10%] top-[-50%] h-100 w-100 rounded-full bg-emerald-400/6 blur-[100px]" />

              <div className="relative">
                <div className="font-mono text-[9px] tracking-[0.2em] text-emerald-300/60 uppercase">
                  READY TO MAP IT?
                </div>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
                  Show us the process. We'll show you the system.
                </h2>

                <div className="mt-7">
                  <Link to="/contact">
                    <Button size="lg">
                      START A DISCOVERY
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function NotFoundIndustry() {
  return (
    <section className="section-padding pt-40">
      <div className="container-main">
        <Badge>INDUSTRY</Badge>
        <h1 className="mt-6 text-4xl font-semibold text-white">
          Industry not found.
        </h1>
        <Link to="/industries">
          <Button className="mt-7">
            VIEW INDUSTRIES
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}