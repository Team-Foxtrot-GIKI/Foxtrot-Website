"use client";

import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Footer4() {
  return (
    <footer id="relume" className="bg-black px-[5%] py-12 text-white md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.28fr_1fr_0.28fr] lg:gap-y-4 lg:pb-20">
          <a href="#" className="justify-self-center lg:justify-self-start">
            <img
              src="/foxtrot_logo.webp"
              alt="Foxtrot logo"
              className="inline-block h-auto w-[220px] md:w-[280px] lg:w-[340px]"
            />
          </a>

          <ul className="grid grid-flow-row grid-cols-1 items-center justify-center gap-6 text-center md:grid-flow-col md:grid-cols-[max-content] md:gap-8 lg:gap-10">
            <li className="font-semibold text-white">
              <a href="#" className="transition-opacity duration-300 hover:opacity-75">
                Our Projects
              </a>
            </li>
            <li className="font-semibold text-white">
              <a href="#" className="transition-opacity duration-300 hover:opacity-75">
                About Us
              </a>
            </li>
            <li className="font-semibold text-white">
              <a href="#" className="transition-opacity duration-300 hover:opacity-75">
                Our Team
              </a>
            </li>
            <li className="font-semibold text-white">
              <a href="#" className="transition-opacity duration-300 hover:opacity-75">
                Contact Us
              </a>
            </li>
            <li className="font-semibold text-white">
              <a href="#" className="transition-opacity duration-300 hover:opacity-75">
                Blog
              </a>
            </li>
          </ul>

          <div className="flex items-center justify-center gap-x-4 lg:justify-self-end">
            <a href="#" className="transition-opacity duration-300 hover:opacity-75">
              <BiLogoFacebookCircle className="size-7 text-white" />
            </a>
            <a href="#" className="transition-opacity duration-300 hover:opacity-75">
              <BiLogoInstagram className="size-7 text-white" />
            </a>
            <a href="#" className="transition-opacity duration-300 hover:opacity-75">
              <FaXTwitter className="size-6 text-white" />
            </a>
            <a href="#" className="transition-opacity duration-300 hover:opacity-75">
              <BiLogoLinkedinSquare className="size-7 text-white" />
            </a>
            <a href="#" className="transition-opacity duration-300 hover:opacity-75">
              <BiLogoYoutube className="size-7 text-white" />
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-white/20" />

        <div className="flex flex-col items-center justify-center gap-4 pb-4 pt-6 text-sm text-white/90 md:flex-row md:gap-x-6 md:pb-0 md:pt-8">
          <p>© 2024 Team Foxtrot GIK</p>

          <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <li>
              <a href="#" className="underline underline-offset-2 transition-opacity duration-300 hover:opacity-75">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="underline underline-offset-2 transition-opacity duration-300 hover:opacity-75">
                Terms of service
              </a>
            </li>
            <li>
              <a href="#" className="underline underline-offset-2 transition-opacity duration-300 hover:opacity-75">
                Cookie settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}