import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CursorGlow } from "@/components/fx/CursorGlow";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prajwal — Multiverse of IT | Linux • Networking • Tech Support" },
      {
        name: "description",
        content:
          "Portfolio of Prajwal, aspiring IT professional from India. Linux administration, networking, technical support and hardware troubleshooting.",
      },
      { property: "og:title", content: "Prajwal — Multiverse of IT" },
      {
        property: "og:description",
        content: "Linux • Networking • Technical Support • Hardware Troubleshooting",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="relative min-h-dvh bg-background text-foreground">
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
