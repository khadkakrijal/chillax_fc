"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

type Player = {
  id: string;
  slug: string;
  name: string;
  position: string;
  image: string;
  age: number;
  dob: string;
  email: string;
  joined?: number;
  foot?: string;
  playStyle?: string[];
  strengths?: string[];
  bio?: string;
};

const leadership = [
  {
    role: "Captain",
    name: "Krijal Khadka",
    slug: "krijal",
    image: "/gallery/holding.jpg",
  },
  {
    role: "Vice Captain",
    name: "Suman Raut",
    slug: "suman",
    image: "/gallery/chyy.jpg",
  },
  {
    role: "Team Coach",
    name: "Kushal Nepal",
    slug: "kushal",
    image: "/gallery/kushal.jpg",
  },
  {
    role: "Manager",
    name: "Navaraj Sapkota",
    slug: "navaraj",
    image: "/gallery/navaraj.jpg",
  },
];
const positions = ["All", "Defender", "Midfielder", "Forward"] as const;

function normalizePosition(pos: string) {
  const p = pos.toLowerCase().replace(/\s+/g, "");
  if (p.includes("def")) return "Defender";
  if (p.includes("for")) return "Forward";
  if (p.includes("mid")) return "Midfielder";
  return pos;
}

export default function TeamPageClient({ players }: { players: Player[] }) {
  const [query, setQuery] = React.useState("");
  const [filter, setFilter] = React.useState<(typeof positions)[number]>("All");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();

    return (players ?? [])
      .map((p) => ({ ...p, position: normalizePosition(p.position) }))
      .filter((p) => {
        const matchesQuery =
          !q ||
          p.name.toLowerCase().includes(q) ||
          p.position.toLowerCase().includes(q);

        const matchesFilter = filter === "All" ? true : p.position === filter;

        return matchesQuery && matchesFilter;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [players, query, filter]);

  return (
    <div className="min-h-screen relative overflow-hidden text-white pt-10">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-[2px] opacity-35"
        style={{ backgroundImage: "url('/photo_1.jpeg')" }}
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-16">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">
            Chillax FC • Darwin
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">Our Team</h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Nepalese community football club in Darwin — built on brotherhood,
            respect, discipline, and love for the game.
          </p>
        </div>

        {/* Leadership */}
        <CardContent className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {leadership.map((l) => (
            <div
              key={l.role}
              className="group rounded-2xl border border-white/10 bg-black/25 p-4 text-center hover:bg-white/5 transition"
            >
              {/* SMALL IMAGE */}
              <div className="relative mx-auto h-20 w-20 rounded-full overflow-hidden border border-white/20">
                <Image
                  src={l.image}
                  alt={l.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* ROLE */}
              <p className="mt-3 text-[10px] uppercase tracking-widest text-white/60">
                {l.role}
              </p>

              {/* NAME */}
              {l.slug ? (
                <Link
                  href={`/players/${l.slug}`}
                  className="block mt-1 font-semibold text-white hover:text-white/80"
                >
                  {l.name}
                </Link>
              ) : (
                <p className="mt-1 font-semibold text-white">{l.name}</p>
              )}
            </div>
          ))}
        </CardContent>

        {/* Controls */}
        <div className="mt-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="md:w-[360px]">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search players (name / position)..."
              className="bg-black/20 border-white/10 text-white placeholder:text-white/40"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {positions.map((p) => (
              <button
                key={p}
                onClick={() => setFilter(p)}
                className={`rounded-full px-4 py-2 text-sm border transition
                  ${
                    filter === p
                      ? "bg-white text-black border-white"
                      : "bg-white/10 text-white border-white/15 hover:bg-white/15"
                  }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Player Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((player) => (
            <Link key={player.id} href={`/players/${player.slug}`}>
              <Card className="group bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition overflow-hidden">
                <div className="relative h-[320px] w-full">
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                  {/* Top badge */}
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-white/10 text-white border border-white/10">
                      {player.position}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-lg font-extrabold text-white">
                        {player.name}
                      </p>
                      <p className="text-sm text-white/70">
                        {player.joined
                          ? `Joined ${player.joined}`
                          : "Chillax FC"}
                      </p>
                    </div>

                    <span className="text-white/60 group-hover:text-white transition">
                      →
                    </span>
                  </div>

                  {/* Quick chips */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {player.foot && (
                      <Badge className="bg-black/30 text-white border-white/10">
                        Foot: {player.foot}
                      </Badge>
                    )}
                    <Badge className="bg-black/30 text-white border-white/10">
                      Age: {player.age}
                    </Badge>
                  </div>

                  {player.bio && (
                    <p className="mt-4 text-sm text-white/70 line-clamp-2">
                      {player.bio}
                    </p>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Join CTA */}
        <div className="mt-14 flex justify-center">
          <Button
            asChild
            className="rounded-full bg-white text-black hover:bg-white/90 px-8"
          >
            <Link href="/connect">Join Our Team →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
