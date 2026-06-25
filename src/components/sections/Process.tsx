"use client";

import { motion, useReducedMotion } from "motion/react";
import { FadeIn } from "@/components/animations/FadeIn";

const STEPS = [
  {
    num: "01",
    title: "CALL OR CLICK",
    description: "Get in touch in minutes. We shop multiple carriers for you.",
  },
  {
    num: "02",
    title: "GET YOUR QUOTE",
    description: "Compare options with no pressure. We explain every detail clearly.",
  },
  {
    num: "03",
    title: "YOU'RE COVERED",
    description: "Fast binding, local support, and real people when you need to file a claim.",
  },
];

export function Process() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="process" className="bg-[#F4F4F4] py-20">
      <div className="container-wide">
        <FadeIn>
          <h2 className="text-center font-display text-4xl font-extrabold uppercase text-[#0F1C38]">
            Getting Covered Is Easy
          </h2>
        </FadeIn>

        <div className="relative mt-12">
          {/* connecting line that draws in on scroll — desktop only */}
          <motion.div
            aria-hidden
            className="absolute left-[16.66%] right-[16.66%] top-8 z-0 hidden h-[3px] origin-left rounded-full bg-[#E8B923]/60 md:block"
            initial={prefersReduced ? false : { scaleX: 0 }}
            whileInView={prefersReduced ? undefined : { scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="relative z-10 grid gap-10 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.15} direction="up">
                <div className="text-center transition-transform duration-300 hover:-translate-y-1.5">
                  <motion.div
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E8B923] shadow-lg shadow-[#E8B923]/30"
                    initial={prefersReduced ? false : { scale: 0, opacity: 0 }}
                    whileInView={prefersReduced ? undefined : { scale: 1, opacity: 1 }}
                    whileHover={prefersReduced ? undefined : { scale: 1.1, rotate: 6 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ type: "spring", stiffness: 260, damping: 15, delay: i * 0.15 + 0.2 }}
                  >
                    <span className="font-display text-2xl font-extrabold text-[#0F1C38]">
                      {step.num}
                    </span>
                  </motion.div>
                  <h3 className="mt-5 font-display text-lg font-bold uppercase text-[#0F1C38]">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-gray-500">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
