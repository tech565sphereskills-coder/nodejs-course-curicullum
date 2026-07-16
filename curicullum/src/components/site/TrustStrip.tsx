const chips = [
  "Node.js",
  "Express",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "JWT",
  "Zod",
  "Docker",
  "BullMQ",
  "Prisma",
  "Vitest",
  "OpenAPI",
];

export function TrustStrip() {
  return (
    <section className="border-y border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <span className="text-mono-eyebrow">What you'll master</span>
          {chips.map((c) => (
            <span
              key={c}
              className="font-mono text-sm font-medium text-ink/70"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
