  // "use client";

  // import React from "react";
  // import { BiSolidStar } from "react-icons/bi";

  // export function Testimonial17() {
  //   return (
  //     <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
  //       <div className="container">
  //         <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
  //           <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
  //             What they say
  //           </h2>
  //           <p className="md:text-md">Words from those who know our work</p>
  //         </div>
  //         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
  //           <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
  //             <div className="rb-5 mb-5 md:mb-6">
  //               <div className="mb-5 flex md:mb-6">
  //                 <BiSolidStar className="mr-1 size-6" />
  //                 <BiSolidStar className="mr-1 size-6" />
  //                 <BiSolidStar className="mr-1 size-6" />
  //                 <BiSolidStar className="mr-1 size-6" />
  //                 <BiSolidStar className="mr-1 size-6" />
  //               </div>
  //               <blockquote className="md:text-md">
  //                 "Team Foxtrot demonstrates the kind of precision and dedication
  //                 that separates winners from the rest."
  //               </blockquote>
  //             </div>
  //             <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
  //               <img
  //                 src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
  //                 alt="Testimonial avatar"
  //                 className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
  //               />
  //               <div>
  //                 <p className="font-semibold">Dr. Rizwan Riaz</p>
  //                 <p>Team advisor, GIK Institute</p>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
  //             <div className="rb-5 mb-5 md:mb-6">
  //               <div className="mb-5 flex md:mb-6">
  //                 <BiSolidStar className="mr-1 size-6" />
  //                 <BiSolidStar className="mr-1 size-6" />
  //                 <BiSolidStar className="mr-1 size-6" />
  //                 <BiSolidStar className="mr-1 size-6" />
  //                 <BiSolidStar className="mr-1 size-6" />
  //               </div>
  //               <blockquote className="md:text-md">
  //                 "These students build drones that fly as well as anything we see
  //                 in international competitions."
  //               </blockquote>
  //             </div>
  //             <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
  //               <img
  //                 src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
  //                 alt="Testimonial avatar"
  //                 className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
  //               />
  //               <div>
  //                 <p className="font-semibold">Competition judge</p>
  //                 <p>IMechE 2024</p>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
  //             <div className="rb-5 mb-5 md:mb-6">
  //               <div className="mb-5 flex md:mb-6">
  //                 <BiSolidStar className="mr-1 size-6" />
  //                 <BiSolidStar className="mr-1 size-6" />
  //                 <BiSolidStar className="mr-1 size-6" />
  //                 <BiSolidStar className="mr-1 size-6" />
  //                 <BiSolidStar className="mr-1 size-6" />
  //               </div>
  //               <blockquote className="md:text-md">
  //                 "Being part of Team Foxtrot taught me that engineering is about
  //                 solving real problems under pressure."
  //               </blockquote>
  //             </div>
  //             <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
  //               <img
  //                 src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
  //                 alt="Testimonial avatar"
  //                 className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
  //               />
  //               <div>
  //                 <p className="font-semibold">Abdullah Tariq</p>
  //                 <p>Team Manager</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }


  "use client";

  import React from "react";
  import { BiSolidStar } from "react-icons/bi";

  const testimonials = [
    {
      quote:
        '"Team Foxtrot demonstrates the kind of precision and dedication that separates winners from the rest."',
      name: "Dr. Rizwan Riaz",
      role: "Team advisor, GIK Institute",
    },
    {
      quote:
        '"These students build drones that fly as well as anything we see in international competitions."',
      name: "Competition judge",
      role: "IMechE 2024",
    },
    {
      quote:
        '"Being part of Team Foxtrot taught me that engineering is about solving real problems under pressure."',
      name: "Abdullah Tariq",
      role: "Team Manager",
    },
  ];

  export function Testimonial17() {
    return (
      <section
        id="relume"
        className="bg-[#050505] px-[5%] py-16 text-white md:py-24 lg:py-28"
      >
        <div className="container">
          <div className="mx-auto mb-12 w-full max-w-2xl text-center md:mb-18 lg:mb-20">
            <p className="mb-4 inline-flex items-center rounded-full border border-[#FF6A00]/20 bg-[#FF6A00]/10 px-4 py-1 text-sm font-medium text-[#FFB37A]">
  Testimonials
</p>

            <h2 className="mb-5 text-5xl font-bold tracking-tight md:mb-6 md:text-7xl lg:text-8xl">
              What they say
            </h2>

            <p className="text-base text-white/70 md:text-lg">
              Words from those who know our work
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#FF6A00]/40 hover:shadow-[0_20px_60px_rgba(255,106,0,0.12)] md:p-9"
              >
                <div className="mb-6 h-1 w-16 rounded-full bg-[#FF6A00]" />

                <div className="mb-6 flex text-[#FF6A00]">
                  <BiSolidStar className="mr-1 size-5" />
                  <BiSolidStar className="mr-1 size-5" />
                  <BiSolidStar className="mr-1 size-5" />
                  <BiSolidStar className="mr-1 size-5" />
                  <BiSolidStar className="mr-1 size-5" />
                </div>

                <blockquote className="min-h-[140px] text-lg leading-8 text-white/90">
                  {item.quote}
                </blockquote>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-lg font-semibold text-white">{item.name}</p>
                  <p className="mt-1 text-sm text-white/65">{item.role}</p>
                </div>

                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#FF6A00]/10 blur-3xl transition duration-300 group-hover:bg-[#FF6A00]/20" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }