import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { ArrowRight, TreePine, MapPin, Layers, Mountain, ShieldCheck } from "lucide-react";

const WHY_US = [
  {
    title: "We live here too",
    body: "We're a local Flagstaff agency, not a 1-800 call center three states away. We know what 7,000-ft living actually means for your home and your policy — because we deal with the same winters, the same dirt roads, and the same insurers you do.",
    icon: MapPin,
  },
  {
    title: "One agency, all five lines",
    body: "Home, auto, business, landlord, and renters — all under one roof. Bundle what you can, keep it simple, and call one familiar number when life happens instead of juggling a different company for every policy.",
    icon: Layers,
  },
  {
    title: "We know Northern Arizona's real risks",
    body: "Wildfire season, heavy snow load on the roof, monsoon downpours, and elk on the highway after dark. We help you cover the things that actually threaten mountain-town families — not a generic checklist built for somewhere else.",
    icon: Mountain,
  },
  {
    title: "Backed by Contractors Choice Agency",
    body: "We're a program of Contractors Choice Agency, serving folks since 2005. That means real markets, real coverage options, and real service from people who answer the phone — with 20+ years of experience standing behind every policy.",
    icon: ShieldCheck,
  },
];

export const metadata: Metadata = {
  title: "About — Your Local Flagstaff Insurance Agency",
  description:
    "Lumberjack Insurance is a hometown Flagstaff & Northern Arizona agency — a program of Contractors Choice Agency since 2005. Home, auto, business, landlord, and renters coverage for the families who live here.",
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    title: "About Lumberjack Insurance | Local Flagstaff Agency",
    description:
      "A hometown Flagstaff agency protecting Northern Arizona families' homes, cars, and businesses — part of Contractors Choice Agency since 2005.",
    url: `${SITE.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[#0F1C38] pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-wide">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <FadeIn className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-[#E8B923]">
                  <span className="h-px w-8 bg-[#E8B923]" />
                  About us
                </span>
                <h1 className="mt-5 font-display font-bold uppercase text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                  Insurance for your life{" "}
                  <span className="text-[#E8B923]">right here in Flagstaff</span>.
                </h1>
                <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-2xl">
                  Lumberjack Insurance is a hometown agency protecting Flagstaff-area
                  families&apos; homes, cars, and businesses across Northern Arizona. We&apos;re
                  a program of Contractors Choice Agency, serving folks since 2005 — neighbors
                  helping neighbors cover what matters most up here on the mountain.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Link href="/quote" className="btn-primary">
                    Get a Free Quote
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link href="/contact" className="btn-secondary">Talk to us</Link>
                </div>
              </FadeIn>

              <FadeIn direction="left" className="lg:col-span-5">
                <div className="relative">
                  <div className="rounded-t-[10rem] rounded-b-3xl overflow-hidden border-4 border-[#E8B923] shadow-lift">
                    <img
                      src="/images/quote-cta.jpg"
                      alt="Flagstaff neighborhood under ponderosa pines with the San Francisco Peaks beyond"
                      className="w-full h-[340px] md:h-[420px] object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-5 -left-4 bg-white rounded-2xl shadow-lift border border-gray-200 p-5 max-w-[14rem]">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F1C38] text-[#E8B923]">
                        <TreePine className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-display font-bold text-[#0F1C38] text-lg leading-none">Est. 2005</p>
                        <p className="text-xs text-[#0F1C38]/60 mt-1">Contractors Choice Agency</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Why we're different */}
        <section className="bg-white py-20 md:py-24">
          <div className="container-wide">
            <FadeIn className="max-w-3xl mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-[#E8B923]">
                <span className="h-px w-8 bg-[#E8B923]" />
                What makes us different
              </span>
              <h2 className="mt-3 font-display font-bold uppercase text-[#0F1C38] text-3xl md:text-4xl leading-tight">
                A big-company policy with{" "}
                <span className="text-[#E8B923]">a hometown agent</span>.
              </h2>
              <p className="mt-4 text-lg text-[#0F1C38]/70 leading-relaxed">
                Most agencies treat Flagstaff like any other dot on the map. We don&apos;t —
                we live here, we drive these roads, and we cover our own families against the
                exact same Northern Arizona risks you face. When you call, you reach people who
                know the mountain.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-6">
              {WHY_US.map((p, i) => (
                <FadeIn key={p.title} delay={(i % 2) * 0.06}>
                  <div className="h-full rounded-3xl bg-white border border-gray-200 p-7 shadow-card hover:border-[#E8B923] hover:shadow-lift transition-all duration-300">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F1C38] text-[#E8B923] mb-4">
                      <p.icon className="h-6 w-6" strokeWidth={2.2} />
                    </div>
                    <h3 className="font-display font-bold uppercase text-lg text-[#0F1C38] leading-tight">{p.title}</h3>
                    <p className="mt-2 text-[#0F1C38]/70 leading-relaxed">{p.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* The founder note */}
        <section className="bg-[#F4F4F4] py-20 md:py-24">
          <div className="container-tight max-w-3xl">
            <FadeIn>
              <span className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-[#E8B923]">
                <span className="h-px w-8 bg-[#E8B923]" />
                From the founder
              </span>
              <blockquote className="mt-5 font-display text-2xl md:text-3xl text-[#0F1C38] leading-snug italic">
                &ldquo;I built this agency to take care of my neighbors. Flagstaff and Northern
                Arizona families work hard for what they have — the home up in the pines, the
                truck that gets them through winter, the business on the corner. My job is making
                sure one bad day doesn&apos;t take it from them. That&apos;s personal to me, and
                it always will be.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-[#0F1C38] flex items-center justify-center text-[#E8B923] font-display font-bold">
                  JC
                </div>
                <div>
                  <p className="font-display font-bold text-[#0F1C38]">Josh Cotner</p>
                  <p className="text-sm text-[#0F1C38]/60">Founder, Contractors Choice Agency · NPN #{SITE.npn}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <CTABand
          title="Ready to protect your Flagstaff home, car, or business?"
          description="Get a real quote from a local agency that knows Northern Arizona — friendly help, no pressure, just neighbors looking out for neighbors."
        />
      </main>
      <Footer />
    </>
  );
}
