"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta53() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
          <div className="relative z-10 flex min-h-[22rem] flex-col items-center justify-center px-6 py-12 text-center md:min-h-[24rem] md:px-10 md:py-16 lg:px-16">
            <div className="max-w-4xl">
              <h2 className="rb-5 mb-5 text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
                Ready to see what we build?
              </h2>

              <p className="mx-auto max-w-3xl text-white/90 md:text-md">
                Explore our projects, meet the team, or reach out to collaborate
                with us.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button
                title="Projects"
                className="group relative overflow-hidden rounded-full border-0 bg-[#FF6A00] px-6 py-3 text-white shadow-[0_10px_30px_rgba(255,106,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#e85f00] hover:shadow-[0_16px_40px_rgba(255,106,0,0.35)] active:translate-y-0 active:scale-[0.98]"
              >
                <>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative z-10 inline-block transition-transform duration-300 group-hover:tracking-wide">
                    Projects
                  </span>
                </>
              </Button>

              <Button
                title="Contact us"
                variant="secondary-alt"
                className="group rounded-full border-0 bg-white px-6 py-3 text-black transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#f3f3f3] hover:shadow-[0_12px_30px_rgba(255,255,255,0.12)] active:translate-y-0 active:scale-[0.98]"
              >
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-[2px]">
                  Contact us
                </span>
              </Button>
            </div>
          </div>

          <div className="absolute inset-0 z-0">
            <img
  src="/V-ToL.jpeg"
  className="size-full object-cover object-[58%_75%]"
  alt="Team Foxtrot UAV"
/>
            <div className="absolute inset-0 bg-black/45" />
          </div>
        </div>
      </div>
    </section>
  );
}