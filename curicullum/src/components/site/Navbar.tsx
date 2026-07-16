import { Link } from "@tanstack/react-router";
import { Terminal } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#curriculum", label: "Curriculum" },
    { href: "#features", label: "Features" },
    { href: "#path", label: "Learning path" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-emerald-brand shadow-[var(--shadow-soft)]">
            <Terminal className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="font-display text-[15px] font-bold tracking-tight text-ink">
            TECH<span className="text-emerald-brand">565</span>SPHERESKILLS
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#enroll"
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-semibold text-surface transition-transform hover:-translate-y-0.5 md:inline-block"
          >
            Enroll now
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border md:hidden"
            aria-label="Toggle menu"
          >
            <span className="i-menu block h-0.5 w-4 bg-ink" />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-ink hover:bg-surface-2"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#enroll"
              className="mt-1 rounded-full bg-ink px-4 py-2 text-center text-sm font-semibold text-surface"
              onClick={() => setOpen(false)}
            >
              Enroll now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
