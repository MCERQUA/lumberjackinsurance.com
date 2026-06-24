"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";

const SERVICE_AREAS = [
  { name: "Flagstaff", note: "Our hometown base", region: "Flagstaff metro" },
  { name: "Sedona", note: "Red rock country", region: "Verde Valley" },
  { name: "Williams", note: "Gateway to the Grand Canyon", region: "High Country" },
  { name: "Cottonwood", note: "Verde Valley", region: "Verde Valley" },
  { name: "Camp Verde", note: "Verde Valley", region: "Verde Valley" },
  { name: "Prescott", note: "Mile-high city", region: "Central Highlands" },
  { name: "Winslow", note: "Route 66", region: "Northern AZ" },
  { name: "Page", note: "Lake Powell country", region: "Northern AZ" },
  { name: "Munds Park", note: "Pines & cabins", region: "High Country" },
  { name: "Bellemont", note: "West of Flagstaff", region: "Flagstaff metro" },
  { name: "Doney Park", note: "East Flagstaff", region: "Flagstaff metro" },
  { name: "Kachina Village", note: "South Flagstaff", region: "Flagstaff metro" },
];

export function CoverageMap() {
  return (
    <section id="coverage" className="relative bg-background py-20 md:py-28">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image column */}
          <FadeIn direction="right" className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-t-[10rem] rounded-b-3xl overflow-hidden border-4 border-white shadow-lift">
              <img
                src="/images/flagstaff-peaks.png"
                alt="The San Francisco Peaks rising over the ponderosa pine forest near Flagstaff, Arizona"
                className="w-full h-[340px] md:h-[420px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
            </div>
          </FadeIn>

          {/* Copy column */}
          <FadeIn className="lg:col-span-7 order-1 lg:order-2">
            <span className="eyebrow">
              <span className="h-px w-8 bg-accent" />
              Where we serve
            </span>
            <h2 className="mt-3 h-section">
              Insurance for{" "}
              <span className="text-primary">Flagstaff & Northern Arizona</span>.
            </h2>
            <p className="mt-4 lead">
              We&apos;re your neighbors up in the high country. From the ponderosa pines
              around Flagstaff to the red rocks of Sedona and the Verde Valley, we help
              local families and businesses get covered — homes, cars, rentals, and shops
              across Northern Arizona.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {SERVICE_AREAS.map((s) => (
                <div
                  key={s.name}
                  className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-border"
                >
                  <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" strokeWidth={2.4} />
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm leading-tight">{s.name}</p>
                    <p className="text-xs text-muted-foreground leading-snug mt-0.5">{s.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              Not in Flagstaff proper? We cover communities across Northern Arizona —
              we&apos;re licensed in{" "}
              <span className="font-body font-bold text-foreground">{SITE.statesLicensed}</span>.
              {" "}
              <Link href="/coverage" className="font-body font-bold text-accent hover:underline">
                See the full coverage area <ArrowRight className="inline h-3.5 w-3.5" />
              </Link>
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
