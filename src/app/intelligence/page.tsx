import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Titleblock from "@/components/Titleblock";
import { Pill, SectionHead } from "@/components/primitives";
import {
  briefings,
  featuredBriefing,
  otherBriefings,
  relatedReading,
} from "@/data/briefings";

export const metadata: Metadata = {
  title: "Mission Intelligence",
  description:
    "Technical briefings from Team Foxtrot — UAV technology, autonomy, and the engineering behind unmanned flight.",
};

export default function EngineeringPage() {
  return (
    <div className="shell py-10">
      <Titleblock
        kicker="Recovered System 05"
        title="Mission Intelligence"
        lede="Technical briefings on unmanned flight — where the technology came from, and what it is being used for."
        fields={[
          { key: "Briefings", value: String(briefings.length) },
          { key: "Latest", value: featuredBriefing.date },
          {
            key: "Primers",
            value: String(briefings.filter((b) => b.kind === "primer").length),
          },
          { key: "Related resources", value: String(relatedReading.length) },
        ]}
      />

      <section className="mt-14">
        <SectionHead kicker="Featured" title={featuredBriefing.title} />
        <div className="grid gap-8 md:grid-cols-[1fr_20rem]">
          <div>
            <p className="label">{featuredBriefing.date}</p>
            <p className="mt-4 max-w-[64ch] text-lg leading-relaxed">
              {featuredBriefing.excerpt}
            </p>
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
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-16">
        <SectionHead kicker="All Briefings" title="Archive" />
        <div className="grid gap-6 sm:grid-cols-2">
          {otherBriefings.map((b) => (
            <Link
              key={b.slug}
              href={`/intelligence/${b.slug}`}
              className="group border border-line bg-panel transition-colors duration-150 hover:border-line"
            >
              <div className="relative aspect-[16/9] border-b border-line">
                <Image
                  src={b.cover}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="label">{b.date}</p>
                  <Pill tone="muted">
                    {b.kind === "primer" ? "Primer" : "Briefing"}
                  </Pill>
                </div>
                <h3 className="mt-2 text-xl tracking-[0.04em] group-hover:text-amber">
                  {b.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-titanium-text">{b.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHead kicker="Further reading" title="Related links" />
        <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
          {relatedReading.map((link) => (
            <li key={link.href} className="bg-panel">
              <Link
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex h-full flex-col p-5 transition-colors hover:bg-primary"
              >
                <h3 className="text-lg tracking-[0.04em] group-hover:text-amber">
                  {link.title}
                  {link.external && (
                    <span aria-hidden className="ml-1 text-titanium-text">
                      ↗
                    </span>
                  )}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-titanium-text">
                  {link.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
