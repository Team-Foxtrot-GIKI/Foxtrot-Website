"use client";

import { useEffect, useState } from "react";

/**
 * FLIGHT PATH — scroll progress as position within the recording.
 *
 * A thin line down the left edge that fills as the visitor scrolls, with a small
 * marker at the leading edge. Framed as "how far into the recording you are".
 *
 * Hidden below 900px (no room, and it competes with the content) and static at
 * full length under prefers-reduced-motion. Uses a scroll listener with
 * requestAnimationFrame coalescing rather than a scroll-linked animation, so it
 * stays smooth without thrashing layout.
 */
export default function FlightPath() {
  const [pct, setPct] = useState(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 900px)").matches) return;
    setEnabled(true);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPct(100);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setPct(max > 0 ? Math.min(100, (doc.scrollTop / max) * 100) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed top-0 bottom-0 left-3 z-40 hidden w-px bg-line lg:block"
    >
      <div
        className="absolute top-0 left-0 w-px bg-scope"
        style={{ height: `${pct}%` }}
      />
      {/* Leading-edge marker — the current position in the recording. */}
      <div
        className="absolute -left-[3px] size-[7px] border border-scope bg-primary"
        style={{ top: `calc(${pct}% - 3px)` }}
      />
    </div>
  );
}
