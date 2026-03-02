"use client";

import React from "react";
import { motion } from "framer-motion";

export function BackgroundBeams({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-700/30 via-indigo-500/30 to-black" />

      {/* animated beams */}
      <motion.div
        className="absolute -top-32 left-1/4 h-[900px] w-[280px] rotate-[18deg] rounded-full bg-fuchsia-400/10 blur-3xl"
        animate={{ y: [0, 40, 0], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -top-40 left-1/2 h-[900px] w-[320px] rotate-[-14deg] rounded-full bg-indigo-400/10 blur-3xl"
        animate={{ y: [0, -45, 0], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -top-36 right-10 h-[900px] w-[260px] rotate-[10deg] rounded-full bg-violet-400/10 blur-3xl"
        animate={{ y: [0, 35, 0], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* tiny grid dots */}
      <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.45)_1px,transparent_0)] [background-size:24px_24px]" />

      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/35" />
    </div>
  );
}
