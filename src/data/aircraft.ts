/**
 * AIRCRAFT RECORDS — one per airframe, newest first.
 *
 * Every `overview` and `specs` entry below is real content carried over from the
 * previous site. Fields marked PENDING are ones the redesign introduces and the
 * team has not supplied yet; they render as an "awaiting data" chip rather than
 * inventing anything. See src/data/pending.ts.
 */

import { PENDING, type Pending } from "./pending";

export type Airframe =
  | "X-quadcopter"
  | "H-quadcopter"
  | "Quadcopter"
  | "Hexacopter"
  | "Tri-motor fixed-wing"
  | "Twin-tractor fixed-wing"
  | "Fixed-wing";

export type Aircraft = {
  slug: string;
  /** Name without the "Project" prefix — the prefix is applied in the UI. */
  name: string;
  /** Sequential archive designation by first-flight year. A declared convention. */
  designation: string;
  year: number;
  airframe: Airframe;
  /** Broad class, drives the index filter. */
  category: "Multirotor" | "Fixed-wing";
  /** Slug of the mission this airframe flew — cross-links the two axes. */
  missionSlug: string;
  competition: string;
  result?: string;
  /** Headline result colour: accent for wins, muted otherwise. */
  podium: boolean;
  /** One-line thesis. See §15.3 — specificity is the brand. */
  thesis: Pending<string>;
  photo: string;
  overview: string;
  specs: { label: string; value: string }[];
  /** Extra photographs for the record gallery. */
  gallery: Pending<string[]>;
  /**
   * Orthographic views exported from SolidWorks (DXF → SVG).
   * When supplied, the annotated diagram section renders.
   */
  drawings: Pending<{ top?: string; side?: string; iso?: string }>;
  /** Callouts anchored to the drawing, once drawings exist. */
  callouts: Pending<{ label: string; note: string }[]>;
  missionProfile: Pending<string>;
  autonomy: Pending<string>;
};

export const aircraft: Aircraft[] = [
  {
    slug: "cardinal",
    name: "Cardinal",
    designation: "FTX-08",
    year: 2024,
    airframe: "X-quadcopter",
    category: "Multirotor",
    missionSlug: "imeche-2024",
    competition: "IMechE UAS Challenge 2024",
    result: "1st Place · Safety & Airworthiness Award",
    podium: true,
    thesis: PENDING,
    photo: "/img/Project Cardinal.png",
    overview:
      "Project CARDINAL, an X-shaped quadcopter, engineered for endurance, precision, and mission efficiency, CARDINAL is the result of thoughtful design choices, in-house fabrication, and reliable autonomous systems.",
    specs: [
      { label: "Maximum Takeoff Mass", value: "9 677 g" },
      {
        label: "Material Composition",
        value: "Carbon fibre, PLA (3D printed), fibreglass, epoxy, aluminium",
      },
      { label: "Top Airspeed", value: "60 KIAS" },
      {
        label: "Object Detection",
        value: "Nvidia Jetson Nano + PTZ camera, custom-trained model",
      },
      {
        label: "Power System",
        value: "2 × 10 000 mAh 6S Li-Po (series)",
      },
    ],
    gallery: PENDING,
    drawings: PENDING,
    callouts: PENDING,
    missionProfile: "Cardinal was designed for disaster management and emergency response scenarios. The mission required the UAV to navigate to a designated checkpoint, collect a payload containing test tubes, and safely transport it back to the designated location. The complete mission had to be accomplished within **10 minutes**.",
    autonomy: PENDING,
  },
  {
    slug: "spectre",
    name: "Spectre",
    designation: "FTX-07",
    year: 2024,
    airframe: "H-quadcopter",
    category: "Multirotor",
    missionSlug: "suas-2024",
    competition: "AUVSI SUAS Competition 2024",
    result: "4th in Mission Ranking · 11th Overall",
    podium: false,
    thesis: PENDING,
    photo: "/img/Spectre - SUAS2024.webp",
    overview:
      "Project SPECTRE, an H-frame quadcopter, took to the skies at the SUAS Competition 2024, securing 4th place in mission ranking and 11th overall. It showcased the power of engineering, strategy, and hard work.",
    specs: [
      { label: "Maximum Takeoff Mass", value: "15 kg" },
      { label: "Configuration", value: "H-frame quadcopter" },
      { label: "Top Speed", value: "15 m/s" },
      { label: "Flight Time", value: "40 minutes" },
    ],
    gallery: ["/img/Spectre Team pic.jpg", "/img/SUAS'24.webp"],
    drawings: PENDING,
    callouts: PENDING,
    missionProfile: PENDING,
    autonomy: PENDING,
  },
  {
    slug: "sylph",
    name: "Sylph",
    designation: "FTX-06",
    year: 2023,
    airframe: "Quadcopter",
    category: "Multirotor",
    missionSlug: "imeche-2023",
    competition: "IMechE UAS Challenge 2023",
    result: "1st Place · Outreach Award",
    podium: true,
    thesis: PENDING,
    photo: "/img/project-sylph.png",
    overview:
      "Project SYLPH is a quadcopter designed for versatility and efficiency, featuring a lightweight yet durable construction and an umbrella folding mechanism that collapses the airframe for transport.",
    specs: [
      { label: "Maximum Takeoff Mass", value: "10 kg" },
      {
        label: "Material Composition",
        value: "Biodegradable 3D filament & carbon fibre",
      },
      { label: "Payload Capacity", value: "2.5 kg" },
      { label: "Flight Time", value: "~20 minutes at full payload" },
      {
        label: "Design Innovation",
        value: "Umbrella folding mechanism for compact transport",
      },
      {
        label: "Power Management",
        value: "Energy recovery from unpowered motors",
      },
    ],
    gallery: ["/img/Sylph flying picture.webp"],
    drawings: PENDING,
    callouts: PENDING,
    missionProfile: PENDING,
    autonomy: PENDING,
  },
  {
    slug: "altair",
    name: "Altair",
    designation: "FTX-05",
    year: 2023,
    airframe: "Hexacopter",
    category: "Multirotor",
    missionSlug: "suas-2023",
    competition: "AUVSI SUAS Competition 2023",
    result: "6th Globally",
    podium: false,
    thesis: PENDING,
    photo: "/img/altair.webp",
    overview:
      "Project ALTAIR, a robust hexacopter, set new benchmarks in aerial operations with its advanced avionics and payload management.",
    specs: [
      { label: "Maximum Takeoff Mass", value: "18 kg" },
      { label: "Configuration", value: "Hexacopter" },
      { label: "Top Speed", value: "10 m/s" },
      { label: "Range", value: "19 km" },
    ],
    gallery: ["/img/foxtrot-suas.webp", "/img/foxtrot-suas-2.webp"],
    drawings: PENDING,
    callouts: PENDING,
    missionProfile: PENDING,
    autonomy: PENDING,
  },
  {
    slug: "barq",
    name: "Barq",
    designation: "FTX-04",
    year: 2022,
    airframe: "Tri-motor fixed-wing",
    category: "Fixed-wing",
    missionSlug: "imeche-2022",
    competition: "IMechE UAS Challenge 2022",
    result: "1st in Asia · 6th Globally · Business Proposition Award",
    podium: true,
    thesis: PENDING,
    photo: "/img/project-barq.webp",
    overview:
      "A tri-motor fixed-wing UAV engineered for precision landing and high manoeuvrability, using a reverse-thrust mechanism to arrest its approach.",
    specs: [
      { label: "Maximum Takeoff Mass", value: "9.3 kg" },
      { label: "Landing System", value: "Retractable landing gear" },
      { label: "Tail Configuration", value: "Split V-tail" },
    ],
    gallery: PENDING,
    drawings: PENDING,
    callouts: PENDING,
    missionProfile: PENDING,
    autonomy: PENDING,
  },
  {
    slug: "swallow",
    name: "Swallow",
    designation: "FTX-03",
    year: 2021,
    airframe: "Twin-tractor fixed-wing",
    category: "Fixed-wing",
    missionSlug: "imeche-2021",
    competition: "IMechE UAS Challenge 2021",
    result: "5th Globally · 2nd in Asia · Business Proposition Award",
    podium: true,
    thesis: PENDING,
    photo: "/img/project-swallow.webp",
    overview:
      "A twin-tractor UAV optimised for high payload capacity and autonomous flight, with a drag-minimising airframe built for speed trials, waypoint navigation, and area search.",
    specs: [
      { label: "Payload Capacity", value: "2.07 kg" },
      { label: "Landing System", value: "Retractable landing gear" },
      {
        label: "Onboard Computing",
        value: "Jetson Nano & Pi Cam v2",
      },
    ],
    gallery: PENDING,
    drawings: PENDING,
    callouts: PENDING,
    missionProfile: PENDING,
    autonomy: PENDING,
  },
  {
    slug: "stingray",
    name: "Stingray",
    designation: "FTX-02",
    year: 2020,
    airframe: "Fixed-wing",
    category: "Fixed-wing",
    missionSlug: "imeche-2020",
    competition: "IMechE UAS Challenge 2020",
    podium: false,
    thesis: PENDING,
    photo: "/img/project-stingray.webp",
    overview:
      "A fixed-wing UAV tailored for humanitarian aid missions, designed to disassemble for transport and reload its payload rapidly in the field.",
    specs: [
      { label: "Configuration", value: "Twin tractor" },
      { label: "Takeoff & Landing", value: "VTOL capability" },
    ],
    gallery: PENDING,
    drawings: PENDING,
    callouts: PENDING,
    missionProfile: PENDING,
    autonomy: PENDING,
  },
  {
    slug: "eurus",
    name: "Eurus",
    designation: "FTX-01",
    year: 2019,
    airframe: "Fixed-wing",
    category: "Fixed-wing",
    missionSlug: "imeche-2019",
    competition: "IMechE UAS Challenge 2019",
    result: "Highest New Entrant Award",
    podium: true,
    thesis: PENDING,
    photo: "/img/project-eurus.webp",
    overview:
      "Foxtrot's debut aircraft, featuring a STOL (Short Takeoff & Landing) system for superior manoeuvrability in confined operating areas.",
    specs: [
      { label: "Configuration", value: "Canard configuration" },
      { label: "Payload Capacity", value: "Over 3 kg" },
    ],
    gallery: PENDING,
    drawings: PENDING,
    callouts: PENDING,
    missionProfile: PENDING,
    autonomy: PENDING,
  },
];

export function getAircraft(slug: string): Aircraft | undefined {
  return aircraft.find((a) => a.slug === slug);
}

export function aircraftForMission(missionSlug: string): Aircraft | undefined {
  return aircraft.find((a) => a.missionSlug === missionSlug);
}

/** Chronological neighbours, for prev/next navigation on record pages. */
export function adjacentAircraft(slug: string) {
  const i = aircraft.findIndex((a) => a.slug === slug);
  return {
    newer: i > 0 ? aircraft[i - 1] : undefined,
    older: i >= 0 && i < aircraft.length - 1 ? aircraft[i + 1] : undefined,
  };
}

/** Headline figures for the home page. All derived, none asserted. */
export const archiveStats = {
  aircraftCount: aircraft.length,
  firstYear: Math.min(...aircraft.map((a) => a.year)),
  latestYear: Math.max(...aircraft.map((a) => a.year)),
  podiums: aircraft.filter((a) => a.podium).length,
};
