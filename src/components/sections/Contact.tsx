import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROFILE } from "@/lib/portfolio-data";
import { SectionTitle } from "./SectionTitle";
import { submitContact } from "@/lib/api/contact.functions";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [opening, setOpening] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOpening(true);
    try {
      await Promise.all([
        submitContact({ data: form }),
        new Promise((resolve) => setTimeout(resolve, 1100)),
      ]);
      setSent(true);
    } catch (error) {
      console.error("Error opening portal:", error);
    } finally {
      setOpening(false);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative py-24 md:py-32 bg-card/30">
      <div className="absolute inset-0 halftone-bg opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-4 md:px-8">
        <SectionTitle
          id="contact-title"
          eyebrow="Contact"
          title="OPEN A PORTAL"
          subtitle="Got a role, a question, or just want to talk Linux? Send a signal across the multiverse."
          accent="blue"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* contact links */}
          <div className="space-y-3">
            {[
              { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
              { label: "LinkedIn", value: "linkedin.com/in/prajwaldark/", href: PROFILE.linkedin },
              { label: "GitHub", value: "github.com/prajwaldark", href: PROFILE.github },
              { label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}` },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border-2 border-black bg-card p-4 shadow-[5px_5px_0_0_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000]"
              >
                <div className="min-w-0">
                  <p className="font-display tracking-widest text-xs text-neon-yellow">{c.label.toUpperCase()}</p>
                  <p className="truncate text-white/90 font-mono text-sm mt-1">{c.value}</p>
                </div>
                <span className="shrink-0 font-display text-neon-red text-xl">→</span>
              </a>
            ))}
          </div>

          {/* form */}
          <form
            onSubmit={onSubmit}
            className="relative rounded-2xl border-2 border-black bg-card p-6 shadow-[6px_6px_0_0_#000] space-y-4"
          >
            <div>
              <label htmlFor="c-name" className="block font-display tracking-widest text-xs text-neon-blue mb-1">
                NAME
              </label>
              <input
                id="c-name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-md border-2 border-black bg-background px-3 py-2 text-white outline-none focus:ring-2 focus:ring-neon-blue"
              />
            </div>
            <div>
              <label htmlFor="c-email" className="block font-display tracking-widest text-xs text-neon-blue mb-1">
                EMAIL
              </label>
              <input
                id="c-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-md border-2 border-black bg-background px-3 py-2 text-white outline-none focus:ring-2 focus:ring-neon-blue"
              />
            </div>
            <div>
              <label htmlFor="c-msg" className="block font-display tracking-widest text-xs text-neon-blue mb-1">
                MESSAGE
              </label>
              <textarea
                id="c-msg"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-md border-2 border-black bg-background px-3 py-2 text-white outline-none focus:ring-2 focus:ring-neon-blue resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={opening || sent}
              className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-neon-yellow px-5 py-3 font-display tracking-widest text-black shadow-[5px_5px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] transition-all disabled:opacity-70"
            >
              {sent ? "PORTAL OPENED ✓" : opening ? "OPENING…" : "SEND THROUGH PORTAL"}
            </button>

            {/* portal overlay */}
            <AnimatePresence>
              {opening && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.6 }}
                  transition={{ duration: 1 }}
                  className="pointer-events-none absolute inset-0 grid place-items-center rounded-2xl overflow-hidden"
                >
                  <div className="h-64 w-64 rounded-full gradient-portal animate-spin-slow blur-md" />
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
}
