import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Card } from "@/components/ui/card";
import { industries } from "@/lib/content";

export default function Industries() {
  return (
    <div className="section-padding">
      <div className="container-main">
        <div className="mb-8">
          <div className="font-mono text-[9px] tracking-[0.22em] text-emerald-300/60 uppercase">
            INDUSTRIES
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
            Workflow systems built around real operating contexts.
          </h1>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {industries.map((industry, index) => (
            <Link key={industry.slug} to={`/industries/${industry.slug}`} className="block h-full">
              <Card className="group h-full overflow-hidden border border-white/6 bg-[linear-gradient(180deg,#0d1715,#0b1210)] p-0">
                <div className="h-36 border-b border-white/6 bg-[radial-gradient(circle_at_20%_20%,rgba(74,222,128,0.18),transparent_25%),linear-gradient(135deg,#0c1a17,#0b1110)]" />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-white">{industry.name}</h2>
                    <ArrowUpRight className="h-4 w-4 text-white/20 transition group-hover:text-emerald-300" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/45">{industry.description}</p>
                  <div className="mt-5 text-[10px] uppercase tracking-[0.2em] text-white/35">
                    {index === 0 ? "8-stage workflow" : "7-stage workflow"}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
