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
        <section
          className="relative pt-32 pb-12 md:pt-40 md:pb-16"
          style={{ background: "radial-gradient(ellipse at 60% 30%, #1B3A6B 0%, #0F1C38 60%)" }}
        >
          <div className="container-tight text-center">
            <FadeIn>
              <span className="inline-block font-display font-700 uppercase tracking-widest text-sm text-[#E8B923]">Coverage Lines</span>
              <h1 className="mt-5 font-display font-800 uppercase text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Hometown Insurance,{" "}
                <span className="text-[#E8B923]">Line by Line</span>
              </h1>
              <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
                Five coverage lines for Flagstaff &amp; Northern Arizona — home, auto, business,
                landlord, and renters. Local agents who shop multiple carriers for you.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="bg-[#F4F4F4] py-12 md:py-16">
          <div className="container-wide">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map((service, i) => {
                const Icon = ICONS[service.icon as keyof typeof ICONS] ?? ShieldCheck;
                const isFeatured = service.slug === "homeowners-insurance";
                return (
                  <FadeIn key={service.slug} delay={(i % 3) * 0.05}>
                    <Link
                      href={`/services/${service.slug}`}
                      className={`group relative block h-full p-6 rounded-sm border transition-all duration-300 hover:-translate-y-1.5 ${
                        isFeatured
                          ? "bg-[#0F1C38] text-white border-transparent shadow-lift"
                          : "bg-white text-[#0F1C38] border-gray-200 hover:border-[#E8B923] shadow-card hover:shadow-lift"
                      }`}
                    >
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-full mb-4 ${
                          isFeatured ? "bg-white/15 text-[#E8B923]" : "bg-[#E8B923]/10 text-[#E8B923]"
                        }`}
                      >
                        <Icon className="h-6 w-6" strokeWidth={2.2} />
                      </div>
                      <h2 className={`font-display font-700 uppercase tracking-wide text-lg leading-tight mb-1.5 ${isFeatured ? "text-white" : "text-[#0F1C38]"}`}>
                        {service.title}
                      </h2>
                      <p className={`text-sm leading-relaxed ${isFeatured ? "text-white/85" : "text-[#6B7280]"}`}>
                        {service.description}
                      </p>
                      <span
                        className="mt-4 inline-flex items-center gap-1 text-sm font-display font-700 uppercase tracking-wider text-[#E8B923] transition-all group-hover:gap-2"
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
