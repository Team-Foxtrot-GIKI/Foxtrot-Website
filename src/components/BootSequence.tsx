"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * FLIGHT RECORDER BOOT SEQUENCE.
 *
 * A fast synchronisation transition rather than a theatrical boot screen.
 * It plays on each fresh page load and stays long enough for its status message
 * to be read without becoming a full boot-screen interruption.
 *   - prefers-reduced-motion → skipped entirely, straight to content.
 *   - NON-BLOCKING: the page is fully rendered beneath this overlay, so crawlers,
 *     screen readers, and JS-failure cases all get the real content. Costs
 *     nothing in SEO or Largest Contentful Paint.
 */

export type Subsystem = { label: string; status: string };

const SYNC_MS = 1300;
const HOLD_MS = 850;
const FADE_MS = 200;

export default function BootSequence({
  subsystems,
}: {
  subsystems: Subsystem[];
}) {
  // Starts hidden; only an explicit client check turns it on, so the SSR output
  // and no-JS experience are the plain page.
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(-1);
  const [closing, setClosing] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const dismiss = useCallback(() => {
    timers.current.forEach(clearTimeout);
    setClosing(true);
    setTimeout(() => setActive(false), FADE_MS);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    setActive(true);
    const scheduled: ReturnType<typeof setTimeout>[] = [];
    scheduled.push(setTimeout(() => setStep(subsystems.length), SYNC_MS));
    scheduled.push(setTimeout(dismiss, SYNC_MS + HOLD_MS));
    timers.current = scheduled;

    return () => scheduled.forEach(clearTimeout);
  }, [subsystems, dismiss]);

  useEffect(() => {
    if (!active) return;
    const onAny = () => dismiss();
    window.addEventListener("keydown", onAny);
    window.addEventListener("wheel", onAny, { passive: true });
    window.addEventListener("touchstart", onAny, { passive: true });
    return () => {
      window.removeEventListener("keydown", onAny);
      window.removeEventListener("wheel", onAny);
      window.removeEventListener("touchstart", onAny);
    };
  }, [active, dismiss]);

  if (!active) return null;

  const done = step >= subsystems.length;

  return (
    <div
      // The real page underneath is what assistive tech should read.
      aria-hidden
      onClick={dismiss}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-primary transition-opacity duration-150 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-md px-6">
        <div className="corner archive-plate border border-line bg-panel p-6 sm:p-7">
          <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
            <p className="font-display text-xl font-bold tracking-[0.12em] text-amber uppercase">
              Flight Archive
            </p>
            <span className="label-micro">FDR-01</span>
          </div>

          <p className="label mt-5 text-text">Synchronizing mission record...</p>
          <div className="mt-3 h-2 border border-line bg-primary p-[2px]">
            <div
              className="h-full bg-scope transition-[width] ease-linear"
              style={{ width: done ? "100%" : "8%", transitionDuration: `${SYNC_MS}ms` }}
            />
          </div>

          <div
            className={`mt-4 border-t border-line pt-3 transition-opacity duration-150 ${
              done ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="font-display text-lg font-bold tracking-[0.1em] text-scope uppercase">
              Archive Ready
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
