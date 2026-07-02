import { PROFILE } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-card/40 halftone-bg">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-8">
        <p className="font-mono text-sm text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name}. Built across dimensions.
        </p>
        <p className="font-display tracking-widest text-neon-yellow text-sm">
          STAY CURIOUS — KEEP DEBUGGING
        </p>
      </div>
    </footer>
  );
}
