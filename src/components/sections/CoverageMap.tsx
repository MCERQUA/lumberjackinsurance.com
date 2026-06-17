"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";

const LOGGING_STATES = [
  { name: "Oregon", note: "SAIF + specialty markets", region: "PNW" },
  { name: "Washington", note: "State fund (L&I) coordinated", region: "PNW" },
  { name: "Idaho", note: "Direct appointments", region: "Mountain" },
  { name: "Montana", note: "Cable & mechanized logging", region: "Mountain" },
  { name: "Maine", note: "Yarder & sawmill programs", region: "Northeast" },
  { name: "West Virginia", note: "Appalachian cable logging", region: "Appalachia" },
  { name: "Alabama", note: "Southern yellow pine logging", region: "South" },
  { name: "Georgia", note: "Southern pulpwood & saw log", region: "South" },
  { name: "Mississippi", note: "Pine belt timber harvesters", region: "South" },
  { name: "Arkansas", note: "Ozark + southern operations", region: "South" },
  { name: "North Carolina", note: "Hardwood & pine logging", region: "South" },
  { name: "Tennessee", note: "Cumberland plateau operations", region: "South" },
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
                src="/images/forest-tract.jpg"
                alt="Managed forest tract with pine rows and a logging access road"
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
              Where we write
            </span>
            <h2 className="mt-3 h-section">
              Logging insurance in{" "}
              <span className="text-primary">all 50 states</span>.
            </h2>
            <p className="mt-4 lead">
              Timber grows everywhere — and so do we. From the cable-logging slopes of
              Oregon and Appalachia to the southern yellow-pine belt and the Maine
              woods, Contractors Choice Agency writes logging and forestry coverage
              nationwide, including the four monopolistic state funds.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {LOGGING_STATES.map((s) => (
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
              Don&apos;t see your state? We&apos;re licensed in{" "}
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
