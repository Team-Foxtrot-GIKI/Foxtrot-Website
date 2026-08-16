import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Titleblock from "@/components/Titleblock";
import { Pill, SectionHead, SpecRow } from "@/components/primitives";
import { PendingValue } from "@/components/Pending";
import { adjacentAircraft, aircraft, getAircraft } from "@/data/aircraft";
import { getMission } from "@/data/missions";
import { settled } from "@/data/pending";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return aircraft.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const item = getAircraft((await params).slug);
  if (!item) return {};
  return {
    title: `Project ${item.name}`,
    description: item.overview,
    openGraph: {
      title: `Project ${item.name} — Team Foxtrot`,
      description: item.overview,
      images: [item.photo],
    },
  };
}

export default async function AircraftRecordPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const item = getAircraft((await params).slug);
  if (!item) notFound();

  const mission = getMission(item.missionSlug);
  const { newer, older } = adjacentAircraft(item.slug);
  const gallery = settled(item.gallery) ?? [];

  return (
    <div className="shell py-10">
      <Titleblock
        kicker="Aircraft Record"
        title={`Project ${item.name}`}
        lede={item.overview}
        fields={[
          { key: "Designation", value: item.designation },
          { key: "Campaign", value: `${mission?.competition ?? item.competition}` },
          {
            key: "Result",
            value: item.result ?? "—",
            tone: item.podium ? "amber" : "default",
          },
          { key: "Airframe", value: item.airframe },
        ]}
      />

      {/* Reduced, centred drawing plate keeps exploded views legible. */}
      <div className="relative mt-10 aspect-[16/8] border border-line bg-panel">
        <Image
          src={item.photo}
          alt={`Project ${item.name}, a ${item.airframe.toLowerCase()}`}
          fill
          priority
          sizes="100vw"
          className="object-contain p-10 sm:p-14"
        />
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
        <div>
          {/* --- Overview ------------------------------------------------- */}
          <section>
            <SectionHead kicker="01" title="Overview" />
            <p className="text-lg leading-relaxed">{item.overview}</p>

          </section>

          {/* --- Gallery -------------------------------------------------- */}
          {gallery.length > 0 && (
            <section className="mt-16">
              <SectionHead kicker="02" title="Gallery" />
              <div className="grid gap-3 sm:grid-cols-2">
                {gallery.map((src) => (
                  <div key={src} className="relative aspect-[4/3] border border-line">
                    <Image
                      src={src}
                      alt={`Project ${item.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* --- Specifications rail ---------------------------------------- */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="corner border border-line bg-panel p-5">
            <h2 className="label mb-4 text-amber">Specifications</h2>
            <dl>
              {item.specs.map((spec) => (
                <SpecRow key={spec.label} label={spec.label} value={spec.value} />
              ))}
            </dl>
          </div>

          {mission && (
            <div className="mt-6 border border-line p-5">
              <h2 className="label mb-3">Campaign</h2>
              <p className="font-display text-lg tracking-[0.05em] uppercase">
                {mission.competition} {mission.year}
              </p>
              <p className="data mt-1 text-sm">
                <PendingValue value={mission.result} label="Result outstanding" />
              </p>
              {mission.awards.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {mission.awards.map((a) => (
                    <Pill key={a} tone="amber">
                      {a}
                    </Pill>
                  ))}
                </div>
              )}
              <Link
                href={`/timeline#${mission.slug}`}
                className="btn btn-ghost mt-4 w-full justify-center"
              >
                Full campaign
              </Link>
            </div>
          )}
        </aside>
      </div>

      {/* --- Chronological neighbours ------------------------------------- */}
      <nav
        aria-label="Other aircraft"
        className="mt-20 grid gap-px border border-line bg-line sm:grid-cols-2"
      >
        {older ? (
          <Link href={`/aircraft/${older.slug}`} className="group bg-primary p-5">
            <span className="label">← Earlier · {older.year}</span>
            <span className="mt-1 block font-display text-xl font-bold tracking-[0.05em] uppercase group-hover:text-amber">
              Project {older.name}
            </span>
          </Link>
        ) : (
          <span className="bg-primary p-5">
            <span className="label">Earliest record</span>
          </span>
        )}
        {newer ? (
          <Link
            href={`/aircraft/${newer.slug}`}
            className="group bg-primary p-5 sm:text-right"
          >
            <span className="label">Later · {newer.year} →</span>
            <span className="mt-1 block font-display text-xl font-bold tracking-[0.05em] uppercase group-hover:text-amber">
              Project {newer.name}
            </span>
          </Link>
        ) : (
          <span className="bg-primary p-5 sm:text-right">
            <span className="label">Current generation</span>
          </span>
        )}
      </nav>
    </div>
  );
}
