import type { Metadata } from "next";
import Image from "next/image";
import Titleblock from "@/components/Titleblock";
import { mediaGallery } from "@/data/media";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Photographs from Team Foxtrot's competitions, builds, test flights, and outreach.",
};

export default function MediaPage() {
  return (
    <div className="shell py-10">
      <Titleblock
        kicker="Archive"
        title="Media"
        lede="Photographs from competitions, builds, test flights, and outreach."
        fields={[
          { key: "Plates", value: String(mediaGallery.length) },
          { key: "Span", value: "2019–2024" },
          { key: "Source", value: "Team archive" },
          { key: "Usage", value: "Contact for press" },
        ]}
      />

      <ul className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
        {mediaGallery.map((photo, i) => (
          <li key={photo.src} className="group relative bg-primary">
            <figure>
              <div className="relative aspect-[4/3]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading={i < 3 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="flex items-baseline justify-between gap-3 border-t border-line p-3">
                <span className="text-xs text-titanium-text">{photo.alt}</span>
                <span className="label-micro shrink-0">
                  PL-{String(i + 1).padStart(3, "0")}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
