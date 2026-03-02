"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import type { MatchDay } from "@/data/matchDays";

function outcomeStyles(type: MatchDay["outcomeType"]) {
  switch (type) {
    case "winner":
      return "border-emerald-400/30 bg-emerald-500/10 text-emerald-200";
    case "finalist":
      return "border-yellow-400/30 bg-yellow-500/10 text-yellow-200";
    case "semifinalist":
      return "border-sky-400/30 bg-sky-500/10 text-sky-200";
    default:
      return "border-white/10 bg-white/5 text-white/80";
  }
}

export default function MatchDaysSection({ items }: { items: MatchDay[] }) {
  return (
    <section className="relative py-20 overflow-hidden pt-34">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="absolute inset-0 opacity-[0.10] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.45)_1px,transparent_0)] [background-size:26px_26px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">
            Chillax FC
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-white">
            Match Days
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Tournament moments and milestones from our journey in Darwin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((m) => (
            <Card
              key={m.id}
              className="group relative overflow-hidden bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition"
            >
              {/* Optional card image */}
              {m.image && (
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 scale-110 blur-[2px]"
                  style={{ backgroundImage: `url('${m.image}')` }}
                />
              )}
              <div className="absolute inset-0 bg-black/55" />

              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/60">
                      {m.tournament} • {m.year}
                    </p>
                    <CardTitle className="mt-2 text-white text-2xl font-extrabold">
                      {m.stage}
                    </CardTitle>
                  </div>

                  <Badge className={`border ${outcomeStyles(m.outcomeType)}`}>
                    {m.outcomeLabel}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="relative z-10 space-y-4">
                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-white font-semibold">{m.team}</p>
                    <span className="text-white/60 font-semibold">vs</span>
                    <p className="text-white font-semibold">{m.opponent}</p>
                  </div>

                  {m.location && (
                    <p className="mt-2 text-sm text-white/70">{m.location}</p>
                  )}
                </div>

                {m.notes && (
                  <p className="text-sm text-white/75 leading-relaxed">
                    {m.notes}
                  </p>
                )}

                <div className="flex items-center justify-between pt-2">
                  <Badge className="bg-white/10 text-white border border-white/10">
                    Tournament
                  </Badge>

                  <span className="text-white/60 group-hover:text-white transition">
                    Chill Together • Win Together →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Button
            asChild
            className="rounded-full bg-white text-black hover:bg-white/90 px-8"
          >
            <Link href="/gallery">View Match Moments →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
