"use client";

import { motion, useReducedMotion } from "motion/react";
import { Counter } from "@/components/animations/Counter";
import { FadeIn } from "@/components/animations/FadeIn";

export function Stats() {
  const prefersReduced = useReducedMotion();

  const stats = [
    { value: <Counter target={20} suffix="+" />, label: "Years of Experience" },
    { value: <Counter target={5} />, label: "Coverage Lines" },
    { value: "AZ", label: "Licensed & Local" },
    { value: <Counter target={1} />, label: "Local Agent, All Lines" },
  ];

  return (
    <section
      className="py-14"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #0F1C38 0%, #1B2A4A 45%, #0F1C38 100%)",
        backgroundSize: "200% 200%",
        animation: prefersReduced ? undefined : "lj-bg-pan 16s ease-in-out infinite",
      }}
    >
      <div className="container-wide">
        <FadeIn className="mb-12 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-wide text-white">
            Built On A Solid{" "}
            <span className="lj-shine-text">Foundation</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((s, i) => (
            <FadeIn
              key={s.label}
              delay={i * 0.1}
              className={
                i > 0
                  ? "md:border-l md:border-[#E8B923]/15"
                  : undefined
              }
            >
              <div>
                <p className="font-display text-6xl md:text-7xl font-extrabold leading-none text-[#E8B923] drop-shadow-[0_0_22px_rgba(232,185,35,0.45)]">
                  {s.value}
                </p>
                <motion.div
                  className="mx-auto mt-4 h-[3px] w-12 origin-center rounded-full bg-[#E8B923]"
                  initial={prefersReduced ? false : { scaleX: 0 }}
                  whileInView={prefersReduced ? undefined : { scaleX: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
                <p className="mt-4 font-display text-sm font-semibold uppercase tracking-wider text-white/70">
                  {s.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
