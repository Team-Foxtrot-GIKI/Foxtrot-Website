"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout13_2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Featured</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Eurus was where it all began
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              Our debut UAV at IMechE 2019 with short takeoff and landing
              capability. Maximum takeoff weight of 4.5 kilograms with a
              1-kilogram payload. Speed reaches 14 meters per second. STOL
              design allowed operation from unprepared surfaces. This machine
              taught us everything we know about building drones that work.
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
