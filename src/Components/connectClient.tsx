"use client";

import { BackgroundBeams } from "@/Components/aceternity/BackgroundBeams";
import { Spotlight } from "@/Components/aceternity/Spotlight";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import * as React from "react";
import Swal from "sweetalert2";

export default function ConnectPage() {
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState<{
    ok: boolean;
    msg: string;
  } | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/connect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data: any = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        data = {};
      }

      if (!res.ok || data.ok === false) {
        await Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: data.error || "Please try again.",
          confirmButtonText: "OK",
        });
        return;
      }

      await Swal.fire({
        icon: "success",
        title: "Sent Successfully!",
        text: "Thanks! Your message has been sent to Chillax FC.",
        confirmButtonText: "Done",
      });

      formEl.reset();
    } catch (err) {
      await Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Please check your internet and try again.",
        confirmButtonText: "OK",
      });
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden text-white pt-10">
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-[2px] opacity-40"
        style={{ backgroundImage: "url('/photo_1.jpeg')" }}
      />
      <div className="absolute inset-0 bg-black/75" />

      <BackgroundBeams />
      <Spotlight
        className="absolute -top-40 -left-48 h-[650px] w-[650px]"
        fill="white"
      />
      <Spotlight
        className="absolute -bottom-52 right-0 h-[650px] w-[650px]"
        fill="white"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 md:pt-28 pb-16">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">
            Chillax FC • Darwin
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">Connect</h1>
          <p className="mt-4 text-white/70">
            Send your details to join training or connect with the club. Only
            authorised club members receive these submissions.
          </p>
        </div>

        <Card className="bg-white/5 border-white/10 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-white">Join Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-4">
              {/* Honeypot (hidden anti-spam field) */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-white/60">
                    Full Name *
                  </label>
                  <Input
                    name="name"
                    required
                    placeholder="Your name"
                    className="mt-2 bg-black/20 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-white/60">
                    Phone / WhatsApp *
                  </label>
                  <Input
                    name="phone"
                    required
                    placeholder="e.g. 04xx xxx xxx"
                    className="mt-2 bg-black/20 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-white/60">
                  Email (optional)
                </label>
                <Input
                  name="email"
                  placeholder="you@example.com"
                  className="mt-2 bg-black/20 border-white/10 text-white placeholder:text-white/40"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-white/60">
                    Position
                  </label>
                  <Input
                    name="position"
                    placeholder="Defender / Midfielder / Forward / GK"
                    className="mt-2 bg-black/20 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-white/60">
                    Level
                  </label>
                  <Input
                    name="level"
                    placeholder="Beginner / Intermediate / Competitive"
                    className="mt-2 bg-black/20 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-white/60">
                    Availability
                  </label>
                  <Input
                    name="availability"
                    placeholder="Weekdays / Weekends / Both"
                    className="mt-2 bg-black/20 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-white/60">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about you (experience, location, why you want to join)..."
                  className="mt-2 w-full rounded-md bg-black/20 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-white text-black hover:bg-white/90 font-semibold"
              >
                {loading ? "Sending..." : "Send to Chillax FC →"}
              </Button>

              {status && (
                <div
                  className={`text-sm rounded-xl border p-3 ${
                    status.ok
                      ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-200"
                      : "border-red-400/30 bg-red-500/10 text-red-200"
                  }`}
                >
                  {status.msg}
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
