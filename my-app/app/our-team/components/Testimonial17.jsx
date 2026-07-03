"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial17() {
  return (
    <section
      id="relume"
      className="bg-black px-[5%] py-16 text-white md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-2xl text-center md:mb-18 lg:mb-20">
          <div className="mb-6 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-sm font-semibold text-orange-400">
            Testimonials
          </div>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            What they say
          </h2>
          <p className="text-white/70 md:text-md">
            Words from those who know our work
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group flex min-h-[420px] w-full flex-col justify-between rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-orange-500/[0.06] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(255,115,0,0.12)]">
            <div>
              <div className="mb-8 h-1 w-16 rounded-full bg-orange-500" />
              <div className="mb-6 flex text-orange-500">
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
              </div>
              <blockquote className="text-xl leading-relaxed text-white/85 md:text-2xl">
                "These students build machines that compete with the best in the world, and they do it with hunger and precision."
              </blockquote>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-2xl font-semibold text-white">Dr. Rizwan Riaz</p>
              <p className="mt-2 text-lg text-white/60">
                Team advisor, GIK Institute
              </p>
            </div>
          </div>

          <div className="group flex min-h-[420px] w-full flex-col justify-between rounded-[2rem] border border-orange-500/40 bg-gradient-to-br from-white/[0.03] to-orange-500/[0.08] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(255,115,0,0.18)]">
            <div>
              <div className="mb-8 h-1 w-16 rounded-full bg-orange-500" />
              <div className="mb-6 flex text-orange-500">
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
              </div>
              <blockquote className="text-xl leading-relaxed text-white/85 md:text-2xl">
                "These students build drones that fly as well as anything we
                see in international competitions."
              </blockquote>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-2xl font-semibold text-white">
                Samir Khan
              </p>
              <p className="mt-2 text-lg text-white/60">Competition Judge, IMechE 2024</p>
            </div>
          </div>

          <div className="group flex min-h-[420px] w-full flex-col justify-between rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-orange-500/[0.06] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(255,115,0,0.12)]">
            <div>
              <div className="mb-8 h-1 w-16 rounded-full bg-orange-500" />
              <div className="mb-6 flex text-orange-500">
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
              </div>
              <blockquote className="text-xl leading-relaxed text-white/85 md:text-2xl">
                "Team Foxtrot taught me that engineering is not just about blueprints, it's about pushing limits and learning from failure."
              </blockquote>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-2xl font-semibold text-white">
                Ans Qasim
              </p>
              <p className="mt-2 text-lg text-white/60">Team Captain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}