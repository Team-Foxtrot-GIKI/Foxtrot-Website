  // "use client";

  // import { Button } from "@relume_io/relume-ui";
  // import React from "react";
  // import { RxChevronRight } from "react-icons/rx";

  // export function Layout520() {
  //   return (
  //     <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
  //       <div className="container">
  //         <div className="mb-12 md:mb-18 lg:mb-20">
  //           <div className="mx-auto max-w-lg text-center">
  //             <p className="mb-3 font-semibold md:mb-4">What we do</p>
  //             <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
  //               Built by students, tested in competition
  //             </h2>
  //             <p className="md:text-md">We fly where it matters most</p>
  //           </div>
  //         </div>
  //         <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">

  //           {/* Card 1 - Student-led */}
  //           <div className="relative rounded-2xl overflow-hidden p-6 md:p-8">
  //             <div className="absolute inset-0 z-0">
  //               <div className="absolute inset-0 bg-black/120" />
  //               <img
  //                 src="/student-home.jpeg"
  //                 className="size-full object-cover"
  //                 alt="Student-led drone engineering"
  //               />
  //             </div>
  //             <div className="relative z-10">
  //               <h3 className="mb-3 text-2xl font-bold text-white drop-shadow-lg md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
  //                 Student-led drone engineering
  //               </h3>
  //               <p className="text-white font-medium drop-shadow-lg">
  //                 Our team comprises talented engineering students dedicated to
  //                 designing and building advanced UAVs
  //               </p>
  //               <div className="mt-5 flex items-center md:mt-6">
  //                 <Button variant="link-alt" size="link" iconRight={<RxChevronRight />}>
  //                   Discover
  //                 </Button>
  //               </div>
  //             </div>
  //           </div>

  //           {/* Card 2 - National and international */}
  //           <div className="relative rounded-2xl overflow-hidden p-6 md:p-8">
  //             <div className="absolute inset-0 z-0">
  //               <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.85)" }} />
  //               <img
  //                 src="/SUAS_Competition_2.jpg"
  //                 className="size-full object-cover"
  //                 alt="National and international competition"
  //               />
  //             </div>
  //             <div className="relative z-10">
  //               <h3 className="mb-3 text-2xl font-bold text-white drop-shadow-lg md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
  //                 National and international competition
  //               </h3>
  //               <p className="text-white font-medium drop-shadow-lg">
  //                 We compete at the highest levels, testing our designs against
  //                 the best teams worldwide
  //               </p>
  //               <div className="mt-5 flex items-center md:mt-6">
  //                 <Button variant="link-alt" size="link" iconRight={<RxChevronRight />}>
  //                   Explore
  //                 </Button>
  //               </div>
  //             </div>
  //           </div>

  //           {/* Card 3 - Innovative UAV */}
  //           <div className="relative rounded-2xl overflow-hidden p-6 md:p-8">
  //             <div className="absolute inset-0 z-0">
  //               <div className="absolute inset-0 bg-black/200" />
  //               <img
  //                 src="/V-ToL.jpeg"
  //                 className="size-full object-cover"
  //                 alt="Innovative UAV design and technology"
  //               />
  //             </div>
  //             <div className="relative z-10">
  //               <h3 className="mb-3 text-2xl font-bold text-white drop-shadow-lg md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
  //                 Innovative UAV design and technology
  //               </h3>
  //               <p className="text-white font-medium drop-shadow-lg">
  //                 From concept to flight, we develop cutting-edge solutions in
  //                 autonomous systems and aerodynamics
  //               </p>
  //               <div className="mt-5 flex items-center md:mt-6">
  //                 <Button variant="link-alt" size="link" iconRight={<RxChevronRight />}>
  //                   Learn
  //                 </Button>
  //               </div>
  //             </div>
  //           </div>

  //         </div>
  //       </div>
  //     </section>
  //   );
  // }

"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout520() {
  return (
    <section
      id="relume"
      className="relative overflow-hidden bg-[#f5f5f3] px-[5%] py-12 md:py-16 lg:py-20"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/section-bg-light.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/78" />
      </div>

      <div className="container relative z-10">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">What we do</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Built by students, tested in competition
            </h2>
            <p className="text-black/70 md:text-md">We fly where it matters most</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)] md:p-8">
            <div className="absolute inset-0 z-0">
              <img
                src="/student-home.jpeg"
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                alt="Student-led drone engineering"
              />
              <div className="absolute inset-0 bg-black/55 transition-all duration-500 group-hover:bg-black/65" />
            </div>

            <div className="relative z-10">
              <h3 className="mb-3 text-2xl font-bold text-white md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Student-led drone engineering
              </h3>
              <p className="text-white/95 font-medium">
                Our team comprises talented engineering students dedicated to
                designing and building advanced UAVs
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  variant="link-alt"
                  size="link"
                  iconRight={
                    <RxChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  }
                  className="text-white no-underline"
                >
                  Discover
                </Button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)] md:p-8">
            <div className="absolute inset-0 z-0">
              <img
                src="/SUAS_Competition_2.jpg"
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                alt="National and international competition"
              />
              <div className="absolute inset-0 bg-black/55 transition-all duration-500 group-hover:bg-black/65" />
            </div>

            <div className="relative z-10">
              <h3 className="mb-3 text-2xl font-bold text-white md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                National and international competition
              </h3>
              <p className="text-white/95 font-medium">
                We compete at the highest levels, testing our designs against
                the best teams worldwide
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  variant="link-alt"
                  size="link"
                  iconRight={
                    <RxChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  }
                  className="text-white no-underline"
                >
                  Explore
                </Button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)] md:p-8">
            <div className="absolute inset-0 z-0">
              <img
                src="/V-ToL.jpeg"
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                alt="Innovative UAV design and technology"
              />
              <div className="absolute inset-0 bg-black/55 transition-all duration-500 group-hover:bg-black/65" />
            </div>

            <div className="relative z-10">
              <h3 className="mb-3 text-2xl font-bold text-white md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Innovative UAV design and technology
              </h3>
              <p className="text-white/95 font-medium">
                From concept to flight, we develop cutting-edge solutions in
                autonomous systems and aerodynamics
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  variant="link-alt"
                  size="link"
                  iconRight={
                    <RxChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  }
                  className="text-white no-underline"
                >
                  Learn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}