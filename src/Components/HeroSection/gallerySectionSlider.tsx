"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Link from "next/link";

type Props = {
  images: string[];
};

export default function GallerySliderSwiper({ images }: Props) {
  if (!images?.length) return null;

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-100"
        style={{
          backgroundImage: "url('/photo_1.jpeg')",
        }}
      />

      <div className="absolute inset-0 bg-black/80" />

      {/* CONTENT */}
      <div className="relative z-10">
        <h2 className="text-center text-white text-3xl md:text-4xl font-extrabold tracking-wider mb-12">
          MATCH MOMENTS
        </h2>

        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect="coverflow"
          centeredSlides
          slidesPerView="auto"
          loop
          grabCursor
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 220,
            modifier: 1.4,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          className="w-full max-w-6xl"
        >
          {images.map((src, i) => (
            <SwiperSlide
              key={i}
              className="!w-[280px] sm:!w-[420px] md:!w-[520px]"
            >
              <div className="relative h-[220px] sm:h-[300px] md:h-[360px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={src}
                  alt={`Gallery ${i}`}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/gallery"
            className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold tracking-wide
               bg-white/10 backdrop-blur-md
               hover:bg-white hover:text-black
               transition-all duration-300"
          >
            View All Moments →
          </Link>
        </div>
      </div>
    </section>
  );
}
