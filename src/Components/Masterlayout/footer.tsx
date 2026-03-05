"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import oasisLogo from "../../../public/oasis.png";
import ciomLogo from "../../../public/CIM.png";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-black text-white border-t border-white/10">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-80 pointer-events-none"
        style={{
          backgroundImage: "url('/nepal.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="Chillax FC Logo"
                width={70}
                height={70}
                priority
              />
              <div>
                <p className="text-lg font-extrabold tracking-wider uppercase">
                  Chillax FC
                </p>
                <p className="text-xs text-white/70 uppercase tracking-widest">
                  Estd 2025
                </p>
              </div>
            </div>

            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Chillax FC. All rights reserved.
            </p>
          </div>

          {/* Middle: Sponsors */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm uppercase tracking-[0.25em] text-white/80">
              Supported by
            </p>

            <div className="flex items-center justify-center gap-6">
              <a
                href="https://oasiseducation.com.au/"
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition"
                aria-label="Oasis Education"
              >
                <Image
                  src={oasisLogo}
                  alt="Oasis Education"
                  width={120}
                  height={48}
                  className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition"
                />
              </a>

              <a
                href="https://ciom.edu.au/"
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition"
                aria-label="CIOM College"
              >
                <Image
                  src={ciomLogo}
                  alt="CIOM College"
                  width={120}
                  height={48}
                  className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition"
                />
              </a>
            </div>

            <p className="text-xs text-white/65 text-center max-w-sm">
              Thanks to our supporters for helping Chillax FC grow and compete.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-sm uppercase tracking-[0.25em] text-white/80">
              Quick Links
            </p>

            <ul className="space-y-2 text-center md:text-right">
              <li>
                <Link
                  className="text-white/85 hover:text-white transition"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/85 hover:text-white transition"
                  href="/team"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/85 hover:text-white transition"
                  href="/match"
                >
                  Matches
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/85 hover:text-white transition"
                  href="/gallery"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/60">
          <p>Chill Together • Win Together</p>
          <p>Made with ❤️ for Chillax FC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
