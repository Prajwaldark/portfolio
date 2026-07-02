import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { CERTS, NEON_CLASS, CERT_IMAGES, type NeonColor } from "@/lib/portfolio-data";
import { SectionTitle } from "./SectionTitle";
import { Award, ArrowRight, Image } from "lucide-react";

export function Certifications() {
  const hasCertificates = CERT_IMAGES.length > 0 && (CERT_IMAGES[0]?.src as string) !== "";

  return (
    <section id="certs" aria-labelledby="certs-title" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionTitle
          id="certs-title"
          eyebrow="Certifications"
          title="ARTIFACTS"
          subtitle="Collected certifications from across the multiverse — each one a proof of power unlocked."
          accent="red"
        />

        {/* View Certificates CTA - prominent portal button */}
        {hasCertificates && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <Link
              to="/certificates"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl border-2 border-black bg-card px-8 py-5 font-display text-lg tracking-wider text-white shadow-[6px_6px_0_0_#000] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            >
              {/* animated portal glow behind button */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-1 rounded-xl gradient-portal opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-40 animate-spin-slow"
              />
              <Award className="relative h-6 w-6 text-neon-yellow transition-transform group-hover:rotate-12" />
              <span className="relative">VIEW MY CERTIFICATES</span>
              <span className="relative rounded-full bg-neon-yellow px-3 py-1 font-mono text-sm text-black">
                {CERT_IMAGES.length}
              </span>
              <ArrowRight className="relative h-5 w-5 text-neon-yellow transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        )}

        {/* certificate preview thumbnails - only shown when certificates exist */}
        {hasCertificates && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mb-12"
          >
            <Link to="/certificates" className="group block">
              <div className="relative mx-auto flex max-w-3xl items-center justify-center gap-3 md:gap-4">
                {CERT_IMAGES.slice(0, 4).map((cert, i) => {
                  const c = NEON_CLASS[cert.color as NeonColor];
                  return (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 20, rotate: i % 2 ? 3 : -3 }}
                      whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 2 : -2 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                      className={`relative overflow-hidden rounded-lg border-2 border-black shadow-[4px_4px_0_0_#000] transition-all duration-300 group-hover:rotate-0 group-hover:shadow-[2px_2px_0_0_#000]`}
                      style={{ zIndex: CERT_IMAGES.length - i }}
                    >
                      <div className="h-20 w-32 md:h-28 md:w-44 overflow-hidden bg-card">
                        <img
                          src={cert.src}
                          alt={cert.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className={`absolute bottom-0 inset-x-0 h-1 ${c.bg}`} />
                    </motion.div>
                  );
                })}

                {/* hover overlay prompt */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                  <motion.span
                    className="rounded-lg bg-card/90 px-4 py-2 font-display tracking-wider text-neon-yellow text-sm shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center gap-2"
                  >
                    <Image className="h-4 w-4" />
                    OPEN SLIDESHOW
                  </motion.span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* cert roadmap cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CERTS.map((cert, i) => {
            const c = NEON_CLASS[cert.color as NeonColor];
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -6, rotate: -1 }}
                className={`relative rounded-xl border-2 border-black bg-card p-5 shadow-[5px_5px_0_0_#000] overflow-hidden ${
                  hasCertificates ? "cursor-pointer" : ""
                }`}
                onClick={() => {
                  if (hasCertificates) {
                    window.location.href = "/certificates";
                  }
                }}
              >
                <div className={`absolute -top-10 -right-10 h-28 w-28 rounded-full ${c.bg} opacity-20 blur-2xl`} />
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-md border-2 border-black ${c.bg}`}>
                  <span className="font-display text-black text-xl">★</span>
                </div>
                <h3 className="mt-4 font-display tracking-wider text-lg text-white">
                  {cert.title}
                </h3>
                <p className="mt-2 font-mono text-xs text-muted-foreground">{cert.note}</p>
                <span className={`mt-4 inline-flex items-center gap-1 font-display tracking-widest text-xs ${c.text}`}>
                  {hasCertificates ? (
                    <>
                      VIEW CERTIFICATE
                      <ArrowRight className="h-3 w-3" />
                    </>
                  ) : (
                    "IN PROGRESS"
                  )}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
