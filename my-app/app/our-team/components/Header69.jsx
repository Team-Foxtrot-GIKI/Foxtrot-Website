"use client";

import React from "react";

export function Header69() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-lg text-center">
        <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
          Meet the team
        </h1>
        <p className="text-text-alternative md:text-md">
          The engineers and visionaries building Pakistan's most advanced drone
          systems
        </p>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/team-pic.jpeg"
            className="size-full object-cover object-[80%_70%]"
          alt="Team image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}