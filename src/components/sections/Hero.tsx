"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";

// Tiny floating gold embers behind the mascot — subtle, varied delays/positions.
const EMBERS = [
  { top: "12%", left: "8%", size: 6, delay: "0s" },
  { top: "24%", left: "44%", size: 4, delay: "1.2s" },
  { top: "62%", left: "14%", size: 5, delay: "2.1s" },
  { top: "78%", left: "38%", size: 4, delay: "0.6s" },
  { top: "18%", left: "78%", size: 5, delay: "1.8s" },
  { top: "52%", left: "88%", size: 6, delay: "0.3s" },
  { top: "84%", left: "70%", size: 4, delay: "2.6s" },
  { top: "40%", left: "60%", size: 4, delay: "3.1s" },
];

export function Hero() {
  const prefersReduced = useReducedMotion();

  const container = prefersReduced
    ? {}
    : {
        initial: "hidden",
        animate: "show",
        variants: {
          hidden: {},
          show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
        },
      };

  const itemUp = prefersReduced
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, y: 28 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
        },
      };

  const itemLogo = prefersReduced
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, scale: 0.85 },
          show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
        },
      };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 60% 40%, #1B3A6B 0%, #0F1C38 60%)",
        backgroundSize: "160% 160%",
        animation: prefersReduced ? undefined : "lj-bg-pan 12s ease-in-out infinite",
      }}
    >
      {/* floating gold embers */}
      {!prefersReduced &&
        EMBERS.map((e, i) => (
          <span
            key={i}
            aria-hidden
            className="lj-float pointer-events-none absolute rounded-full bg-[#E8B923]/40 blur-[1px]"
            style={{
              top: e.top,
              left: e.left,
              height: e.size,
              width: e.size,
              animationDelay: e.delay,
            }}
          />
        ))}

      <div className="container-wide py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[520px]">
          {/* Left — text */}
          <motion.div {...container}>
            <motion.img
              {...itemLogo}
              src="/images/lumberjack-logo.png"
              alt="Lumberjack Insurance"
              className="h-24 w-auto mb-6"
            />

            <h1 className="font-display font-bold text-5xl lg:text-7xl uppercase leading-none">
              <motion.span {...itemUp} className="block text-white">
                Strong Protection.
              </motion.span>
              <motion.span {...itemUp} className="block lj-shine-text">
                Solid Coverage.
              </motion.span>
            </h1>

            <motion.p {...itemUp} className="mt-4 max-w-md text-lg text-white/70">
              LumberJack Insurance delivers reliable coverage and hometown
              service you can count on.
            </motion.p>

            <motion.div {...itemUp} className="mt-8 flex flex-col sm:flex-row gap-3">
              <motion.div
                whileHover={prefersReduced ? undefined : { scale: 1.04 }}
                whileTap={prefersReduced ? undefined : { scale: 0.97 }}
              >
                <Link href="/quote" className="btn-primary">
                  Get a Quote
                </Link>
              </motion.div>
              <motion.div
                whileHover={prefersReduced ? undefined : { scale: 1.04 }}
                whileTap={prefersReduced ? undefined : { scale: 0.97 }}
              >
                <Link href="/services" className="btn-secondary">
                  Our Coverages
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right — mascot */}
          <div className="relative flex justify-center lg:justify-end">
            {/* glowing spotlight ellipse behind the mascot */}
            <div
              aria-hidden
              className="lj-glow pointer-events-none absolute right-[8%] top-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-[#E8B923]/20 blur-3xl"
            />
            <motion.img
              src="/images/lumberjack-clipped.png"
              alt="Lumberjack mascot"
              className="lj-float relative w-full max-w-md drop-shadow-2xl lg:-mt-10"
              style={{ filter: "drop-shadow(0 24px 48px rgba(232,185,35,0.25))" }}
              initial={prefersReduced ? undefined : { opacity: 0, x: 60 }}
              animate={prefersReduced ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>

        {/* bouncing scroll cue */}
        <div className="mt-10 flex flex-col items-center gap-1 text-[#E8B923]">
          <span className="font-display font-700 text-[0.7rem] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ChevronDown className="lj-bounce h-5 w-5" aria-hidden />
        </div>
      </div>
    </section>
  );
}
