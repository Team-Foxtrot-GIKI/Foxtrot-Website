"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/**
 * Cross-fading image frame.
 *
 * Motion is linear and brief; controls are square and hairline-bordered rather
 * than the usual floating circles. Auto-advance pauses on hover and focus so it
 * never fights a visitor who is trying to read the caption or use the dots.
 */
export default function Carousel({
  images,
  interval = 4000,
  alt = "",
  aspect = "aspect-[16/10]",
  className = "",
}: {
  images: string[];
  interval?: number;
  alt?: string;
  aspect?: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = images.length;

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused || interval <= 0 || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => go(1), interval);
    return () => clearInterval(id);
  }, [paused, interval, count, go]);

  if (count === 0) return null;

  return (
    <div
      className={`relative overflow-hidden border border-line bg-panel ${aspect} ${className}`}
      role="group"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <Image
          key={src + i}
          src={src}
          alt={i === index ? alt : ""}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-opacity duration-500 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        />
      ))}

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous image"
            className="absolute top-1/2 left-2 -translate-y-1/2 border border-line bg-primary/85 px-2.5 py-2 text-text transition-colors duration-150 hover:border-amber hover:text-amber"
          >
            <span aria-hidden>←</span>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next image"
            className="absolute top-1/2 right-2 -translate-y-1/2 border border-line bg-primary/85 px-2.5 py-2 text-text transition-colors duration-150 hover:border-amber hover:text-amber"
          >
            <span aria-hidden>→</span>
          </button>

          <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1.5 bg-gradient-to-t from-primary/80 to-transparent p-3">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Image ${i + 1} of ${count}`}
                aria-current={i === index}
                className={`h-1 w-7 transition-colors duration-150 ${
                  i === index ? "bg-amber" : "bg-text/40 hover:bg-text/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
