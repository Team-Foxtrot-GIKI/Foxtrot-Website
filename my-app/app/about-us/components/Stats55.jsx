"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Stats55() {
  return (
    <section
      id="relume"
      className="bg-black px-[5%] py-16 text-white md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[0.5fr_1fr] lg:items-center lg:gap-x-20">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1 text-sm font-semibold text-orange-400">
              Numbers
            </p>

            <h2 className="mb-5 text-5xl font-bold leading-tight text-white md:mb-6 md:text-7xl lg:text-8xl">
              What we've accomplished in five years
            </h2>

            <p className="max-w-md text-white/70 md:text-md">
              These figures tell the story of dedication, competition, and the
              relentless pursuit of excellence in autonomous flight.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                title="Explore"
                variant="secondary"
                className="rounded-full border border-orange-500 bg-orange-500 px-6 py-3 text-white shadow-[0_0_25px_rgba(249,115,22,0.25)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-[0_0_35px_rgba(249,115,22,0.35)]"
              >
                Explore
              </Button>

              <Button
                title="Arrow"
                variant="link"
                size="link"
                iconRight={
                  <RxChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
                }
                className="group rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white transition-all duration-300 hover:border-orange-500/40 hover:text-orange-400"
              >
                Blog
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 py-2 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-orange-500/[0.06] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_0_40px_rgba(249,115,22,0.08)]">
              <div className="mb-6 h-1 w-16 rounded-full bg-orange-500" />
              <p className="mb-3 text-10xl font-bold leading-none text-white md:text-[4rem] lg:text-[5rem]">
                5
              </p>
              <h3 className="text-md font-bold leading-[1.4] text-white md:text-xl">
                Years of active flight
              </h3>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-orange-500/[0.06] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_0_40px_rgba(249,115,22,0.08)]">
              <div className="mb-6 h-1 w-16 rounded-full bg-orange-500" />
              <p className="mb-3 text-10xl font-bold leading-none text-white md:text-[4rem] lg:text-[5rem]">
                8
              </p>
              <h3 className="text-md font-bold leading-[1.4] text-white md:text-xl">
                Drones designed and built
              </h3>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-orange-500/[0.06] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_0_40px_rgba(249,115,22,0.08)]">
              <div className="mb-6 h-1 w-16 rounded-full bg-orange-500" />
              <p className="mb-3 text-10xl font-bold leading-none text-white md:text-[4rem] lg:text-[5rem]">
                12
              </p>
              <h3 className="text-md font-bold leading-[1.4] text-white md:text-xl">
                International competitions entered
              </h3>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-orange-500/[0.06] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_0_40px_rgba(249,115,22,0.08)]">
              <div className="mb-6 h-1 w-16 rounded-full bg-orange-500" />
              <p className="mb-3 text-10xl font-bold leading-none text-white md:text-[4rem] lg:text-[5rem]">
                7
              </p>
              <h3 className="text-md font-bold leading-[1.4] text-white md:text-xl">
                Major awards and recognitions
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}