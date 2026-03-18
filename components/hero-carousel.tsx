"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroSlides } from "@/lib/data";

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative w-full h-[60vh] min-h-[450px] sm:h-[70vh] md:h-[80vh]">

        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >

            {/* 🔥 Background Fill (NO EMPTY SPACE) */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt=""
                fill
                className="object-cover blur-xl scale-110 opacity-50"
              />
            </div>

            {/* ✅ MAIN IMAGE (FULL IMAGE ALWAYS VISIBLE) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-contain"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <div className="max-w-3xl">
                <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
                  {slide.title}
                </h1>

                <p className="mb-8 text-sm sm:text-base md:text-lg text-gray-300">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link
                    href="/products"
                    className="rounded-md bg-white px-8 py-3 text-sm font-semibold text-black hover:bg-gray-200"
                  >
                    Shop Now
                  </Link>

                  <Link
                    href="/about"
                    className="rounded-md border border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              index === current
                ? "w-8 bg-white"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
