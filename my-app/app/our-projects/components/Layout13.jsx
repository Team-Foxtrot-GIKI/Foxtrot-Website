"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout13() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Featured</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Cardinal set the standard for what we build
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              This quadcopter took first place at IMechE 2024 and earned the
              airworthiness award. Built from carbon fiber with systems designed
              for autonomous flight, it represents years of learning compressed
              into one machine. Maximum takeoff weight sits at 5.2 kilograms
              with a 1.5-kilogram payload capacity. Speed reaches 18 meters per
              second in calm conditions. The propulsion system uses brushless
              motors paired with electronic speed controllers tuned for
              precision. Autonomy comes from a flight controller running custom
              firmware, with GPS and IMU integration for stable navigation. This
              is what happens when students refuse to accept limitations.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Specs" variant="secondary">
                Specs
              </Button>
              <Button
                title="Details"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Details
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
