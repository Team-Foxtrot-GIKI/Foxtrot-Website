import type { Metadata } from "next";
import Titleblock from "@/components/Titleblock";
import TransmissionForm from "@/components/TransmissionForm";
import SocialIcon from "@/components/SocialIcon";
import { SectionHead } from "@/components/primitives";
import { instagramEmbeds, pressLinks } from "@/data/media";
import { site, socials } from "@/data/site";

export const metadata: Metadata = {
  title: "Communications",
  description: `Reach Team Foxtrot at ${site.email}, or use the transmission form. Press coverage and social channels included.`,
};

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Telephone", value: site.phone, href: site.phoneHref },
  {
    label: "Location",
    value: site.address,
    href: site.mapUrl,
    external: true,
  },
];

export default function CommsPage() {
  return (
    <div className="shell py-10">
      <Titleblock
        kicker="Recovered System 06"
        title="Communications"
        lede="For partnership, press, recruitment, or anything else — the form reaches the team directly."
        fields={[
          { key: "Response Time", value: "A few days" },
          { key: "Press Coverage", value: `${pressLinks.length} articles` },
          { key: "Channels", value: String(socials.length) },
          { key: "Status", value: "Open", tone: "scope" },
        ]}
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Form first — it is the primary task on this page. */}
        <div>
          <SectionHead kicker="01" title="Send a transmission" />
          <TransmissionForm />
        </div>

        <div>
          <SectionHead kicker="02" title="Direct channels" />
          <dl className="space-y-px bg-line">
            {channels.map((c) => (
              <div key={c.label} className="bg-primary p-4">
                <dt className="label-micro">{c.label}</dt>
                <dd className="mt-1">
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="data text-sm break-words hover:text-amber"
                  >
                    {c.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>

          <h3 className="label mt-8 mb-3">Social channels</h3>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="border border-line p-3 text-titanium-text transition-colors duration-150 hover:border-amber hover:text-amber"
              >
                <SocialIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Press — credibility, not a primary task, so it sits below the fold. */}
      <section id="press" className="mt-20 scroll-mt-24">
        <SectionHead kicker="03" title="Press coverage" />
        <ul className="space-y-px bg-line">
          {pressLinks.map((l) => (
            <li key={l.href} className="bg-primary">
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 p-4"
              >
                <span className="max-w-[62ch] text-sm group-hover:text-amber">
                  {l.title}
                </span>
                <span className="label-micro shrink-0">{l.outlet}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <SectionHead kicker="04" title="From our feed" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {instagramEmbeds.map((src) => (
            <iframe
              key={src}
              src={src}
              title="Instagram post from Team Foxtrot"
              loading="lazy"
              scrolling="no"
              className="mx-auto h-[550px] w-full max-w-[320px] border border-line"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
