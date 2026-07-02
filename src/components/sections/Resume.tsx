import { motion } from "motion/react";

export function Resume() {
  return (
    <section id="resume" aria-labelledby="resume-title" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border-2 border-black bg-card p-8 md:p-12 shadow-[8px_8px_0_0_#000]"
        >
          <div className="absolute inset-0 halftone-bg opacity-30 pointer-events-none" />
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full gradient-portal opacity-30 blur-2xl animate-spin-slow pointer-events-none" />

          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <h2 id="resume-title" className="font-display tracking-wider text-3xl md:text-5xl text-neon-yellow">
                GRAB THE FULL DOSSIER
              </h2>
              <p className="mt-3 text-white/85 max-w-xl">
                A printable, recruiter-friendly summary of skills, projects and experience — formatted for IT and support roles.
              </p>
            </div>
            <a
              href="/prajwal-resume.pdf"
              download
              className="shrink-0 inline-flex items-center gap-2 rounded-md border-2 border-black bg-neon-red px-6 py-4 font-display tracking-widest text-white shadow-[6px_6px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] transition-all"
            >
              ⬇ DOWNLOAD RESUME
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
