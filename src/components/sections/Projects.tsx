import { motion } from "motion/react";
import { PROJECTS, NEON_CLASS, type NeonColor } from "@/lib/portfolio-data";
import { SectionTitle } from "./SectionTitle";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionTitle
          id="projects-title"
          eyebrow="Projects"
          title="UNIVERSES"
          subtitle="Each card is its own dimension of practice — pick one and step through."
          accent="purple"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => {
            const c = NEON_CLASS[p.color as NeonColor];
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border-2 border-black bg-card p-6 shadow-[6px_6px_0_0_#000]"
              >
                {/* portal hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full gradient-portal opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-50 animate-spin-slow"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full ring-2 ring-neon-yellow/60 opacity-0 transition-opacity duration-500 group-hover:opacity-80"
                />

                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className={`font-mono text-xs ${c.text}`}>UNIVERSE · {p.universe}</p>
                    <h3 className="mt-1 font-display tracking-wider text-2xl md:text-3xl text-white">
                      {p.title}
                    </h3>
                  </div>
                  <div className={`shrink-0 grid h-12 w-12 place-items-center rounded-full border-2 border-black ${c.bg}`}>
                    <span className="font-display text-black text-xl">{i + 1}</span>
                  </div>
                </div>

                <p className="mt-4 text-white/85 leading-relaxed">{p.body}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2 py-1 rounded border border-white/15 bg-background/60 text-white/80"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
