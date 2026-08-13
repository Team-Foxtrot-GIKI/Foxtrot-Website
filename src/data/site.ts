/**
 * Archive-wide settings: navigation, contact channels, social links.
 * Edit here to change the header and footer everywhere at once.
 */

export const site = {
  name: "Team Foxtrot",
  archive: "Flight Archive",
  tagline: "UAVS · AERODYNAMICS · DRONES",
  institution: "Ghulam Ishaq Khan Institute",
  url: "https://teamfoxtrot.pk",
  description:
    "Team Foxtrot is the UAV team of the Ghulam Ishaq Khan Institute (GIKI). Since 2018 we have designed, fabricated, and flown eight autonomous aircraft in national and international competition.",
  email: "teamfoxtrot.gik@gmail.com",
  phone: "+92-332-8272455",
  phoneHref: "tel:+923328272455",
  address: "GIKI, Topi, District Swabi, 23640, Khyber Pakhtunkhwa, Pakistan",
  addressShort: "Topi, Swabi, Pakistan",
  mapUrl: "https://goo.gl/maps/DqgM9mDz6dCDjPrN9",
  /** Formspree endpoint behind the transmission form. */
  formAction: "https://formspree.io/f/mpwpygre",
  founded: 2018,
  credits: [
    { name: "Moiz Taha", href: "https://www.linkedin.com/in/moiz-taha/" },
    { name: "Shahmir Gohar", href: null },
  ],
} as const;

export type NavLink = {
  /** Two-digit index, shown in mono — a recovered systems list. */
  id: string;
  label: string;
  href: string;
  /** Plain-language gloss, so the in-universe label never costs clarity. */
  hint: string;
};

export const mainNav: NavLink[] = [
  { id: "01", label: "Flight Log", href: "/", hint: "Home" },
  { id: "02", label: "Aircraft Archive", href: "/aircraft", hint: "Every UAV we have built" },
  { id: "03", label: "Crew Manifest", href: "/crew", hint: "The team" },
  { id: "04", label: "Mission Timeline", href: "/timeline", hint: "History and results" },
  { id: "05", label: "Mission Intelligence", href: "/intelligence", hint: "Technical briefings" },
  { id: "06", label: "Communications", href: "/comms", hint: "Get in touch" },
];

/**
 * Footer-only destinations. Mission Partners deliberately has no top-level nav
 * slot — it surfaces as the "Integrated Components" strip on the Flight Log and
 * the Aircraft Archive — but the detail page is kept so the sponsor copy stays
 * reachable.
 */
export const secondaryNav: NavLink[] = [
  { id: "07", label: "Mission Partners", href: "/partners", hint: "Sponsors and suppliers" },
  { id: "08", label: "Media", href: "/archive/media", hint: "Photographs" },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: "facebook" | "twitter" | "instagram" | "linkedin";
};

export const socials: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/TeamFoxtrotGIK/",
    icon: "facebook",
  },
  { label: "Twitter", href: "https://twitter.com/TeamFoxtrot2", icon: "twitter" },
  {
    label: "Instagram",
    href: "https://instagram.com/teamfoxtrot.uav.giki",
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    href: "https://pk.linkedin.com/company/team-foxtrot",
    icon: "linkedin",
  },
];
