"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@relume_io/relume-ui";
import React, { Fragment } from "react";
import {
  BiLinkAlt,
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Content30() {
  return (
    <section id="relume" className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 flex flex-col gap-y-6 sm:flex-row sm:items-center sm:justify-between md:mb-14">
            <Breadcrumb className="flex items-center">
              <BreadcrumbList className="rounded-full border border-[#FF6A00]/20 bg-[#FF6A00]/10 px-4 py-2">
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/blog"
                    className="text-sm font-semibold text-black/70 transition-colors duration-300 hover:text-[#FF6A00]"
                  >
                    Blog
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-[#FF6A00]" />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="#"
                    className="text-sm font-semibold text-[#FF6A00]"
                  >
                    Updates
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="flex items-start gap-2">
              <a
                href="#"
                className="inline-flex size-10 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF6A00] hover:bg-[#FF6A00] hover:text-white"
              >
                <BiLinkAlt className="size-5" />
              </a>
              <a
                href="#"
                className="inline-flex size-10 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF6A00] hover:bg-[#FF6A00] hover:text-white"
              >
                <BiLogoLinkedinSquare className="size-5" />
              </a>
              <a
                href="#"
                className="inline-flex size-10 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF6A00] hover:bg-[#FF6A00] hover:text-white"
              >
                <FaXTwitter className="size-4" />
              </a>
              <a
                href="#"
                className="inline-flex size-10 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF6A00] hover:bg-[#FF6A00] hover:text-white"
              >
                <BiLogoFacebookCircle className="size-5" />
              </a>
            </div>
          </div>

          <div className="prose prose-lg mb-12 max-w-none text-black md:mb-16 lg:mb-20">
            <Fragment>
              <h2 className="mb-6 text-4xl font-bold leading-tight text-black md:text-5xl">
                Introduction
              </h2>

              <p className="text-black/80">
                Building a drone takes more than engineering. It takes the kind
                of patience that comes from knowing what matters. We started
                with a simple question: what if we could make something that
                flies better, lasts longer, and teaches us something real in the
                process?
              </p>

              <p className="text-black/80">
                The first weeks were rough. We had sketches on paper and ideas
                that seemed solid until we tried them. The frame we designed was
                too heavy. The motors we selected couldn't handle the load. We
                sat in the workshop late into the evening, pulling apart what
                we'd built, understanding where we went wrong, and starting
                again.
              </p>

              <figure className="my-10 overflow-hidden rounded-[1.75rem] border border-black/10 bg-gradient-to-br from-[#f8f8f8] to-[#ececec] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
                <img
                  src="/latest-drone.jpeg"
                  alt="Latest drone build"
                  className="w-full rounded-[1.25rem] object-cover"
                />
                <figcaption className="mt-4 text-sm text-black/55">
                  From concept to workshop floor, every iteration brought the
                  team closer to a machine that could truly perform.
                </figcaption>
              </figure>

              <h4 className="mt-10 text-2xl font-bold text-black">
                Design through iteration
              </h4>

              <p className="text-black/80">
                That's when things changed. We stopped thinking about what a
                drone should be and started thinking about what ours needed to
                be. We looked at the competition requirements. We looked at the
                materials we had. We looked at what our team could actually
                build and maintain. The design came from that intersection of
                possibility and reality.
              </p>

              <blockquote className="rounded-[1.5rem] border-l-4 border-[#FF6A00] bg-[#FF6A00]/5 px-6 py-4 text-black/80 italic shadow-sm">
                "We weren't building something to look good on a shelf. We were
                building something that had to work when it mattered."
              </blockquote>

              <p className="text-black/80">
                The carbon fiber frame came next. It was lighter, stronger, and
                it meant we could push the boundaries of what we'd attempted
                before. Each piece was tested. Each connection was verified. We
                weren't building something to look good on a shelf. We were
                building something that had to work when it mattered.
              </p>

              <h4 className="mt-10 text-2xl font-bold text-black">
                Learning autonomy the hard way
              </h4>

              <p className="text-black/80">
                Autonomy was the real challenge. Getting a machine to think for
                itself, to make decisions in the air, to land where it's
                supposed to land—that required a different kind of thinking. Our
                systems engineer spent weeks on the code. He tested it in
                simulation first. Then in the air, carefully, with safety
                margins that gave us room to fail without crashing.
              </p>

              <p className="text-black/80">
                By the time we were ready to fly, we'd learned more than we
                expected. Not just about drones, but about ourselves. About what
                happens when you refuse to accept the first solution. About the
                value of building something with your own hands, understanding
                every part of it, and trusting it when it matters.
              </p>

              <h3 className="mt-12 text-3xl font-bold text-black">Conclusion</h3>

              <p className="text-black/80">
                The flight was clean. The landing was smooth. We watched it come
                down exactly where we'd programmed it to land, and for a moment,
                nobody said anything. Then someone laughed. Someone else started
                clapping. That's when we knew we'd built something real.
              </p>

              <p className="text-black/80">
                This is what we do. We build. We test. We learn. We build
                again. Every drone that leaves our workshop carries that
                philosophy with it. It's not about being perfect. It's about
                being honest about what you've made and why it works.
              </p>
            </Fragment>
          </div>

          <div>
            <div className="mb-8 text-center md:mb-10 lg:mb-12">
              <p className="font-semibold text-black md:text-md">
                Share this post
              </p>

              <div className="mb-8 mt-4 flex items-start justify-center gap-2 sm:mb-0">
                <a
                  href="#"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF6A00] hover:bg-[#FF6A00] hover:text-white"
                >
                  <BiLinkAlt className="size-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF6A00] hover:bg-[#FF6A00] hover:text-white"
                >
                  <BiLogoLinkedinSquare className="size-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF6A00] hover:bg-[#FF6A00] hover:text-white"
                >
                  <FaXTwitter className="size-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF6A00] hover:bg-[#FF6A00] hover:text-white"
                >
                  <BiLogoFacebookCircle className="size-5" />
                </a>
              </div>
            </div>

            <div>
              <ul className="flex flex-wrap justify-center gap-3">
                <li className="flex">
                  <a
                    href="#"
                    className="rounded-xl bg-[#f3f3f3] px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#FF6A00] hover:text-white"
                  >
                    Drone design
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="rounded-xl bg-[#f3f3f3] px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#FF6A00] hover:text-white"
                  >
                    Engineering
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="rounded-xl bg-[#f3f3f3] px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#FF6A00] hover:text-white"
                  >
                    Competition
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="rounded-xl bg-[#f3f3f3] px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#FF6A00] hover:text-white"
                  >
                    Innovation
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="my-10 h-px bg-black/10 md:my-12" />
        </div>
      </div>
    </section>
  );
}