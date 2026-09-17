import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import { siteConfig } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/6 bg-[#080b09]">
      <div className="mx-auto max-w-[1300px] px-5 py-8 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 border-b border-white/6 pb-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <div className="font-mono text-[10px] tracking-[0.2em] text-emerald-200/80 uppercase">
              Site
            </div>

            <div className="flex flex-wrap gap-x-7 gap-y-2 text-[13px] text-white/55">
              <Link to="/demo" className="transition hover:text-white">
                Live Demo
              </Link>
              <Link to="/systems" className="transition hover:text-white">
                Systems
              </Link>
              <Link to="/industries" className="transition hover:text-white">
                Industries
              </Link>
              <Link to="/how-it-works" className="transition hover:text-white">
                How It Works
              </Link>
              <Link to="/technology" className="transition hover:text-white">
                Technology
              </Link>
              <Link to="/case-studies" className="transition hover:text-white">
                Case Studies
              </Link>
              <Link to="/about" className="transition hover:text-white">
                About
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="font-mono text-[10px] tracking-[0.2em] text-emerald-200/80 uppercase">
              Start
            </div>

            <div className="flex flex-wrap gap-x-7 gap-y-2 text-[13px] text-white/55">
              <Link to="/contact" className="transition hover:text-white">
                Book a Call
              </Link>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="pt-5 text-[12px] text-white/35">
          © 2026 STRADEXI
        </div>
      </div>
    </footer>
  );
}