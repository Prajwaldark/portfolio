import { motion } from "motion/react";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  id?: string;
  accent?: "red" | "blue" | "purple" | "yellow";
};

const ACCENT: Record<NonNullable<Props["accent"]>, string> = {
  red: "text-neon-red",
  blue: "text-neon-blue",
  purple: "text-neon-purple",
  yellow: "text-neon-yellow",
};

export function SectionTitle({ eyebrow, title, subtitle, id, accent = "red" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
          // {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`font-display tracking-wider text-5xl md:text-7xl ${ACCENT[accent]}`}
        style={{ textShadow: "3px 3px 0 #000" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 mx-auto max-w-2xl text-white/80">{subtitle}</p>
      )}
    </motion.div>
  );
}
