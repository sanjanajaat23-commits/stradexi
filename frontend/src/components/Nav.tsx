import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { openBookingLink } from "@/lib/content";

const links = [
  { label: "Live Demo", href: "/demo" },
  { label: "Systems", href: "/systems" },
  { label: "Industries", href: "/industries" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Technology", href: "/technology" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/6 bg-[#0a1110]/90 backdrop-blur-xl"
          : "bg-[#0a1110]/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-white uppercase">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#4af3c1] shadow-[0_0_18px_rgba(74,243,193,0.9)]" />
          <span>STRADEXI</span>
        </Link>

        <nav className="hidden items-center gap-7 text-[10px] font-medium uppercase tracking-[0.18em] text-white/70 md:flex">
          {links.map((link) => (
            <Link key={link.href} to={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden h-10 items-center justify-center rounded-full border border-white/10 bg-white/3 px-4 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80 md:inline-flex"
            onClick={openBookingLink}
          >
            Book a call
            <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#111714]/70 text-white/80 transition hover:border-emerald-300/30 hover:text-white md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/6 bg-[#080b09]/95 px-5 py-5 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-350 flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="rounded-lg px-3 py-3 text-sm text-white/55 transition hover:bg-white/4 hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <Button className="mt-3" onClick={openBookingLink}>
              BOOK A CALL
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}