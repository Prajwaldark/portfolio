import { motion } from "motion/react";
import { SKILLS, NEON_CLASS, type NeonColor } from "@/lib/portfolio-data";
import { SectionTitle } from "./SectionTitle";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="relative py-24 md:py-32 bg-card/30">
      <div className="absolute inset-0 halftone-bg opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <SectionTitle
          id="skills-title"
          eyebrow="Skills"
          title="SUPERPOWERS"
          subtitle="Real, hands-on capabilities across operating systems, networks and hardware."
          accent="blue"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, gi) => {
            const c = NEON_CLASS[group.color as NeonColor];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: gi * 0.08 }}
                whileHover={{ y: -4 }}
                className={`relative rounded-xl border-2 border-black bg-card p-6 shadow-[6px_6px_0_0_#000]`}
              >
                <div className={`absolute -top-3 left-4 inline-block ${c.bg} text-black px-3 py-1 border-2 border-black font-display tracking-widest text-xs`}>
                  {group.category.toUpperCase()}
                </div>

                <ul className="mt-3 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-white/90">{item.name}</span>
                        <span className={`font-mono text-xs ${c.text}`}>{item.level}%</span>
                      </div>
                      <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10 border border-black">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ duration: 0.9, ease: "easeOut" }}
                          className={`h-full ${c.bg}`}
                        />
                        <div className="absolute inset-0 halftone-bg opacity-50 pointer-events-none" />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
