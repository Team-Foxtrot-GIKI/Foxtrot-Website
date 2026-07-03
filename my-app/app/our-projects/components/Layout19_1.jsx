"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout19_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Featured</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Sylph proved that clever design wins awards
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              Folding wings and energy recovery systems earned first place at
              IMechE 2023 and the outreach award. Maximum takeoff weight of 4.8
              kilograms with a 1.2-kilogram payload. Speed reaches 16 meters per
              second. The folding mechanism reduces transport size without
              sacrificing flight performance. Energy recovery from the
              propellers extends endurance beyond standard quadcopter limits.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Quadcopter</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>IMechE 2023</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Folding design</p>
              </li>
            </ul>
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
