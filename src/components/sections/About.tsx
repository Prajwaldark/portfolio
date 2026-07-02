import { motion } from "motion/react";
import { ORIGIN } from "@/lib/portfolio-data";
import { SectionTitle } from "./SectionTitle";

const TAG_BG: Record<string, string> = {
  red: "bg-neon-red text-white",
  blue: "bg-neon-blue text-black",
  purple: "bg-neon-purple text-white",
};

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionTitle
          id="about-title"
          eyebrow="About"
          title="ORIGIN STORY"
          subtitle="Every IT professional has a backstory. Here are the panels that shaped mine."
          accent="red"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {ORIGIN.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30, rotate: i % 2 ? 1.5 : -1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1 : -1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ rotate: 0, y: -4 }}
              className="comic-panel p-6 halftone-bg"
            >
              <span
                className={`inline-block rotate-[-4deg] px-3 py-1 font-display tracking-widest text-sm border-2 border-black ${TAG_BG[p.color]}`}
              >
                {p.tag}
              </span>
              <h3 className="mt-4 font-display tracking-wider text-2xl text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-white/85 leading-relaxed">{p.body}</p>
              <div className="mt-5 flex justify-end font-display text-xs tracking-widest text-muted-foreground">
                PANEL {String(i + 1).padStart(2, "0")}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
