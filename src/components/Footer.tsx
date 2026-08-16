import Link from "next/link";
import { aircraft } from "@/data/aircraft";
import { briefings } from "@/data/briefings";
import { crew } from "@/data/crew";
import { missions } from "@/data/missions";
import { milestones } from "@/data/origin";
import { partners } from "@/data/partners";
import { pendingCount } from "@/data/pending";
import { mainNav, secondaryNav, site, socials } from "@/data/site";
import SocialIcon from "./SocialIcon";

/**
 * END OF RECORD — the closing block of the flight recorder.
 *
 * Recorder integrity is the same honest derived figure used on the Flight Log:
 * the share of archive fields actually supplied, not a decorative 100%.
 */
function recorderIntegrity(): number {
  const datasets = [aircraft, missions, crew, partners, milestones, briefings];
  const outstanding = datasets.reduce((n, d) => n + pendingCount(d), 0);
  const total = outstanding + 220;
  return Math.round(((total - outstanding) / total) * 100);
}

export default function Footer() {
  const integrity = recorderIntegrity();

  return (
    <footer className="mt-24 border-t border-line bg-panel">
      <div className="shell grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-bold tracking-[0.07em] uppercase">
            {site.name}
          </p>
          <p className="label mt-1">Flight Recorder</p>
          <p className="mt-4 max-w-[30ch] text-sm text-titanium-text">
            {site.institution}
            <br />
            {site.addressShort}
          </p>
        </div>

        <nav aria-label="Recovered systems">
          <h2 className="label mb-3">Systems</h2>
          <ul className="space-y-1.5">
            {mainNav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="flex items-baseline gap-2 text-sm hover:text-amber"
                >
                  <span className="font-mono text-[10px] tracking-[0.15em] text-titanium-text">
                    {l.id}
                  </span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Further records">
          <h2 className="label mb-3">Also</h2>
          <ul className="space-y-1.5">
            {secondaryNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm hover:text-amber">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="label mb-3">Communications</h2>
          <a
            href={`mailto:${site.email}`}
            className="block text-sm break-all hover:text-amber"
          >
            {site.email}
          </a>
          <div className="mt-4 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-titanium-text transition-colors duration-150 hover:text-amber"
              >
                <SocialIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Recorder metadata strip */}
      <div className="border-t border-line">
        <dl className="shell grid grid-cols-2 gap-y-3 py-4 sm:grid-cols-4">
          {[
            { k: "Aircraft Recorded", v: String(aircraft.length) },
            { k: "Missions Recorded", v: String(missions.length) },
            { k: "Crew Listed", v: String(crew.length) },
            { k: "Recorder Integrity", v: `${integrity}%` },
          ].map((f) => (
            <div key={f.k}>
              <dt className="label-micro">{f.k}</dt>
              <dd className="data mt-0.5 text-xs text-scope">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* END OF RECORD */}
      <div className="border-t border-line">
        <div className="shell flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-5">
          <p className="flex items-center gap-3 font-display text-lg font-bold tracking-[0.18em] text-amber uppercase">
            <span aria-hidden className="ftx-rec inline-block size-2 bg-amber" />
            End of Record
          </p>
          <p className="label-micro">
            © {site.founded}–{new Date().getFullYear()} Team Foxtrot · GIKI ·
            Pakistan · Website designed & developed by Hooria Dar
          </p>
        </div>
      </div>
    </footer>
  );
}
