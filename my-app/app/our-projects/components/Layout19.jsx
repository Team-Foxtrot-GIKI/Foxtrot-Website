"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout19() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Featured</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Spectre carries the load and finds the way
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              Twin tractor design built for serious payload work at SUAS 2024.
              This machine flies the missions others cannot, autonomous from
              start to finish.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Twin-tractor</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>SUAS 2024</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Payload focused</p>
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
