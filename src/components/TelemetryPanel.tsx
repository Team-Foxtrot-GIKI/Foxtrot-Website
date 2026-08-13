"use client";

import { useEffect, useRef, useState } from "react";

/*
 * ============================================================================
 * DECORATIVE / ILLUSTRATIVE ONLY — NOT REAL FLIGHT DATA.
 * ============================================================================
 *
 * These readouts are a visual device representing what a flight recorder trace
 * looks like. Team Foxtrot has NOT supplied flight logs, and none of these
 * values are measured. They are deterministic per-aircraft (seeded from the
 * slug) so they stay stable across renders rather than looking like a live feed.
 *
 * The panel carries a VISIBLE "illustrative" notice as well as this comment.
 * That is deliberate: an unlabelled telemetry graph on a competition team's site
 * reads as real data to a judge or sponsor, and being caught overstating is a
 * far worse outcome than a slightly less immersive panel. If real logs are
 * supplied later, swap `bars` for the measured values and drop the notice.
 * ============================================================================
 */

export type TelemetryBar = {
  label: string;
  /** 0–100 */
  value: number;
  unit: string;
  /** Display value, e.g. "14.8 V" — falls back to `value + unit`. */
  readout?: string;
};

/** Small deterministic hash so a given aircraft always shows the same trace. */
function seed(slug: string) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}

/** Builds a stable illustrative trace for one aircraft. */
export function traceFor(slug: string, points = 48): number[] {
  const s = seed(slug);
  return Array.from({ length: points }, (_, i) => {
    const a = Math.sin((i / points) * Math.PI * 2 + (s % 100) / 16);
    const b = Math.sin((i / points) * Math.PI * 6 + (s % 37) / 5) * 0.35;
    return 50 + (a + b) * 26;
  });
}

export default function TelemetryPanel({
  slug,
  bars,
}: {
  slug: string;
  bars: TelemetryBar[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  // Fill the bars only once the panel is actually on screen.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const trace = traceFor(slug);
  const path = trace
    .map((v, i) => `${(i / (trace.length - 1)) * 100},${100 - v}`)
    .join(" ");

  return (
    <div ref={ref}>
      {/* Visible honesty notice — see the block comment above. */}
      <p className="mb-4 border-l-2 border-warning bg-panel px-3 py-2 text-xs text-titanium-text">
        <span className="label-micro text-warning">Illustrative</span>{" "}
        <span className="ml-1">
          Representative readouts, not recorded flight data. Real logs have not
          been published for this airframe.
        </span>
      </p>

      <div className="border border-line bg-panel p-4">
        <div className="flex items-center justify-between gap-4 border-b border-line pb-2">
          <span className="label-micro">Recorder Trace</span>
          <span className="label-micro text-scope">SIMULATED</span>
        </div>

        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="mt-3 h-24 w-full"
          role="img"
          aria-label="Illustrative recorder trace — not real flight data"
        >
          {[25, 50, 75].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              stroke="#2C3138"
              strokeWidth="0.4"
            />
          ))}
          <polyline
            points={path}
            fill="none"
            stroke="#9EF18B"
            strokeWidth="0.8"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <dl className="mt-4 space-y-4">
        {bars.map((bar) => (
          <div key={bar.label}>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="label-micro">{bar.label}</dt>
              <dd className="data text-xs text-scope">
                {bar.readout ?? `${bar.value}${bar.unit}`}
              </dd>
            </div>
            <div
              className="mt-1.5 h-[5px] bg-panel-2"
              role="meter"
              aria-valuenow={bar.value}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${bar.label} — illustrative`}
            >
              <div
                className="h-full bg-scope transition-[width] duration-700 ease-out"
                style={{ width: shown ? `${bar.value}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}
