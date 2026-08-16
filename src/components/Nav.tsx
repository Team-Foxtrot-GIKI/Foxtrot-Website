"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, site } from "@/data/site";

/**
 * Recovered-systems navigation.
 *
 * Each destination carries its two-digit index, so the nav reads as a systems
 * list rather than a menu. Renamed labels sit in conventional positions — home
 * first, contact last — so a visitor only has one unknown to resolve. The mobile
 * sheet shows the plain-language gloss under every label for the same reason.
 *
 * The fox mark is used as supplied and never redrawn or recoloured.
 */
export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-primary">
      <div className="shell flex items-center justify-between gap-4 py-3">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label={`${site.name} — flight recorder, home`}
        >
          <Image
            src="/img/fox.webp"
            alt=""
            width={42}
            height={42}
            className="h-10 w-auto"
            priority
          />
          <span className="leading-none">
            <span className="block font-display text-xl font-bold tracking-[0.08em] uppercase">
              Team Foxtrot
            </span>
            <span className="label-micro mt-1 block">Flight Recorder</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`flex items-baseline gap-1.5 border-b-2 px-3 py-2.5 transition-colors duration-150 ${
                    isActive(link.href)
                      ? "border-amber text-amber"
                      : "border-transparent text-text/75 hover:text-text"
                  }`}
                >
                  <span className="font-mono text-[10px] tracking-[0.15em] opacity-60">
                    {link.id}
                  </span>
                  <span className="font-display text-[15px] font-semibold tracking-[0.07em] uppercase">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="systems-index"
          className="btn btn-ghost xl:hidden"
        >
          {open ? "Close" : "Systems"}
        </button>
      </div>

      {open && (
        <div
          id="systems-index"
          className="fixed inset-x-0 top-[65px] bottom-0 z-50 overflow-y-auto border-t border-line bg-primary xl:hidden"
        >
          <nav aria-label="Primary" className="shell py-4">
            <ul className="divide-y divide-line">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className="flex min-h-[60px] items-center gap-4 py-3"
                  >
                    <span className="font-mono text-xs tracking-[0.15em] text-titanium-text">
                      {link.id}
                    </span>
                    <span>
                      <span
                        className={`block font-display text-2xl font-bold tracking-[0.06em] uppercase ${
                          isActive(link.href) ? "text-amber" : "text-text"
                        }`}
                      >
                        {link.label}
                      </span>
                      <span className="mt-0.5 block text-sm text-titanium-text">
                        {link.hint}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
