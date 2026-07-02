import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function CitySkyline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBack = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yFront = useTransform(scrollYProgress, [0, 1], [0, -140]);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] overflow-hidden">
      {/* glow horizon */}
      <div
        className="absolute inset-x-0 bottom-1/3 h-40 blur-3xl opacity-60"
        style={{
          background:
            "linear-gradient(90deg, var(--neon-red), var(--neon-purple), var(--neon-blue))",
        }}
      />
      <motion.svg
        style={{ y: yBack }}
        viewBox="0 0 1200 220"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-10 w-full h-[60%] opacity-70"
      >
        <g fill="oklch(0.22 0.05 270)" stroke="var(--neon-blue)" strokeWidth="1.2">
          {Array.from({ length: 22 }).map((_, i) => {
            const w = 40 + ((i * 37) % 30);
            const h = 60 + ((i * 53) % 130);
            const x = i * 56;
            return <rect key={i} x={x} y={220 - h} width={w} height={h} />;
          })}
        </g>
      </motion.svg>
      <motion.svg
        style={{ y: yFront }}
        viewBox="0 0 1200 240"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 w-full h-[75%]"
      >
        <g fill="#000" stroke="var(--neon-red)" strokeWidth="1.5">
          {Array.from({ length: 18 }).map((_, i) => {
            const w = 60 + ((i * 29) % 40);
            const h = 90 + ((i * 71) % 140);
            const x = i * 70 - 10;
            return (
              <g key={i}>
                <rect x={x} y={240 - h} width={w} height={h} />
                {/* windows */}
                {Array.from({ length: Math.floor(h / 20) }).map((__, r) =>
                  Array.from({ length: Math.floor(w / 12) }).map((___, c) => {
                    const lit = (i + r + c) % 4 === 0;
                    return (
                      <rect
                        key={`${r}-${c}`}
                        x={x + 4 + c * 12}
                        y={240 - h + 6 + r * 20}
                        width={6}
                        height={8}
                        fill={lit ? "var(--neon-yellow)" : "oklch(0.3 0.04 270)"}
                        stroke="none"
                      />
                    );
                  }),
                )}
              </g>
            );
          })}
        </g>
      </motion.svg>
    </div>
  );
}
