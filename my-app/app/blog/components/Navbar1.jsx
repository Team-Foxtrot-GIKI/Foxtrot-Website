"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navLinks = [
  { label: "Our Projects", href: "/our-projects" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Team", href: "/our-team" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

function NavLink({ href, label, onClick }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative block py-3 text-md text-white lg:px-4 lg:py-2 lg:text-base"
    >
      <span
        className={`transition-colors duration-300 ${
          isActive ? "text-[#FF6A00]" : "text-white/90 group-hover:text-[#FF6A00]"
        }`}
      >
        {label}
      </span>

      <span
        className={`absolute bottom-0 left-4 right-4 h-0.5 origin-left bg-[#FF6A00] transition-transform duration-300 ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}

export function Navbar1() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <section
      id="relume"
      className="w-full bg-[#050505] text-white lg:px-[5%]"
      style={{ borderBottom: "2px solid #FF6A00" }}
    >
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <Link href="/home" className="flex items-center gap-3">
            <img src="/fox.webp" alt="Logo image" className="h-16 w-auto" />
            <span className="text-lg font-semibold tracking-wide text-white md:text-xl">
              Team Foxtrot
            </span>
          </Link>

          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-white"
              animate={isMobileMenuOpen ? { y: 8, rotate: -45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="my-[3px] h-0.5 bg-white"
              animate={
                isMobileMenuOpen
                  ? { width: 0, opacity: 0 }
                  : { width: "1.5rem", opacity: 1 }
              }
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-white"
              animate={isMobileMenuOpen ? { y: -8, rotate: 45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>

        <div className="hidden items-center lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}

          <div className="ml-4 flex items-center">
            <Link
              href="/home"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#FF6A00] px-5 py-2 text-sm font-medium text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#e85f00] hover:shadow-[0_12px_30px_rgba(255,106,0,0.28)] active:scale-[0.98]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative z-10">Home</span>
            </Link>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={
            isMobileMenuOpen
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-[#050505] px-[5%] lg:hidden"
        >
          <div className="pb-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                onClick={() => setIsMobileMenuOpen(false)}
              />
            ))}

            <div className="mt-6 flex flex-col items-center gap-4">
              <Link
                href="/home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-[#FF6A00] px-5 py-2 text-sm font-medium text-white transition-all duration-300 ease-out hover:bg-[#e85f00]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative z-10">Home</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}