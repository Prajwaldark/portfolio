import { motion } from "motion/react";
import { TIMELINE, NEON_CLASS, type NeonColor } from "@/lib/portfolio-data";
import { SectionTitle } from "./SectionTitle";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="relative py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <SectionTitle
          id="experience-title"
          eyebrow="Experience"
          title="TIMELINE ACROSS DIMENSIONS"
          accent="yellow"
        />

        <ol className="relative border-l-2 border-dashed border-white/20 pl-6 space-y-8">
          {TIMELINE.map((t, i) => {
            const c = NEON_CLASS[t.color as NeonColor];
            return (
              <motion.li
                key={t.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <span
                  className={`absolute -left-[34px] top-1 grid h-5 w-5 place-items-center rounded-full ${c.bg} border-2 border-black`}
                />
                <p className={`font-mono text-xs ${c.text}`}>{t.when}</p>
                <h3 className="font-display tracking-wider text-2xl text-white mt-1">
                  {t.title}
                </h3>
                <p className="mt-2 text-white/85 leading-relaxed">{t.body}</p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
