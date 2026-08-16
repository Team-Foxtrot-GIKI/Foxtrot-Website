/**
 * MISSION PARTNERS.
 *
 * Grouped by *contribution area* rather than cash tier — "Propulsion" says more
 * about the aircraft than "Platinum" does, and it is more flattering to the
 * partner. The original tier is retained for reference.
 *
 * `area` is inferred from each partner's own description of its business; nothing
 * is asserted about the relationship that the partner hasn't said publicly.
 * Years supporting and the relationship timeline are PENDING.
 */

import { PENDING, type Pending } from "./pending";

export type ContributionArea =
  | "Propulsion"
  | "Flight Control & Avionics"
  | "Airframe & Platform"
  | "Robotics & Automation";

export const areaOrder: ContributionArea[] = [
  "Propulsion",
  "Flight Control & Avionics",
  "Airframe & Platform",
  "Robotics & Automation",
];

export type Partner = {
  name: string;
  logo: string;
  area: ContributionArea;
  /** Original sponsorship tier, kept for reference. */
  tier: string;
  description: string;
  href: string;
  contribution: Pending<string>;
  since: Pending<number>;
};

export const partners: Partner[] = [
  {
    name: "Hobbywing",
    logo: "/img/hobbywing_rbg_out.png",
    area: "Propulsion",
    tier: "Platinum",
    description:
      "Hobbywing was the first company in China to engage in research and development of brushless power systems for drones and remote control model products. It has grown into the largest UAV brushless power system manufacturer in China.",
    href: "https://www.hobbywing.com/",
    contribution: PENDING,
    since: PENDING,
  },
  {
    name: "CUAV",
    logo: "/img/CUAV_outline.png",
    area: "Flight Control & Avionics",
    tier: "Gold",
    description:
      "CUAV Tech Inc., founded in 2012, develops and manufactures UAV applications and system modules. Its product line covers flight controllers, digital transmission radios, and high-precision positioning modules.",
    href: "https://www.cuav.net/en/about-cuav/",
    contribution: PENDING,
    since: PENDING,
  },
  {
    name: "T-Drones",
    logo: "/img/tdrones_rbg_outline.png",
    area: "Airframe & Platform",
    tier: "Silver",
    description:
      "Founded in 2015, T-Drones is a high-tech innovation enterprise focusing on UAV platform innovation, research and development, production, sales, and training.",
    href: "https://www.t-drones.com/article.php?id=153",
    contribution: PENDING,
    since: PENDING,
  },
  {
    name: "Woot Tech",
    logo: "/img/woottech_rbg.png",
    area: "Airframe & Platform",
    tier: "Bronze & Technical Partner",
    description:
      "Woot Tech is a drone company offering advanced UAVs for security, inspection, cargo transport, mapping, communication, and agriculture.",
    href: "https://woot-tech.com/",
    contribution: PENDING,
    since: PENDING,
  },
  {
    name: "Ammico Robotics",
    logo: "/img/ammico_800_rbg.png",
    area: "Robotics & Automation",
    tier: "Bronze & Technical Partner",
    description:
      "Ammico Robotics builds intelligent warehouse automation solutions.",
    href: "https://ammicorobotics.com/",
    contribution: PENDING,
    since: PENDING,
  },
];

export function partnersByArea(): { area: ContributionArea; items: Partner[] }[] {
  return areaOrder
    .map((area) => ({ area, items: partners.filter((p) => p.area === area) }))
    .filter((group) => group.items.length > 0);
}

/** Logo strip on the home page, in display order. */
export const partnerLogos = partners.map((p) => ({
  name: p.name,
  logo: p.logo,
}));
