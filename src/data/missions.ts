/**
 * MISSION RECORDS — one per competition campaign, newest first.
 *
 * This absorbs the two stale About Us pages (IMechE UAS Challenge, AUVSI SUAS
 * Competition). Their narrative prose is preserved verbatim as the series
 * descriptions below; the per-campaign results were previously scattered across
 * the projects page and the homepage.
 *
 * Every result here is sourced from existing site content. `location` is the
 * country stated on the old About pages — precise venues are PENDING.
 */

import { PENDING, type Pending } from "./pending";

export type MissionSeries = "imeche" | "suas";

export type Mission = {
  slug: string;
  /** Competition name as the organiser writes it. */
  competition: string;
  series: MissionSeries;
  year: number;
  country: string;
  venue: Pending<string>;
  /** Slug of the airframe flown. */
  aircraftSlug: string;
  /** PENDING where the team hasn't confirmed a placing for that year. */
  result: Pending<string>;
  /** True where the campaign produced a win or podium finish. */
  podium: boolean;
  awards: string[];
  summary: string;
  photos: string[];
  lessons: Pending<string>;
};

export const series: Record<
  MissionSeries,
  { name: string; short: string; country: string; description: string }
> = {
  imeche: {
    name: "IMechE UAS Challenge",
    short: "IMechE",
    country: "United Kingdom",
    description:
      "The competition is focused on which team can create the best automated UAV. The challenge is divided into two parts: the tasks performed during the actual flight — such as aid package delivery, speed trial, and endurance — and technical documentation. Both phases carry heavy points, and the team with the most aggregate points wins. Aside from the overall result, numerous awards are presented to teams that stand out in safety, design, airworthiness, and business proposition.",
  },
  suas: {
    name: "AUVSI SUAS Competition",
    short: "AUVSI SUAS",
    country: "United States",
    description:
      "The SUAS competition fosters interest in Unmanned Aerial Systems, stimulates interest in UAS technologies, and engages students in a challenging mission. It requires students to design, integrate, report on, and demonstrate a UAS capable of autonomous flight and navigation, remote sensing via onboard payload sensors, and execution of a specific set of tasks.",
  },
};

/** The four SUAS mission tasks, carried over from the old AUVSI page. */
export const suasTasks = [
  {
    title: "Autonomous Flight",
    body: "The UAS must take off, fly within boundaries, navigate a series of waypoints, and land.",
  },
  {
    title: "Obstacle Avoidance",
    body: "The UAS must avoid other aircraft sharing the airspace through sense-detect-avoid.",
  },
  {
    title: "Object Detection, Classification, Localization",
    body: "The UAS takes pictures of a search area, detects objects of interest, classifies their characteristics, and provides a GPS position.",
  },
  {
    title: "Air Delivery",
    body: "The UAS autonomously drops a payload so it lands undamaged at a target GPS position.",
  },
];

export const missions: Mission[] = [
  {
    slug: "imeche-2024",
    competition: "IMechE UAS Challenge",
    series: "imeche",
    year: 2024,
    country: "Pakistan",
    venue: PENDING,
    aircraftSlug: "cardinal",
    result: "1st Place",
    podium: true,
    awards: ["Safety & Airworthiness Award"],
    summary:
      "Project CARDINAL secured 1st place along with the Safety & Airworthiness Award. Designed for optimal aerodynamics, endurance, and mission performance, CARDINAL reflected the culmination of rigorous design, in-house fabrication, and cutting-edge autonomy.",
    photos: ["/img/UAS25_win.jpg", "/img/UAS25_team.jpg", "/img/UAS25.jpeg"],
    lessons: PENDING,
  },
  {
    slug: "suas-2024",
    competition: "AUVSI SUAS Competition",
    series: "suas",
    year: 2024,
    country: "United States",
    venue: PENDING,
    aircraftSlug: "spectre",
    result: "4th in Mission Ranking · 11th Overall",
    podium: false,
    awards: [],
    summary:
      "Project SPECTRE flew through the mission challenges at the SUAS Competition 2024, placing 4th in mission ranking and 11th overall — the culmination of strategic thinking, technical development, and tireless devotion by the team.",
    photos: [
      "/img/Spectre Team pic.jpg",
      "/img/SUAS'24.webp",
      "/img/SUAS-Teampic.webp",
    ],
    lessons: PENDING,
  },
  {
    slug: "imeche-2023",
    competition: "IMechE UAS Challenge",
    series: "imeche",
    year: 2023,
    country: "Pakistan",
    venue: PENDING,
    aircraftSlug: "sylph",
    result: "1st Place",
    podium: true,
    awards: ["Outreach Award"],
    summary:
      "Project SYLPH took 1st place along with the Outreach Award, recognising the team's STEM sessions across Pakistan alongside its engineering result.",
    photos: ["/img/Sylph flying picture.webp", "/img/UAS'23.webp"],
    lessons: PENDING,
  },
  {
    slug: "suas-2023",
    competition: "AUVSI SUAS Competition",
    series: "suas",
    year: 2023,
    country: "United States",
    venue: PENDING,
    aircraftSlug: "altair",
    result: "6th Globally",
    podium: false,
    awards: [],
    summary:
      "The team's first AUVSI SUAS campaign. Project ALTAIR, a hexacopter carrying six LiDAR sensors and gimbal-stabilised object detection, placed 6th globally.",
    photos: [
      "/img/suas-competition.webp",
      "/img/suas-competition-1.webp",
      "/img/foxtrot-suas-3.webp",
    ],
    lessons: PENDING,
  },
  {
    slug: "imeche-2022",
    competition: "IMechE UAS Challenge",
    series: "imeche",
    year: 2022,
    country: "United Kingdom",
    venue: PENDING,
    aircraftSlug: "barq",
    result: "1st in Asia · 6th Globally",
    podium: true,
    awards: ["Business Proposition Award"],
    summary:
      "In a spirited competition the team stood 1st in Asia and 6th in the world at the live fly-offs, and took the Business Proposition Award for the second year running.",
    photos: ["/img/Picture3.webp", "/img/Barq-2.jpg", "/img/Picture15.webp"],
    lessons: PENDING,
  },
  {
    slug: "imeche-2021",
    competition: "IMechE UAS Challenge",
    series: "imeche",
    year: 2021,
    country: "United Kingdom",
    venue: PENDING,
    aircraftSlug: "swallow",
    result: "5th Globally · 2nd in Asia",
    podium: true,
    awards: ["Business Proposition Award"],
    summary:
      "The team finished 5th in the world and 2nd in Asia while securing the Business Proposition Award for the first time.",
    photos: ["/img/Picture1.webp", "/img/Picture4.webp"],
    lessons: PENDING,
  },
  {
    slug: "imeche-2020",
    competition: "IMechE UAS Challenge",
    series: "imeche",
    year: 2020,
    country: "United Kingdom",
    venue: PENDING,
    aircraftSlug: "stingray",
    result: PENDING,
    podium: false,
    awards: [],
    summary:
      "Project STINGRAY, a fixed-wing airframe built for humanitarian aid missions, designed to disassemble for transport and reload its payload rapidly in the field.",
    photos: ["/img/Picture9.webp"],
    lessons: PENDING,
  },
  {
    slug: "imeche-2019",
    competition: "IMechE UAS Challenge",
    series: "imeche",
    year: 2019,
    country: "United Kingdom",
    venue: PENDING,
    aircraftSlug: "eurus",
    result: "Debut campaign",
    podium: true,
    awards: ["Highest New Entrant Award"],
    summary:
      "Team Foxtrot's first international campaign. Project EURUS, built around a STOL system for precision landing, won the Highest New Entrant Award.",
    photos: ["/img/Picture2.webp", "/img/Picture10.webp"],
    lessons: PENDING,
  },
];

export function getMission(slug: string): Mission | undefined {
  return missions.find((m) => m.slug === slug);
}

/** Press and broadcast coverage, carried over from the old IMechE page. */
export const coverageNote =
  "The team has been invited onto national television for interviews by Express News and Neo News, and has had articles published by Metronome, Jaanlo, and Economy.pk.";
