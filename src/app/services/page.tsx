import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { SERVICES, SITE } from "@/lib/site";
import {
  ShieldCheck, Home, Car, Building2, KeyRound,
  ArrowRight,
} from "lucide-react";

const ICONS = {
  ShieldCheck, Home, Car, Building2, KeyRound,
} as const;

export const metadata: Metadata = {
  title: "Insurance Coverage for Flagstaff & Northern Arizona",
  description:
    "Five coverage lines for Flagstaff & Northern Arizona — homeowners, auto, business, landlord, and renters insurance from a local independent agency that shops multiple carriers.",
  alternates: { canonical: `${SITE.url}/services` },
  openGraph: {
    title: "Insurance Coverage Lines | Lumberjack Insurance",
    description:
      "Homeowners, auto, business, landlord, and renters insurance for Flagstaff & Northern Arizona — local agents who shop multiple carriers for you.",
    url: `${SITE.url}/services`,
  },
};

export default function ServicesPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main>
        <section className="relative bg-topo pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="container-tight text-center">
            <FadeIn>
              <span className="pill-accent">Coverage lines</span>
              <h1 className="mt-5 font-display font-semibold text-foreground text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Hometown insurance,{" "}
                <span className="bg-gradient-to-r from-primary via-forest-500 to-accent bg-clip-text text-transparent">
                  line by line
                </span>
              </h1>
              <p className="mt-5 lead max-w-2xl mx-auto">
                Five coverage lines for Flagstaff &amp; Northern Arizona — home, auto, business,
                landlord, and renters. Local agents who shop multiple carriers for you.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="bg-background py-12 md:py-16">
          <div className="container-wide">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map((service, i) => {
                const Icon = ICONS[service.icon as keyof typeof ICONS] ?? ShieldCheck;
                const isFeatured = service.slug === "homeowners-insurance";
                return (
                  <FadeIn key={service.slug} delay={(i % 3) * 0.05}>
                    <Link
                      href={`/services/${service.slug}`}
                      className={`group relative block h-full p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 ${
                        isFeatured
                          ? "bg-forest-gradient text-white border-transparent shadow-lift"
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
                      <h2 className={`font-display font-semibold text-lg leading-tight mb-1.5 ${isFeatured ? "text-white" : "text-foreground"}`}>
                        {service.title}
                      </h2>
                      <p className={`text-sm leading-relaxed ${isFeatured ? "text-white/85" : "text-muted-foreground"}`}>
                        {service.description}
                      </p>
                      <span
                        className={`mt-4 inline-flex items-center gap-1 text-sm font-body font-bold transition-all group-hover:gap-2 ${
                          isFeatured ? "text-white" : "text-accent"
                        }`}
                      >
                        Explore coverage <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        <CTABand
          title="Not sure which coverage you need?"
          description="Most Flagstaff households and businesses carry two or three of these together. We'll review what you have, find the gaps, and shop carriers to fit your budget."
        />
      </main>
      <Footer />
    </>
  );
}
