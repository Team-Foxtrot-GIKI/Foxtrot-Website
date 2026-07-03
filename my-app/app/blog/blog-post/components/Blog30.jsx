"use client";

import { Button } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useMemo, useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const posts = [
  {
    id: 1,
    category: "Updates",
    date: "14 Nov 2024",
    readTime: "6 min read",
    title: "How we built our latest drone",
    description:
      "A look inside the design choices, testing, and engineering decisions that shaped our newest platform.",
    image: "/latest-drone.jpeg",
    href: "/blog/blog-post",
  },
  {
    id: 2,
    category: "Updates",
    date: "10 Nov 2024",
    readTime: "6 min read",
    title: "Testing autonomy in the field",
    description:
      "Our systems engineer shares key lessons from flight trials, control tuning, and mission reliability.",
    image: "/testing_autonomy.jpeg",
    href: "/blog/blog-post",
  },
  {
    id: 3,
    category: "Competition",
    date: "05 Nov 2024",
    readTime: "8 min read",
    title: "Taking flight at the national and international stage",
    description:
      "How our latest platform proved itself under pressure and reflected the progress of the whole team.",
    image: "/stage.jpeg",
    href: "/blog/blog-post",
  },
];

const filters = [
  { value: "all", label: "All Posts" },
  { value: "Updates", label: "Updates" },
  { value: "Competition", label: "Competition" },
];

export function Blog30() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPosts = useMemo(() => {
    if (activeFilter === "all") return posts;
    return posts.filter((post) => post.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="relume" className="bg-white px-[5%] py-16 md:py-20 lg:py-24">
      <div className="container max-w-6xl">
        <div className="mb-10 flex flex-wrap gap-3 md:mb-12">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-[#FF6A00] bg-[#FF6A00] text-white shadow-sm"
                    : "border-[#FF6A00]/20 bg-[#FF6A00]/10 text-[#FF6A00] hover:border-[#FF6A00] hover:bg-[#FF6A00] hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="grid grid-cols-1 gap-6 md:gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.10)]"
                >
                  <a
                    href={post.href}
                    className="grid grid-cols-1 items-stretch md:grid-cols-[1.05fr_0.95fr]"
                  >
                    <div className="order-2 flex flex-col justify-center p-5 md:order-1 md:p-7 lg:p-8">
                      <p className="mb-3 inline-flex w-fit rounded-full border border-[#FF6A00]/20 bg-[#FF6A00]/10 px-4 py-1 text-sm font-semibold text-[#FF6A00]">
                        {post.category}
                      </p>

                      <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-black/50">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h2 className="mb-3 max-w-2xl text-3xl font-bold leading-tight text-black md:text-4xl">
                        {post.title}
                      </h2>

                      <p className="max-w-xl text-base leading-7 text-black/70">
                        {post.description}
                      </p>

                      <Button
                        variant="link"
                        size="link"
                        iconRight={<RxChevronRight />}
                        className="mt-5 inline-flex w-fit items-center gap-x-2 rounded-full px-0 text-base font-semibold text-black transition-colors duration-300 hover:text-[#FF6A00]"
                      >
                        Read more
                      </Button>
                    </div>

                    <div className="order-1 p-4 md:order-2 md:p-5">
                      <div className="h-full overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-[#f8f8f8] to-[#ececec]">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-[260px] w-full object-cover transition-transform duration-500 hover:scale-[1.03] md:h-full md:min-h-[300px]"
                        />
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}