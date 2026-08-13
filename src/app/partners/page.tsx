import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Titleblock from "@/components/Titleblock";
import { SectionHead } from "@/components/primitives";
import { PendingChip, PendingValue } from "@/components/Pending";
import { areaOrder, partners, partnersByArea } from "@/data/partners";
import { isPending } from "@/data/pending";

export const metadata: Metadata = {
  title: "Mission Partners",
  description:
    "The companies supplying the propulsion, flight control, airframe, and automation technology behind Team Foxtrot's aircraft.",
};

export default function PartnersPage() {
  const groups = partnersByArea();

  return (
    <div className="shell py-10">
      <Titleblock
        kicker="Integrated Components"
        title="Mission Partners"
        lede="Our partners supply the systems our aircraft are built from. They are grouped here by what they contribute, not by what they paid."
        fields={[
          { key: "Partners", value: String(partners.length) },
          { key: "Contribution Areas", value: String(groups.length) },
          { key: "Technical Partners", value: "2" },
          { key: "Status", value: "Open to new partners", tone: "amber" },
        ]}
      />

      <div className="mt-14 space-y-16">
        {areaOrder.map((area) => {
          const group = groups.find((g) => g.area === area);
          if (!group) return null;
          return (
            <section key={area}>
              <SectionHead
                kicker={`${group.items.length} partner${group.items.length === 1 ? "" : "s"}`}
                title={area}
              />
              <div className="space-y-px bg-line">
                {group.items.map((p) => (
                  <article
                    key={p.name}
                    className="grid gap-6 bg-primary p-6 md:grid-cols-[12rem_1fr]"
                  >
                    <div className="relative h-24 md:h-full md:min-h-[6rem]">
                      <Image
                        src={p.logo}
                        alt={p.name}
                        fill
                        sizes="192px"
                        className="object-contain object-left"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 className="text-xl tracking-[0.04em]">{p.name}</h3>
                        <p className="label">{p.tier} Sponsor</p>
                      </div>
                      <p className="mt-3 max-w-[64ch] text-sm leading-relaxed">
                        {p.description}
                      </p>
                      <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-3">
                        <div>
                          <dt className="label-micro">Contribution</dt>
                          <dd className="data mt-0.5 text-xs">
                            <PendingValue
                              value={p.contribution}
                              label="Awaiting detail"
                            />
                          </dd>
                        </div>
                        <div>
                          <dt className="label-micro">Supporting Since</dt>
                          <dd className="data mt-0.5 text-xs">
                            {isPending(p.since) ? (
                              <PendingChip label="Awaiting date" />
                            ) : (
                              p.since
                            )}
                          </dd>
                        </div>
                      </dl>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost mt-4"
                      >
                        Visit {p.name}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <section className="corner mt-20 border border-amber/40 bg-panel p-8">
        <p className="label text-amber">Partnership</p>
        <h2 className="mt-2 max-w-[28ch] text-2xl tracking-[0.04em] sm:text-3xl">
          Support the next generation of aircraft
        </h2>
        <p className="mt-4 max-w-[58ch] text-titanium-text">
          Team Foxtrot competes internationally against fully funded university
          programmes. Component sponsorship, technical mentorship, and
          manufacturing support all directly reach the airframe.
        </p>
        <Link href="/comms" className="btn btn-primary mt-6">
          Start a conversation
        </Link>
      </section>
    </div>
  );
}
