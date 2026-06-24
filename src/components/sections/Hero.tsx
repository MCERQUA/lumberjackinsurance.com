"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Phone, ShieldCheck, Star, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";

export function Hero() {
  const prefersReduced = useReducedMotion();
  const container = prefersReduced
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { staggerChildren: 0.08, delayChildren: 0.05 },
      };
  const item = prefersReduced
    ? {}
    : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

  return (
    <section className="relative overflow-hidden bg-topo pt-32 pb-20 md:pt-40 md:pb-28">
      {/* bucksaw / pine-divider at top */}
      <div className="absolute top-24 inset-x-0 h-px pine-divider opacity-70" aria-hidden />
      {/* pine silhouette motif */}
      <PineSilhouette className="absolute right-6 bottom-0 h-64 w-auto text-primary/8 hidden lg:block" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy column */}
          <motion.div className="lg:col-span-6" {...container}>
            <motion.div {...item}>
              <span className="pill-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Home · Auto · Business · Landlord · Renters
              </span>
            </motion.div>

            <motion.h1
              {...item}
              className="mt-5 font-display font-semibold text-foreground text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl leading-[1.05] tracking-tight"
            >
              Flagstaff&apos;s friendly{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary via-forest-500 to-accent bg-clip-text text-transparent">
                  hometown insurance
                </span>
                <svg
                  className="absolute -bottom-1 left-0 w-full h-3 text-accent/50"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path d="M2 8 Q 50 2, 100 7 T 198 6" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              .
            </motion.h1>

            <motion.p {...item} className="mt-6 lead max-w-xl">
              We&apos;re a <strong className="text-foreground">local, independent</strong>{" "}
              insurance agency protecting Flagstaff &amp; Northern Arizona families and
              businesses — home, auto, business, landlord, and renters coverage from a
              real local agent who knows the high country. We shop multiple carriers so
              you get the right coverage at the right price, with no runaround.
            </motion.p>

            <motion.div {...item} className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/quote" className="btn-primary text-base">
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a href={SITE.phoneHref} className="btn-secondary text-base">
                <Phone className="h-5 w-5" />
                {SITE.phone}
              </a>
            </motion.div>

            {/* Trust micro-bar */}
            <motion.div {...item} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Local Flagstaff agent
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Real human, real fast
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Home · Auto · Business · more
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 text-accent fill-accent" />
                Independent — we shop for you
              </span>
            </motion.div>
          </motion.div>

          {/* Visual column */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={prefersReduced ? {} : { opacity: 0, scale: 0.96 }}
            animate={prefersReduced ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative">
              {/* main hero image — arched (timber-cabin arch) */}
              <div className="relative overflow-hidden rounded-t-[14rem] rounded-b-3xl shadow-lift border-4 border-white">
                <img
                  src="/images/mascot.png"
                  alt="Jack the Lumberjack — Lumberjack Insurance's friendly Flagstaff mascot, with the San Francisco Peaks behind him"
                  className="w-full h-[420px] md:h-[520px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent" />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
                animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded-2xl shadow-lift border border-border p-5 max-w-[15rem]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-forest-gradient flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground text-2xl leading-none">
                      Flagstaff, AZ
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 leading-snug">
                      Your hometown independent insurance agency
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating NPN badge */}
              <motion.div
                initial={prefersReduced ? {} : { opacity: 0, y: -10 }}
                animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.6 }}
                className="absolute -top-4 -right-3 md:-right-6 bg-primary text-white rounded-2xl shadow-lift px-4 py-3"
              >
                <p className="font-display font-semibold text-sm">NPN #{SITE.npn}</p>
                <p className="text-[0.7rem] text-white/80 mt-0.5">Licensed Arizona agent</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PineSilhouette({ className }: { className?: string }) {
  // three stacked pine treetops, simple motif
  return (
    <svg className={className} viewBox="0 0 200 220" fill="currentColor" aria-hidden>
      <path d="M100 10 L70 70 L86 70 L60 120 L82 120 L50 180 L150 180 L118 120 L140 120 L114 70 L130 70 Z" />
      <rect x="92" y="180" width="16" height="36" rx="2" />
    </svg>
  );
}
