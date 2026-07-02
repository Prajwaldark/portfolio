import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "Origin" },
  { href: "#skills", label: "Powers" },
  { href: "#projects", label: "Universes" },
  { href: "#experience", label: "Timeline" },
  { href: "#certs", label: "Certs" },
  { href: "#contact", label: "Portal" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-2xl tracking-widest">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border-2 border-black bg-neon-yellow text-black">
            P
          </span>
          <span className="text-white">PRAJWAL<span className="text-neon-red">.</span></span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-display tracking-widest text-sm text-white/80 hover:text-neon-yellow transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-md border-2 border-black bg-neon-red px-4 py-2 font-display tracking-widest text-sm text-white shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] transition-all"
        >
          OPEN PORTAL
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-md border-2 border-black bg-card text-white"
        >
          <span className="font-display text-xl">{open ? "×" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 p-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 font-display tracking-widest text-white/90 hover:bg-white/5 hover:text-neon-yellow"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
