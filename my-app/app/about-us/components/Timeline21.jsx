// "use client";

// import { Button } from "@relume_io/relume-ui";
// import React, { Fragment } from "react";
// import { RxChevronRight } from "react-icons/rx";

// export function Timeline21() {
//   return (
//     <section
//       id="relume"
//       className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
//     >
//       <div className="container">
//         <div className="mb-12 md:mb-18 lg:mb-20">
//           <div className="w-full max-w-lg">
//             <p className="mb-3 font-semibold md:mb-4">Milestones</p>
//             <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
//               Five years of flight and achievement
//             </h2>
//             <p className="md:text-md">
//               From our first prototype to international recognition, every year
//               has brought new challenges and victories. This is the story of how
//               we got here.
//             </p>
//             <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
//               <Button title="Explore" variant="secondary">
//                 Explore
//               </Button>
//               <Button
//                 title="Arrow"
//                 variant="link"
//                 size="link"
//                 iconRight={<RxChevronRight />}
//               >
//                 Arrow
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="relative grid auto-cols-fr grid-flow-row grid-cols-1 items-center justify-items-center md:grid-flow-col md:grid-cols-[max-content_1fr] md:justify-items-stretch">
//           <div className="relative hidden md:grid md:grid-cols-1 md:items-end md:gap-4">
//             <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
//               <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
//             </div>
//           </div>
//           <div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
//             <Fragment>
//               <div className="mb-8 overflow-hidden md:mb-0 md:mr-10">
//                 <img
//                   src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
//                   alt="Relume placeholder image 1"
//                   className="aspect-square w-full object-cover"
//                 />
//               </div>
//               <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
//                 <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
//                 <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
//               </div>
//               <div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none">
//                 <h3 className="mb-2 text-xl font-bold md:text-2xl">2019</h3>
//                 <p>
//                   Project Eurus took flight at IMechE, our debut in
//                   international competition.
//                 </p>
//               </div>
//             </Fragment>
//           </div>
//           <div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
//             <Fragment>
//               <div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none md:self-end">
//                 <h3 className="mb-2 text-xl font-bold md:text-2xl">2020</h3>
//                 <p>
//                   Project StingRay brought humanitarian focus with modular
//                   design for real-world impact.
//                 </p>
//               </div>
//               <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
//                 <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
//                 <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
//               </div>
//               <div className="col-end-2 row-end-2 mb-8 self-start overflow-hidden md:col-end-auto md:row-end-auto md:mb-0 md:mr-10">
//                 <img
//                   src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
//                   alt="Relume placeholder image 2"
//                   className="aspect-square w-full object-cover"
//                 />
//               </div>
//             </Fragment>
//           </div>
//           <div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
//             <Fragment>
//               <div className="mb-8 overflow-hidden md:mb-0 md:mr-10">
//                 <img
//                   src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
//                   alt="Relume placeholder image 3"
//                   className="aspect-square w-full object-cover"
//                 />
//               </div>
//               <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
//                 <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
//                 <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
//               </div>
//               <div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none">
//                 <h3 className="mb-2 text-xl font-bold md:text-2xl">2021</h3>
//                 <p>
//                   Project Swallow demonstrated autonomous twin-tractor
//                   capability at IMechE competition.
//                 </p>
//               </div>
//             </Fragment>
//           </div>
//           <div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
//             <Fragment>
//               <div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none md:self-end">
//                 <h3 className="mb-2 text-xl font-bold md:text-2xl">2022</h3>
//                 <p>
//                   Project BarQ claimed first place in Asia and sixth globally at
//                   IMechE.
//                 </p>
//               </div>
//               <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
//                 <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
//                 <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
//               </div>
//               <div className="col-end-2 row-end-2 mb-8 self-start overflow-hidden md:col-end-auto md:row-end-auto md:mb-0 md:mr-10">
//                 <img
//                   src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
//                   alt="Relume placeholder image 4"
//                   className="aspect-square w-full object-cover"
//                 />
//               </div>
//             </Fragment>
//           </div>
//           <div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
//             <Fragment>
//               <div className="mb-8 overflow-hidden md:mb-0 md:mr-10">
//                 <img
//                   src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
//                   alt="Relume placeholder image 5"
//                   className="aspect-square w-full object-cover"
//                 />
//               </div>
//               <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
//                 <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
//                 <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full hidden md:block" />
//               </div>
//               <div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none">
//                 <h3 className="mb-2 text-xl font-bold md:text-2xl">2024</h3>
//                 <p>
//                   Project Cardinal won first place and airworthiness award at
//                   IMechE with advanced autonomy.
//                 </p>
//               </div>
//             </Fragment>
//           </div>
//           <div className="absolute right-0 z-0 h-1 w-16 bg-gradient-to-r from-transparent to-white" />
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { Button } from "@relume_io/relume-ui";
import React, { Fragment } from "react";
import { RxChevronRight } from "react-icons/rx";

export function Timeline21() {
  return (
    <section
      id="relume"
      className="overflow-hidden bg-white px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-4 inline-flex rounded-full border border-[#FF6A00]/20 bg-[#FF6A00]/10 px-4 py-1 text-sm font-semibold text-[#FF6A00]">
              Milestones
            </p>

            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Five years of flight and achievement
            </h2>

            <p className="md:text-md">
              From our first prototype to international recognition, every year
              has brought new challenges and victories. This is the story of how
              we got here.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                title="Explore"
                variant="secondary"
                className="rounded-full border border-[#FF6A00] px-5 py-2.5 text-black transition-all duration-300 hover:bg-[#FF6A00] hover:text-white"
              >
                Explore
              </Button>

              <Button
                title="Arrow"
                variant="link"
                size="link"
                iconRight={
                  <RxChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
                }
                className="group text-black transition-colors duration-300 hover:text-[#FF6A00]"
              >
                Projects
              </Button>
            </div>
          </div>
        </div>

        <div className="relative grid auto-cols-fr grid-flow-row grid-cols-1 items-center justify-items-center md:grid-flow-col md:grid-cols-[max-content_1fr] md:justify-items-stretch">
          <div className="relative hidden md:grid md:grid-cols-1 md:items-end md:gap-4">
            <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
              <div className="h-full w-[3px] bg-[#FF6A00] md:h-[3px] md:w-full" />
            </div>
          </div>

          <div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
            <Fragment>
              <div className="mb-8 md:mb-0 md:mr-10">
                <img
                  src="/Eurus-UAS2019.png"
                  alt="Project Eurus 2019"
                  className="aspect-square w-full object-contain transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
              <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-[#FF6A00] shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-[#FF6A00] md:h-[3px] md:w-full" />
              </div>
              <div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">2019</h3>
                <p>
                  Project Eurus took flight at IMechE, our debut in
                  international competition.
                </p>
              </div>
            </Fragment>
          </div>

          <div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
            <Fragment>
              <div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none md:self-end">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">2020</h3>
                <p>
                  Project StingRay brought humanitarian focus with modular
                  design for real-world impact.
                </p>
              </div>
              <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-[#FF6A00] shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-[#FF6A00] md:h-[3px] md:w-full" />
              </div>
              <div className="col-end-2 row-end-2 mb-8 self-start md:col-end-auto md:row-end-auto md:mb-0 md:mr-10">
                <img
                  src="/Stingray-UAS2020.png"
                  alt="Project StingRay 2020"
                  className="aspect-square w-full object-contain transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </Fragment>
          </div>

          <div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
            <Fragment>
              <div className="mb-8 md:mb-0 md:mr-10">
                <img
                  src="/Swallow-UAS2021.png"
                  alt="Project Swallow 2021"
                  className="aspect-square w-full object-contain transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
              <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-[#FF6A00] shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-[#FF6A00] md:h-[3px] md:w-full" />
              </div>
              <div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">2021</h3>
                <p>
                  Project Swallow demonstrated autonomous twin-tractor
                  capability at IMechE competition.
                </p>
              </div>
            </Fragment>
          </div>

          <div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
            <Fragment>
              <div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none md:self-end">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">2022</h3>
                <p>
                  Project BarQ claimed first place in Asia and sixth globally at
                  IMechE.
                </p>
              </div>
              <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-[#FF6A00] shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-[#FF6A00] md:h-[3px] md:w-full" />
              </div>
              <div className="col-end-2 row-end-2 mb-8 self-start md:col-end-auto md:row-end-auto md:mb-0 md:mr-10">
                <img
                  src="/Barq-UAS2022.png"
                  alt="Project BarQ 2022"
                  className="aspect-square w-full object-contain transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </Fragment>
          </div>

          <div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
            <Fragment>
              <div className="mb-8 md:mb-0 md:mr-10">
                <img
                  src="/Sylph-UAS_PK2023.png"
                  alt="Project Sylph 2023"
                  className="aspect-square w-full object-contain transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
              <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-[#FF6A00] shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-[#FF6A00] md:h-[3px] md:w-full" />
              </div>
              <div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">2023</h3>
                <p>
                  Project Sylph continued our momentum with strong performance
                  and further refinement in autonomous flight systems.
                </p>
              </div>
            </Fragment>
          </div>

          <div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
            <Fragment>
              <div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none md:self-end">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">2024</h3>
                <p>
                  Project Cardinal won first place and airworthiness award at
                  IMechE with advanced autonomy.
                </p>
              </div>
              <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-[#FF6A00] shadow-[0_0_0_8px_white]" />
                <div className="hidden h-full w-[3px] bg-[#FF6A00] md:block md:h-[3px] md:w-full" />
              </div>
              <div className="col-end-2 row-end-2 mb-8 self-start md:col-end-auto md:row-end-auto md:mb-0 md:mr-10">
                <img
                  src="/Project_Cardinal.png"
                  alt="Project Cardinal 2024"
                  className="aspect-square w-full object-contain transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </Fragment>
          </div>

          <div className="absolute right-0 z-0 h-1 w-16 bg-gradient-to-r from-transparent to-white" />
        </div>
      </div>
    </section>
  );
}