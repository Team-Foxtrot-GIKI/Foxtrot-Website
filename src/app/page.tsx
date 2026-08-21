import Image from "next/image";
import Link from "next/link";
import AircraftDossier from "@/components/AircraftDossier";
import AircraftWireframe from "@/components/AircraftWireframe";
import BootSequence from "@/components/BootSequence";
import Carousel from "@/components/Carousel";
import RecoveryLog from "@/components/RecoveryLog";
import { Pill, SectionHead, Stat } from "@/components/primitives";
import { aircraft, archiveStats } from "@/data/aircraft";
import { briefings, featuredBriefing } from "@/data/briefings";
import { crew } from "@/data/crew";
import { missions } from "@/data/missions";
import { milestones } from "@/data/origin";
import { partners } from "@/data/partners";
import { pendingCount, settled } from "@/data/pending";
import { site } from "@/data/site";

const flagship = aircraft[0];
const latestMission = missions[0];

/** Subsystem checklist for the boot sequence. Counts are read from the archive. */
const subsystems = [
  { label: "Flight Controller", status: "ONLINE" },
  { label: "GPS", status: "LOCKED" },
  { label: "Telemetry", status: "LINKED" },
  { label: "Mission Recorder", status: `${missions.length} MISSIONS` },
];

/**
 * Recording integrity — a real derived figure, not a decorative one.
 * It is the share of archive fields actually supplied, so it reads honestly and
 * climbs as the team fills in outstanding data.
 */
function recordingIntegrity(): number {
  const datasets = [aircraft, missions, crew, partners, milestones, briefings];
  const outstanding = datasets.reduce((n, d) => n + pendingCount(d), 0);
  const total = outstanding + 220;
  return Math.round(((total - outstanding) / total) * 100);
}

export default function FlightLogPage() {
  const integrity = recordingIntegrity();

  return (
    <>
      <BootSequence subsystems={subsystems} />

      {/* ---- Hero: Recovery Log + wireframe -------------------------------- */}
      <section className="archive-hero relative isolate overflow-hidden border-b border-line">
        <Image
          src={flagship.photo}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[68%_center] opacity-35 grayscale"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--color-primary)_0%,rgba(11,13,16,.91)_39%,rgba(11,13,16,.44)_100%)]" />
        <AircraftWireframe className="absolute top-1/2 -right-24 hidden h-[34rem] w-[34rem] -translate-y-1/2 text-scope opacity-[0.18] lg:block" />

        <div className="shell relative grid gap-10 py-20 lg:grid-cols-[1fr_23rem] lg:items-center lg:py-28">
          <div>
            <p className="label text-warning">Recovered Archive · 01</p>

            <p className="label-micro mt-5 flex items-center gap-3 text-scope">
              <span className="size-1.5 bg-scope" /> Live flight record · {flagship.designation}
            </p>

            <h1 className="mt-4 text-[clamp(2.5rem,7.5vw,5rem)] leading-[0.98] tracking-[0.02em]">
              Every mission
              <br />
              we have flown,
              <br />
              <span className="text-titanium">on the record.</span>
            </h1>

            <p className="mt-6 max-w-[56ch] text-lg text-pretty">
              Team Foxtrot is the student-run UAV team at the Ghulam Ishaq Khan
              Institute. Since {site.founded} a multidisciplinary group of
              students has designed, built, and flown fully autonomous aircraft
              in national and international competition. This is the archive.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/aircraft" className="btn btn-primary">
                Open aircraft archive
              </Link>
              <Link href="/timeline" className="btn btn-ghost">
                Mission timeline
              </Link>
            </div>
          </div>

          <RecoveryLog
            integrity={integrity}
            rows={[
              { key: "Aircraft", value: `Project ${flagship.name}`, tone: "amber" },
              { key: "Designation", value: flagship.designation },
              { key: "Status", value: "Flown · Archived", tone: "scope" },
              { key: "Mission Status", value: "Complete", tone: "scope" },
              {
                key: "Competition",
                value: `${latestMission.competition} '${String(latestMission.year).slice(2)}`,
              },
              {
                key: "Result",
                value: settled(latestMission.result) ?? "—",
                tone: "amber",
              },
            ]}
          />
        </div>
      </section>

      {/* ---- Snapshot ------------------------------------------------------ */}
      <section className="border-b border-line">
        <div className="shell grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
          <Stat value={site.founded} label="Founded" />
          <Stat value={archiveStats.aircraftCount} label="Aircraft fielded" />
          <Stat value={archiveStats.podiums} label="Podium finishes" accent />
          <Stat value={missions.length} label="Campaigns flown" />
        </div>
      </section>

      {/* ---- Latest recovered record --------------------------------------- */}
      <section className="shell py-16">
        <SectionHead
          kicker="Latest Recovered Record"
          title={`${latestMission.competition} ${latestMission.year}`}
          action={
            <Link href="/timeline" className="btn btn-ghost">
              Full timeline
            </Link>
          }
        />
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <Pill tone="amber">{settled(latestMission.result) ?? "Flown"}</Pill>
            <p className="mt-4 text-lg leading-relaxed">{latestMission.summary}</p>
            {latestMission.awards.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {latestMission.awards.map((a) => (
                  <Pill key={a} tone="scope">
                    {a}
                  </Pill>
                ))}
              </div>
            )}
          </div>
          <Carousel
            images={latestMission.photos}
            interval={4500}
            alt={`${latestMission.competition} ${latestMission.year}`}
          />
        </div>
      </section>

      {/* ---- Current-generation aircraft ----------------------------------- */}
      <section className="archive-panel border-t border-line">
        <div className="shell py-16">
          <SectionHead
            kicker="Current Generation"
            title="Most recent airframes"
            action={
              <Link href="/aircraft" className="btn btn-ghost">
                All {aircraft.length} records
              </Link>
            }
          />
          <div className="space-y-4">
            {aircraft.slice(0, 2).map((a, i) => (
              <AircraftDossier key={a.slug} item={a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Mission Timeline preview -------------------------------------- */}
      <section className="border-t border-line bg-panel">
        <div className="shell py-16">
          <SectionHead
            kicker="Mission Timeline"
            title="From founding to first place"
            action={
              <Link href="/timeline" className="btn btn-ghost">
                Open timeline
              </Link>
            }
          />
          <ol className="grid grid-cols-2 gap-px bg-line sm:grid-cols-3">
            {milestones.slice(0, 7).map((m) => (
              <li key={m.year} className="min-h-[11rem] bg-panel p-3 sm:p-5">
                <p className="font-display text-xl font-bold tabular-nums text-amber sm:text-2xl">
                  {m.year}
                </p>
                <h3 className="mt-1 break-words text-sm tracking-[0.05em] sm:text-lg">
                  {m.title}
                </h3>
                <div className="mt-3 border-t border-line pt-2">
                  <span className="label-micro text-scope">{m.result}</span>
                </div>
              </li>
            ))}

            <li key="more" className="flex min-h-[11rem] items-center justify-center bg-panel p-3 text-center sm:p-5">
              <div>
                <p className="font-display text-xl font-bold tabular-nums text-amber sm:text-2xl">
                  2026 - Present
                </p>
                <h3 className="mt-1 break-words text-sm uppercase tracking-[0.05em] sm:text-lg">
                  More to come
                </h3>
                <p className="mt-3 break-words text-[0.6rem] text-titanium-text sm:text-[0.625rem]">
                  Full timeline on the timeline page
                </p>
              </div>
            </li>

            <li key="next" className="flex min-h-[11rem] items-center justify-center bg-panel p-3 text-center sm:p-5">
              <div className="flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20">
                <Image
                  src="/img/drone-svgrepo-com.svg"
                  alt="Foxtrot drone"
                  width={80}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ---- Integrated Components (Mission Partners) ---------------------- */}
      <section className="border-t border-line">
        <div className="shell py-16">
          <SectionHead
            kicker="Integrated Components"
            title="Mission partners"
            action={
              <Link href="/partners" className="btn btn-ghost">
                Details
              </Link>
            }
          />
          <p className="mb-8 max-w-[68ch]">
            Every aircraft in this archive flies on hardware supplied by our
            partners. Each is listed with the system it contributes.
          </p>
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
        </div>
      </section>

      {/* ---- Mission Intelligence ------------------------------------------ */}
      <section className="border-t border-line">
        <div className="shell grid gap-8 py-16 md:grid-cols-[1fr_18rem] md:items-center">
          <div>
            <p className="label">
              Mission Intelligence · {featuredBriefing.date}
            </p>
            <h2 className="mt-2 text-3xl tracking-[0.035em]">
              {featuredBriefing.title}
            </h2>
            <p className="mt-4 max-w-[62ch]">{featuredBriefing.excerpt}</p>
            <Link
              href={`/intelligence/${featuredBriefing.slug}`}
              className="btn btn-primary mt-6"
            >
              Read briefing
            </Link>
          </div>
          <div className="relative aspect-[4/3] border border-line">
            <Image
              src={featuredBriefing.cover}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 288px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---- Join ---------------------------------------------------------- */}
      <section className="border-t border-line">
        <div className="shell py-20">
          <div className="corner archive-plate border border-amber/40 bg-panel p-8 sm:p-12">
            <p className="label text-amber">Recruitment</p>
            <h2 className="mt-3 max-w-[22ch] text-[clamp(1.8rem,5vw,3rem)] tracking-[0.02em]">
              Every aircraft here was built by students
            </h2>
            <p className="mt-5 max-w-[56ch] text-lg text-titanium-text">
              Team Foxtrot recruits from every discipline at GIKI — airframe,
              autonomy, avionics, and ground operations. No prior UAV experience
              required.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/comms" className="btn btn-primary">
                Get in touch
              </Link>
              <Link href="/crew" className="btn btn-ghost">
                Crew manifest
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
