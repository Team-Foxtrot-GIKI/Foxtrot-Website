import type { Metadata } from "next";
import Link from "next/link";

/**
 * Redirect stub for a URL that was indexed under the old site structure.
 *
 * `output: "export"` produces plain files, so there is no server to issue a 301.
 * A meta refresh plus a canonical link is what GitHub Pages can actually serve,
 * and search engines treat it as equivalent to a permanent redirect. The visible
 * link is the fallback for anyone whose browser blocks the refresh.
 */
export function redirectMetadata(to: string, title: string): Metadata {
  return {
    title,
    alternates: { canonical: to },
    robots: { index: false, follow: true },
    other: { refresh: `0; url=${to}` },
  };
}

export default function Redirect({ to, label }: { to: string; label: string }) {
  return (
    <div className="shell py-24 text-center">
      <p className="label">This page has moved</p>
      <h1 className="mt-3 text-3xl tracking-[0.04em]">{label}</h1>
      <p className="mt-4 text-titanium-text">
        Redirecting you to its new home in the Flight Archive.
      </p>
      <Link href={to} className="btn btn-primary mt-8">
        Continue
      </Link>
      {/* Belt and braces: fires even if the <meta> refresh is stripped. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `location.replace(${JSON.stringify(to)});`,
        }}
      />
    </div>
  );
}
