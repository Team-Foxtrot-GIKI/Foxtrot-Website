"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

const stats = [
  {
    value: "8",
    title: "Drones built and tested",
    description: "Each one a step forward in engineering",
  },
  {
    value: "12",
    title: "Competitions entered",
    description: "National and international stages",
  },
  {
    value: "15",
    title: "Awards and recognitions",
    description: "From design to airworthiness",
  },
  {
    value: "5",
    title: "Years of flying",
    description: "Since our first flight in 2019",
  },
];

export function Stats31() {
  return (
    <section
      id="relume"
      className="bg-[#050505] px-[5%] py-16 text-white md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-[0.58fr_1fr] lg:items-center lg:gap-x-20">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-[#FF6A00]/20 bg-[#FF6A00]/10 px-4 py-1 text-sm font-medium text-[#FFB37A]">
              Achievement
            </div>

            <h2 className="mb-6 max-w-[10ch] text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              Five years of competition and growth
            </h2>

            <p className="max-w-[33rem] text-base leading-8 text-white/70 md:text-lg">
              Team Foxtrot has flown across Pakistan and the world, earning
              recognition at every stage.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                title="Explore"
                className="group rounded-full border-0 bg-[#FF6A00] px-6 py-3 text-white shadow-[0_10px_30px_rgba(255,106,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#e85f00] hover:shadow-[0_16px_40px_rgba(255,106,0,0.35)] active:translate-y-0 active:scale-[0.98]"
              >
                <span className="inline-block transition-transform duration-300 group-hover:tracking-wide">
                  Explore
                </span>
              </Button>

              <Button
                title="Learn"
                variant="link"
                size="link"
                iconRight={
                  <RxChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
                }
                className="group rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white no-underline transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:border-[#FF6A00]/50 hover:bg-white/10 hover:text-[#FFB37A] hover:shadow-[0_12px_30px_rgba(255,255,255,0.08)] active:translate-y-0 active:scale-[0.98]"
              >
                <span className="inline-block transition-all duration-300 group-hover:pr-1">
                  Learn
                </span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0E0E0E] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#FF6A00]/40 hover:shadow-[0_20px_60px_rgba(255,106,0,0.12)] md:p-9"
              >
                <div className="mb-6 h-1.5 w-16 rounded-full bg-[#FF6A00]" />

                <p className="mb-8 text-[4.5rem] font-bold leading-none tracking-tight text-white md:text-[5rem]">
                  {stat.value}
                </p>

                <h3 className="text-xl font-semibold leading-snug text-white">
                  {stat.title}
                </h3>

                <p className="mt-3 max-w-[24ch] text-base leading-7 text-white/65">
                  {stat.description}
                </p>

                <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-[#FF6A00]/10 blur-2xl transition duration-300 group-hover:bg-[#FF6A00]/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}