import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Titleblock from "@/components/Titleblock";
import { SectionHead } from "@/components/primitives";
import { crew, leadership, manifestTerm } from "@/data/crew";

export const metadata: Metadata = {
  title: "Crew Manifest",
  description:
    "The Team Foxtrot Executive Council for 2026–2027 — the students directing design, fabrication, avionics, and flight operations.",
};

const linkLabel = { linkedin: "LinkedIn", website: "Profile" } as const;

function CouncilCard({
  member,
  index,
  tier = "directorate",
}: {
  member: (typeof crew)[number];
  index: number;
  tier?: "command" | "directorate";
}) {
  const frameClass =
    tier === "command"
      ? "crew-portrait-frame relative h-60 overflow-hidden border-b border-line sm:h-64"
      : "crew-portrait-frame relative h-48 overflow-hidden border-b border-line sm:h-52";

  return (
    <li className="group bg-primary">
      <article className="flex h-full flex-col border border-transparent transition-[border-color,transform] duration-200 group-hover:-translate-y-1 group-hover:border-amber">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <span className="label-micro text-amber">{String(index + 1).padStart(2, "0")}</span>
          <span className="label-micro">{member.unit}</span>
        </div>

        <div className={frameClass}>
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes={tier === "command" ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 50vw, 33vw"}
              className="object-contain object-center"
            />
          ) : (
            <div className="crew-portrait-slot absolute inset-0 flex flex-col justify-between p-4">
              <span className="label-micro text-amber">Portrait plate reserved</span>
              <span className="font-display text-5xl font-bold tracking-[0.08em] text-line">
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </span>
              <span className="label-micro">Awaiting approved image</span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-4">
          <h2 className="text-2xl tracking-[0.045em]">{member.name}</h2>
          <ul className="mt-3 space-y-1 border-t border-line pt-3">
            {member.roles.map((role) => (
              <li
                key={role.title}
                className={`text-sm ${role.primary ? "text-amber" : "text-titanium-text"}`}
              >
                {role.title}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </li>
  );
}

export default function CrewPage() {
  const command = crew.filter((member) =>
    member.roles.some((role) => role.title === "Team Captain" || role.title === "Team Manager"),
  );
  const directors = crew.filter((member) => !command.includes(member));

  return (
    <div className="shell py-10">
      <Titleblock
        kicker="Recovered System 03"
        title="Crew Manifest"
        lede="The people behind the current flight programme. Each council member owns a distinct part of the system; together, they move an aircraft from record to runway."
        fields={[
          { key: "Council", value: "Executive Council" },
          { key: "Term", value: manifestTerm, tone: "amber" },
          { key: "Positions", value: String(crew.length) },
          { key: "Portraits", value: "On file", tone: "scope" },
        ]}
      />

      <section id="council" className="mt-14 scroll-mt-24">
        <SectionHead
          kicker="Active command"
          title={`Executive Council ${manifestTerm}`}
          action={<span className="label">Council roster · 01–08</span>}
        />
        <p className="mb-8 max-w-[64ch] text-lg text-titanium-text">
          The Executive Council for {manifestTerm} — command leads the programme;
          each directorate owns a distinct subsystem from design through flight
          operations.
        </p>

        <div className="corner archive-plate mx-auto max-w-4xl border border-amber/40 bg-panel p-4 sm:p-5">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
            <p className="label text-amber">Command tier</p>
            <p className="label-micro">Leads the programme · Directorates report below</p>
          </div>
          <ol className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {command.map((member) => (
              <CouncilCard
                key={member.name}
                member={member}
                index={crew.indexOf(member)}
                tier="command"
              />
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-3">
            <p className="label text-amber">Directorate</p>
            <p className="label-micro">Subsystem leads · 03–08</p>
          </div>
          <ol className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {directors.map((member) => (
              <CouncilCard key={member.name} member={member} index={crew.indexOf(member)} />
            ))}
          </ol>
        </div>
      </section>

      <section id="leadership" className="mt-20 scroll-mt-24">
        <SectionHead kicker="Archive provenance" title="Founder & faculty advisor" />
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
          {leadership.map((leader) => (
            <article key={leader.name} className="grid bg-panel sm:grid-cols-[10rem_1fr]">
              <div className="relative aspect-[4/5] border-b border-line bg-primary sm:border-r sm:border-b-0">
                <Image
                  src={leader.photo}
                  alt={leader.name}
                  fill
                  sizes="160px"
                  className="object-cover"
                  style={{ objectPosition: "50% 25%" }}
                />
              </div>
              <div className="p-5">
                <p className="label text-amber">{leader.role}</p>
                <h2 className="mt-1 text-xl tracking-[0.04em]">{leader.name}</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {leader.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost"
                    >
                      {linkLabel[link.type]}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="corner archive-plate mt-20 border border-amber/40 bg-panel p-8 sm:p-12">
        <p className="label text-amber">Join the programme</p>
        <h2 className="mt-2 max-w-[25ch] text-3xl tracking-[0.04em]">
          The next crew is built before the next aircraft flies.
        </h2>
        <p className="mt-4 max-w-[58ch] text-titanium-text">
          Team Foxtrot welcomes students across engineering, documentation,
          fabrication, operations, and media.
        </p>
        <Link href="/comms" className="btn btn-primary mt-6">
          Contact the team
        </Link>
      </section>
    </div>
  );
}
