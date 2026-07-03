"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { RxChevronRight, RxArrowLeft, RxArrowRight } from "react-icons/rx";

const posts = [
  {
    category: "Competition",
    readTime: "5 min read",
    title: "Cardinal takes first at IMechE",
    description: "Our quadcopter earned top honors and the airworthiness award",
    image: "/cardinal_first_IMeche.jpeg",
    href: "/blog/blog-post",
  },
  {
    category: "Design",
    readTime: "6 min read",
    title: "Building Spectre's twin-tractor system",
    description: "How we engineered payload capacity into autonomous flight",
    image: "/spectre_twin.jpg",
    href: "/blog/blog-post",
  },
  {
    category: "Innovation",
    readTime: "5 min read",
    title: "Sylph's folding wings and energy recovery",
    description: "A quadcopter designed for efficiency and outreach recognition",
    image: "/SYLPH 1_folding2.jpeg",
    href: "/blog/blog-post",
    // imageClassName: "object-[center_50%]",
  },
  {
    category: "Engineering",
    readTime: "7 min read",
    title: "Altair and the V-tail approach",
    description: "Fixed-wing design lessons from reverse thrust and precision landing capability",
    image: "/Altair-SUAS2023.png",
    href: "/blog/blog-post",
  },
];

export function BlogPostsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, posts.length - cardsPerView);

  const goNext = () => {
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goPrev = () => {
    setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [maxIndex]);

  const visibleDots = useMemo(
    () => Array.from({ length: maxIndex + 1 }),
    [maxIndex]
  );

  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container overflow-hidden">
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-12">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-[#FF6A00]/20 bg-[#FF6A00]/10 px-4 py-1 text-sm font-semibold text-[#FF6A00]">
              Updates
            </p>
            <h2 className="mb-4 text-4xl font-bold text-black md:text-6xl">
              Recent posts from the hangar
            </h2>
            <p className="text-black/70 md:text-md">
              Explore what we've been working on and learning
            </p>
          </div>

          <Link
            href="/blog/blog-post"
            className="hidden rounded-full bg-[#FF6A00] px-5 py-2.5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e55f00] hover:shadow-md sm:inline-flex"
          >
            See all
          </Link>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${startIndex * (100 / cardsPerView)}%)` }}
          >
            {posts.map((post) => (
              <div
                key={post.title}
                className="w-full flex-shrink-0 px-3 md:w-1/2 xl:w-1/3"
              >
                <article className="h-full overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]">
                  <Link href={post.href} className="block">
                    <div className="m-4 overflow-hidden rounded-[1.25rem] bg-gradient-to-b from-[#f7f7f7] to-[#ececec]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </div>
                  </Link>

                  <div className="px-5 pb-6 pt-1">
                    <div className="mb-3 flex items-center gap-3 text-xs text-black/55">
                      <span className="font-semibold text-black">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="mb-2 text-[1.75rem] font-bold leading-tight text-black">
                      {post.title}
                    </h3>

                    <p className="mb-5 text-base leading-7 text-black/65">
                      {post.description}
                    </p>

                    <Link
                      href={post.href}
                      className="inline-flex items-center gap-2 text-base font-semibold text-black transition-colors duration-300 hover:text-[#FF6A00]"
                    >
                      Read more
                      <RxChevronRight className="text-lg" />
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between">
  <div className="flex items-center gap-2">
    {visibleDots.map((_, index) => (
      <button
        key={index}
        type="button"
        aria-label={`Go to slide ${index + 1}`}
        onClick={() => setStartIndex(index)}
        className={`transition-all duration-300 ${
          startIndex === index
            ? "h-2.5 w-8 rounded-full bg-[#FF6A00]"
            : "h-2.5 w-2.5 rounded-full bg-black/15 hover:bg-black/30"
        }`}
      />
    ))}
  </div>

  <div className="flex items-center gap-3">
    <button
      type="button"
      onClick={goPrev}
      aria-label="Previous posts"
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF6A00] hover:bg-[#FF6A00] hover:text-white hover:shadow-md"
    >
      <RxArrowLeft className="text-xl" />
    </button>

    <button
      type="button"
      onClick={goNext}
      aria-label="Next posts"
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF6A00] hover:bg-[#FF6A00] hover:text-white hover:shadow-md"
    >
      <RxArrowRight className="text-xl" />
    </button>
  </div>
</div>

        <div className="mt-8 sm:hidden">
          <Link
            href="/blog/blog-post"
            className="inline-flex rounded-full bg-[#FF6A00] px-5 py-2.5 text-white transition-all duration-300 hover:bg-[#e55f00]"
          >
            See all
          </Link>
        </div>
      </div>
    </section>
  );
}