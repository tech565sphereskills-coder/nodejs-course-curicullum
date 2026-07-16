import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

export function EnrollCta() {
  const [email, setEmail] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }
    toast.success("You're on the list", {
      description: `We'll send the syllabus to ${email}.`,
    });
    setEmail("");
  }

  return (
    <section id="enroll" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div
          className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-surface sm:px-12 sm:py-20"
          style={{ boxShadow: "var(--shadow-active)" }}
        >
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-50 blur-3xl"
            style={{ background: "var(--emerald-glow)" }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--emerald)" }}
            aria-hidden
          />

          <div className="relative max-w-2xl">
            <div className="font-mono text-xs tracking-widest text-emerald-glow">
              JOIN THE COHORT
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Start shipping backends you'd be proud to show at work.
            </h2>
            <p className="mt-4 max-w-lg text-surface/70">
              Drop your email for the full syllabus, project briefs, and early access to the next
              cohort.
            </p>

            <form
              onSubmit={onSubmit}
              className="mt-8 flex w-full max-w-lg flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="h-12 flex-1 rounded-full border border-white/10 bg-white/5 px-5 text-sm text-surface placeholder:text-surface/40 outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(167,243,208,0.25)]"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-brand px-6 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                Send syllabus
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-4 font-mono text-xs text-surface/50">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
