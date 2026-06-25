"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { FadeIn } from "@/components/animations/FadeIn";

const HERO_WORDS = ["Community.", "Teamwork.", "Trust."];

const NEWS = [
  { title: "Spring Storms: Is Your Home Protected?", date: "May 1, 2025" },
  { title: "5 Insurance Tips for New Homeowners", date: "April 15, 2025" },
  { title: "We Support Local Youth Sports!", date: "April 1, 2025" },
];

export function FinalCTA() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="grid md:grid-cols-5">
      {/* Left column — Community / Sports */}
      <div
        className="md:col-span-3 p-12 min-h-[320px] flex flex-col justify-center"
        style={{
          backgroundImage: "linear-gradient(135deg, #0F1C38 0%, #1B2A4A 50%, #0F1C38 100%)",
          backgroundSize: "200% 200%",
          animation: prefersReduced ? undefined : "lj-bg-pan 16s ease-in-out infinite",
        }}
      >
        <h2 className="font-display font-extrabold uppercase text-4xl md:text-5xl text-[#E8B923] leading-tight">
          {HERO_WORDS.map((word, i) => (
            <motion.span
              key={word}
              className="block"
              initial={prefersReduced ? false : { opacity: 0, x: -30 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h2>
        <FadeIn delay={0.5}>
          <p className="mt-4 max-w-sm font-body text-base text-white/80">
            We believe in hard work, doing things right, and standing by our customers—just
            like a team.
          </p>
          <Link
            href="/about"
            className="lj-btn-shine mt-6 inline-flex w-fit border-2 border-white text-white px-6 py-3 font-display font-bold uppercase text-sm transition hover:bg-white hover:text-[#0F1C38] hover:scale-105"
          >
            See How We Give Back
          </Link>
        </FadeIn>
      </div>

      {/* Right column — Latest News */}
      <div className="md:col-span-2 p-8 bg-[#F4F4F4]">
        <FadeIn>
          <h3 className="font-display font-extrabold uppercase text-xl text-[#0F1C38] tracking-wider">
            Latest News
          </h3>
        </FadeIn>
        <motion.div
          className="w-12 h-1 bg-[#E8B923] mt-2 mb-4 origin-left"
          initial={prefersReduced ? false : { scaleX: 0 }}
          whileInView={prefersReduced ? undefined : { scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        />

        <ul className="space-y-5">
          {NEWS.map((item, i) => (
            <motion.li
              key={item.title}
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/blog"
                className="inline-block font-display font-semibold text-[#0F1C38] transition-all hover:translate-x-1 hover:text-[#E8B923]"
              >
                {item.title}
              </Link>
              <p className="mt-1 font-display text-xs uppercase text-[#E8B923]">{item.date}</p>
            </motion.li>
          ))}
        </ul>

        <Link
          href="/blog"
          className="lj-btn-shine mt-6 inline-block border-2 border-[#0F1C38] text-[#0F1C38] px-6 py-3 font-display font-bold uppercase text-sm transition hover:bg-[#0F1C38] hover:text-white hover:scale-105"
        >
          View All Articles
        </Link>
      </div>
    </section>
  );
}
