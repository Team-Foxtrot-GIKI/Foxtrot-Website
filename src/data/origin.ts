/**
 * MISSION ORIGIN — the founding timeline.
 *
 * Every milestone below is anchored to a fact already stated on the site (the
 * 2018 founding, the competition record, the sub-team structure, the STEM
 * outreach). Nothing is invented. Where a milestone would need a date the team
 * hasn't published, it is anchored to the campaign year instead.
 */

import { PENDING, type Pending } from "./pending";

export type Milestone = {
  year: string;
  title: string;
  body: string;
  /** Optional link into the archive. */
  href?: string;
  image?: string;
  detail: Pending<string>;
};

export const milestones: Milestone[] = [
  {
    year: "2018",
    title: "Team Formation",
    body: "A group of students from different disciplines at GIKI joined hands and decided to design and build UAVs — practical, fully autonomous aircraft capable of competing with the best in the world.",
    detail: PENDING,
  },
  {
    year: "2019",
    title: "First International Campaign",
    body: "Project EURUS, built around a STOL system for precision landing, flew at the IMechE UAS Challenge in the United Kingdom and won the Highest New Entrant Award.",
    href: "/aircraft/eurus",
    image: "/img/project-eurus.webp",
    detail: PENDING,
  },
  {
    year: "2021",
    title: "First Podium",
    body: "Project SWALLOW placed 5th in the world and 2nd in Asia, and took the Business Proposition Award for the first time.",
    href: "/aircraft/swallow",
    image: "/img/project-swallow.webp",
    detail: PENDING,
  },
  {
    year: "2022",
    title: "First in Asia",
    body: "Project BARQ — a tri-motor fixed-wing with retractable gear and a reverse-thrust mechanism — stood 1st in Asia and 6th globally at the live fly-offs.",
    href: "/aircraft/barq",
    image: "/img/project-barq.webp",
    detail: PENDING,
  },
  {
    year: "2023",
    title: "The Multirotor Pivot",
    body: "The team moved from fixed-wing to multirotor airframes, entering two competitions in one year: SYLPH took 1st place at the IMechE UAS Challenge, while ALTAIR placed 6th globally in the team's first AUVSI SUAS campaign in the United States.",
    href: "/aircraft/sylph",
    image: "/img/project-sylph.png",
    detail: PENDING,
  },
  {
    year: "2024",
    title: "Current Generation",
    body: "Project CARDINAL took 1st place and the Safety & Airworthiness Award at the IMechE UAS Challenge, while SPECTRE placed 4th in mission ranking at AUVSI SUAS.",
    href: "/aircraft/cardinal",
    image: "/img/Project Cardinal.png",
    detail: PENDING,
  },
  {
    year: "2025",
    title: "TEKNOFEST Campaign",
    body: "Project AUJ represented the team at TEKNOFEST Turkey 2025, placing 11th out of 131 participating teams.",
    href: "/aircraft/auj",
    image: "/img/Project auj.png",
    detail: PENDING,
  },
];

/** Sub-team structure, carried over verbatim from the old About Us page. */
export const subteams = [
  {
    name: "Design",
    body: "Creates the CAD model of the UAV based on the challenge's requirements.",
  },
  {
    name: "Automation",
    body: "Oversees all the electronics and automates the UAV.",
  },
  {
    name: "Imagery",
    body: "Handles software-related work, such as using AI for object detection.",
  },
  {
    name: "Fabrication",
    body: "Once design and electronics are confirmed, begins transforming the design into a reality.",
  },
  {
    name: "Documentation",
    body: "Records all the technical work completed by the sub-teams for submission to the challenge.",
  },
  {
    name: "Media",
    body: "Works to expand the team's reach and identify viable sponsors and partners.",
  },
];

/** Outreach copy, carried over from the old About Us page. */
export const outreach = {
  title: "Disseminating Knowledge",
  body: "The team has arranged STEM sessions — physically and online — throughout Pakistan. Its objective is to spread engineering and UAV knowledge wherever possible, raising awareness of how UAVs can support Pakistan's economy through agricultural spraying and aid relief during floods and earthquakes.",
  images: [
    "/img/stem-session-1.webp",
    "/img/stem-session-2.webp",
    "/img/stem-session-3.webp",
  ],
};
