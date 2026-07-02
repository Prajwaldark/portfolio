type Props = { children: React.ReactNode; className?: string; as?: keyof React.JSX.IntrinsicElements };

export function GlitchText({ children, className = "", as: Tag = "span" }: Props) {
  const T = Tag as any;
  return (
    <T
      data-text={typeof children === "string" ? children : undefined}
      className={`relative inline-block font-display tracking-wide animate-glitch ${className}`}
      style={{ textShadow: "3px 0 var(--neon-red), -3px 0 var(--neon-blue)" }}
    >
      {children}
    </T>
  );
}
