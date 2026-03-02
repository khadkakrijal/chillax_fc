"use client";

import * as React from "react";
import Image from "next/image";

export default function GalleryGrid({ images }: { images: string[] }) {
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const openAt = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const close = () => setOpen(false);

  const prev = React.useCallback(() => {
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = React.useCallback(() => {
    setActiveIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  React.useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, prev, next]);

  if (!images?.length) return null;

  return (
    <>
      {/* Masonry-style grid (nice for mixed image sizes) */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {images.map((src, i) => (
          <button
            key={`${src}-${i}`}
            onClick={() => openAt(i)}
            className="mb-4 w-full break-inside-avoid rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition shadow-[0_15px_60px_rgba(0,0,0,0.45)]"
          >
            <div className="relative w-full aspect-[4/5]">
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10 opacity-0 hover:opacity-100 transition" />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black/85 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={close} />

          <div className="relative h-full w-full flex items-center justify-center px-4">
            <div className="relative w-full max-w-5xl">
              {/* Top controls */}
              <div className="absolute -top-14 left-0 right-0 flex items-center justify-between text-white">
                <p className="text-sm text-white/75">
                  {activeIndex + 1} / {images.length}
                </p>

                <button
                  onClick={close}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 hover:bg-white hover:text-black transition"
                >
                  Close ✕
                </button>
              </div>

              {/* Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/15 bg-black">
                <Image
                  src={images[activeIndex]}
                  alt={`Preview ${activeIndex + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Bottom nav */}
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="rounded-full border border-white/20 bg-white/10 px-5 py-2 hover:bg-white hover:text-black transition"
                >
                  ← Prev
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="rounded-full border border-white/20 bg-white/10 px-5 py-2 hover:bg-white hover:text-black transition"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}