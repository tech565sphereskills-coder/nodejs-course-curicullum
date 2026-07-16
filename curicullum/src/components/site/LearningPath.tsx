const steps = [
  { t: "Foundations", d: "Set up a TypeScript Node project and learn the runtime like a native." },
  { t: "Core Node", d: "Master built-in modules, HTTP, streams, and the event loop." },
  { t: "Data layer", d: "Model your domain in PostgreSQL and connect it safely to Node." },
  { t: "Express APIs", d: "Design routes, middleware, validation, and error handling that scale." },
  { t: "Auth & security", d: "Ship real authentication, refresh tokens, and role-based access." },
  { t: "Production", d: "Cache with Redis, test with Vitest, containerize, and deploy." },
];

export function LearningPath() {
  return (
    <section id="path" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <div className="text-mono-eyebrow">Learning path</div>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            From <em className="not-italic text-emerald-brand">console.log</em> to deployed API.
          </h2>
        </div>

        <div className="relative mt-12">
          <div
            className="absolute left-4 top-0 hidden h-full w-px bg-border sm:block"
            aria-hidden
          />
          <ol className="grid gap-6 sm:pl-12">
            {steps.map((s, i) => (
              <li key={s.t} className="relative">
                <span
                  className="absolute -left-12 top-2 hidden h-4 w-4 rounded-full border-2 border-emerald-brand bg-surface sm:block"
                  aria-hidden
                />
                <div className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-emerald-brand/40">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-emerald-brand">
                      STEP {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink">{s.t}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
