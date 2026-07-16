import { Award, Code2, FileDown, MessagesSquare, Rocket, Users } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Hands-on projects",
    desc: "Build a REST API, an auth server, a file uploader, and a realtime chat — all production-shaped.",
  },
  {
    icon: Rocket,
    title: "Live coding playground",
    desc: "Copyable snippets and runnable examples for every module so nothing stays abstract.",
  },
  {
    icon: FileDown,
    title: "Cheatsheets per module",
    desc: "Downloadable one-pagers you'll keep coming back to long after the course.",
  },
  {
    icon: Award,
    title: "Certificate of completion",
    desc: "A shareable certificate to prove you didn't just watch — you shipped.",
  },
  {
    icon: MessagesSquare,
    title: "1:1 mentor Q&A",
    desc: "Get unstuck fast with direct feedback from working backend engineers.",
  },
  {
    icon: Users,
    title: "Community & job prep",
    desc: "Portfolio reviews, mock interviews, and a Discord full of learners shipping alongside you.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <div className="text-mono-eyebrow">Why TECH565SPHERESKILLS</div>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Built like the job, not like a tutorial.
          </h2>
          <p className="mt-3 text-ink-muted">
            Every feature exists because it moves you closer to shipping backends people actually use.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            const highlight = i === 0 || i === 4;
            return (
              <div
                key={f.title}
                className={[
                  "group relative overflow-hidden rounded-2xl border p-6 transition-all hover:-translate-y-0.5",
                  highlight
                    ? "border-transparent bg-ink text-surface"
                    : "border-border bg-card text-ink hover:border-emerald-brand/40",
                ].join(" ")}
              >
                {highlight && (
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-40 blur-3xl"
                    style={{ background: "var(--emerald-glow)" }}
                    aria-hidden
                  />
                )}
                <span
                  className={[
                    "grid h-10 w-10 place-items-center rounded-lg",
                    highlight ? "bg-emerald-brand text-ink" : "bg-surface-2 text-ink",
                  ].join(" ")}
                >
                  <Icon className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
                <p
                  className={[
                    "mt-1.5 text-sm",
                    highlight ? "text-surface/75" : "text-ink-muted",
                  ].join(" ")}
                >
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
