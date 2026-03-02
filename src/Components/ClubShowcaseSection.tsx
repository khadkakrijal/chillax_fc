"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

type Memory = {
  src: string;
  alt?: string;
};

export default function ClubShowcaseSection({
  memories,
}: {
  memories: Memory[];
}) {
  const [expanded, setExpanded] = React.useState(false);

  const about =
    "Chillax FC is a Nepalese community football club based in Darwin, built on friendship, discipline, and love for the game. We represent unity and culture as much as competition — bringing people together through football, respect, and good energy. Whether it’s training, friendly matches, or tournaments, we focus on teamwork, improving together, and supporting one another on and off the pitch. Chill Together. Win Together.";

  const shortAbout =
    about.length > 220 ? about.slice(0, 220).trimEnd() + "…" : about;

  const achievements = [
    {
      title: "Zenith Cup Champion",
      year: "2024",
      note: "Team effort and discipline",
    },
    {
      title: "Grace International Cup Champion",
      year: "2025",
      note: "Strong performance throughout",
    },
  ];

  const values = [
    {
      title: "Brotherhood",
      desc: "We play like a family — supporting each other on and off the field.",
    },
    {
      title: "Respect",
      desc: "For teammates, opponents, referees, and the game itself.",
    },
    {
      title: "Discipline",
      desc: "We train with commitment and show up with the right mindset.",
    },
    {
      title: "Nepalese Community",
      desc: "Football is our way of connecting culture, friendships, and community in Darwin.",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-[2px] opacity-60"
        style={{
          backgroundImage: "url('/coverpage.jpeg')",
        }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">
            Chillax FC
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-white">
            Our Club
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            About the club, our achievements, what we stand for, and our
            favorite moments on the pitch.
          </p>
        </div>

        {/* Top row: About + Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* About */}
          <Card className="lg:col-span-7 bg-white/5 border-white/10 backdrop-blur-md">
            <CardHeader>
              <div className="flex items-center justify-between gap-4">
                <CardTitle className="text-white">About Chillax FC</CardTitle>
                <Badge className="bg-white/10 text-white border border-white/10">
                  Darwin • Nepalese Community
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-white/75 leading-relaxed">
                {expanded ? about : shortAbout}
              </p>

              {about.length > 220 && (
                <Button
                  variant="secondary"
                  className="mt-5 bg-white/10 hover:bg-white/15 text-white border border-white/10"
                  onClick={() => setExpanded((v) => !v)}
                >
                  {expanded ? "Read less" : "Read more"}
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="lg:col-span-5 bg-white/5 border-white/10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white">Achievements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((a) => (
                <div
                  key={`${a.title}-${a.year}`}
                  className="rounded-xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-white font-semibold"> 🏆 {a.title}</p>
                      <p className="text-sm text-white/70">{a.note}</p>
                    </div>
                    <Badge className="bg-white/10 text-white border border-white/10">
                      {a.year}
                    </Badge>
                  </div>
                </div>
              ))}
              <p className="text-xs text-white/55">
                More tournament memories will be added soon.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Middle row: Values */}
        <div className="mt-6">
          <Card className="bg-white/5 border-white/10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white">Club Values</CardTitle>
            </CardHeader>
            <CardContent className="cursor-pointer">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="group rounded-2xl border border-white/10 bg-black/20 p-4 hover:bg-white/5 transition"
                  >
                    <p className="text-white font-semibold">{v.title}</p>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">
                      {v.desc}
                    </p>
                    <div className="mt-4 h-[2px] w-10 bg-white/15 group-hover:bg-white/30 transition" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
