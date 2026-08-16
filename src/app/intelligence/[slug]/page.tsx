import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Titleblock from "@/components/Titleblock";
import RichText from "@/components/RichText";
import { briefings, getBriefing } from "@/data/briefings";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return briefings.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const b = getBriefing((await params).slug);
  if (!b) return {};
  return {
    title: b.title,
    description: b.excerpt,
    openGraph: { title: b.title, description: b.excerpt, images: [b.cover] },
  };
}

/** ~200 wpm over the assembled body text. */
function readingTime(text: string) {
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}

export default async function BriefingPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const b = getBriefing((await params).slug);
  if (!b) notFound();

  const words = b.body
    .map((block) => ("text" in block ? block.text : ""))
    .join(" ");
  const index = briefings.findIndex((x) => x.slug === b.slug);
  const next = briefings[(index + 1) % briefings.length];

  return (
    <div className="shell-narrow py-10">
      <Titleblock
        kicker={b.kind === "primer" ? "Primer" : "Engineering Briefing"}
        title={b.title}
        fields={[
          { key: "Published", value: b.date },
          { key: "Reading Time", value: `${readingTime(words)} min` },
          { key: "Type", value: b.kind === "primer" ? "Primer" : "Briefing" },
          { key: "Archive", value: "Engineering" },
        ]}
      />

      <article className="brief mt-12">
        {b.body.map((block, i) => {
          if (block.type === "heading") return <h2 key={i}>{block.text}</h2>;
          if (block.type === "image") {
            return (
              <Image
                key={i}
                src={block.src}
                alt={block.alt}
                width={460}
                height={320}
                className={`mb-6 h-auto w-full border border-line sm:w-[440px] sm:max-w-[46%] ${
                  block.float === "left"
                    ? "sm:float-left sm:mr-7"
                    : "sm:float-right sm:ml-7"
                }`}
              />
            );
          }
          return (
            <p key={i}>
              <RichText text={block.text} />
            </p>
          );
        })}
      </article>

      <nav className="clear-both mt-16 grid gap-px border border-line bg-line sm:grid-cols-2">
        <Link href="/intelligence" className="group bg-primary p-5">
          <span className="label">← Back</span>
          <span className="mt-1 block font-display text-lg font-bold tracking-[0.05em] uppercase group-hover:text-amber">
            All briefings
          </span>
        </Link>
        <Link
          href={`/intelligence/${next.slug}`}
          className="group bg-primary p-5 sm:text-right"
        >
          <span className="label">Next →</span>
          <span className="mt-1 block font-display text-lg font-bold tracking-[0.05em] uppercase group-hover:text-amber">
            {next.title}
          </span>
        </Link>
      </nav>
    </div>
  );
}
