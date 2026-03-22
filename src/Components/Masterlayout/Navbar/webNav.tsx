"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import { usePathname, useSearchParams } from "next/navigation";

interface WebNavProps {
  className?: string;
}

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.438H7.078v-3.49h3.047V9.413c0-3.021 1.792-4.689 4.533-4.689 1.313 0 2.686.236 2.686.236v2.969H15.83c-1.49 0-1.955.931-1.955 1.887v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073z" />
  </svg>
);

const MessengerIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.913 1.45 5.511 3.717 7.209V22l3.23-1.77c.96.266 1.99.408 3.053.408 5.523 0 10-4.145 10-9.259S17.523 2 12 2zm1.017 12.451-2.544-2.714-4.965 2.714 5.461-5.796 2.582 2.714 4.927-2.714-5.461 5.796z" />
  </svg>
);

const WebNav: React.FC<WebNavProps> = () => {
  const [dropdown, setDropdown] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const type = searchParams.get("type");

  const isMatches = pathname === "/match";
  const isTeam = pathname === "/team";

  function handleScroll() {
    const navbar = document.querySelector("nav");
    if (!navbar) return;

    const scrollPosition = window.scrollY;
    const bodyWidth = document.body.offsetWidth;

    if (scrollPosition > 100) {
      navbar.style.transition =
        "transform 0.5s ease-in-out, width 0.5s ease-in-out, margin-top 0.2s ease-in-out";
      navbar.style.marginTop = "0";
      navbar.style.width = `${bodyWidth}px`;
    } else {
      navbar.style.transition =
        "transform 0.2s ease-in-out, width 0.2s ease-in-out, margin-top 0.1s ease-in-out";
      navbar.style.transform = "none";
      navbar.style.width = "1130px";
      navbar.style.marginTop = `${49 - scrollPosition / 2}px`;
    }
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showDropdown = () => setDropdown(true);
  const hideDropdown = () => setDropdown(false);

  const baseHover =
    "hover:after:absolute hover:after:block hover:after:w-full hover:after:h-1 hover:after:mt-5 hover:after:bg-black hover:text-black";

  return (
    <div>
      <nav className="h-18 opacity-90 bg-white text-gray-800 duration-700 flex uppercase justify-center fixed top-0 left-0 right-0 m-auto mt-[50px] z-50 rounded-sm shadow-2xl font-abel-pro">
        <ul className="flex items-center text-black justify-around gap-32 text-base font-bold relative">
          <li className="relative">
            <Link
              href="/match"
              className={`${baseHover} ${
                isMatches ? "text-black font-extrabold" : ""
              }`}
            >
              Matches
              {isMatches && (
                <div className="absolute top-11 w-full h-1 bg-black" />
              )}
            </Link>
          </li>

          <li className="relative">
            <Link
              href="/gallery"
              className={`${baseHover} ${
                pathname === "/gallery" ? "text-black font-extrabold" : ""
              }`}
            >
              Gallery
              {pathname === "/gallery" && (
                <div className="absolute top-11 w-full h-1 bg-black" />
              )}
            </Link>
          </li>

          <li className="relative">
            <Link href="/" aria-label="Home">
              <Image
                className="w-16 h-16 px-0"
                src={logo}
                height={100}
                width={100}
                alt="logo"
                priority
              />
              {pathname === "/" && (
                <div className="absolute top-16 w-full h-1 bg-black" />
              )}
            </Link>
          </li>

          <li className="relative">
            <Link
              href="/team"
              className={`${baseHover} ${
                isTeam ? "text-black font-extrabold" : ""
              }`}
            >
              Team
              {isTeam && (
                <div className="absolute top-11 w-full h-1 bg-black" />
              )}
            </Link>
          </li>

          {/* Connect with hover-safe dropdown area */}
          <li
            className="relative"
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
          >
            <Link
              href="/connect"
              className={`${baseHover} ${
                pathname === "/connect" ? "text-black font-extrabold" : ""
              } relative uppercase inline-block`}
            >
              Connect
              {pathname === "/connect" && (
                <div className="absolute top-11 w-full h-1 bg-black" />
              )}
            </Link>

            {dropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 z-50">
                <div className="min-w-[340px] rounded-2xl border border-gray-200 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] p-4 normal-case">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-l border-t border-gray-200" />

                  <p className="text-[11px] tracking-[0.25em] text-gray-500 uppercase mb-3 font-semibold text-center">
                    Connect With Us
                  </p>

                  <div className="flex flex-col gap-3">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/profile.php?id=61579502730240"
                      className="group flex items-center justify-between rounded-2xl px-4 py-3 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-gradient-to-r from-[#1877F2] to-[#0E5FD8]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                          <FacebookIcon />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-bold leading-none">
                            Facebook
                          </p>
                          <p className="text-xs text-white/80 mt-1">
                            Follow our official page
                          </p>
                        </div>
                      </div>
                      <span className="text-white/80 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>

                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/messages/t/61579502730240"
                      className="group flex items-center justify-between rounded-2xl px-4 py-3 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-gradient-to-r from-[#00B2FF] via-[#5865F2] to-[#A934FF]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                          <MessengerIcon />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-bold leading-none">
                            Messenger
                          </p>
                          <p className="text-xs text-white/80 mt-1">
                            Chat with us directly
                          </p>
                        </div>
                      </div>
                      <span className="text-white/80 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default WebNav;
