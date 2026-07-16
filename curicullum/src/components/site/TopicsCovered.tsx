import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Search } from "lucide-react";
import { curriculum } from "@/data/curriculum";

export function TopicsCovered() {
  const [activeId, setActiveId] = useState(curriculum[0].id);
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    if (!q.trim()) return curriculum;
    const s = q.toLowerCase();
    return curriculum.filter(
      (m) =>
        m.title.toLowerCase().includes(s) ||
        m.eyebrow.toLowerCase().includes(s) ||
        m.subtopics.some(
          (t) => t.title.toLowerCase().includes(s) || t.description.toLowerCase().includes(s),
        ),
    );
  }, [q]);

  const active = curriculum.find((m) => m.id === activeId) ?? curriculum[0];

  return (
    <section id="curriculum" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-mono-eyebrow">The syllabus</div>
            <h2 className="mt-2 font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl">
              Topics Covered
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search topics…"
                className="h-10 w-56 rounded-full border border-border bg-card pl-9 pr-3 text-sm outline-none transition-shadow focus:shadow-[0_0_0_4px_var(--emerald-glow)]"
              />
            </div>
            <span className="rounded-full bg-ink px-3 py-1.5 font-mono text-xs font-medium text-surface">
              {curriculum.length} modules
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[320px_1fr]">
          {/* Module rail */}
          <div className="text-mono-eyebrow lg:hidden">Course sections</div>
          <ul className="flex snap-x gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:pb-0">
            <li className="hidden text-mono-eyebrow lg:block lg:pb-2">Course sections</li>
            {filtered.map((m) => {
              const isActive = m.id === active.id;
              const Icon = m.icon;
              return (
                <li key={m.id} className="shrink-0 snap-start lg:shrink">
                  <button
                    onClick={() => setActiveId(m.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={[
                      "group relative flex w-full min-w-[220px] items-center gap-3 rounded-2xl border px-3.5 py-3 text-left transition-all",
                      isActive
                        ? "border-transparent bg-lime-mist shadow-[var(--shadow-active)]"
                        : "border-border bg-card hover:border-emerald-brand/40 hover:bg-surface-2",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "grid h-9 w-9 place-items-center rounded-lg transition-colors",
                        isActive ? "bg-emerald-brand text-ink" : "bg-surface-2 text-ink",
                      ].join(" ")}
                    >
                      <Icon className="h-4 w-4" strokeWidth={2.25} />
                    </span>
                    <span className="flex-1">
                      <span className="block font-mono text-[10px] tracking-widest text-ink-muted">
                        {m.number}
                        <span className="mx-1.5">·</span>
                        {m.eyebrow}
                      </span>
                      <span className="mt-0.5 block text-sm font-semibold text-ink">
                        {m.title.split(" & ")[0]}
                      </span>
                    </span>
                    <ChevronRight
                      className={[
                        "h-4 w-4 transition-transform",
                        isActive ? "text-ink" : "text-ink-muted group-hover:translate-x-0.5",
                      ].join(" ")}
                    />
                  </button>
                </li>
              );
            })}
            {filtered.length === 0 && (
              <li className="rounded-xl border border-dashed border-border p-4 text-sm text-ink-muted">
                No modules match "{q}".
              </li>
            )}
          </ul>

          {/* Detail panel */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <div
                  className="rounded-3xl border border-emerald-brand/30 p-6 sm:p-8"
                  style={{
                    background:
                      "linear-gradient(180deg, var(--lime-mist) 0%, var(--card) 60%)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emerald-brand text-ink shadow-[var(--shadow-soft)]">
                      <active.icon className="h-5 w-5" strokeWidth={2.25} />
                    </span>
                    <div>
                      <div className="font-mono text-[11px] tracking-widest text-ink-muted">
                        MODULE {active.number} · {active.eyebrow.toUpperCase()}
                      </div>
                      <h3 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
                        {active.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-ink-muted">{active.tagline}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {active.subtopics.map((t, i) => (
                    <motion.div
                      key={t.title}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                      className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-emerald-brand/50 hover:shadow-[var(--shadow-soft)]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-mono-eyebrow">{t.eyebrow}</span>
                        <span className="h-2 w-2 rounded-full bg-emerald-brand/50 transition-colors group-hover:bg-emerald-brand" />
                      </div>
                      <h4 className="mt-2 font-display text-lg font-semibold text-ink">
                        {t.title}
                      </h4>
                      <p className="mt-1.5 text-sm text-ink-muted">{t.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
