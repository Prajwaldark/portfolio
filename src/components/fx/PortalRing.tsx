type Props = { size?: number; className?: string };

export function PortalRing({ size = 360, className = "" }: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none relative ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 rounded-full gradient-portal animate-spin-slow opacity-80 blur-[2px]" />
      <div className="absolute inset-3 rounded-full gradient-portal animate-spin-slower opacity-60" />
      <div className="absolute inset-8 rounded-full bg-background" />
      <div className="absolute inset-10 rounded-full halftone-red animate-flicker" />
      <div className="absolute inset-0 rounded-full ring-2 ring-neon-yellow/40" />
    </div>
  );
}
