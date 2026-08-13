/**
 * CREW MANIFEST.
 *
 * The active council is recorded separately from the historical archive. Portrait
 * paths are intentionally optional: the manifest presents clean image-ready
 * plates until the 2026–2027 council photos are supplied.
 */

import { PENDING, type Pending } from "./pending";

/** Derived from role titles already present on the site. */
export type CrewMember = {
  name: string;
  roles: { title: string; primary?: boolean }[];
  unit: string;
  photo?: string;
  callsign: Pending<string>;
  yearsActive: Pending<string>;
  skills: Pending<string[]>;
  aircraftSlugs: Pending<string[]>;
};

/** Bump each academic year. */
export const manifestTerm = "2026–2027";

export const crew: CrewMember[] = [
  {
    name: "Omer Khan",
    roles: [{ title: "Director Documentation", primary: true }],
    unit: "Documentation",
    photo: "/img/omer%20khan.png",
    callsign: PENDING,
    yearsActive: PENDING,
    skills: PENDING,
    aircraftSlugs: PENDING,
  },
  {
    name: "Ahmed Mujtaba",
    roles: [{ title: "Director Avionics", primary: true }],
    unit: "Avionics",
    photo: "/img/ahmed%20mujtaba.png",
    callsign: PENDING,
    yearsActive: PENDING,
    skills: PENDING,
    aircraftSlugs: PENDING,
  },
  {
    name: "Zainab Nauman",
    roles: [{ title: "Director Relations", primary: true }],
    unit: "Relations",
    photo: "/img/zainab%20nauman.png",
    callsign: PENDING,
    yearsActive: PENDING,
    skills: PENDING,
    aircraftSlugs: PENDING,
  },
  {
    name: "Mustafa Khan",
    roles: [{ title: "Team Manager", primary: true }],
    unit: "Command",
    photo: "/img/mustafa%20khan.png",
    callsign: PENDING,
    yearsActive: PENDING,
    skills: PENDING,
    aircraftSlugs: PENDING,
  },
  {
    name: "Ibrahim Zaka",
    roles: [
      { title: "Team Captain", primary: true },
      { title: "Director Media" },
    ],
    unit: "Command & Media",
    photo: "/img/ibrahim%20zaka.png",
    callsign: PENDING,
    yearsActive: PENDING,
    skills: PENDING,
    aircraftSlugs: PENDING,
  },
  {
    name: "Bilal Ahmed",
    roles: [{ title: "Director Design", primary: true }],
    unit: "Design",
    photo: "/img/bilal%20ahmed.png",
    callsign: PENDING,
    yearsActive: PENDING,
    skills: PENDING,
    aircraftSlugs: PENDING,
  },
  {
    name: "Abdul Hadi",
    roles: [{ title: "Director Fabrication", primary: true }],
    unit: "Fabrication",
    photo: "/img/abdul%20hadi.png",
    callsign: PENDING,
    yearsActive: PENDING,
    skills: PENDING,
    aircraftSlugs: PENDING,
  },
  {
    name: "Abdur Rafay",
    roles: [{ title: "Director SDES", primary: true }],
    unit: "SDES",
    photo: "/img/abdur%20rafay.png",
    callsign: PENDING,
    yearsActive: PENDING,
    skills: PENDING,
    aircraftSlugs: PENDING,
  },
];

/** Founder and advisor — absorbs the old /about-us/team-founder page. */
export type Leader = {
  role: string;
  name: string;
  photo: string;
  note: Pending<string>;
  links: { type: "linkedin" | "website"; href: string }[];
};

export const leadership: Leader[] = [
  {
    role: "Founder",
    name: "Muhammad Haad Shaikh",
    photo: "/img/Picture13.webp",
    note: PENDING,
    links: [
      { type: "linkedin", href: "https://www.linkedin.com/in/haad-shaikh/" },
    ],
  },
  {
    role: "Faculty Advisor",
    name: "Prof. Dr. Wasim Ahmad Khan",
    photo: "/img/Picture12.webp",
    note: PENDING,
    links: [
      {
        type: "linkedin",
        href: "https://www.linkedin.com/in/professor-dr-wasim-a-khan-ceng-fimeche-547b2512",
      },
      {
        type: "website",
        href: "https://giki.edu.pk/personnel/prof-dr-wasim-ahmed-khan/",
      },
    ],
  },
];
