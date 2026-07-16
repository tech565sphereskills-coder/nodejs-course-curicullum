import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const codeLines = [
  { p: "$ ", t: "npm create tech565@latest api" },
  { p: "→ ", t: "scaffolding TypeScript + Express project…" },
  { p: "✓ ", t: "installed dependencies" },
  { p: "✓ ", t: "prepared Postgres + Redis" },
  { p: "$ ", t: "npm run dev" },
  { p: "→ ", t: "listening on http://localhost:4001" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-aurora)" }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-16 lg:grid-cols-[1.05fr_1fr] lg:pt-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-ink-muted shadow-[var(--shadow-soft)]"
          >
            <Sparkles className="h-3.5 w-3.5 text-emerald-brand" />
            New cohort · 11 modules · TypeScript-first
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Master{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Node.js</span>
              <span
                className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-sm"
                style={{ background: "var(--emerald-glow)" }}
                aria-hidden
              />
            </span>{" "}
            &amp; Express the way real backends are built.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-ink-muted"
          >
            A production-grade curriculum from runtime internals to shipping a Dockerized API — no
            tutorial spaghetti, no toy examples.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#curriculum"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-surface shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
            >
              Explore the curriculum
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#enroll"
              className="rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface-2"
            >
              Get syllabus
            </a>
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-muted">
            <Stat n="11" l="Modules" />
            <Stat n="60+" l="Subtopics" />
            <Stat n="4" l="Real projects" />
            <Stat n="∞" l="Lifetime access" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-emerald-glow/40 blur-3xl" aria-hidden />
          <div className="overflow-hidden rounded-2xl border border-border bg-ink text-surface shadow-[var(--shadow-active)]">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-white/60">~/tech565/api</span>
            </div>
            <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed">
              {codeLines.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.18, duration: 0.4 }}
                  className="flex"
                >
                  <span className="text-emerald-brand">{l.p}</span>
                  <span className="text-white/85">{l.t}</span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="flex items-center gap-2 pt-2"
              >
                <span className="text-emerald-glow">✓</span>
                <span className="text-white/70">ready in 1.2s</span>
                <span className="ml-1 inline-block h-4 w-1.5 animate-pulse bg-emerald-brand" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="font-display text-xl font-bold text-ink">{n}</span>
      <span className="text-mono-eyebrow">{l}</span>
    </div>
  );
}
