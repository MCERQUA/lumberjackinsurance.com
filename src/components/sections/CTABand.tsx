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
    <section className="bg-[#F4F4F4] py-16 md:py-20">
      <div className="container-wide">
        <FadeIn>
          <div className="rounded-sm bg-[#0F1C38] p-8 md:p-12 text-center shadow-lift">
            <h2 className="font-display font-800 uppercase text-white text-2xl md:text-4xl leading-tight">
              {title}
            </h2>
            <p className="mt-3 font-body text-white/80 max-w-xl mx-auto">{description}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/quote" className="btn-primary">
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a href={SITE.phoneHref} className="btn-secondary">
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
