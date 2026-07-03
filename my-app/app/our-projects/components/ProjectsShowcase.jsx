"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

const projects = [
  {
    year: 2024,
    tag: "Featured",
    title: "Cardinal set the standard for what we build",
    description:
      "This quadcopter took first place at IMechE 2024 and earned the airworthiness award. Built from carbon fiber with systems designed for autonomous flight, it represents years of learning compressed into one machine. Maximum takeoff weight sits at 5.2 kilograms with a 1.5 kilogram payload capacity. Speed reaches 18 meters per second in calm conditions.",
    bullets: ["Quadcopter", "IMechE 2024", "Airworthiness award"],
    image: "/Project_Cardinal.png",
    alt: "Project Cardinal",
  },
  {
    year: 2024,
    tag: "Featured",
    title: "Spectre carries the load and finds the way",
    description:
      "Twin tractor design built for serious payload work at SUAS 2024. This machine flies the missions others cannot, autonomous from start to finish. Designed for mission reliability, stronger payload handling, and stable control under demanding conditions.",
    bullets: ["Twin-tractor", "SUAS 2024", "Payload focused"],
    image: "/Spectre-SUAS2024.png",
    alt: "Project Spectre",
  },
  {
    year: 2023,
    tag: "Featured",
    title: "Sylph proved that clever design wins awards",
    description:
      "Folding wings and energy recovery systems earned first place at IMechE 2023 and the outreach award. Maximum takeoff weight of 4.8 kilograms with a 1.2-kilogram payload. Speed reaches 16 meters per second. The folding mechanism reduces transport size without sacrificing flight performance. Energy recovery from the propellers extends endurance beyond standard quadcopter limits.",
    bullets: ["Quadcopter", "IMechE 2023", "Folding design"],
    image: "/Sylph-UAS_PK2023.png",
    alt: "Project Sylph",
  },
  {
    year: 2023,
    tag: "Featured",
    title: "Altair showed us what precision really means",
    description:
      "Tri motor fixed wing with V tail design and reverse thrust for landing in tight spaces at SUAS 2023. Maximum takeoff weight reaches 6.5 kilograms with a 2 kilogram payload. Cruise speed sits at 22 meters per second. The V tail configuration improves stability in crosswinds. Reverse thrust on the center motor allows landing without a runway.",
    bullets: ["Tri motor fixed wing", "SUAS 2023", "Reverse thrust"],
    image: "/Altair-SUAS2023.png",
    alt: "Project Altair",
  },
  {
    year: 2022,
    tag: "Featured",
    title: "BarQ proved we could compete with the world",
    description:
      "First in Asia and sixth globally at IMechE 2022. This fixed wing machine demonstrated that Pakistani engineering belongs on the international stage. Maximum takeoff weight of 6.2 kilograms with a 1.8 kilogram payload. Cruise speed reaches 21 meters per second. Similar design philosophy to Altair but with refined aerodynamics and improved flight control systems.",
    bullets: ["Fixed wing", "IMechE 2022", "1st in Asia"],
    image: "/Barq-UAS2022.png",
    alt: "Project BarQ",
  },
  {
    year: 2022,
    tag: "Featured",
    title: "Aviator carried the fixed-wing mission forward",
    description:
      "Aviator represented another strong fixed-wing step in 2022, focused on stability, payload efficiency, and cleaner aerodynamic performance. It strengthened our understanding of reliable long-range mission planning and airframe refinement.",
    bullets: ["Fixed wing", "UAS PK 2022", "Aerodynamic refinement"],
    image: "/Aviator-UAS_PK2022.png",
    alt: "Project Aviator",
  },
  {
    year: 2021,
    tag: "Featured",
    title: "Swallow pushed autonomy further",
    description:
      "Project Swallow demonstrated autonomous twin-tractor capability at IMechE competition in 2021. Built to improve control logic, navigation stability, and mission handling under stricter performance goals. It became an important step in our fixed-wing autonomy journey.",
    bullets: ["Twin-tractor", "IMechE 2021", "Autonomous capability"],
    image: "/Swallow-UAS2021.png",
    alt: "Project Swallow",
  },
  {
    year: 2020,
    tag: "Featured",
    title: "StingRay built to help, not just compete",
    description:
      "Humanitarian UAV with modular design at IMechE 2020. Maximum takeoff weight of 5 kilograms with a 1.5 kilogram payload. Speed reaches 15 meters per second. The modular design allows quick swaps between different payload types. Built for disaster response and medical supply delivery in remote areas.",
    bullets: ["Humanitarian UAV", "IMechE 2020", "Modular payloads"],
    image: "/Stingray-UAS2020.png",
    alt: "Project StingRay",
  },
  {
    year: 2019,
    tag: "Featured",
    title: "Eurus was where it all began",
    description:
      "Our debut UAV at IMechE 2019 with short takeoff and landing capability. Maximum takeoff weight of 4.5 kilograms with a 1 kilogram payload. Speed reaches 14 meters per second. STOL design allowed operation from unprepared surfaces. This machine taught us everything we know about building drones that work.",
    bullets: ["STOL UAV", "IMechE 2019", "Debut platform"],
    image: "/Eurus-UAS2019.png",
    alt: "Project Eurus",
  },
];

function ProjectBlock({ project, reverse = false }) {
  return (
    <section className="px-[5%] py-16 md:py-24">
      <div className="container">
        <div
          className={`grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20 ${
            reverse
              ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
              : ""
          }`}
        >
          <div>
            <p className="mb-4 inline-flex rounded-full border border-[#FF6A00]/20 bg-[#FF6A00]/10 px-4 py-1 text-sm font-semibold text-[#FF6A00]">
              {project.tag}
            </p>

            <h2 className="mb-5 text-4xl font-bold leading-tight text-black md:mb-6 md:text-6xl lg:text-7xl">
              {project.title}
            </h2>

            <p className="mb-6 max-w-xl text-black/80 md:text-md">
              {project.description}
            </p>

            <ul className="mb-6 list-disc space-y-2 pl-5 text-black/80 md:text-md">
              {project.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                title="Specs"
                variant="secondary"
                className="rounded-full border border-[#FF6A00] bg-white px-6 py-3 text-black transition-all duration-300 hover:bg-[#FF6A00] hover:text-white"
              >
                Specs
              </Button>

              <Button
                title="Details"
                variant="link"
                size="link"
                iconRight={
                  <RxChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
                }
                className="group rounded-full px-2 text-black transition-colors duration-300 hover:text-[#FF6A00]"
              >
                Details
              </Button>
            </div>
          </div>

          <div>
            <div className="rounded-[1.75rem] border border-black/6 bg-gradient-to-br from-[#ffffff] to-[#f3f3f3] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(0,0,0,0.12)]">
              <div className="rounded-[1.25rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,1),rgba(236,236,236,1))] p-6">
                <img
                  src={project.image}
                  className="h-full max-h-[520px] w-full object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.18)]"
                  alt={project.alt}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectsShowcase() {
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);

  return (
    <div className="bg-white">
      {sortedProjects.map((project, index) => (
        <ProjectBlock
          key={`${project.year}-${project.title}`}
          project={project}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
}