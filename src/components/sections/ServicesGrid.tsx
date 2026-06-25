"use client";

import Link from "next/link";
import { Home, Car, Building2, KeyRound, ShieldCheck } from "lucide-react";
import { SERVICES } from "@/lib/site";

const ICONS = { Home, Car, Building2, KeyRound, ShieldCheck } as const;

export function ServicesGrid() {
  return (
    <section id="services" className="bg-white">
      {/* Header */}
      <div className="container-wide py-12 text-center">
        <span className="font-display text-sm font-bold uppercase tracking-wider text-[#E8B923]">
          Our Coverage Lines
        </span>
        <h2 className="mt-3 font-display text-4xl font-extrabold uppercase text-[#0F1C38]">
          What We Cover
        </h2>
        <p className="mt-4 font-body text-base text-gray-500">
          Complete protection for Flagstaff &amp; Northern Arizona families and businesses.
        </p>
      </div>

      {/* Cards */}
      <div className="container-wide pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS] ?? ShieldCheck;
            return (
              <div
                key={service.slug}
                className="border border-gray-200 p-6 hover:border-[#E8B923] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#E8B923]/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-[#E8B923]" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold uppercase text-[#0F1C38]">
                  {service.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-gray-500">
                  {service.short}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-4 inline-block font-display text-sm font-bold text-[#E8B923] hover:underline"
                >
                  LEARN MORE →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
