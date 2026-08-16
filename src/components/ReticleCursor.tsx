"use client";

import { useEffect, useRef, useState } from "react";

/**
 * RETICLE CURSOR — desktop pointer only.
 *
 * A small crosshair replacing the default cursor, expanding over interactive
 * elements. Disabled entirely when any of these hold, so it degrades rather than
 * breaks:
 *   - viewport below 900px
 *   - no fine pointer (touch / stylus)
 *   - prefers-reduced-motion
 *
 * The native cursor is only hidden once this component is actually mounted and
 * active, so a visitor never ends up with no cursor at all if it bails out.
 * Position is written straight to a ref via transform (compositor-only), not
 * React state, so it doesn't re-render on every mousemove.
 */

const INTERACTIVE = 'a, button, input, select, textarea, summary, [role="button"], [tabindex]:not([tabindex="-1"])';

export default function ReticleCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [over, setOver] = useState(false);

  useEffect(() => {
    const ok =
      window.matchMedia("(min-width: 900px)").matches &&
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!ok) return;

    setEnabled(true);
    document.documentElement.classList.add("ftx-reticle-on");

    const onMove = (e: MouseEvent) => {
      const el = dot.current;
      if (el) {
        el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      setOver(Boolean(t?.closest?.(INTERACTIVE)));
    };
    // Hide the reticle when the pointer leaves the window entirely.
    const onLeave = () => {
      if (dot.current) dot.current.style.opacity = "0";
    };
    const onEnter = () => {
      if (dot.current) dot.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.documentElement.classList.remove("ftx-reticle-on");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[90] hidden lg:block"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        className={`transition-transform duration-150 ease-out ${
          over ? "scale-125" : "scale-100"
        }`}
      >
        {/* Four ticks + centre dot. Amber on hover, titanium at rest. */}
        <g
          stroke={over ? "#FFB100" : "#808790"}
          strokeWidth="1"
          className="transition-colors duration-150"
        >
          <line x1="20" y1="6" x2="20" y2="13" />
          <line x1="20" y1="27" x2="20" y2="34" />
          <line x1="6" y1="20" x2="13" y2="20" />
          <line x1="27" y1="20" x2="34" y2="20" />
          {over && (
            <circle cx="20" cy="20" r="11" fill="none" strokeOpacity="0.5" />
          )}
        </g>
        <circle cx="20" cy="20" r="1" fill={over ? "#FFB100" : "#808790"} />
      </svg>
    </div>
  );
}
