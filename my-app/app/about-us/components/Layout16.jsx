"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { RiUserStarLine, RiGlobalLine, RiPlaneLine } from "react-icons/ri";

export function Layout16() {
  return (
    <section
      id="relume"
      className="relative overflow-hidden bg-white px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.05),transparent_30%)]" />
        <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-[#FF6A00]/20 bg-[#FF6A00]/10 px-4 py-1 text-sm font-semibold text-[#FF6A00]">
              Origins
            </p>

            <h1 className="mb-5 text-5xl font-bold leading-tight text-black md:mb-6 md:text-7xl lg:text-8xl">
              Built from passion and precision
            </h1>

            <p className="mb-5 max-w-xl text-base leading-relaxed text-black/80 md:mb-6 md:text-md">
              Team Foxtrot emerged from GIK Institute with a singular vision: to
              design and build drones that matter. We are students who believe
              in the craft, who understand that engineering is not just about
              solving problems but about pushing what's possible in the sky.
            </p>

            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex items-start rounded-xl bg-white/70 px-3 py-2 backdrop-blur-sm">
                <div className="mr-4 mt-1 flex-none text-orange-500">
                  <RiUserStarLine className="size-6" />
                </div>
                <span className="text-black">
                  Student-led engineering at its core
                </span>
              </li>

              <li className="flex items-start rounded-xl bg-white/70 px-3 py-2 backdrop-blur-sm">
                <div className="mr-4 mt-1 flex-none text-orange-500">
                  <RiGlobalLine className="size-6" />
                </div>
                <span className="text-black">
                  Competing at national and international levels
                </span>
              </li>

              <li className="flex items-start rounded-xl bg-white/70 px-3 py-2 backdrop-blur-sm">
                <div className="mr-4 mt-1 flex-none text-orange-500">
                  <RiPlaneLine className="size-6" />
                </div>
                <span className="text-black">
                  Innovation through autonomous flight systems
                </span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                title="Explore"
                variant="secondary"
                className="rounded-full border border-black bg-white px-6 py-3 text-black transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-md"
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
                className="group rounded-full px-2 text-black transition-colors duration-300 hover:text-orange-500"
              >
                Blog Posts
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-orange-500/10 blur-2xl" />
            <img
              src="/passion.jpeg"
              className="h-full max-h-[640px] w-full rounded-[1.5rem] object-cover shadow-xl"
              alt="Built from passion and precision"
            />
          </div>
        </div>
      </div>
    </section>
  );
}