"use client";

import React from "react";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const ORANGE = "#FF6A00";

const teamMembers = [
  {
    name: "Abdullah Tariq",
    role: "Team Manager",
    secondRole: "Director SDES",
    description:
      "Leads the team and sets the pace for all competition efforts.",
    image: "/abdullah-tariq.jpeg",
    linkedin: "#",
  },
  {
    name: "Ans Qasim",
    role: "Team Captain",
    secondRole: "Director Design and Documentation",
    description:
      "Designs wing profiles and fuselage shapes for optimal flight performance.",
    image: "/ans-qasim.jpeg",
    linkedin: "#",
  },
  {
    name: "Jahangir Saleem",
    role: "Director Fabrication & Avionics",
    secondRole: "",
    description:
      "Manages flight control systems and autonomous navigation algorithms.",
    image: "/jahangir-saleem.jpeg",
    linkedin: "#",
  },
  {
    name: "Vajeeha Shafqat",
    role: "Director Media",
    secondRole: "",
    description:
      "Manages team branding, media coverage, and visual storytelling across events and digital platforms.",
    image: "/vajeeha.jpeg",
    linkedin: "#",
  },
  {
    name: "Ayesha Kashif",
    role: "Executive Member",
    secondRole: "",
    description:
      "Coordinates logistics and manages competition day execution.",
    image: "/ayesha.jpeg",
    linkedin: "#",
  },
  {
    name: "Adam Mustafa",
    role: "Executive Member",
    secondRole: "",
    description:
      "Selects and tunes motors, batteries, and power distribution systems.",
    image: "/adam-mustafa.jpeg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Saqib Azam Khan",
    role: "Executive Member",
    secondRole: "",
    description:
      "Supports technical execution, coordination, and team operations.",
    image: "/saqib-azam-khan.jpeg",
    linkedin: "#",
  },
  {
    name: "Shoaib Razzaq",
    role: "Executive Member",
    secondRole: "",
    description:
      "Contributes to project development, planning, and competition readiness.",
    image: "/shoaib-razzaq.jpeg",
    linkedin: "#",
  },
];

export function Team5() {
  return (
    <section
      id="relume"
      className="relative overflow-hidden bg-white px-[5%] py-16 text-black md:py-24 lg:py-28"
    >
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes softFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .team-card {
          animation: fadeUp 0.7s ease both;
        }

        .team-card:hover .team-image {
          animation: softFloat 2.2s ease-in-out infinite;
        }
      `}</style>

      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#FF6A00]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-[#FF6A00]/10 blur-3xl" />

      <div className="container relative z-10">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-18 lg:mb-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#FF6A00]">
            Meet the team
          </p>

          <h2 className="rb-5 mb-5 text-5xl font-bold tracking-tight md:mb-6 md:text-7xl lg:text-8xl">
            The Crew
          </h2>

          <p className="mx-auto max-w-md text-base text-black/70 md:text-md">
            Leaders who make it happen
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch justify-center gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="team-card group flex flex-col rounded-3xl border border-black/10 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#FF6A00]/40 hover:shadow-xl"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="rb-5 mb-6 flex w-full items-center justify-center">
                <div className="relative flex h-28 w-28 items-end justify-center overflow-hidden rounded-full bg-[#FF6A00] shadow-lg shadow-[#FF6A00]/20 ring-4 ring-[#FF6A00]/10">
                  <img
                    src={member.image}
                    alt={`${member.name} profile`}
                    className="team-image h-28 w-28 object-cover object-top transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="mb-4">
                <h5 className="text-lg font-bold leading-tight text-black">
                  {member.name}
                </h5>

                <div className="mt-1 text-sm leading-relaxed text-black/70 md:text-base">
                  <p>{member.role}</p>
                  {member.secondRole && <p>{member.secondRole}</p>}
                </div>
              </div>

              <p className="mx-auto flex-1 text-sm leading-relaxed text-black/70">
                {member.description}
              </p>

              <div className="mt-6 flex items-center justify-center gap-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    aria-label={`${member.name} LinkedIn`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:bg-[#FF6A00] hover:scale-110"
                  >
                    <BiLogoLinkedinSquare className="size-5" />
                  </a>
                )}

                {/* {member.twitter && (
                  <a
                    href={member.twitter}
                    aria-label={`${member.name} X profile`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:bg-[#FF6A00] hover:scale-110"
                  >
                    <FaXTwitter className="size-4" />
                  </a>
                )} */}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 w-full max-w-xl rounded-3xl bg-black px-6 py-10 text-center text-white shadow-2xl shadow-black/20 md:mt-20 md:px-10 lg:mt-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#FF6A00]">
            Want to join us?
          </p>

          <h4 className="mb-4 text-3xl font-bold md:text-4xl md:leading-[1.2]">
            Join the team
          </h4>

          <p className="mx-auto max-w-md text-white/75 md:text-md">
            We're always looking for talented engineers and builders.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <a
              href="#"
              className="group inline-flex items-center justify-center rounded-full bg-[#FF6A00] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#FF6A00]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-xl"
            >
              Contact us
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}