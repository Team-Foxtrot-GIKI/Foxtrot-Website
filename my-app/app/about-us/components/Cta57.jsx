"use client";

import { Button } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import React from "react";

export function Cta57() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto w-full max-w-3xl text-center">
          <h1>
            <motion.span
              initial={{ x: "-50%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="block text-5xl font-bold leading-tight text-black md:text-7xl lg:text-8xl"
            >
              Ready to take flight
            </motion.span>
          </h1>

          <h1>
            <motion.span
              initial={{ x: "50%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="mb-5 block text-5xl font-bold leading-tight text-black md:mb-6 md:text-7xl lg:text-8xl"
            >
              Join the mission
            </motion.span>
          </h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            className="mx-auto max-w-2xl text-black md:text-md"
          >
            Discover what we've built, meet the minds behind it, or become part
            of the mission.
          </motion.p>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
            className="mt-6 flex items-center justify-center gap-x-3 md:mt-8"
          >
            <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.97 }}>
  <Button
    title="Projects"
    className="rounded-xl border-0 bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-none transition-all duration-300 hover:bg-orange-600 hover:shadow-md"
  >
    Projects
  </Button>
</motion.div>

            <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                title="Team"
                variant="secondary"
                className="rounded-xl border-0 bg-black/5 px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-black hover:text-white"
              >
                Team
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}