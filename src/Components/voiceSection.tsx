"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const voices = [
  {
    name: "Krijal Khadka",
    role: "Captain",
    image: "/gallery/holding.jpg",
    quote:
      "Chillax FC is more than a football team. It is a brotherhood built on trust, respect, and passion for the game. Every match we play represents our unity and Nepalese community in Darwin.",
  },
  {
    name: "Navaraj Sapkota",
    role: "Team Manager",
    image: "/gallery/navaraj.jpg",
    quote:
      "The club represents discipline, teamwork, and the Nepalese community spirit in Darwin. Seeing the players grow together is what makes this club special.",
  },
  {
    name: "Kushal Nepal",
    role: "Team Coach",
    image: "/gallery/kushal.jpg",
    quote:
      "Our goal is to build a strong team culture where everyone learns, improves, and enjoys the game. Football brings us together as one family.",
  },
  {
    name: "Ashish Ghimire",
    role: "Official Partner",
    image: "/gallery/ashish.jpg",
    quote:
      "Chillax FC represents passion, unity, and the strength of the Nepalese community in Darwin. Supporting this club means supporting young talent and community spirit.",
  },
];

export default function VoicesSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/photo_1.jpeg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">
            Chillax FC
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3">
            Voices of the Club
          </h2>

          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            The passion and spirit behind Chillax FC — from the people who lead
            and represent our club.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-14">
          {voices.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`group relative rounded-2xl border ${
                v.role === "Captain"
                  ? "border-yellow-400/30"
                  : "border-white/10"
              } bg-white/5 backdrop-blur-md p-8 hover:bg-white/10 transition hover:-translate-y-3 shadow-[0_25px_90px_rgba(0,0,0,0.7)]`}
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl" />

              <div className="relative flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="relative h-36 w-36 rounded-full overflow-hidden border border-white/20 shadow-lg group-hover:scale-110 transition duration-500">
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    quality={100}
                    sizes="144px"
                    className="object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="mt-7 text-white font-semibold text-xl">
                  {v.name}
                </h3>

                {/* Role */}
                <p
                  className={`text-sm mt-1 ${
                    v.role === "Captain"
                      ? "text-yellow-300"
                      : "text-white/60"
                  }`}
                >
                  {v.role}
                </p>

                {/* Quote */}
                <p className="mt-6 text-sm text-white/80 leading-relaxed italic max-w-sm">
                  <span className="text-3xl text-white/30">“</span>
                  {v.quote}
                  <span className="text-3xl text-white/30">”</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}