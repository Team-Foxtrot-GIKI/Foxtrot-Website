import Image from "next/image";
import Link from "next/link";
import type { Aircraft } from "@/data/aircraft";
import { Pill } from "./primitives";

/**
 * A record in the aircraft index.
 *
 * Three headline specs surface here so eight airframes are comparable at a
 * glance without opening eight pages — the index is for comparison, the record
 * page is for study. Hover brightens the hairline only: no lift, no shadow, no
 * scale. Machined parts don't float.
 */
export default function AircraftCard({ item }: { item: Aircraft }) {
  // The first three specs are the comparable ones on every record.
  const headline = item.specs.slice(0, 3);

  return (
    <Link
      href={`/aircraft/${item.slug}`}
      className="group corner block border border-line bg-panel transition-colors duration-150 hover:border-line"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-primary">
        <Image
          src={item.photo}
          alt={`Project ${item.name}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-4"
        />
        <span className="label-micro absolute top-3 left-3 bg-primary/80 px-1.5 py-0.5">
          {item.designation}
        </span>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="label">
              {item.competition.replace(/\s\d{4}$/, "")} · {item.year}
            </p>
            <h3 className="mt-1 text-2xl tracking-[0.04em] group-hover:text-amber">
              Project {item.name}
            </h3>
          </div>
          {item.result && (
            <Pill tone={item.podium ? "amber" : "muted"}>
              {item.podium ? item.result.split("·")[0].trim() : "Flown"}
            </Pill>
          )}
        </div>

        <p className="mt-1 text-sm text-titanium-text">{item.airframe}</p>

        <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-3">
          {headline.map((spec) => (
            <div key={spec.label}>
              <dt className="label-micro">{spec.label}</dt>
              <dd className="data mt-0.5 text-xs text-text">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Link>
  );
}
