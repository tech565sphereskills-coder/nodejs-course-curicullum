import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need prior backend experience?",
    a: "No. If you're comfortable with JavaScript basics, we start from a clean install of Node and build up. We do move fast, so a bit of JS fluency helps.",
  },
  {
    q: "Is the course TypeScript-first?",
    a: "Yes. Every module is written in TypeScript from module 01 onward, including tsconfig setup, typed Express, typed database access, and typed tests.",
  },
  {
    q: "How long does the curriculum take?",
    a: "Most learners finish in 8–12 weeks at a comfortable pace. All content is self-paced and access is lifetime.",
  },
  {
    q: "What projects will I build?",
    a: "A production-shaped REST API, a full auth server with refresh tokens, a file uploader with signed URLs, and a realtime chat backed by Redis Pub/Sub.",
  },
  {
    q: "Do I get a certificate?",
    a: "Yes — a shareable certificate of completion once you finish all modules and the capstone project.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-border/60">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="text-center">
          <div className="text-mono-eyebrow">Questions, answered</div>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Frequently asked
          </h2>
        </div>
        <div className="mt-10 rounded-2xl border border-border bg-card p-2">
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="px-4 text-left text-base font-semibold text-ink hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-ink-muted">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
