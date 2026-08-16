import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AircraftDossier from "@/components/AircraftDossier";
import Titleblock from "@/components/Titleblock";
import { SectionHead } from "@/components/primitives";
import { aircraft, archiveStats } from "@/data/aircraft";
import { partners } from "@/data/partners";

export const metadata: Metadata = {
  title: "Aircraft Archive",
  description:
    "Every UAV Team Foxtrot has designed, fabricated, and flown since 2019 — from the fixed-wing EURUS to the current-generation CARDINAL.",
};

export default function AircraftArchivePage() {
  const fixedWing = aircraft.filter((a) => a.category === "Fixed-wing");
  const multirotor = aircraft.filter((a) => a.category === "Multirotor");

  return (
    <div className="shell py-10">
      <Titleblock
        kicker="Recovered System 02"
        title="Aircraft Archive"
        lede="Every airframe the team has built and flown, recovered from the record. Open any entry for its full dossier."
        fields={[
          { key: "Records", value: String(archiveStats.aircraftCount) },
          {
            key: "Span",
            value: `${archiveStats.firstYear}–${archiveStats.latestYear}`,
          },
          { key: "Fixed-wing", value: String(fixedWing.length) },
          { key: "Multirotor", value: String(multirotor.length) },
        ]}
      />

      {/* Design lineage — the arc the old site never showed. */}
      <section className="mt-14">
        <SectionHead kicker="Design Lineage" title="Fixed-wing to multirotor" />
        <p className="mb-6 max-w-[68ch]">
          The team&apos;s first four aircraft were fixed-wing, built around
          takeoff-and-landing performance. From 2023 the programme moved to
          multirotors, trading cruise efficiency for precision hover and payload
          handling. CARDINAL is the refined endpoint of that pivot.
        </p>
        <ol className="flex gap-px overflow-x-auto border border-line bg-line">
          {[...aircraft].reverse().map((a) => (
            <li key={a.slug} className="min-w-[7.5rem] flex-1 bg-panel p-3">
              <div className="data text-xs text-titanium-text">{a.year}</div>
              <div className="mt-1 font-display text-base font-bold tracking-[0.06em] uppercase">
                {a.name}
              </div>
              <div
                className={`label-micro mt-2 border-t pt-2 ${
                  a.category === "Fixed-wing"
                    ? "border-warning text-warning"
                    : "border-scope text-scope"
                }`}
              >
                {a.category}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Full archive — collapsed dossiers, newest first. */}
      <section className="mt-16">
        <SectionHead
          kicker="All Records"
          title="Recovered aircraft"
          action={<span className="label">Newest first</span>}
        />
        <div className="space-y-4">
          {aircraft.map((item, i) => (
            <AircraftDossier key={item.slug} item={item} defaultOpen={i === 0} />
          ))}
        </div>
      </section>

      {/* Integrated components — sponsors as supplied systems. */}
      <section className="mt-16">
        <SectionHead
          kicker="Integrated Components"
          title="Supplied systems"
          action={
            <Link href="/partners" className="btn btn-ghost">
              Partner details
            </Link>
          }
        />
        <ul className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
          {partners.map((p) => (
            <li key={p.name} className="flex flex-col bg-primary p-5">
              <div className="relative h-14">
                <Image
                  src={p.logo}
                  alt={p.name}
                  fill
                  sizes="180px"
                  className="object-contain object-left opacity-80"
                />
              </div>
              <p className="label mt-4">{p.area}</p>
              <p className="mt-1 font-display text-lg font-semibold tracking-[0.05em] uppercase">
                {p.name}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
