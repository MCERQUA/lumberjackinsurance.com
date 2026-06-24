"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";

interface CTABandProps {
  title?: string;
  description?: string;
}

export function CTABand({
  title = "Have a coverage question?",
  description = "Get a straight answer — and a real quote — from a local Flagstaff agent in about 15 minutes.",
}: CTABandProps) {
  return (
    <section className="relative bg-warm-radial-sand py-16 md:py-20">
      <div className="container-wide">
        <FadeIn>
          <div className="rounded-[2rem] bg-forest-gradient p-8 md:p-12 text-center shadow-lift relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(circle at 80% 0%, rgba(154,52,18,0.25) 0%, transparent 55%)",
              }}
              aria-hidden
            />
            <div className="relative">
              <h2 className="font-display font-semibold text-white text-2xl md:text-3xl leading-tight">
                {title}
              </h2>
              <p className="mt-3 text-white/85 max-w-xl mx-auto">{description}</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/quote" className="btn-accent">
                  Get a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="btn-secondary !bg-white/10 !text-white !border-white/25 hover:!bg-white/20"
                >
                  <Phone className="h-5 w-5" />
                  {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
