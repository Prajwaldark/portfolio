import { motion } from "motion/react";
import { PortalRing } from "@/components/fx/PortalRing";
import { CitySkyline } from "@/components/fx/CitySkyline";
import { ComicPop } from "@/components/fx/ComicPop";
import { HalftoneBg } from "@/components/fx/HalftoneBg";
import { GlitchText } from "@/components/fx/GlitchText";
import { PROFILE } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate min-h-dvh overflow-hidden pt-24"
    >
      <HalftoneBg />
      <CitySkyline />
      <ComicPop />

      {/* portal halo behind name */}
      <div className="pointer-events-none absolute left-1/2 top-[42%] -z-10 -translate-x-1/2 -translate-y-1/2">
        <PortalRing size={520} className="opacity-60 md:opacity-80" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 text-center md:px-8">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-neon-blue/40 bg-card/60 px-4 py-1 font-mono text-xs uppercase tracking-[0.25em] text-neon-blue backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-neon-blue animate-flicker" />
          {PROFILE.tagline}
        </motion.span>

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6"
        >
          <GlitchText className="text-7xl sm:text-8xl md:text-[10rem] leading-none text-white">
            {PROFILE.name}
          </GlitchText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 font-display tracking-widest text-xl md:text-3xl text-neon-yellow"
        >
          EXPLORING THE MULTIVERSE OF IT
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-3 max-w-2xl text-base md:text-lg text-white/90"
        >
          {PROFILE.focus.join("  •  ")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-neon-red px-5 py-3 font-display tracking-widest text-white shadow-[5px_5px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] transition-all"
          >
            EXPLORE MY UNIVERSE
          </a>
          <a
            href="https://github.com/prajwaldark"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-neon-blue px-5 py-3 font-display tracking-widest text-black shadow-[5px_5px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] transition-all"
          >
            VIEW PROJECTS
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-neon-yellow px-5 py-3 font-display tracking-widest text-black shadow-[5px_5px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] transition-all"
          >
            CONTACT ME
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 font-mono text-xs text-muted-foreground"
        >
          ↓ scroll · enter the multiverse
        </motion.div>
      </div>
    </section>
  );
}
