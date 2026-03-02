"use client";

import { players } from "@/data/player";
import Image from "next/image";
import Link from "next/link";

export default function TeamSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 blur-m scale-110"
        style={{
          backgroundImage: "url('/coverpage.jpeg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* CONTENT */}
      <div className="relative z-10">
        <h2 className="text-center text-white text-4xl font-extrabold mb-14">
          Meet Our Team
        </h2>

        <div className="overflow-hidden w-full">
          <div className="team-track">
            {[...players, ...players].map((player, i) => (
              <Link key={`${player.id}-${i}`} href={`/players/${player.slug}`}>
                <div className="team-card">
                  <div className="relative h-[420px] w-[300px]">
                    <Image
                      src={player.image}
                      alt={player.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-white">
                      {player.name}
                    </h3>
                    <p className="text-sm text-white/70">{player.position}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
