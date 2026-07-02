export function HalftoneBg({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 halftone-bg opacity-40 ${className}`}
    />
  );
}
