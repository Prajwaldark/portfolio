import { useState, useEffect, useCallback, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Maximize2,
  X,
  Play,
  Pause,
} from "lucide-react";
import { CERT_IMAGES, NEON_CLASS, type NeonColor } from "@/lib/portfolio-data";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates — Prajwal's IT Universe" },
      {
        name: "description",
        content: "View my certifications and achievements",
      },
    ],
  }),
  component: CertificatesPage,
});

/* ───────── star-field (CSS-only, zero JS animation loops) ───────── */
function StarField() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* layer 1 – small stars */}
      <div
        className="absolute inset-0 animate-[starTwinkle1_4s_ease-in-out_infinite]"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 10% 20%, white 50%, transparent 100%), " +
            "radial-gradient(1.5px 1.5px at 30% 65%, white 50%, transparent 100%), " +
            "radial-gradient(1px 1px at 55% 15%, white 50%, transparent 100%), " +
            "radial-gradient(2px 2px at 75% 45%, white 50%, transparent 100%), " +
            "radial-gradient(1px 1px at 90% 80%, white 50%, transparent 100%), " +
            "radial-gradient(1.5px 1.5px at 15% 90%, white 50%, transparent 100%), " +
            "radial-gradient(1px 1px at 45% 50%, white 50%, transparent 100%), " +
            "radial-gradient(2px 2px at 65% 85%, white 50%, transparent 100%), " +
            "radial-gradient(1px 1px at 85% 10%, white 50%, transparent 100%), " +
            "radial-gradient(1.5px 1.5px at 5% 55%, white 50%, transparent 100%)",
        }}
      />
      {/* layer 2 – offset twinkle */}
      <div
        className="absolute inset-0 animate-[starTwinkle2_5s_ease-in-out_infinite]"
        style={{
          backgroundImage:
            "radial-gradient(1.5px 1.5px at 20% 35%, white 50%, transparent 100%), " +
            "radial-gradient(1px 1px at 40% 10%, white 50%, transparent 100%), " +
            "radial-gradient(2px 2px at 60% 70%, white 50%, transparent 100%), " +
            "radial-gradient(1px 1px at 80% 30%, white 50%, transparent 100%), " +
            "radial-gradient(1.5px 1.5px at 95% 60%, white 50%, transparent 100%), " +
            "radial-gradient(1px 1px at 25% 80%, white 50%, transparent 100%), " +
            "radial-gradient(2px 2px at 50% 40%, white 50%, transparent 100%), " +
            "radial-gradient(1px 1px at 70% 95%, white 50%, transparent 100%)",
        }}
      />
    </div>
  );
}

/* ───────── main page ───────── */
function CertificatesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  // progress key forces CSS transition restart on each slide change
  const [progressKey, setProgressKey] = useState(0);

  const certificates = CERT_IMAGES;
  const current = certificates[currentIndex];
  const colorClass = NEON_CLASS[current?.color as NeonColor] || NEON_CLASS.red;

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setProgressKey((k) => k + 1);
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1,
    );
  }, [certificates.length]);

  const goToNext = useCallback(() => {
    setDirection(1);
    setProgressKey((k) => k + 1);
    setCurrentIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1,
    );
  }, [certificates.length]);

  const goToIndex = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setProgressKey((k) => k + 1);
    setCurrentIndex(index);
  }, [currentIndex]);

  /* ── auto-play (single interval, CSS-driven progress) ── */
  useEffect(() => {
    if (isAutoPlay) {
      autoPlayRef.current = setInterval(goToNext, 4000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlay, goToNext]);

  /* ── keyboard ── */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrev();
      else if (e.key === "ArrowRight") goToNext();
      else if (e.key === "Escape") setIsFullscreen(false);
      else if (e.key === " ") {
        e.preventDefault();
        setIsAutoPlay((p) => !p);
      } else if (e.key === "f" || e.key === "F") {
        setIsFullscreen((p) => !p);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrev, goToNext]);

  /* ── slide transition variants ── */
  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0, scale: 0.92, rotateY: d > 0 ? 8 : -8 }),
    center: { x: 0, opacity: 1, scale: 1, rotateY: 0 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0, scale: 0.92, rotateY: d > 0 ? -8 : 8 }),
  };

  return (
    <div className="relative min-h-dvh bg-background text-foreground overflow-hidden">
      <StarField />

      {/* ── ambient background (static gradients, no JS animation) ── */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-card via-background to-background" />
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-neon-red/8 blur-3xl animate-[nebulaPulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-neon-blue/8 blur-3xl animate-[nebulaPulse_10s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-neon-purple/5 blur-3xl" />
      </div>

      {/* ── header ── */}
      <header className="relative z-20 flex items-center justify-between px-4 py-4 md:px-10 md:py-5">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-lg border-2 border-black bg-card px-3 py-2 md:px-4 font-display text-xs md:text-sm tracking-wider text-white shadow-[3px_3px_0_0_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          BACK
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-xl md:text-3xl tracking-widest text-white"
        >
          <span className="text-neon-red">◆</span> CERTIFICATES{" "}
          <span className="text-neon-red">◆</span>
        </motion.h1>

        {/* auto-play toggle */}
        <button
          onClick={() => setIsAutoPlay((p) => !p)}
          className="group inline-flex items-center gap-2 rounded-lg border-2 border-black bg-card px-3 py-2 md:px-4 font-display text-xs md:text-sm tracking-wider text-white shadow-[3px_3px_0_0_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#000]"
          aria-label={isAutoPlay ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlay ? (
            <Pause className="h-4 w-4 text-neon-yellow" />
          ) : (
            <Play className="h-4 w-4 text-neon-yellow" />
          )}
          <span className="hidden md:inline">{isAutoPlay ? "PAUSE" : "AUTO"}</span>
        </button>
      </header>

      {/* ── auto-play progress bar ── */}
      {isAutoPlay && (
        <div className="absolute top-0 left-0 right-0 z-30 h-1 bg-white/10 overflow-hidden">
          <div
            key={progressKey}
            className="h-full bg-neon-yellow animate-[progressBar_4s_linear_forwards]"
          />
        </div>
      )}

      {/* ── main slideshow area ── */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 pb-6 pt-2 md:pb-8 md:pt-4"
        style={{ minHeight: "calc(100vh - 140px)" }}
      >
        {/* certificate display */}
        <div className="relative w-full max-w-5xl perspective-[1200px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="relative w-full"
            >
              {/* ── portal frame ── */}
              <div className="relative rounded-2xl border-4 border-black bg-card p-2 md:p-3 shadow-[8px_8px_0_0_#000]">
                {/* neon glow ring (CSS-only opacity pulse) */}
                <div
                  className="absolute -inset-[3px] rounded-2xl blur-sm animate-[glowPulse_2s_ease-in-out_infinite]"
                  style={{ boxShadow: `0 0 25px var(--neon-${current.color}), 0 0 50px var(--neon-${current.color})` }}
                />

                {/* corner portal dots */}
                {["-top-2 -left-2", "-top-2 -right-2", "-bottom-2 -left-2", "-bottom-2 -right-2"].map((pos) => (
                  <div
                    key={pos}
                    className={`absolute ${pos} h-4 w-4 rounded-full ${colorClass.bg} border-2 border-black z-10`}
                  />
                ))}

                {/* image container */}
                <div className={`relative overflow-hidden rounded-xl bg-black/60 ${current.portrait ? "aspect-[3/4] mx-auto max-w-md" : "aspect-[16/10]"}`}>
                  <motion.img
                    key={current.src}
                    src={current.src}
                    alt={current.title}
                    className="h-full w-full object-contain"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    style={"rotation" in current && current.rotation ? { transform: `rotate(${current.rotation}deg) scale(1.35)` } : undefined}
                  />

                  {/* scanline effect overlay */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.08) 2px, rgba(255,255,255,0.08) 4px)",
                    }}
                  />

                  {/* fullscreen button */}
                  <button
                    onClick={() => setIsFullscreen(true)}
                    className="absolute bottom-3 right-3 rounded-full bg-black/60 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/80 hover:scale-110"
                    aria-label="View fullscreen"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>

                  {/* slide counter badge */}
                  <div className="absolute top-3 right-3 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-sm">
                    <span className="font-mono text-xs text-white">
                      {currentIndex + 1} / {certificates.length}
                    </span>
                  </div>
                </div>

                {/* certificate info bar */}
                <motion.div
                  className="mt-3 flex items-start justify-between gap-3 rounded-xl bg-black/40 p-3 md:p-4 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="min-w-0">
                    {current.achievement && (
                      <span className={`inline-block mb-1.5 rounded-full border-2 border-black ${colorClass.bg} px-3 py-0.5 font-display text-[10px] md:text-xs tracking-wider text-black`}>
                        🏆 {current.achievement}
                      </span>
                    )}
                    <h2 className={`font-display text-lg md:text-xl tracking-wider ${colorClass.text}`}>
                      {current.title}
                    </h2>
                    <p className="mt-1 font-mono text-xs md:text-sm text-muted-foreground">
                      {current.issuer} • {current.date}
                    </p>
                    <p className="mt-1.5 text-xs md:text-sm text-white/70 leading-relaxed line-clamp-2">
                      {current.description}
                    </p>
                  </div>
                  <div
                    className={`shrink-0 rounded-lg border-2 border-black ${colorClass.bg} px-3 py-1.5 md:px-4 md:py-2`}
                  >
                    <span className="font-display text-xs md:text-sm text-black">
                      #{currentIndex + 1}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── floating nav arrows ── */}
          <button
            onClick={goToPrev}
            className="group absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-card shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-[calc(-50%+2px)] hover:translate-y-[calc(-50%+2px)] hover:shadow-[2px_2px_0_0_#000] active:shadow-none"
            aria-label="Previous certificate"
          >
            <ChevronLeft className="h-6 w-6 text-white transition-transform group-hover:-translate-x-0.5" />
            <div className="absolute -inset-2 rounded-full bg-neon-red/20 blur-md opacity-0 transition-opacity group-hover:opacity-100" />
          </button>

          <button
            onClick={goToNext}
            className="group absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-card shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-[calc(50%+2px)] hover:translate-y-[calc(-50%+2px)] hover:shadow-[2px_2px_0_0_#000] active:shadow-none"
            aria-label="Next certificate"
          >
            <ChevronRight className="h-6 w-6 text-white transition-transform group-hover:translate-x-0.5" />
            <div className="absolute -inset-2 rounded-full bg-neon-blue/20 blur-md opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </div>

        {/* ── mobile nav arrows ── */}
        <div className="mt-4 flex items-center gap-4 md:hidden">
          <button
            onClick={goToPrev}
            className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-card shadow-[3px_3px_0_0_#000] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            aria-label="Previous certificate"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-card shadow-[3px_3px_0_0_#000] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            aria-label="Next certificate"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* ── thumbnail strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 md:mt-8 flex items-center gap-3 md:gap-4"
        >
          {certificates.map((cert, index) => {
            const isActive = index === currentIndex;
            const thumbColor = NEON_CLASS[cert.color as NeonColor];
            return (
              <button
                key={cert.id}
                onClick={() => goToIndex(index)}
                className={`group relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                  isActive
                    ? `border-black ${thumbColor.bg} shadow-[3px_3px_0_0_#000] scale-105`
                    : "border-black/60 bg-card/80 hover:bg-card hover:scale-105 opacity-60 hover:opacity-100"
                }`}
                aria-label={`Go to ${cert.title}`}
              >
                <div className="relative h-12 w-20 md:h-16 md:w-24 overflow-hidden">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className={`h-full w-full object-cover transition-all duration-300 ${
                      isActive ? "brightness-110" : "brightness-50 group-hover:brightness-75"
                    }`}
                  />
                  {isActive && (
                    <motion.div
                      layoutId="thumb-indicator"
                      className={`absolute inset-0 border-2 ${thumbColor.ring} rounded-md`}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* ── keyboard hint ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 md:mt-6 font-mono text-[10px] md:text-xs text-muted-foreground text-center"
        >
          <kbd className="rounded bg-card px-1.5 py-0.5 border border-white/10">←</kbd>{" "}
          <kbd className="rounded bg-card px-1.5 py-0.5 border border-white/10">→</kbd> navigate ·{" "}
          <kbd className="rounded bg-card px-1.5 py-0.5 border border-white/10">F</kbd> fullscreen ·{" "}
          <kbd className="rounded bg-card px-1.5 py-0.5 border border-white/10">Space</kbd> auto-play
        </motion.p>
      </main>

      {/* ── fullscreen overlay ── */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
            onClick={() => setIsFullscreen(false)}
          >
            {/* close button */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 z-50 rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20 hover:scale-110"
              aria-label="Close fullscreen"
            >
              <X className="h-6 w-6" />
            </button>

            {/* fullscreen prev/next */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20"
              aria-label="Previous"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20"
              aria-label="Next"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* fullscreen image */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative max-h-[90vh] max-w-[90vw]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* neon glow behind fullscreen image */}
                <div
                  className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl"
                  style={{
                    background: `radial-gradient(circle, var(--neon-${current.color}) 0%, transparent 70%)`,
                  }}
                />
                <img
                  src={current.src}
                  alt={current.title}
                  className="relative rounded-xl max-h-[85vh] max-w-[88vw] object-contain"
                  style={"rotation" in current && current.rotation ? { transform: `rotate(${current.rotation}deg)` } : undefined}
                />
                {/* title overlay */}
                <div className="absolute bottom-0 inset-x-0 rounded-b-xl bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
                  {current.achievement && (
                    <span className={`inline-block mb-2 rounded-full border-2 border-black ${colorClass.bg} px-3 py-0.5 font-display text-xs tracking-wider text-black`}>
                      🏆 {current.achievement}
                    </span>
                  )}
                  <h2 className={`font-display text-xl md:text-2xl tracking-wider ${colorClass.text}`}>
                    {current.title}
                  </h2>
                  <p className="mt-1 font-mono text-xs md:text-sm text-white/70">
                    {current.issuer} • {current.date}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* fullscreen dot nav */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); goToIndex(index); }}
                  className={`h-2.5 w-2.5 rounded-full border border-white/30 transition-all ${
                    index === currentIndex ? "bg-white scale-125" : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to certificate ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}