"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import type { Aircraft } from "@/data/aircraft";
import { isPending } from "@/data/pending";
import { PendingChip } from "./Pending";
import { Pill, SpecRow } from "./primitives";
import TelemetryPanel, { type TelemetryBar } from "./TelemetryPanel";

/**
 * Expandable aircraft record with a four-tab dossier.
 *
 * Implemented as a real tablist: roving arrow-key navigation, correct
 * aria-controls/aria-selected wiring, and panels that stay in the DOM order a
 * screen reader expects. Collapsed by default so the archive index stays
 * scannable — progressive disclosure, not eight walls of specs.
 */

const TABS = ["Overview", "Mission", "Engineering", "Telemetry"] as const;
type Tab = (typeof TABS)[number];

/** Illustrative telemetry — see the notice in TelemetryPanel. Not measured. */
function telemetryFor(item: Aircraft): TelemetryBar[] {
  return [
    { label: "Battery", value: 87, unit: "%", readout: "87%" },
    { label: "Altitude Hold", value: 92, unit: "%", readout: "NOMINAL" },
    { label: "GPS Lock", value: 100, unit: "%", readout: `${item.category === "Multirotor" ? 14 : 11} SATS` },
    { label: "Mission Completion", value: item.podium ? 100 : 78, unit: "%", readout: item.podium ? "100%" : "78%" },
  ];
}

export default function AircraftDossier({
  item,
  defaultOpen = false,
}: {
  item: Aircraft;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [tab, setTab] = useState<Tab>("Overview");
  const baseId = useId();

  function onKeyDown(e: React.KeyboardEvent) {
    const i = TABS.indexOf(tab);
    if (e.key === "ArrowRight") setTab(TABS[(i + 1) % TABS.length]);
    else if (e.key === "ArrowLeft") setTab(TABS[(i - 1 + TABS.length) % TABS.length]);
    else if (e.key === "Home") setTab(TABS[0]);
    else if (e.key === "End") setTab(TABS[TABS.length - 1]);
    else return;
    e.preventDefault();
  }

  return (
    <article className="corner border border-line bg-panel">
      {/* --- Record header (the disclosure trigger) --------------------- */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`${baseId}-body`}
        className="grid w-full grid-cols-1 items-center gap-5 p-5 text-left transition-colors duration-150 hover:bg-panel-2 sm:grid-cols-[10rem_1fr_auto]"
      >
        <div className="relative aspect-[4/3] w-full border border-line bg-primary sm:aspect-square">
          <Image
            src={item.photo}
            alt={`Project ${item.name}`}
            fill
            sizes="160px"
            className="object-contain p-2"
          />
        </div>

        <div>
          <p className="label">
            {item.designation} · {item.competition}
          </p>
          <h3 className="mt-1 font-display text-3xl font-bold tracking-[0.05em] uppercase">
            Project {item.name}
          </h3>
          <p className="mt-1 text-sm text-titanium-text">{item.airframe}</p>
          {item.result && (
            <div className="mt-3">
              <Pill tone={item.podium ? "amber" : "muted"}>{item.result}</Pill>
            </div>
          )}
        </div>

        <span className="label-micro flex items-center gap-2 text-amber">
          {open ? "Close" : "Open record"}
          <span aria-hidden className="text-base leading-none">
            {open ? "−" : "+"}
          </span>
        </span>
      </button>

      {/* --- Dossier --------------------------------------------------- */}
      <div id={`${baseId}-body`} hidden={!open} className="border-t border-line">
        <div
          role="tablist"
          aria-label={`Project ${item.name} dossier`}
          onKeyDown={onKeyDown}
          className="flex flex-wrap gap-px border-b border-line bg-line"
        >
          {TABS.map((t) => (
            <button
              key={t}
              role="tab"
              id={`${baseId}-tab-${t}`}
              aria-selected={tab === t}
              aria-controls={`${baseId}-panel-${t}`}
              tabIndex={tab === t ? 0 : -1}
              onClick={() => setTab(t)}
              className={`label flex-1 px-4 py-3 transition-colors duration-150 ${
                tab === t
                  ? "bg-panel-2 text-amber"
                  : "bg-panel text-titanium-text hover:text-text"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="p-5 sm:p-6">
          {/* Overview */}
          <div
            role="tabpanel"
            id={`${baseId}-panel-Overview`}
            aria-labelledby={`${baseId}-tab-Overview`}
            hidden={tab !== "Overview"}
          >
            <dl className="grid gap-px bg-line sm:grid-cols-4">
              {[
                { k: "Frame Type", v: item.airframe },
                { k: "Campaign", v: String(item.year) },
                { k: "Result", v: item.result ?? "—" },
                { k: "Status", v: "Flown · Archived" },
              ].map((f) => (
                <div key={f.k} className="bg-panel p-3">
                  <dt className="label-micro">{f.k}</dt>
                  <dd className="data mt-1 text-xs">{f.v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 leading-relaxed">{item.overview}</p>
            <Link href={`/aircraft/${item.slug}`} className="btn btn-primary mt-5">
              Full record
            </Link>
          </div>

          {/* Mission */}
          <div
            role="tabpanel"
            id={`${baseId}-panel-Mission`}
            aria-labelledby={`${baseId}-tab-Mission`}
            hidden={tab !== "Mission"}
          >
            {isPending(item.missionProfile) ? (
              <div className="border border-dashed border-line p-5">
                <PendingChip label="Awaiting mission narrative" />
                <p className="mt-3 max-w-[60ch] text-sm text-titanium-text">
                  A paragraph describing what this airframe was asked to do in
                  competition — the tasks flown, the conditions, the outcome.
                </p>
              </div>
            ) : (
              <p className="leading-relaxed">{item.missionProfile}</p>
            )}
          </div>

          {/* Engineering */}
          <div
            role="tabpanel"
            id={`${baseId}-panel-Engineering`}
            aria-labelledby={`${baseId}-tab-Engineering`}
            hidden={tab !== "Engineering"}
          >
            <dl>
              {item.specs.map((s) => (
                <SpecRow key={s.label} label={s.label} value={s.value} />
              ))}
            </dl>
          </div>

          {/* Telemetry */}
          <div
            role="tabpanel"
            id={`${baseId}-panel-Telemetry`}
            aria-labelledby={`${baseId}-tab-Telemetry`}
            hidden={tab !== "Telemetry"}
          >
            <TelemetryPanel slug={item.slug} bars={telemetryFor(item)} />
          </div>
        </div>
      </div>
    </article>
  );
}
