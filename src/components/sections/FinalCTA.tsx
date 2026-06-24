"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-forest-gradient py-20 md:py-28">
      {/* warm radial + pine silhouette accents */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(154,52,18,0.25) 0%, transparent 50%), radial-gradient(circle at 10% 90%, rgba(20,83,45,0.30) 0%, transparent 50%)",
        }}
        aria-hidden
      />
      <div className="absolute top-0 inset-x-0 h-px pine-divider" aria-hidden />

      <div className="container-wide relative">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <span className="pill !bg-white/10 !text-white !border-white/20">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-light animate-pulse" />
              15-minute quote · 2-hour claims
            </span>
            <h2 className="mt-5 font-display font-semibold text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-tight">
              Life in the high country is good.{" "}
              <span className="bg-gradient-to-r from-white via-forest-100 to-accent-light bg-clip-text text-transparent">
                Make sure you&apos;re covered.
              </span>
            </h2>
            <p className="mt-5 text-lg text-white/85 leading-relaxed">
              Get a real quote from a local Flagstaff agent — home, auto, business,
              landlord, and renters coverage, all in plain English. We&apos;ll shop it
              for you and have an answer fast, usually in about a day.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/quote" className="btn-accent text-base">
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={SITE.phoneHref}
                className="btn-secondary !bg-white/10 !text-white !border-white/25 hover:!bg-white/20 text-base"
              >
                <Phone className="h-5 w-5" />
                {SITE.phone}
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
