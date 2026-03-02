"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function JoinTeamCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="absolute inset-0 opacity-[0.10] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.45)_1px,transparent_0)] [background-size:26px_26px]" />

      {/* Glows */}
      <div className="absolute -top-40 left-10 h-[420px] w-[420px] rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -bottom-40 right-10 h-[420px] w-[420px] rounded-full bg-indigo-500/15 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-10 md:p-14 shadow-[0_25px_90px_rgba(0,0,0,0.65)] text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">
            Chillax FC • Darwin
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white">
            Join Our Team
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-white/75 leading-relaxed">
            Want to train with the Nepalese community in Darwin and be part of a
            team built on brotherhood, respect, and passion? Send us your
            details and we’ll get back to you.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <Link
              href="/connect"
              className="group relative inline-flex items-center justify-center rounded-full px-9 py-4 font-semibold tracking-wide
                         text-white border border-white/15 bg-white/10 backdrop-blur-md
                         hover:bg-white hover:text-black transition-all duration-300"
            >
              {/* animated glow */}
              <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-500/35 via-indigo-500/35 to-violet-500/35 blur-lg opacity-60 group-hover:opacity-90 transition" />
              <span className="relative flex items-center gap-2">
                Join Our Team
                <span className="text-lg translate-x-0 group-hover:translate-x-1 transition">
                  →
                </span>
              </span>
            </Link>
          </div>

          <p className="mt-6 text-xs text-white/55">
            Submissions go only to authorised club members.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
