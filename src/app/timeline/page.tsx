import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Titleblock from "@/components/Titleblock";
import { Pill, SectionHead } from "@/components/primitives";
import { PendingValue } from "@/components/Pending";
import { getAircraft } from "@/data/aircraft";
import { coverageNote, missions, series } from "@/data/missions";
import { milestones, outreach, subteams } from "@/data/origin";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Mission Timeline",
  description:
    "Team Foxtrot from founding in 2018 to the present — every competition campaign, the aircraft flown, and the result.",
};

/**
 * MISSION TIMELINE — 04.
 *
 * Merges what were previously two separate pages (mission history and team
 * origin). They describe the same seven years from two angles, and splitting
 * them meant a visitor reading about the 2022 campaign had no route to the
 * founding story. One chronological spine now carries both.
 */
export default function TimelinePage() {
  const podiums = missions.filter((m) => m.podium).length;
  const awards = missions.flatMap((m) => m.awards).length;

  return (
    <div className="shell py-10">
      <Titleblock
        kicker="Recovered System 04"
        title="Mission Timeline"
        lede={`Team Foxtrot was formed at ${site.institution} in ${site.founded}. Every campaign since is recorded below, newest first.`}
        fields={[
          { key: "Founded", value: String(site.founded) },
          { key: "Campaigns", value: String(missions.length) },
          { key: "Podium Finishes", value: String(podiums), tone: "amber" },
          { key: "Awards", value: String(awards) },
        ]}
      />

      {/* --- Origin ------------------------------------------------------- */}
      <section className="mt-14">
        <SectionHead kicker="Origin" title="How the team started" />
        <p className="max-w-[68ch] text-lg leading-relaxed">
          A group of students from different disciplines joined hands in{" "}
          {site.founded} and decided to design and build UAVs — practical, fully
          autonomous aircraft capable of competing with the best in the world.
          The team has entered national and international competition every year
          since.
        </p>
      </section>

      {/* --- Milestones --------------------------------------------------- */}
      <section className="mt-14">
        <SectionHead kicker="Milestones" title="Key moments" />
        <ol className="relative border-l border-line pl-6 sm:pl-10">
          {milestones.map((m) => (
            <li key={m.year} className="relative pb-10 last:pb-0">
              <span
                aria-hidden
                className="absolute top-2 -left-[1.65rem] size-2 bg-amber sm:-left-[2.65rem]"
              />
              <div className="grid gap-5 md:grid-cols-[1fr_13rem]">
                <div>
                  <p className="font-display text-3xl font-bold tabular-nums text-amber">
                    {m.year}
                  </p>
                  <h3 className="mt-1 text-xl tracking-[0.04em]">{m.title}</h3>
                  <p className="mt-3 max-w-[62ch] leading-relaxed">{m.body}</p>
                  {m.href && (
                    <Link href={m.href} className="btn btn-ghost mt-4">
                      View aircraft
                    </Link>
                  )}
                </div>
                {m.image && (
                  <div className="relative aspect-[4/3] border border-line bg-panel">
                    <Image
                      src={m.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 208px"
                      className="object-contain p-3"
                    />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* --- Campaign records --------------------------------------------- */}
      <section className="mt-16">
        <SectionHead
          kicker="Campaign Records"
          title="Every mission flown"
          action={<span className="label">Newest first</span>}
        />
        <ol className="space-y-px bg-line">
          {missions.map((m) => {
            const craft = getAircraft(m.aircraftSlug);
            return (
              <li key={m.slug} id={m.slug} className="scroll-mt-24 bg-primary">
                <article className="grid gap-6 border border-line p-5 md:grid-cols-[5.5rem_1fr_13rem]">
                  <div className="md:border-r md:border-line md:pr-5">
                    <div className="font-display text-4xl font-bold tabular-nums">
                      {m.year}
                    </div>
                    <div className="label mt-1">{series[m.series].short}</div>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl tracking-[0.04em]">
                        {m.competition}
                      </h3>
                      <Pill tone={m.podium ? "amber" : "muted"}>
                        <PendingValue value={m.result} label="Result outstanding" />
                      </Pill>
                    </div>
                    <p className="label mt-1.5">{m.country}</p>
                    <p className="mt-3 max-w-[62ch] text-sm leading-relaxed">
                      {m.summary}
                    </p>
                    {m.awards.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {m.awards.map((a) => (
                          <Pill key={a} tone="scope">
                            {a}
                          </Pill>
                        ))}
                      </div>
                    )}
                    {craft && (
                      <Link
                        href={`/aircraft/${craft.slug}`}
                        className="group mt-4 inline-flex items-center gap-3 border border-line p-2.5 transition-colors duration-150 hover:border-amber"
                      >
                        <span className="relative size-10 shrink-0 bg-panel">
                          <Image
                            src={craft.photo}
                            alt=""
                            fill
                            sizes="40px"
                            className="object-contain p-1"
                          />
                        </span>
                        <span>
                          <span className="label-micro block">
                            Aircraft · {craft.designation}
                          </span>
                          <span className="font-display text-base font-bold tracking-[0.05em] uppercase group-hover:text-amber">
                            Project {craft.name}
                          </span>
                        </span>
                      </Link>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2 md:grid-cols-1">
                    {m.photos.slice(0, 2).map((src) => (
                      <div key={src} className="relative aspect-[4/3] border border-line">
                        <Image
                          src={src}
                          alt={`${m.competition} ${m.year}`}
                          fill
                          sizes="(max-width: 768px) 50vw, 208px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
        <p className="mt-8 max-w-[68ch] border-l-2 border-line pl-4 text-sm text-titanium-text">
          {coverageNote}
        </p>
      </section>

      {/* --- Structure & outreach ----------------------------------------- */}
      <section className="mt-16">
        <SectionHead kicker="Structure" title="How the team is organised" />
        <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {subteams.map((t) => (
            <div key={t.name} className="bg-primary p-5">
              <h3 className="text-lg tracking-[0.05em] text-amber">{t.name}</h3>
              <p className="mt-2 text-sm text-titanium-text">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHead kicker="Outreach" title={outreach.title} />
        <p className="max-w-[68ch] text-lg leading-relaxed">{outreach.body}</p>
      </section>
    </div>
  );
}
