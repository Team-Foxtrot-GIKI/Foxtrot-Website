"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Questions
          </h2>
          <p className="md:text-md">
            Find answers to common questions about joining and working with us.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do I join the team?
            </h2>
            <p>
              We welcome students from all disciplines at GIK Institute. Reach
              out through the contact form with your background and interests.
              We'll discuss how you can contribute to our projects and
              competitions.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I see a drone demonstration?
            </h2>
            <p>
              Yes. Contact us to arrange a time. We conduct demonstrations
              during campus events and can schedule visits for interested groups
              or organizations.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you collaborate with other teams?
            </h2>
            <p>
              We're open to partnerships and collaborations. Whether you're
              another university team or an organization, send us a message
              about your ideas and we'll explore opportunities together.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What competitions do you enter?
            </h2>
            <p>
              We participate in national and international competitions
              including IMechE and SUAS. Each competition shapes our design
              philosophy and pushes our engineering capabilities forward.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How can media contact the team?
            </h2>
            <p>
              Press inquiries and media requests are welcome. Use the contact
              form and select 'Media or press' so we route your request to the
              right person quickly.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Anything else on your mind?
          </h4>
          <p className="md:text-md">
            We're here to help with whatever you need.
          </p>
       <div className="mt-6 md:mt-8">
  <Button
    title="Contact"
    variant="secondary"
    className="rounded-md border-0 bg-orange-500 px-6 py-3 text-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
  >
    Contact
  </Button>
</div>
        </div>
      </div>
    </section>
  );
}
