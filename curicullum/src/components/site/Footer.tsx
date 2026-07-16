import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-emerald-brand">
              <Terminal className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <div>
              <div className="font-display text-sm font-bold text-ink">
                TECH<span className="text-emerald-brand">565</span>SPHERESKILLS
              </div>
              <div className="font-mono text-[11px] tracking-widest text-ink-muted">
                NODE · EXPRESS · TYPESCRIPT
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-ink-muted">
            <a href="#curriculum" className="hover:text-ink">Curriculum</a>
            <a href="#features" className="hover:text-ink">Features</a>
            <a href="#faq" className="hover:text-ink">FAQ</a>
            <a href="#enroll" className="hover:text-ink">Enroll</a>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-6 font-mono text-xs text-ink-muted">
          <span>© {new Date().getFullYear()} TECH565SPHERESKILLS. All rights reserved.</span>
          <span>Built for backend engineers.</span>
        </div>
      </div>
    </footer>
  );
}
