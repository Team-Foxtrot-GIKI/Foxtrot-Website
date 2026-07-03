"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact16() {
  return (
    <section id="relume" className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:mb-20 md:grid-cols-[1fr_.75fr] md:gap-x-20 md:gap-y-16">
          <div className="max-w-lg">
            <p className="mb-4 inline-flex rounded-full border border-[#FF6A00]/20 bg-[#FF6A00]/10 px-4 py-1 text-sm font-semibold text-[#FF6A00]">
              Reach
            </p>

            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Contact details
            </h2>

            <p className="md:text-md">
              Multiple ways to connect with Team Foxtrot for any inquiry.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-6 py-2">
              <div className="flex flex-row">
                <div className="mr-4">
                  <BiEnvelope className="size-6 text-black" />
                </div>
                <div>
                  <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                    Email
                  </h3>
                  <a
                    className="underline underline-offset-4 transition-colors duration-300 hover:text-[#FF6A00]"
                    href="mailto:teamfoxtrot.gik@gmail.com"
                  >
                    teamfoxtrot.gik@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-row">
                <div className="mr-4">
                  <BiPhone className="size-6 text-black" />
                </div>
                <div>
                  <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                    Phone
                  </h3>
                  <a
                    className="underline underline-offset-4 transition-colors duration-300 hover:text-[#FF6A00]"
                    href="tel:+923328272455"
                  >
                    +92-332-8272455
                  </a>
                </div>
              </div>

              <div className="flex flex-row">
                <div className="mr-4">
                  <BiMap className="size-6 text-black" />
                </div>
                <div>
                  <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                    Office
                  </h3>
                  <p>GIK Institute, Topi, Swabi, KP, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[1.5rem] border border-black/10 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
  <iframe
    title="Map showing GIK Institute, Topi, Swabi, KP, Pakistan"
    src="https://www.google.com/maps?q=GIK%20Institute%20Topi%20Swabi%20KP%20Pakistan&z=15&output=embed"
    className="h-[400px] w-full md:h-[516px]"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
      </div>
    </section>
  );
}