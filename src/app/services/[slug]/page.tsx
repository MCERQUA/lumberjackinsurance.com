import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { SERVICES, SITE } from "@/lib/site";
import { SERVICE_DETAIL } from "@/lib/content";
import {
  ShieldCheck, Home, Car, Building2, KeyRound,
  CheckCircle2, ArrowRight, ArrowLeft, Users, Target,
} from "lucide-react";

const ICONS = {
  ShieldCheck, Home, Car, Building2, KeyRound,
} as const;

// Map each service to its hero image
const SERVICE_IMAGES: Record<string, string> = {
  "homeowners-insurance": "/images/hero.jpg",
  "auto-insurance": "/images/log-truck.jpg",
  "business-insurance": "/images/general-liability.jpg",
  "landlord-insurance": "/images/forest-tract.jpg",
  "renters-insurance": "/images/quote-cta.jpg",
};

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  const url = `${SITE.url}/services/${slug}`;
  return {
    title: `${service.title} in Flagstaff & Northern Arizona`,
    description: service.description,
    keywords: service.keywords ? [...service.keywords] : undefined,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} in Flagstaff & Northern Arizona | ${SITE.name}`,
      description: service.description,
      url,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const detail = SERVICE_DETAIL[slug];
  const Icon = ICONS[service.icon as keyof typeof ICONS] ?? ShieldCheck;
  const heroImage = SERVICE_IMAGES[slug] ?? "/images/hero.jpg";
  const url = `${SITE.url}/services/${slug}`;
  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  const faqSchema = detail
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: detail.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: url },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceService",
    name: `${service.title} in Flagstaff & Northern Arizona`,
    description: service.description,
    url,
    provider: {
      "@type": "InsuranceAgency",
      name: SITE.name,
      url: SITE.url,
      telephone: "+18449675247",
      areaServed: { "@type": "City", name: "Flagstaff, Arizona" },
    },
    serviceType: service.title,
    category: "Personal & Business Insurance",
  };

  const schemas: Record<string, object> = { serviceSchema, breadcrumb };
  if (faqSchema) schemas.faqSchema = faqSchema;

  return (
    <>
      {Object.entries(schemas).map(([key, schema]) => (
        <script
          key={key}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-topo pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-wide">
            <FadeIn>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-accent hover:gap-2.5 transition-all mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                All coverage lines
              </Link>
            </FadeIn>
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <FadeIn className="lg:col-span-7">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-gradient text-white mb-5 shadow-card">
                  <Icon className="h-7 w-7" strokeWidth={2.2} />
                </div>
                <span className="pill-primary">Coverage line</span>
                <h1 className="mt-4 font-display font-semibold text-foreground text-4xl md:text-5xl leading-[1.08] tracking-tight">
                  {service.title}{" "}
                  <span className="bg-gradient-to-r from-primary via-forest-500 to-accent bg-clip-text text-transparent">
                    in Flagstaff &amp; Northern Arizona
                  </span>
                </h1>
                {detail && <p className="mt-5 lead max-w-2xl">{detail.heroBlurb}</p>}
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Link href="/quote" className="btn-primary">
                    Get a quote
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <a href={SITE.phoneHref} className="btn-secondary">
                    Call {SITE.phone}
                  </a>
                </div>
              </FadeIn>

              <FadeIn direction="left" className="lg:col-span-5">
                <div className="rounded-t-[10rem] rounded-b-3xl overflow-hidden border-4 border-white shadow-lift">
                  <img
                    src={heroImage}
                    alt={`${service.title} — Flagstaff & Northern Arizona`}
                    className="w-full h-[300px] md:h-[360px] object-cover"
                    loading="lazy"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {detail && (
          <section className="bg-background py-16 md:py-24">
            <div className="container-wide grid lg:grid-cols-3 gap-8 lg:gap-10">
              <FadeIn>
                <div className="rounded-3xl bg-white border border-border shadow-card p-7 h-full">
                  <div className="flex items-center gap-2.5 mb-5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <h2 className="font-display font-semibold text-xl text-foreground">What it covers</h2>
                  </div>
                  <ul className="space-y-3">
                    {detail.whatsCovered.map((c) => (
                      <li key={c} className="flex items-start gap-2.5 text-foreground/85 text-[0.95rem] leading-relaxed">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                <div className="rounded-3xl bg-forest-gradient text-white p-7 h-full relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-50"
                    style={{ background: "radial-gradient(circle at 80% 0%, rgba(154,52,18,0.22) 0%, transparent 55%)" }}
                    aria-hidden
                  />
                  <div className="relative">
                    <div className="flex items-center gap-2.5 mb-5">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-accent-light">
                        <Users className="h-5 w-5" strokeWidth={2.2} />
                      </span>
                      <h2 className="font-display font-semibold text-xl text-white">Who it&apos;s for</h2>
                    </div>
                    <ul className="space-y-3">
                      {detail.whoItsFor.map((c) => (
                        <li key={c} className="flex items-start gap-2.5 text-white/85 text-[0.95rem] leading-relaxed">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-light flex-shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.16}>
                <div className="rounded-3xl bg-white border border-border shadow-card p-7 h-full">
                  <div className="flex items-center gap-2.5 mb-5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/12 text-accent">
                      <Target className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <h2 className="font-display font-semibold text-xl text-foreground">Why CCA</h2>
                  </div>
                  <div className="space-y-5">
                    {detail.whyCca.map((w) => (
                      <div key={w.title}>
                        <p className="font-body font-bold text-foreground text-sm leading-snug">{w.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{w.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        )}

        {/* Deep dive — long-form body sections */}
        {detail?.deepDive && detail.deepDive.length > 0 && (
          <section className="bg-warm-radial-sand py-16 md:py-20">
            <div className="container-tight max-w-3xl">
              {detail.deepDive.map((d, i) => (
                <FadeIn key={d.heading} delay={i * 0.05}>
                  <div className="mb-10">
                    <h2 className="font-display font-semibold text-2xl md:text-3xl text-foreground mb-3">
                      {d.heading}
                    </h2>
                    <p className="text-foreground/80 leading-relaxed text-[1.05rem]">{d.body}</p>
                  </div>
                </FadeIn>
              ))}
              <FadeIn>
                <div className="mt-8 p-7 rounded-3xl bg-forest-gradient text-white relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-50"
                    style={{ background: "radial-gradient(circle at 80% 0%, rgba(154,52,18,0.25) 0%, transparent 55%)" }}
                    aria-hidden
                  />
                  <div className="relative">
                    <p className="font-display font-semibold text-white text-xl">
                      Need this coverage in Flagstaff?
                    </p>
                    <p className="text-white/80 mt-2 text-sm">
                      Get a real quote fast — we shop multiple A-rated carriers to fit your Northern Arizona life and budget.
                    </p>
                    <div className="mt-5 flex flex-col sm:flex-row gap-3">
                      <Link href="/quote" className="btn-accent">Get a quote</Link>
                      <a
                        href={SITE.phoneHref}
                        className="btn-secondary !bg-white/10 !text-white !border-white/25 hover:!bg-white/20"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        )}

        {/* FAQ */}
        {detail && detail.faqs.length > 0 && (
          <FAQ
            items={detail.faqs}
            eyebrow={`${service.title} — FAQ`}
            title={
              <>
                {service.title},{" "}
                <span className="text-accent">in plain English</span>.
              </>
            }
            background="paper"
          />
        )}

        {/* Related coverage */}
        <section className="bg-background py-16 md:py-20 border-t border-border">
          <div className="container-wide">
            <FadeIn>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-foreground mb-8">
                Related coverage
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r, i) => {
                const RIcon = ICONS[r.icon as keyof typeof ICONS] ?? ShieldCheck;
                return (
                  <FadeIn key={r.slug} delay={i * 0.06}>
                    <Link
                      href={`/services/${r.slug}`}
                      className="group block h-full rounded-3xl bg-white border border-border shadow-card hover:shadow-lift hover:-translate-y-1 transition-all duration-300 p-6"
                    >
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                        <RIcon className="h-5.5 w-5.5" strokeWidth={2.2} />
                      </div>
                      <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-accent transition-colors leading-tight">
                        {r.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{r.description}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-body font-bold text-accent group-hover:gap-2 transition-all">
                        Explore <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        <CTABand
          title={`Ready to quote ${service.title.toLowerCase()}?`}
          description="Tell us about your operation — we'll come back with real markets in about a day."
        />
      </main>
      <Footer />
    </>
  );
}
