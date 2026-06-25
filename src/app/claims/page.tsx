import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "File a Claim — Fast Local Claims Help",
  description:
    "Need to file an insurance claim in Flagstaff or Northern Arizona? Call your local Lumberjack Insurance agent for fast, friendly help with home, auto, business, landlord, and renters claims — a real person who walks you through every step.",
  alternates: { canonical: `${SITE.url}/claims` },
  openGraph: {
    title: "File a Claim | Lumberjack Insurance",
    description:
      "Fast, friendly local claims help for Flagstaff & Northern Arizona — home, auto, business, landlord, and renters. Call a real local agent.",
    url: `${SITE.url}/claims`,
  },
};

const STEPS = [
  {
    num: "01",
    title: "CALL US FIRST",
    description:
      "Reach your local Lumberjack agent at 844-967-5247. Tell us what happened — we'll start your claim right away and tell you exactly what's covered.",
  },
  {
    num: "02",
    title: "WE GUIDE YOU",
    description:
      "We help you document the damage, file with your carrier, and stay on top of the adjuster so nothing falls through the cracks. Real people, no runaround.",
  },
  {
    num: "03",
    title: "YOU GET BACK TO NORMAL",
    description:
      "From a wildfire scare to a winter snow-load roof or an elk strike on Lake Mary Road, we stay with you until you're whole again and back on your feet.",
  },
];

export default function ClaimsPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Claims", item: `${SITE.url}/claims` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main>
        {/* Navy hero */}
        <section
          className="relative pt-32 pb-16 md:pt-40 md:pb-20"
          style={{ background: "radial-gradient(ellipse at 60% 30%, #1B3A6B 0%, #0F1C38 60%)" }}
        >
          <div className="container-tight text-center">
            <FadeIn>
              <span className="inline-block font-display font-700 uppercase tracking-widest text-sm text-[#E8B923]">
                Claims
              </span>
              <h1 className="mt-5 font-display font-800 uppercase text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                File a <span className="text-[#E8B923]">Claim</span>
              </h1>
              <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto">
                When something goes wrong, you want a real local person on your side — not a 1-800
                maze. Call your Lumberjack Insurance agent and we&apos;ll get your claim moving fast,
                explain what&apos;s covered, and stay with you until you&apos;re back to normal.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a href={SITE.phoneHref} className="btn-primary">
                  <Phone className="h-5 w-5" />
                  Call {SITE.phone}
                </a>
                <Link href="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 3-step process */}
        <section className="bg-[#F4F4F4] py-20">
          <div className="container-wide">
            <FadeIn>
              <h2 className="text-center font-display text-3xl md:text-4xl font-extrabold uppercase text-[#0F1C38]">
                How to File a Claim
              </h2>
              <p className="mt-3 text-center text-[#6B7280] max-w-2xl mx-auto">
                Three simple steps — and a local agent who actually picks up the phone.
              </p>
            </FadeIn>

            <div className="relative z-10 mt-12 grid gap-10 md:grid-cols-3">
              {STEPS.map((step, i) => (
                <FadeIn key={step.num} delay={i * 0.15} direction="up">
                  <div className="text-center transition-transform duration-300 hover:-translate-y-1.5">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E8B923] shadow-lg shadow-[#E8B923]/30">
                      <span className="font-display text-2xl font-extrabold text-[#0F1C38]">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold uppercase text-[#0F1C38]">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Claims help CTA */}
        <section className="bg-[#0F1C38] py-16 md:py-20">
          <div className="container-tight">
            <FadeIn>
              <div className="rounded-sm border border-white/10 bg-white/5 p-8 md:p-12 text-center">
                <span className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#E8B923]">
                  <ShieldCheck className="h-7 w-7 text-[#0F1C38]" strokeWidth={2.2} />
                </span>
                <h2 className="font-display font-800 uppercase text-white text-2xl md:text-3xl">
                  Need to File a Claim Now?
                </h2>
                <p className="mt-3 text-white/80 max-w-xl mx-auto">
                  Call us and a real local agent will start your claim and walk you through every step.
                  Friendly, fast, hometown claims help for Flagstaff &amp; Northern Arizona.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                  <a href={SITE.phoneHref} className="btn-primary">
                    <Phone className="h-5 w-5" />
                    {SITE.phone}
                  </a>
                  <Link href="/contact" className="btn-secondary">
                    Send Us a Message
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
