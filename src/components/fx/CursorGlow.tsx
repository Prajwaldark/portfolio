import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (reduced) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[1] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 mix-blend-screen blur-3xl transition-transform duration-100"
      style={{
        left: pos.x,
        top: pos.y,
        background:
          "radial-gradient(circle, var(--neon-blue) 0%, var(--neon-purple) 35%, transparent 70%)",
      }}
    />
  );
}
