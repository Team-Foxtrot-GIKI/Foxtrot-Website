import Redirect, { redirectMetadata } from "@/components/Redirect";
import { briefings } from "@/data/briefings";

/** Old blog post URLs are indexed; each one forwards to its briefing. */
type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return briefings.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  return redirectMetadata(`/intelligence/${slug}`, "Briefing");
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const briefing = briefings.find((b) => b.slug === slug);
  return (
    <Redirect
      to={`/intelligence/${slug}`}
      label={briefing?.title ?? "Engineering briefing"}
    />
  );
}
