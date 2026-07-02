import { motion } from "motion/react";

const POPS = [
  { text: "BOOT!",      color: "bg-neon-red",    rot: -8,  top: "12%", left: "6%"  },
  { text: "PING!",      color: "bg-neon-blue",   rot: 6,   top: "22%", left: "82%" },
  { text: "DEBUG!",     color: "bg-neon-purple", rot: -4,  top: "70%", left: "10%" },
  { text: "CONNECTED!", color: "bg-neon-yellow", rot: 5,   top: "62%", left: "78%" },
  { text: "THWIP!",     color: "bg-neon-red",    rot: -10, top: "44%", left: "88%" },
];

export function ComicPop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {POPS.map((p, i) => (
        <motion.span
          key={p.text}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.4, 1.1, 1, 0.6] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            repeatDelay: 1.5,
            delay: i * 0.8,
            ease: "easeOut",
          }}
          style={{ top: p.top, left: p.left, rotate: `${p.rot}deg` }}
          className={`absolute font-display text-2xl md:text-3xl tracking-wider text-black px-3 py-1 rounded-md border-2 border-black ${p.color}`}
        >
          {p.text}
        </motion.span>
      ))}
    </div>
  );
}
