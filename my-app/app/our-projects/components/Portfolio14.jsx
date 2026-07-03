"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

const projects = [
  {
    title: "Project Cardinal",
    description:
      "Advanced autonomy meets precision engineering in this competition winner",
    image: "/Project_Cardinal.png",
    tags: ["Quadcopter", "IMechE 2024", "Carbon fiber"],
    href: "/our-projects",
  },
  {
    title: "Project Spectre",
    description:
      "Twin-tractor design built for payload capacity and autonomous mission execution",
    image: "/Spectre-SUAS2024.png",
    tags: ["Twin-tractor", "SUAS 2024", "Payload focused"],
    href: "/our-projects",
  },
  {
    title: "Project Sylph",
    description:
      "Folding design with energy recovery systems earned first place and outreach recognition",
    image: "/Sylph-UAS_PK2023.png",
    tags: ["Quadcopter", "IMechE 2023", "Folding design"],
    href: "/our-projects",
  },
  {
    title: "Project Altair",
    description:
      "Tri-motor fixed-wing with precision landing and reverse thrust capabilities",
    image: "/Altair-SUAS2023.png",
    tags: ["Fixed-wing", "SUAS 2023", "V-tail design"],
    href: "/our-projects",
  },
  {
    title: "Project BarQ",
    description:
      "First in Asia and sixth globally at IMechE, this machine proved our capability",
    image: "/Barq-UAS2022.png",
    tags: ["Fixed-wing", "IMechE 2022", "Global competition"],
    href: "/our-projects",
  },
  {
    title: "Project Swallow",
    description:
      "Autonomous twin-tractor UAV that demonstrated coordinated flight systems",
    image: "/Swallow-UAS2021.png",
    tags: ["Twin-tractor", "IMechE 2021", "Autonomous"],
    href: "/our-projects",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="group relative mb-8 break-inside-avoid overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,#101010_0%,#0b0b0b_100%)] shadow-[0_10px_35px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#ff6a00]/40 hover:shadow-[0_0_0_1px_rgba(255,106,0,0.15),0_18px_50px_rgba(255,106,0,0.12)]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* orange ambient glow on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-x-[18%] bottom-0 h-24 rounded-full bg-[#ff6a00]/12 blur-3xl" />
        <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#ff6a00]/8 blur-2xl" />
      </div>

      <div className="relative overflow-hidden rounded-t-[24px] bg-[radial-gradient(circle_at_top,rgba(255,106,0,0.10),transparent_42%),linear-gradient(180deg,#131313_0%,#101010_100%)]">
        <Link href={project.href}>
          <div className="flex min-h-[260px] items-center justify-center px-5 pt-6">
            <motion.img
              src={project.image}
              alt={project.title}
              className="relative z-10 w-full object-contain drop-shadow-[0_14px_30px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:scale-[1.04]"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35 }}
            />
          </div>
        </Link>
      </div>

      <div className="relative px-5 py-6 sm:px-6">
        <div className="mb-4 h-[2px] w-12 bg-[#ff6a00]" />

        <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">
          <Link
            href={project.href}
            className="transition-colors duration-300 group-hover:text-[#ff8a33]"
          >
            {project.title}
          </Link>
        </h3>

        <p className="text-sm leading-6 text-white/65">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="flex">
              <span className="rounded-full border border-[#ff6a00]/30 bg-[#ff6a00]/8 px-3 py-1 text-xs font-medium text-[#ff9a4d] transition-all duration-300 group-hover:border-[#ff6a00]/45 group-hover:bg-[#ff6a00]/12">
                {tag}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-5 h-px w-full bg-white/8" />

        <Link
          href={project.href}
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#ff8a33] transition-all duration-300 hover:gap-2 hover:text-[#ffa45c]"
        >
          View more <RxChevronRight />
        </Link>
      </div>
    </motion.article>
  );
}

export function Portfolio14() {
  return (
    <section id="relume" className="bg-[#050505] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center md:mb-18 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 inline-flex items-center justify-center rounded-full border border-[#ff6a00]/30 bg-[#ff6a00]/8 px-4 py-1.5 text-sm font-medium text-[#ff8a33]">
            Projects
          </div>

          <h2 className="mb-5 text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
            Eight years of flight
          </h2>

          <p className="mx-auto max-w-xl text-white/65 md:text-lg">
            Each machine built from scratch, tested in competition, refined by
            experience
          </p>
        </motion.div>

        <div className="columns-1 after:block md:columns-2 md:gap-x-8 lg:columns-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-8 flex justify-center md:mt-18 lg:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          <Link
            href="/our-projects"
            className="inline-flex items-center justify-center rounded-full border border-[#ff6a00]/60 bg-[#ff6a00]/6 px-8 py-3 text-sm font-semibold text-[#ff8a33] transition-all duration-300 hover:border-[#ff6a00] hover:bg-[#ff6a00] hover:text-white"
          >
            View all
          </Link>
        </motion.div>
      </div>
    </section>
  );
}