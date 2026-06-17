"use client";

import Link from "next/link";
import {
  ShieldCheck, HardHat, Truck, Wrench, Building2, FlaskConical, Trees,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/site";
import { FadeIn } from "@/components/animations/FadeIn";

const ICONS = {
  ShieldCheck, HardHat, Truck, Wrench, Building2, FlaskConical, Trees,
} as const;

export function ServicesGrid() {
  return (
    <section id="services" className="relative bg-background py-20 md:py-28">
      <div className="container-wide">
        <FadeIn className="max-w-3xl mb-12 md:mb-16">
          <span className="eyebrow">
            <span className="h-px w-8 bg-accent" />
            What we insure
          </span>
          <h2 className="mt-3 h-section">
            Seven lines of coverage, written specifically for{" "}
            <span className="text-primary">logging &amp; forestry operations</span>.
          </h2>
          <p className="mt-4 lead">
            A generalist policy leaves chainsaw claims, cable snap-back, log-truck
            cargo, and hydraulic spills uncovered. We build programs that close
            those gaps — for loggers, timber harvesters, sawmills, and tree-care crews.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS] ?? ShieldCheck;
            const isFeatured = service.featured;
            return (
              <FadeIn key={service.slug} delay={(i % 3) * 0.05}>
                <Link
                  href={`/services/${service.slug}`}
                  className={`group relative block h-full p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 ${
                    isFeatured
                      ? "bg-forest-gradient text-white border-transparent shadow-lift lg:row-span-1"
                      : "bg-white text-foreground border-border shadow-card hover:shadow-lift"
                  }`}
                >
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl mb-4 ${
                      isFeatured ? "bg-white/15 text-white" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>
                  <h3 className={`font-display font-semibold text-lg leading-tight mb-1.5 ${isFeatured ? "text-white" : "text-foreground"}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isFeatured ? "text-white/85" : "text-muted-foreground"}`}>
                    {service.description}
                  </p>
                  <span
                    className={`mt-4 inline-flex items-center gap-1 text-sm font-body font-bold transition-all group-hover:gap-2 ${
                      isFeatured ? "text-white" : "text-accent"
                    }`}
                  >
                    Explore coverage
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  {isFeatured && (
                    <span className="absolute top-5 right-5 inline-flex items-center gap-1 pill !bg-white/15 !text-white !border-white/25">
                      Flagship
                    </span>
                  )}
                </Link>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mt-12 text-center">
          <p className="text-muted-foreground">
            Not sure what you need?{" "}
            <Link href="/quote" className="font-body font-bold text-accent hover:underline">
              Get a coverage review →
            </Link>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
