import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { SERVICES, SITE } from "@/lib/site";
import {
  ShieldCheck, HardHat, Truck, Wrench, Building2, FlaskConical, Trees,
  ArrowRight,
} from "lucide-react";

const ICONS = {
  ShieldCheck, HardHat, Truck, Wrench, Building2, FlaskConical, Trees,
} as const;

export const metadata: Metadata = {
  title: "Logging & Forestry Insurance Coverage Lines",
  description:
    "Seven specialized coverage lines for logging contractors and forestry operations — loggers' workers' comp, log trucks, equipment, GL, sawmill, pollution, and tree service. Licensed all 50 states.",
  alternates: { canonical: `${SITE.url}/services` },
  openGraph: {
    title: "Logging & Forestry Insurance Coverage Lines | Lumberjack Insurance",
    description:
      "Workers' comp for logging class codes, log trucks, equipment, GL, sawmill, pollution, and tree service coverage.",
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
                Logging insurance,{" "}
                <span className="bg-gradient-to-r from-primary via-forest-500 to-accent bg-clip-text text-transparent">
                  line by line
                </span>
              </h1>
              <p className="mt-5 lead max-w-2xl mx-auto">
                Seven specialized coverage lines — each built for the real exposures of
                logging, timber, and forestry work. No generic contractor policies.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="bg-background py-12 md:py-16">
          <div className="container-wide">
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
          title="Not sure which lines you need?"
          description="Most logging operations carry four to six of these together. We'll review your program and quote the gaps — in about a day."
        />
      </main>
      <Footer />
    </>
  );
}
