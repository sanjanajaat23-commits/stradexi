import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Database,
  GitBranch,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";

const posts = [
  {
    slug: "what-should-be-automated",
    category: "AUTOMATION",
    title: "What should actually be automated in a business process?",
    excerpt:
      "A practical framework for separating repetitive work from decisions that still need human judgment.",
    icon: Workflow,
  },
  {
    slug: "ai-workflows-vs-ai-features",
    category: "AI SYSTEMS",
    title: "AI features are not the same thing as AI workflows.",
    excerpt:
      "Why useful AI systems connect inputs, decisions and actions instead of stopping at a chatbot.",
    icon: Bot,
  },
  {
    slug: "workflow-data-architecture",
    category: "DATA",
    title: "Why workflow automation starts with data architecture.",
    excerpt:
      "Clean inputs and traceable state changes are the foundation of dependable operational automation.",
    icon: Database,
  },
  {
    slug: "human-in-the-loop",
    category: "OPERATIONS",
    title: "Where human approval belongs in automated workflows.",
    excerpt:
      "Designing checkpoints for the decisions that should remain reviewable.",
    icon: GitBranch,
  },
];

export default function Blog() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/5 pt-36 pb-20">
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="container-main relative">
          <Reveal>
            <Badge>FIELD NOTES</Badge>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tighter text-white sm:text-6xl lg:text-7xl">
              Thinking about workflows, AI and operational systems.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">
              Practical notes from building automation systems around real
              operational problems.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-4 md:grid-cols-2">
            {posts.map((post, index) => {
              const Icon = post.icon;

              return (
                <Reveal key={post.slug} delay={index * 0.06}>
                  <Link to={`/blog/${post.slug}`} className="block h-full">
                    <Card className="group h-full p-7 transition-all hover:-translate-y-1 hover:border-emerald-400/15">
                      <div className="flex items-start justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/3">
                          <Icon className="h-5 w-5 text-emerald-300/75" />
                        </div>

                        <ArrowUpRight className="h-4 w-4 text-white/20 transition group-hover:text-emerald-300" />
                      </div>

                      <div className="mt-7 font-mono text-[9px] tracking-[0.16em] text-emerald-300/50">
                        {post.category}
                      </div>

                      <h2 className="mt-3 text-2xl font-semibold text-white">
                        {post.title}
                      </h2>

                      <p className="mt-3 text-sm leading-6 text-white/40">
                        {post.excerpt}
                      </p>

                      <div className="mt-6 flex items-center gap-2 text-xs text-white/30">
                        READ NOTE
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </Card>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}