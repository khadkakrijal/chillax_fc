"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import coverpage from "../../../public/gallery/k.jpg";

const CoverPage = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const calculated = 1 - window.scrollY / 700;
      setOpacity(Math.max(0, calculated));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden">
      <Image
        src={coverpage}
        alt="Cover"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        style={{ opacity }}
      >
        <h1
          className="font-extrabold  text-5xl md:text-7xl text-white opacity-50
           "
        >
          CHILLAX FC
        </h1>

        {/* Smaller marquee area */}
        <div className="marquee-wrapper mt-10">
          <div className="marquee-track">
            <div className="marquee-group">
              <span className="marquee-text">
                Chill Together • Win Together
              </span>
            </div>
            <div className="marquee-group" aria-hidden="true">
              <span className="marquee-text">
                Chill Together • Win Together
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverPage;
