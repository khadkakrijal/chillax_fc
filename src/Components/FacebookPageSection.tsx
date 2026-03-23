"use client";

import { useEffect, useState } from "react";

export default function FacebookPageSection() {
  const pageUrl =
    "https://www.facebook.com/profile.php?id=61579502730240";

  const [pluginWidth, setPluginWidth] = useState(500);

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setPluginWidth(Math.min(window.innerWidth - 32, 500));
      } else if (window.innerWidth < 1024) {
        setPluginWidth(Math.min(window.innerWidth - 48, 500));
      } else {
        setPluginWidth(500);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const pluginUrl = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
    pageUrl,
  )}&tabs=timeline&width=${pluginWidth}&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    pageUrl,
  )}`;

  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 text-white md:px-6 lg:px-8 lg:py-20">
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <p className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80 md:text-xs">
            Follow Chillax FC
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:mt-5 md:text-5xl">
            Our Facebook Page
          </h2>

          <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base md:mt-5 md:text-lg">
            Stay connected with Chillax FC through our latest posts, match
            moments, club updates, and community highlights — all in one place.
          </p>
        </div>

        <div className="mb-8 rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6 lg:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Join us on Facebook
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
                Explore our official Facebook presence, keep up with club
                activity, and share Chillax FC with supporters, players, and the
                wider football community.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              <a
                href={pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Visit Facebook Page
              </a>

              <a
                href={shareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Share Page
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/5 p-2 backdrop-blur-xl sm:p-3">
          <div className="mb-3 flex flex-col gap-2 px-2 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                Chillax FC Timeline
              </p>
              <p className="text-xs text-white/50">
                Live Facebook page preview
              </p>
            </div>

            <span className="w-fit rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60">
              Social
            </span>
          </div>

          <div className="mx-auto w-full max-w-[500px] overflow-hidden rounded-[20px] bg-white">
            <iframe
              title="Chillax FC Facebook Page"
              src={pluginUrl}
              className="block w-full"
              height="700"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        </div>
      </div>
    </section>
  );
}