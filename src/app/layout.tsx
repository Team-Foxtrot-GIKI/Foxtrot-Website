import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FlightPath from "@/components/FlightPath";
import ReticleCursor from "@/components/ReticleCursor";
import { site } from "@/data/site";
import "./globals.css";

/*
 * Space Grotesk is self-hosted by next/font, so it has no runtime Google request
 * or layout shift. Eurostile remains first in the display stack in globals.css
 * for when its licensed webfont is added to the project.
 */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Team Foxtrot — Flight Archive",
    template: "%s — Team Foxtrot",
  },
  description: site.description,
  icons: { icon: "/img/fox.webp" },
  openGraph: {
    type: "website",
    url: site.url,
    title: "Team Foxtrot — Flight Archive",
    description: site.description,
    images: ["/img/fox.webp"],
  },
  twitter: {
    card: "summary",
    title: "Team Foxtrot — Flight Archive",
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={spaceGrotesk.variable}
    >
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              url: site.url,
              logo: `${site.url}/img/fox.webp`,
              foundingDate: String(site.founded),
              parentOrganization: { "@type": "CollegeOrUniversity", name: site.institution },
            }),
          }}
        />
        <a
          href="#content"
          className="btn btn-primary sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[200]"
        >
          Skip to content
        </a>
        {/* Both self-disable on touch, narrow viewports, and reduced-motion. */}
        <FlightPath />
        <ReticleCursor />
        <Nav />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
