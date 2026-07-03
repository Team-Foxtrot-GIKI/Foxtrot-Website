// "use client";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@relume_io/relume-ui";
// import clsx from "clsx";
// import React, { useEffect, useState } from "react";

// const droneImages = [
//   {
//     src: "/Project_Cardinal.png",
//     alt: "Project Cardinal drone",
//   },
//   {
//     src: "/spectre-suas2024.png",
//     alt: "Spectre SUAS 2024 drone",
//   },
//   {
//     src: "/sylph-uas_pk2023.png",
//     alt: "Sylph UAS PK 2023 drone",
//   },
//   {
//     src: "/altair-suas2023.png",
//     alt: "Altair SUAS 2023 drone",
//   },
//   {
//     src: "/barq-uas2022.png",
//     alt: "Barq UAS 2022 drone",
//   },
//   {
//     src: "/aviator-uas_pk2022.png",
//     alt: "Aviator UAS PK 2022 drone",
//   },
//   {
//     src: "/swallow-uas2021.png",
//     alt: "Swallow UAS 2021 drone",
//   },
//   {
//     src: "/stingray-uas2020.png",
//     alt: "Stingray UAS 2020 drone",
//   },
//   {
//     src: "/eurus-uas2019.png",
//     alt: "Eurus UAS 2019 drone",
//   },
// ];

// const useCarousel = () => {
//   const [api, setApi] = useState();
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     if (!api) return;

//     setCurrent(api.selectedScrollSnap() + 1);
//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap() + 1);
//     });
//   }, [api]);

//   const handleDotClick = (index) => () => {
//     if (api) {
//       api.scrollTo(index);
//     }
//   };

//   const dotClassName = (index) =>
//   clsx("relative mx-[3px] inline-block size-2 rounded-full", {
//     "bg-[#FF6A00]": current === index + 1,
//     "bg-neutral-darker/40": current !== index + 1,
//   });

//   return { api, setApi, handleDotClick, dotClassName };
// };

// export function Gallery19() {
//   const carouselState = useCarousel();

//   return (
//     <section id="relume">
//       <div className="relative overflow-hidden bg-[#f5f5f3] px-[5%] py-12 md:py-16 lg:py-20">
//         <div className="container">
//           <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
//             <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
//               Drones in flight
//             </h2>
//             <p className="md:text-md">
//               Built for competition, designed for excellence
//             </p>
//           </div>

//           <Carousel
//             setApi={carouselState.setApi}
//             opts={{ loop: true, align: "start" }}
//           >
//             <div className="relative">
//               <CarouselContent className="ml-0">
//                 {droneImages.map((image, index) => (
//                   <CarouselItem
//                     key={index}
//                     className="basis-1/2 px-3 md:basis-1/4 md:px-4"
//                   >
//                     <div className="w-full">
//                       <img
//                         src={image.src}
//                         alt={image.alt}
//                         className="aspect-square size-full object-cover"
//                       />
//                     </div>
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>

//               <CarouselPrevious className="hidden md:flex md:size-12 lg:size-14" />
//               <CarouselNext className="hidden md:flex md:size-12 lg:size-14" />
//             </div>

//             <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
//               {droneImages.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={carouselState.handleDotClick(index)}
//                   className={carouselState.dotClassName(index)}
//                 />
//               ))}
//             </div>
//           </Carousel>
//         </div>
//       </div>
//     </section>
//   );
// }  

"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

const droneImages = [
  {
    src: "/Project_Cardinal.png",
    alt: "Project Cardinal drone",
  },
  {
    src: "/spectre-suas2024.png",
    alt: "Spectre SUAS 2024 drone",
  },
  {
    src: "/sylph-uas_pk2023.png",
    alt: "Sylph UAS PK 2023 drone",
  },
  {
    src: "/altair-suas2023.png",
    alt: "Altair SUAS 2023 drone",
  },
  {
    src: "/barq-uas2022.png",
    alt: "Barq UAS 2022 drone",
  },
  {
    src: "/aviator-uas_pk2022.png",
    alt: "Aviator UAS PK 2022 drone",
  },
  {
    src: "/swallow-uas2021.png",
    alt: "Swallow UAS 2021 drone",
  },
  {
    src: "/stingray-uas2020.png",
    alt: "Stingray UAS 2020 drone",
  },
  {
    src: "/eurus-uas2019.png",
    alt: "Eurus UAS 2019 drone",
  },
];

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) =>
    clsx(
      "relative mx-[4px] inline-block size-2.5 rounded-full transition-all duration-300",
      {
        "bg-[#FF6A00] scale-110 shadow-[0_0_12px_rgba(255,106,0,0.45)]":
          current === index + 1,
        "bg-black/25 hover:bg-black/40": current !== index + 1,
      }
    );

  return { api, setApi, handleDotClick, dotClassName };
};

export function Gallery19() {
  const carouselState = useCarousel();

  return (
    <section id="relume">
      <div className="relative overflow-hidden bg-[#f5f5f3] px-[5%] py-12 md:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          {/* <div className="absolute left-[-8rem] top-[-6rem] h-[20rem] w-[20rem] rounded-full bg-white/80 blur-3xl" />
          <div className="absolute right-[-6rem] top-[10%] h-[18rem] w-[18rem] rounded-full bg-[#ffefe4] blur-3xl" />
          <div className="absolute bottom-[-8rem] left-1/2 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-white/60 blur-3xl" /> */}
        </div>

        <div className="container relative z-10">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <h2 className="rb-5 mb-5 text-5xl font-bold tracking-tight md:mb-6 md:text-7xl lg:text-8xl">
              Drones in flight
            </h2>
            <p className="text-black/70 md:text-md">
              Built for competition, designed for excellence
            </p>
          </div>

          <Carousel
            setApi={carouselState.setApi}
            opts={{ loop: true, align: "start" }}
          >
            <div className="relative">
              <CarouselContent className="ml-0">
                {droneImages.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 px-3 md:basis-1/4 md:px-4"
                  >
                    <div className="group relative w-full">
                      <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[28px] border border-black/5 bg-white/60 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.05)] transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] md:p-6">
                        <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.7)_0%,rgba(249,247,243,0.88)_100%)]" />

                        <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF6A00]/10 blur-3xl transition-all duration-500 group-hover:h-48 group-hover:w-48 group-hover:bg-[#FF6A00]/18" />

                        <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-2xl transition-all duration-500 group-hover:scale-110" />

                        <img
                          src={image.src}
                          alt={image.alt}
                          className="relative z-10 aspect-square size-full object-contain transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.06]"
                        />

                        <div className="pointer-events-none absolute inset-x-6 bottom-4 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="hidden md:flex md:size-14 lg:size-16 rounded-full border border-black/10 bg-white/80 text-black shadow-[0_10px_25px_rgba(0,0,0,0.10)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-[#FF6A00]/40 hover:bg-[#FF6A00] hover:text-white hover:shadow-[0_16px_36px_rgba(255,106,0,0.28)]" />
              <CarouselNext className="hidden md:flex md:size-14 lg:size-16 rounded-full border border-black/10 bg-white/80 text-black shadow-[0_10px_25px_rgba(0,0,0,0.10)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-[#FF6A00]/40 hover:bg-[#FF6A00] hover:text-white hover:shadow-[0_16px_36px_rgba(255,106,0,0.28)]" />
            </div>

            <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
              {droneImages.map((_, index) => (
                <button
                  key={index}
                  onClick={carouselState.handleDotClick(index)}
                  className={carouselState.dotClassName(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}