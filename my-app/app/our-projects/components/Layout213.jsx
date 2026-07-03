"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout213() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-20"
                alt="Relume logo"
              />
            </div>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Altair showed us what precision really means
            </h2>
            <p className="md:text-md">
              Tri-motor fixed-wing with V-tail design and reverse thrust for
              landing in tight spaces at SUAS 2023. Maximum takeoff weight
              reaches 6.5 kilograms with a 2-kilogram payload. Cruise speed sits
              at 22 meters per second. The V-tail configuration improves
              stability in crosswinds. Reverse thrust on the center motor allows
              landing without a runway.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
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
        </div>
      </div>
    </section>
  );
}
