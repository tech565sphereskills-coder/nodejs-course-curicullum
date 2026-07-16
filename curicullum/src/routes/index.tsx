import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { TopicsCovered } from "@/components/site/TopicsCovered";
import { Features } from "@/components/site/Features";
import { LearningPath } from "@/components/site/LearningPath";
import { Faq } from "@/components/site/Faq";
import { EnrollCta } from "@/components/site/EnrollCta";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <TopicsCovered />
        <Features />
        <LearningPath />
        <Faq />
        <EnrollCta />
      </main>
      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}
