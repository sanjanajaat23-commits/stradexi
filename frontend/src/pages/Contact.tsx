import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ReplyPanel } from "@/components/ReplyPanel";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/content";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/5 pt-36 pb-20">
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="container-main relative">
          <Reveal>
            <Badge>CONTACT</Badge>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tighter text-white sm:text-6xl lg:text-7xl">
              Show us the process your team hates doing.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">
              Tell us what happens today. We'll use the workflow to identify
              where automation can remove repetitive work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
            <Reveal>
              <Card className="p-7 sm:p-8">
                <div className="mb-8">
                  <div className="font-mono text-[9px] tracking-[0.2em] text-white/25 uppercase">
                    WORKFLOW INTAKE
                  </div>

                  <h2 className="mt-3 text-2xl font-semibold text-white">
                    Tell us what is repetitive.
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-white/40">
                    A few details are enough to start the conversation.
                  </p>
                </div>

                <ContactForm onSubmitted={() => setSubmitted(true)} />
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4">
                {submitted && <ReplyPanel submitted />}

                <Card className="p-6">
                  <div className="font-mono text-[9px] tracking-[0.2em] text-white/25 uppercase">
                    DIRECT BOOKING
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-white">
                    Prefer to talk first?
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/40">
                    Book a 30-minute automation discovery call directly.
                  </p>

                  <a
                    href={siteConfig.bookingUrl || siteConfig.bookingFallbackUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm text-emerald-300 transition hover:text-emerald-200"
                  >
                    Open calendar
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Card>

                <Card className="p-6">
                  <div className="font-mono text-[9px] tracking-[0.2em] text-white/25 uppercase">
                    WHAT TO BRING
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      "The repetitive workflow",
                      "Systems involved",
                      "Where manual handoffs happen",
                      "What your team wants to spend more time on",
                    ].map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300/60" />
                        <span className="text-xs leading-5 text-white/40">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-emerald-300/70" />
                    <span className="text-sm text-white/60">
                      Workflow-first conversations
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-white/25" />
                    <span className="text-xs text-white/35">
                      North America focused · Remote delivery capable
                    </span>
                  </div>
                </Card>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}