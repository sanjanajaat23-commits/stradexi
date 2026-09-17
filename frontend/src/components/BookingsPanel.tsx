import { CalendarDays, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { openBookingLink } from "@/lib/content";

export function BookingsPanel() {
  return (
    <Card className="overflow-hidden">
      <div className="grid lg:grid-cols-[1fr_0.8fr]">
        <div className="p-7">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/6">
            <CalendarDays className="h-5 w-5 text-emerald-300" />
          </div>

          <h3 className="mt-6 text-2xl font-semibold text-white">
            Book an Automation Discovery Call
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-6 text-white/45">
            A 30-minute conversation to understand your current workflow,
            identify repetitive operational work, and map the first automation
            opportunity.
          </p>

          <Button className="mt-6" size="lg" onClick={openBookingLink}>
            BOOK A CALL
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>

        <div className="border-t border-white/7 bg-white/1.5 p-7 lg:border-l lg:border-t-0">
          <div className="font-mono text-[9px] tracking-[0.2em] text-white/25 uppercase">
            Session
          </div>

          <div className="mt-5 space-y-4">
            {[
              "Current process walkthrough",
              "Manual work analysis",
              "Automation opportunities",
              "Implementation discussion",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-sm text-white/55">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}