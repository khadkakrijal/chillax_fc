"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const MobNav = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);

  const socials = useMemo(
    () => [
      {
        name: "Facebook",
        link: "https://www.facebook.com/profile.php?id=61579502730240",
      },

      {
        name: "Messenger",
        link: "https://www.facebook.com/messages/t/61579502730240",
      },
    ],
    [],
  );

  // Close when route changes
  useEffect(() => {
    setOpen(false);
    setConnectOpen(false);
  }, [pathname]);

  // Lock background scroll when drawer is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const linkClass = (active: boolean) =>
    `flex items-center justify-between w-full rounded-xl px-4 py-4 text-base font-semibold uppercase tracking-wide transition
     ${active ? "bg-black text-white" : "bg-black/[0.03] text-black hover:bg-black/10"}`;

  return (
    <>
      {/* Top mobile bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-black/10">
        <div className="h-16 flex items-center justify-between px-4">
          <Link href="/" aria-label="Home" className="flex items-center gap-3">
            <Image src={logo} alt="logo" className="h-12 w-auto" priority />
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-3 py-2 shadow-sm active:scale-[0.98] transition"
            aria-label="Open menu"
          >
            <FiMenu className="text-2xl text-black" />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/50 transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer panel */}
      <aside
        className={`fixed top-0 right-0 h-screen w-[85%] max-w-sm z-[9999] bg-white shadow-2xl border-l border-black/10
        transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
      >
        {/* Drawer header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-black/10">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="logo" className="h-12 w-auto" priority />
          </div>

          <button
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-3 py-2 shadow-sm active:scale-[0.98] transition"
            aria-label="Close menu"
          >
            <FiX className="text-2xl text-black" />
          </button>
        </div>

        {/* Drawer body */}
        <div className="px-4 py-5 space-y-3 overflow-y-auto h-[calc(100vh-64px)]">
          <Link
            href="/"
            className={linkClass(pathname === "/")}
            onClick={() => setOpen(false)}
          >
            <span>Home</span>
            <span className="opacity-70">→</span>
          </Link>

          <Link
            href="/match"
            className={linkClass(pathname === "/match")}
            onClick={() => setOpen(false)}
          >
            <span>Matches</span>
            <span className="opacity-70">→</span>
          </Link>

          <Link
            href="/gallery"
            className={linkClass(pathname === "/gallery")}
            onClick={() => setOpen(false)}
          >
            <span>Gallery</span>
            <span className="opacity-70">→</span>
          </Link>

          <Link
            href="/team"
            className={linkClass(pathname === "/team")}
            onClick={() => setOpen(false)}
          >
            <span>Team</span>
            <span className="opacity-70">→</span>
          </Link>

          {/* Connect (with dropdown) */}
          <button
            type="button"
            onClick={() => setConnectOpen((v) => !v)}
            className={linkClass(pathname === "/connect")}
          >
            <span>Connect</span>
            <FiChevronDown
              className={`text-xl transition-transform ${connectOpen ? "rotate-180" : ""}`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              connectOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-2 rounded-xl border border-black/10 bg-black/[0.03] p-3 grid grid-cols-2 gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-white px-3 py-3 text-center text-sm font-semibold text-black shadow-sm border border-black/10 hover:bg-black hover:text-white transition"
                >
                  {s.name}
                </a>
              ))}
            </div>

            <Link
              href="/connect"
              onClick={() => setOpen(false)}
              className="mt-3 block text-center text-sm font-semibold underline text-black/70 hover:text-black"
            >
              Go to Connect page →
            </Link>
          </div>

          {/* Footer note */}
          <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.03] p-4">
            <p className="text-sm text-black/70">
              Chill Together. Win Together.
            </p>
          </div>
        </div>
      </aside>

      {/* Spacer so page content doesn't go under fixed navbar */}
      <div className="h-16" />
    </>
  );
};

export default MobNav;
