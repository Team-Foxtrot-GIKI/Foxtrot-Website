"use client";

import {
  Button,
  Checkbox,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact6() {
  return (
    <section id="relume" className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-16 lg:gap-x-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="flex h-full flex-col justify-between"
        >
          <div>
            <div className="mb-8 md:mb-10">
              <p className="mb-4 inline-flex rounded-full border border-[#FF6A00]/20 bg-[#FF6A00]/10 px-4 py-1 text-sm font-semibold text-[#FF6A00]">
  Connect
</p>
              <h2 className="mb-5 text-5xl font-bold tracking-[-0.03em] text-black md:mb-6 md:text-7xl lg:text-8xl">
                Send a message
              </h2>
              <p className="text-lg text-black/75">
                Tell us what&apos;s on your mind
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 py-2">
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <BiEnvelope className="size-6 flex-none text-black" />
                <p className="text-lg text-black underline underline-offset-4">
                  teamfoxtrot.gik@gmail.com
                </p>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.16, duration: 0.4 }}
              >
                <BiPhone className="size-6 flex-none text-black" />
                <p className="text-lg text-black underline underline-offset-4">
                  +92-332-8272455
                </p>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.22, duration: 0.4 }}
              >
                <BiMap className="size-6 flex-none text-black" />
                <p className="text-lg text-black">
                  GIK Institute, Topi, Swabi, KP, Pakistan
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28, duration: 0.45 }}
            className="mt-12 hidden rounded-[2rem] border border-black/10 bg-gradient-to-br from-[#fafafa] to-[#f2f2f2] p-8 shadow-[0_16px_40px_rgba(0,0,0,0.05)] md:block"
          >
            <h3 className="mb-3 text-2xl font-bold text-black">
              We usually respond quickly
            </h3>
            <p className="mb-6 text-base leading-7 text-black/70">
              Whether you&apos;re a student, organizer, media contact, or
              collaborator, send us the details and we&apos;ll point you to the
              right person.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
                <p className="text-sm font-semibold text-[#FF6A00]">
                  Team inquiries
                </p>
                <p className="mt-1 text-black/70">
                  Recruitment, collaboration, project involvement
                </p>
              </div>
              <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
                <p className="text-sm font-semibold text-[#FF6A00]">
                  Media & events
                </p>
                <p className="mt-1 text-black/70">
                  Press, demonstrations, public outreach
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.form
          className="grid max-w-none rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_18px_45px_rgba(0,0,0,0.05)] md:p-8 lg:p-10"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid w-full items-center">
              <Label htmlFor="firstName" className="mb-3 text-[1.05rem] text-black">
                First name
              </Label>
              <Input
                type="text"
                id="firstName"
                className="h-12 rounded-none border-x-0 border-t-0 border-b border-black/20 bg-transparent px-0 text-black shadow-none transition-all duration-300 focus:border-black focus:ring-0"
              />
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="lastName" className="mb-3 text-[1.05rem] text-black">
                Last name
              </Label>
              <Input
                type="text"
                id="lastName"
                className="h-12 rounded-none border-x-0 border-t-0 border-b border-black/20 bg-transparent px-0 text-black shadow-none transition-all duration-300 focus:border-black focus:ring-0"
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-3 text-[1.05rem] text-black">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                className="h-12 rounded-none border-x-0 border-t-0 border-b border-black/20 bg-transparent px-0 text-black shadow-none transition-all duration-300 focus:border-black focus:ring-0"
              />
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="phone" className="mb-3 text-[1.05rem] text-black">
                Phone number
              </Label>
              <Input
                type="text"
                id="phone"
                className="h-12 rounded-none border-x-0 border-t-0 border-b border-black/20 bg-transparent px-0 text-black shadow-none transition-all duration-300 focus:border-black focus:ring-0"
              />
            </div>
          </div>

          <div className="mt-6 grid w-full items-center">
            <Label className="mb-3 text-[1.05rem] text-black">
              What is this about
            </Label>
            <Select>
              <SelectTrigger className="h-12 rounded-none border-x-0 border-t-0 border-b border-black/20 bg-transparent px-0 text-black shadow-none focus:ring-0">
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="team">Team inquiry</SelectItem>
                <SelectItem value="competition">Competition inquiry</SelectItem>
                <SelectItem value="media">Media inquiry</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid w-full items-center pt-8">
            <Label className="mb-5 text-[1.05rem] text-black">
              How would you describe yourself
            </Label>

            <RadioGroup className="grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="team-member" id="team-member" />
                <Label htmlFor="team-member" className="cursor-pointer text-lg text-black">
                  Team member
                </Label>
              </div>

              <div className="flex items-center space-x-3">
                <RadioGroupItem value="student-interested" id="student-interested" />
                <Label
                  htmlFor="student-interested"
                  className="cursor-pointer text-lg text-black"
                >
                  Student interested
                </Label>
              </div>

              <div className="flex items-center space-x-3">
                <RadioGroupItem value="faculty-advisor" id="faculty-advisor" />
                <Label htmlFor="faculty-advisor" className="cursor-pointer text-lg text-black">
                  Faculty advisor
                </Label>
              </div>

              <div className="flex items-center space-x-3">
                <RadioGroupItem
                  value="competition-organizer"
                  id="competition-organizer"
                />
                <Label
                  htmlFor="competition-organizer"
                  className="cursor-pointer text-lg text-black"
                >
                  Competition organizer
                </Label>
              </div>

              <div className="flex items-center space-x-3">
                <RadioGroupItem value="media-press" id="media-press" />
                <Label htmlFor="media-press" className="cursor-pointer text-lg text-black">
                  Media or press
                </Label>
              </div>

              <div className="flex items-center space-x-3">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other" className="cursor-pointer text-lg text-black">
                  Other
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="mt-8 grid w-full items-center">
            <Label htmlFor="message" className="mb-3 text-[1.05rem] text-black">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Write your message here"
              className="min-h-[9rem] rounded-none border-x-0 border-t-0 border-b border-black/20 bg-transparent px-0 text-black shadow-none transition-all duration-300 placeholder:text-black/45 focus:border-black focus:ring-0"
            />
          </div>

          <div className="mb-2 mt-6 flex items-center space-x-3 text-sm">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="cursor-pointer text-base text-black">
              I agree to the terms
            </Label>
          </div>

          <div className="mt-4">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button
                title="Send"
                className="min-w-[84px] rounded-xl border-0 bg-[#FF6A00] px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-[#e55f00] hover:shadow-md"
              >
                Send
              </Button>
            </motion.div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}