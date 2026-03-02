"use client";

import Image from "next/image";
import { BackgroundBeams } from "../aceternity/BackgroundBeams";
import { Spotlight } from "../aceternity/Spotlight";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Badge } from "../ui/badge";

type Player = {
  id: string;
  slug: string;
  name: string;
  position: string;
  image: string;
  age: number;
  dob: string;
  email: string;

  // ✅ new fields (optional so it won't break if some players don't have them yet)
  bio?: string;
  joined?: number;
  foot?: string;
  playStyle?: string[];
  strengths?: string[];

  // ✅ keeping your old field too (fallback)
  history?: string;
};

export default function PlayerProfilePage({ player }: { player: Player }) {
  const aboutText = player.bio || player.history || "";

  return (
    <div className="min-h-screen relative text-white overflow-hidden pt-24">
      {/* ✅ Background Image (cinematic) */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-[2px] opacity-35"
        style={{ backgroundImage: "url('/photo_1.jpeg')" }}
      />
      {/* ✅ Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/65" />

      {/* ✅ Animated background */}
      <BackgroundBeams />

      {/* ✅ Spotlights */}
      <Spotlight
        className="absolute -top-40 -left-48 h-[650px] w-[650px]"
        fill="white"
      />
      <Spotlight
        className="absolute -bottom-52 right-0 h-[650px] w-[650px]"
        fill="white"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10">
        {/* HEADER */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 grid place-items-center font-black">
              CF
            </div>
            <div className="leading-tight">
              <p className="text-xs text-white/60">Chillax FC</p>
              <p className="text-sm font-semibold text-white/90">
                Player Profile
              </p>
            </div>
          </div>
        </div>

        {/* MAIN */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT DETAILS */}
          <div className="lg:col-span-5">
            <Card className="bg-white/5 border-white/10 backdrop-blur-md">
              <CardHeader>
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                  {player.position}
                </p>
                {player.position === "Manager" && (
                  <Badge className="w-fit mt-2 bg-yellow-500/20 text-yellow-300 border-yellow-400/30">
                    Club Management
                  </Badge>
                )}
                <CardTitle className="text-4xl md:text-5xl font-extrabold leading-tight">
                  {player.name}
                </CardTitle>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Pill label="Age" value={`${player.age}`} />
                  <Pill label="DOB" value={player.dob} />
                  {player.foot ? (
                    <Pill label="Foot" value={player.foot} />
                  ) : null}
                  {player.joined ? (
                    <Pill label="Joined" value={`${player.joined}`} />
                  ) : null}
                </div>

                {/* ✅ play style badges */}
                {player.playStyle?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {player.playStyle.map((t) => (
                      <span
                        key={t}
                        className="text-xs rounded-full border border-white/10 bg-black/25 px-3 py-1 text-white/85"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </CardHeader>

              <CardContent>
                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-widest text-white/60">
                    Bio
                  </p>
                  <p className="mt-2 text-sm text-white/75 leading-relaxed">
                    {aboutText}
                  </p>
                </div>

                {/* ✅ strengths section */}
                {player.strengths?.length ? (
                  <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-widest text-white/60">
                      Strengths
                    </p>
                    <ul className="mt-2 space-y-2">
                      {player.strengths.map((s) => (
                        <li key={s} className="text-sm text-white/75">
                          • {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-widest text-white/60">
                    Contact
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white/90 break-all">
                    {player.email}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CENTER IMAGE */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-b from-white/15 to-transparent blur-xl" />
              <div className="relative rounded-[2.25rem] border border-white/10 bg-white/5 backdrop-blur-md p-4 shadow-[0_25px_90px_rgba(0,0,0,0.65)]">
                <div className="relative h-[460px] w-full rounded-[1.75rem] overflow-hidden">
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15" />
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-white/60">
                    Chillax FC
                  </span>
                  <span className="text-sm font-semibold text-white/90">
                    {player.position}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-sm uppercase tracking-widest text-white/80">
                  Quick Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Row label="Full Name" value={player.name} />
                <Row label="Position" value={player.position} />
                <Row label="Age" value={`${player.age}`} />
                <Row label="DOB" value={player.dob} />
                {player.foot ? <Row label="Foot" value={player.foot} /> : null}
                {player.joined ? (
                  <Row label="Joined" value={`${player.joined}`} />
                ) : null}
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-sm uppercase tracking-widest text-white/80">
                  About
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/75 leading-relaxed">
                  {aboutText}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ✅ TABS (now using shadcn tabs so it will style correctly) */}
        <div className="mt-8">
          <Tabs defaultValue="profile">
            <TabsList className="bg-white/5 border border-white/10">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
              <TabsTrigger value="story">Story</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-4">
              <Card className="bg-white/5 border-white/10 backdrop-blur-md">
                <CardContent className="p-6 text-sm text-white/75 leading-relaxed">
                  <span className="font-semibold text-white/90">
                    {player.name}
                  </span>{" "}
                  plays as a{" "}
                  <span className="font-semibold text-white/90">
                    {player.position}
                  </span>{" "}
                  for Chillax FC.
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact" className="mt-4">
              <Card className="bg-white/5 border-white/10 backdrop-blur-md">
                <CardContent className="p-6">
                  <p className="text-sm text-white/70">Email</p>
                  <p className="mt-1 text-sm font-semibold break-all">
                    {player.email}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="story" className="mt-4">
              <Card className="bg-white/5 border-white/10 backdrop-blur-md">
                <CardContent className="p-6 text-sm text-white/75 leading-relaxed">
                  {aboutText}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

/* helpers */
function Pill({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-3 py-1.5">
      <span className="text-[10px] uppercase tracking-widest text-white/60">
        {label}
      </span>
      <span className="text-xs font-semibold text-white/90">{value}</span>
    </span>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-2 last:border-b-0 last:pb-0">
      <span className="text-[10px] uppercase tracking-widest text-white/55">
        {label}
      </span>
      <span className="text-sm font-semibold text-white/90 text-right break-words">
        {value}
      </span>
    </div>
  );
}
