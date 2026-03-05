"use client";

import * as React from "react";
import { players } from "@/data/player";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TeamSection() {
  const [index, setIndex] = React.useState(0);

  const total = players.length;

  const clampIndex = (i: number) => {
    const mod = ((i % total) + total) % total;
    return mod;
  };

  const prev = () => setIndex((i) => clampIndex(i - 1));
  const next = () => setIndex((i) => clampIndex(i + 1));

  // Keyboard support
  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto slide
  React.useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // we render 5 cards: [-2,-1,0,+1,+2] around active
  const offsets = [-2, -1, 0, 1, 2];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 scale-110"
        style={{ backgroundImage: "url('/coverpage.jpeg')" }}
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10">
        <h2 className="text-center text-white text-4xl font-extrabold mb-10">
          Meet Our Team
        </h2>

        {/* Swiper stage */}
        <div className="relative mx-auto w-full max-w-6xl px-4">
          {/* Prev/Next */}
          <button
            onClick={prev}
            aria-label="Previous player"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full border border-white/20 bg-white/10 p-3 text-white hover:bg-white hover:text-black transition"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={next}
            aria-label="Next player"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full border border-white/20 bg-white/10 p-3 text-white hover:bg-white hover:text-black transition"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Cards */}
          <div className="relative h-[520px] md:h-[560px]">
            <AnimatePresence initial={false}>
              {offsets.map((off) => {
                const p = players[clampIndex(index + off)];
                const isActive = off === 0;

                // Coverflow transform rules
                const x = off * 170; // spacing
                const scale = isActive ? 1 : 0.82;
                const rotate = off * -8; // tilt
                const opacity = Math.abs(off) > 2 ? 0 : isActive ? 1 : 0.75;
                const zIndex = 10 - Math.abs(off);

                return (
                  <motion.div
                    key={`${p.id}-${index}-${off}`}
                    className="absolute left-1/2 top-1/2"
                    style={{ zIndex }}
                    initial={{ opacity: 0, y: 20, x: x, scale: 0.9 }}
                    animate={{
                      opacity,
                      x: `calc(-50% + ${x}px)`,
                      y: "-50%",
                      scale,
                      rotate,
                      filter: isActive ? "blur(0px)" : "blur(0.3px)",
                    }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ type: "spring", stiffness: 220, damping: 26 }}
                    drag={isActive ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.18}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -70) next();
                      if (info.offset.x > 70) prev();
                    }}
                  >
                    <Link href={`/players/${p.slug}`} className="block">
                      <div
                        className={`rounded-3xl overflow-hidden border shadow-[0_20px_70px_rgba(0,0,0,0.55)]
                        ${isActive ? "border-white/30 bg-white/10" : "border-white/10 bg-white/5"}`}
                      >
                        <div className="relative h-[380px] w-[280px] md:h-[420px] md:w-[320px]">
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 75vw, 320px"
                            priority={isActive}
                          />
                          {/* Soft gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                        </div>

                        <div className="p-4 text-center">
                          <h3 className="text-lg md:text-xl font-extrabold text-white">
                            {p.name}
                          </h3>
                          <p className="text-sm text-white/70">{p.position}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {players.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to player ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === index
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <p className="mt-4 text-center text-white/60 text-sm">
            Swipe the center card or use arrows
          </p>
        </div>
      </div>
    </section>
  );
}
