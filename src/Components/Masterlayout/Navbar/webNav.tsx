"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import { usePathname, useSearchParams } from "next/navigation";

interface WebNavProps {
  className?: string;
}

const WebNav: React.FC<WebNavProps> = () => {
  const [dropdown, setDropdown] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  // /events?type=upcomingevents | pastevents
  const type = searchParams.get("type");

  const isMatches = pathname === "/match";
  const isTeam = pathname === "/team";
  // const isMatches = isEventsPage && type === "upcomingevents";
  // const isTeam  = isEventsPage && type === "team";

  const connect = useMemo(
    () => [
      { name: "Facebook", link: "" },
      { name: "Instagram", link: "" },
      { name: "LinkedIn", link: "" },
      { name: "Youtube", link: "" },
      { name: "Email", link: "" },
      { name: "Messenger", link: "" },
    ],
    [],
  );

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

  // helper for link underline (keeps your same styles)
  const baseHover =
    "hover:after:absolute hover:after:block hover:after:w-full hover:after:h-1 hover:after:mt-5 hover:after:bg-black hover:text-black";

  return (
    <div>
      <nav
        className="h-18 opacity-80 bg-white text-gray-800 duration-700 flex uppercase justify-center fixed top-0 left-0 right-0 m-auto mt-[50px] z-50 rounded-sm shadow-2xl font-abel-pro"
        onMouseLeave={hideDropdown}
      >
        <ul className="flex items-center text-black justify-around gap-32 text-base font-bold relative ">
          {/* Upcoming Events */}
          <li className="relative">
            <Link
              href="/match"
              className={`${baseHover} ${isMatches ? "text-black font-extrabold" : ""}`}
            >
             Matches
              {isMatches && (
                <div className="absolute top-11 w-full h-1 bg-black" />
              )}
            </Link>
          </li>

          {/* Gallery */}
          <li className="relative">
            <Link
              href="/gallery"
              className={`${baseHover} ${pathname === "/gallery" ? "text-black font-extrabold" : ""}`}
            >
              Gallery
              {pathname === "/gallery" && (
                <div className="absolute top-11 w-full h-1 bg-black" />
              )}
            </Link>
          </li>

          {/* Logo (Home) */}
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

          {/* Past Events */}
          <li className="relative">
            <Link
              href="/team"
              className={`${baseHover} ${isTeam ? "text-black font-extrabold" : ""}`}
            >
            Team
              {isTeam && (
                <div className="absolute top-11 w-full h-1 bg-black" />
              )}
            </Link>
          </li>

          {/* Connect */}
          <li className="relative">
            <Link
              href="/connect"
              className={`${baseHover} ${pathname === "/connect" ? "text-black font-extrabold" : ""}`}
              onMouseEnter={showDropdown}
            >
              Connect
              {pathname === "/connect" && (
                <div className="absolute top-11 w-full h-1 bg-black" />
              )}
            </Link>
          </li>
        </ul>

        {/* Dropdown */}
        {dropdown && (
          <div className="h-14 flex w-full absolute bg-slate-100 items-center justify-end font-bold top-full right-0 md:px-10 text-sm">
            <ul className="flex gap-10 text-sm justify-end items-center">
              {/* Replace these with real URLs later */}
              <li>
                <a
                  className="inline-block transition-transform duration-300 hover:scale-110"
                  target="_blank"
                  rel="noreferrer"
                  href="#"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="inline-block transition-transform duration-300 hover:scale-110"
                  target="_blank"
                  rel="noreferrer"
                  href="#"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="inline-block transition-transform duration-300 hover:scale-110"
                  target="_blank"
                  rel="noreferrer"
                  href="#"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="inline-block transition-transform duration-300 hover:scale-110"
                  target="_blank"
                  rel="noreferrer"
                  href="#"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  className="inline-block transition-transform duration-300 hover:scale-110"
                  target="_blank"
                  rel="noreferrer"
                  href="#"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  className="inline-block transition-transform duration-300 hover:scale-110"
                  target="_blank"
                  rel="noreferrer"
                  href="#"
                >
                  Messenger
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default WebNav;
