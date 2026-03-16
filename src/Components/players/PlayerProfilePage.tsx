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

  bio?: string;
  history?: string;
  joined?: number;
  foot?: string;
  playStyle?: string[];
  strengths?: string[];

  nationality?: string;
  height?: string;
  shirtNumber?: number;
  achievements?: string[];
};

export default function PlayerProfilePage({ player }: { player: Player }) {
  const aboutText = player.bio || player.history || "";

  return (
    <div className="min-h-screen relative overflow-hidden text-white md:pt-24">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-[2px] opacity-35"
        style={{ backgroundImage: "url('/photo_1.jpeg')" }}
      />
      <div className="absolute inset-0 bg-black/65" />

      {/* Animated beams */}
      <BackgroundBeams />

      {/* Spotlights */}
      <Spotlight
        className="absolute -top-40 -left-48 h-[650px] w-[650px]"
        fill="white"
      />
      <Spotlight
        className="absolute -bottom-52 right-0 h-[650px] w-[650px]"
        fill="white"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10">
        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/10 font-black">
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

        {/* Main Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Details */}
          <div className="lg:col-span-5">
            <Card className="border-white/10 bg-white/5 backdrop-blur-md">
              <CardHeader>
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                  {player.position}
                </p>

                {player.position === "Manager" && (
                  <Badge className="mt-2 w-fit border-yellow-400/30 bg-yellow-500/20 text-yellow-300">
                    Club Management
                  </Badge>
                )}

                <CardTitle className="text-4xl font-extrabold leading-tight md:text-5xl">
                  {player.name}
                </CardTitle>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Pill label="Age" value={`${player.age}`} />
                  <Pill label="DOB" value={player.dob} />
                  {player.foot ? <Pill label="Foot" value={player.foot} /> : null}
                  {player.joined ? (
                    <Pill label="Joined" value={`${player.joined}`} />
                  ) : null}
                  {player.nationality ? (
                    <Pill label="Nation" value={player.nationality} />
                  ) : null}
                  {player.height ? (
                    <Pill label="Height" value={player.height} />
                  ) : null}
                  {player.shirtNumber ? (
                    <Pill label="No." value={`${player.shirtNumber}`} />
                  ) : null}
                </div>

                {player.playStyle?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {player.playStyle.map((style) => (
                      <span
                        key={style}
                        className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-white/85"
                      >
                        {style}
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
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {aboutText}
                  </p>
                </div>

                {player.strengths?.length ? (
                  <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-widest text-white/60">
                      Strengths
                    </p>
                    <ul className="mt-3 space-y-2">
                      {player.strengths.map((strength) => (
                        <li key={strength} className="text-sm text-white/75">
                          • {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-widest text-white/60">
                    Contact
                  </p>
                  <p className="mt-2 break-all text-sm font-semibold text-white/90">
                    {player.email}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Center Image */}
          <div className="flex items-center justify-center lg:col-span-4">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-b from-white/15 to-transparent blur-xl" />
              <div className="relative rounded-[2.25rem] border border-white/10 bg-white/5 p-4 shadow-[0_25px_90px_rgba(0,0,0,0.65)] backdrop-blur-md">
                <div className="relative h-[460px] w-full overflow-hidden rounded-[1.75rem]">
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

          {/* Right Panel */}
          <div className="space-y-6 lg:col-span-3">
            <Card className="border-white/10 bg-white/5 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-sm uppercase tracking-widest text-white/80">
                  Player Snapshot
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
                {player.nationality ? (
                  <Row label="Nationality" value={player.nationality} />
                ) : null}
                {player.height ? (
                  <Row label="Height" value={player.height} />
                ) : null}
                {player.shirtNumber ? (
                  <Row label="Shirt No." value={`${player.shirtNumber}`} />
                ) : null}
              </CardContent>
            </Card>

            {player.achievements?.length ? (
              <Card className="border-white/10 bg-white/5 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-sm uppercase tracking-widest text-white/80">
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {player.achievements.map((achievement) => (
                      <li key={achievement} className="text-sm text-white/75">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ) : null}
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8">
          <Tabs defaultValue="overview">
            <TabsList className="border border-white/10 bg-white/5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="strengths">Strengths</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-4">
              <Card className="border-white/10 bg-white/5 backdrop-blur-md">
                <CardContent className="p-6 text-sm leading-relaxed text-white/75">
                  <span className="font-semibold text-white/90">
                    {player.name}
                  </span>{" "}
                  plays as a{" "}
                  <span className="font-semibold text-white/90">
                    {player.position}
                  </span>{" "}
                  for Chillax FC.
                  {aboutText ? <span> {aboutText}</span> : null}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="strengths" className="mt-4">
              <Card className="border-white/10 bg-white/5 backdrop-blur-md">
                <CardContent className="p-6">
                  {player.strengths?.length ? (
                    <div className="flex flex-wrap gap-3">
                      {player.strengths.map((strength) => (
                        <span
                          key={strength}
                          className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-white/85"
                        >
                          {strength}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-white/60">
                      No strengths added yet.
                    </p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="mt-4">
              <Card className="border-white/10 bg-white/5 backdrop-blur-md">
                <CardContent className="p-6">
                  {player.achievements?.length ? (
                    <ul className="space-y-3 text-sm leading-relaxed text-white/75">
                      {player.achievements.map((achievement) => (
                        <li key={achievement}>• {achievement}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-white/60">
                      No achievements added yet.
                    </p>
                  )}
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
      <span className="break-words text-right text-sm font-semibold text-white/90">
        {value}
      </span>
    </div>
  );
}