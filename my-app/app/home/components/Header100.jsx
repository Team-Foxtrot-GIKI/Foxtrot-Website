// "use client";

// import Link from "next/link";
// import React from "react";

// export function Header100() {
//   return (
//     <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
//       <div className="container relative rounded-2xl overflow-hidden">
//         <div className="relative z-10 flex min-h-[32rem] flex-col items-center justify-center p-8 text-center md:min-h-[40rem] md:p-16">
//           <div className="w-full max-w-lg">
//             <h1 className="mb-5 text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
//               Engineering drones that compete globally
//             </h1>
//             <p className="text-white/80 md:text-md">
//               We design, build, and fly advanced unmanned aircraft at Pakistan's
//               premier engineering institute. Join us as we compete globally and
//               push the boundaries of autonomous flight.
//             </p>
//           </div>
//           <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
//             <Link
//               href="/our-projects"
//               className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-white transition-colors"
//               style={{ backgroundColor: "#FF6A00" }}
//             >
//               Explore
//             </Link>
//             <Link
//               href="/contact-us"
//               className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
//             >
//               Contact us
//             </Link>
//           </div>
//         </div>

//         {/* Video background */}
//         <div className="absolute inset-0 z-0">
//           <video
//             className="absolute inset-0 size-full object-cover"
//             autoPlay
//             loop
//             muted
//             playsInline
//           >
//             <source src="/home_page_video.mp4" type="video/mp4" />
//           </video>
//           <div className="absolute inset-0 bg-black/40" />
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import React from "react";

export function Header100() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f3] px-[5%] py-12 md:py-16 lg:py-20">
      {/* light background image + soft gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{ backgroundImage: "url('/hero-light-bg.png')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.80)_0%,rgba(245,245,243,0.72)_45%,rgba(238,238,235,0.88)_100%)]" />
        <div className="absolute left-[-8rem] top-[-8rem] h-[22rem] w-[22rem] rounded-full bg-white/80 blur-3xl" />
        <div className="absolute right-[-6rem] top-[10%] h-[20rem] w-[20rem] rounded-full bg-[#e9e9e4] blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="relative overflow-hidden rounded-[28px] bg-black shadow-[0_20px_80px_rgba(0,0,0,0.14)] ring-1 ring-black/5">
          <div className="relative z-10 flex min-h-[34rem] flex-col items-center justify-center px-6 py-16 text-center md:min-h-[42rem] md:px-12 lg:px-16">
            <div className="animate-[fadeUp_0.9s_ease-out] w-full max-w-5xl">
              <h1 className="mx-auto mb-6 max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl">
                Engineering drones that compete globally
              </h1>

              <p className="mx-auto max-w-4xl text-base leading-7 text-white/85 md:text-lg md:leading-8">
                We design, build, and fly advanced unmanned aircraft at
                Pakistan&apos;s premier engineering institute. Join us as we
                compete globally and push the boundaries of autonomous flight.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/our-projects"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#FF6A00] px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(255,106,0,0.30)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#e85f00] hover:shadow-[0_18px_40px_rgba(255,106,0,0.40)] active:translate-y-0 active:scale-[0.98]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative z-10">Explore</span>
                </Link>

                <Link
                  href="/contact-us"
                  className="group inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1a1a1a] shadow-[0_10px_24px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#f7f7f7] hover:shadow-[0_14px_32px_rgba(0,0,0,0.12)] active:translate-y-0 active:scale-[0.98]"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-[2px]">
                    Contact us
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* video background */}
          <div className="absolute inset-0 z-0">
            <video
              className="absolute inset-0 h-full w-full object-cover scale-[1.02]"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/home_page_video.mp4" type="video/mp4" />
            </video>

            {/* clean dark overlays only — orange glow removed */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.34)_45%,rgba(0,0,0,0.50)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.24)_0%,rgba(0,0,0,0.10)_35%,rgba(0,0,0,0.10)_65%,rgba(0,0,0,0.24)_100%)]" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}