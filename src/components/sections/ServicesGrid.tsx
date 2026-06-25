"use client";

import Link from "next/link";
import { Home, Car, Building2, KeyRound, ShieldCheck } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { FadeIn } from "@/components/animations/FadeIn";

const ICONS = { Home, Car, Building2, KeyRound, ShieldCheck } as const;

export function ServicesGrid() {
  return (
    <section id="services" className="bg-white">
      {/* Header */}
      <div className="container-wide py-12 text-center">
        <FadeIn>
          <span className="font-display text-sm font-bold uppercase tracking-wider text-[#E8B923]">
            Our Coverage Lines
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase text-[#0F1C38]">
            What We Cover
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-4 font-body text-base text-gray-500">
            Complete protection for Flagstaff &amp; Northern Arizona families and businesses.
          </p>
        </FadeIn>
      </div>

      {/* Cards */}
      <div className="container-wide pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS] ?? ShieldCheck;
            return (
              <FadeIn key={service.slug} delay={i * 0.1} direction="up" className="h-full">
                <div className="group relative h-full overflow-hidden border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#E8B923] hover:shadow-xl">
                  {/* gold accent bar grows on hover */}
                  <span className="absolute left-0 top-0 h-1 w-0 bg-[#E8B923] transition-all duration-300 group-hover:w-full" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8B923]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E8B923]">
                    <Icon className="h-6 w-6 text-[#E8B923] transition-colors duration-300 group-hover:text-[#0F1C38]" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold uppercase text-[#0F1C38]">
                    {service.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-gray-500">
                    {service.short}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-1 font-display text-sm font-bold text-[#E8B923] hover:underline"
                  >
                    LEARN MORE{" "}
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
