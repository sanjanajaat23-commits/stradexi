import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";

const articles: Record<
  string,
  {
    category: string;
    title: string;
    intro: string;
    sections: {
      title: string;
      text: string;
    }[];
  }
> = {
  "what-should-be-automated": {
    category: "AUTOMATION",
    title: "What should actually be automated in a business process?",
    intro:
      "Good automation candidates tend to repeat, follow recognizable patterns and consume time without requiring constant human judgment.",
    sections: [
      {
        title: "Look for repetition",
        text:
          "Start by observing the tasks people perform again and again. Data entry, copying information between systems, notifications, status changes and repetitive document handling are common examples.",
      },
      {
        title: "Separate rules from judgment",
        text:
          "A workflow becomes easier to automate when the decision can be described clearly. Keep the ambiguous decisions with people and automate the deterministic pieces around them.",
      },
      {
        title: "Follow the information",
        text:
          "Map where information starts, where it is transformed and where it ends. That data path often reveals the system boundary more clearly than individual tasks do.",
      },
    ],
  },
  "ai-workflows-vs-ai-features": {
    category: "AI SYSTEMS",
    title: "AI features are not the same thing as AI workflows.",
    intro:
      "An AI model can produce an answer. An AI workflow connects that capability to the surrounding operational system.",
    sections: [
      {
        title: "The model is one component",
        text:
          "Useful systems typically include inputs, validation, model calls, structured outputs, business logic and downstream actions.",
      },
      {
        title: "Structure matters",
        text:
          "Operational workflows need predictable data and explicit state transitions. AI can help interpret messy inputs, while application logic controls what happens next.",
      },
      {
        title: "Design for the operation",
        text:
          "The goal is not to add AI everywhere. The goal is to make the parts of the process that benefit from intelligence easier to operate.",
      },
    ],
  },
  "workflow-data-architecture": {
    category: "DATA",
    title: "Why workflow automation starts with data architecture.",
    intro:
      "A workflow cannot reliably automate what it cannot understand or track.",
    sections: [
      {
        title: "Define the entities",
        text:
          "Candidates, shipments, customers, jobs and tasks should have explicit structures so the workflow knows what it is changing.",
      },
      {
        title: "Track state",
        text:
          "Automation needs to know where something is in the process. Clear state is what makes retries, alerts and downstream actions possible.",
      },
      {
        title: "Keep an audit trail",
        text:
          "Important state changes should be traceable so an operator can understand what happened and why.",
      },
    ],
  },
  "human-in-the-loop": {
    category: "OPERATIONS",
    title: "Where human approval belongs in automated workflows.",
    intro:
      "Automation and human judgment do not have to compete. Strong systems use people where judgment creates value and software where repetition dominates.",
    sections: [
      {
        title: "Use confidence and risk",
        text:
          "High-confidence, low-risk actions can often be automated directly. Ambiguous or consequential decisions can be routed to an operator.",
      },
      {
        title: "Make the handoff explicit",
        text:
          "A human checkpoint should have a clear reason, context and action. The operator should not have to reconstruct the entire workflow.",
      },
      {
        title: "Automate the surrounding work",
        text:
          "Even when the final decision remains human, the system can automate data gathering, preparation, notifications and documentation.",
      },
    ],
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const article = slug ? articles[slug] : undefined;

  if (!article) {
    return (
      <section className="section-padding pt-40">
        <div className="container-main">
          <Badge>FIELD NOTE</Badge>
          <h1 className="mt-5 text-4xl font-semibold text-white">
            Article not found.
          </h1>
          <Link to="/blog">
            <Button className="mt-7">
              BACK TO BLOG
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/5 pt-36 pb-20">
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="container-main relative">
          <Reveal>
            <Badge>{article.category}</Badge>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tighter text-white sm:text-6xl lg:text-7xl">
              {article.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">
              {article.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              {article.sections.map((section, index) => (
                <Reveal key={section.title} delay={index * 0.06}>
                  <Card className="p-7">
                    <div className="font-mono text-[9px] text-emerald-300/50">
                      0{index + 1}
                    </div>

                    <h2 className="mt-4 text-2xl font-semibold text-white">
                      {section.title}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-white/40">
                      {section.text}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>

            <Link
              to="/blog"
              className="mt-8 inline-flex items-center gap-2 text-xs text-white/30 hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              BACK TO FIELD NOTES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}