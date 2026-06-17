import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Stats } from "@/components/sections/Stats";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { ABOUT_POINTS } from "@/lib/content";
import { ArrowRight, TreePine } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Logging & Forestry Insurance Specialists",
  description:
    "Lumberjack Insurance is a program of Contractors Choice Agency — 20+ years insuring contractors, founded by a former contractor. Licensed in all 50 states, with direct access to the specialty markets that write logging.",
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    title: "About Lumberjack Insurance | Contractors Choice Agency",
    description: "20+ years insuring contractors. Former-contractor credibility. Specialty-market access for logging.",
    url: `${SITE.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-topo pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-wide">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <FadeIn className="lg:col-span-7">
                <span className="pill-accent">About us</span>
                <h1 className="mt-5 font-display font-semibold text-foreground text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                  Logging insurance,{" "}
                  <span className="bg-gradient-to-r from-primary via-forest-500 to-accent bg-clip-text text-transparent">
                    by people who know the woods
                  </span>
                  .
                </h1>
                <p className="mt-5 lead max-w-2xl">
                  Lumberjack Insurance is the logging &amp; forestry program of Contractors
                  Choice Agency — founded in 2005 by a former contractor, licensed in all 50
                  states, with direct appointments at the A-rated specialty markets that
                  actually underwrite logging class codes.
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
                  <div className="rounded-t-[10rem] rounded-b-3xl overflow-hidden border-4 border-white shadow-lift">
                    <img
                      src="/images/quote-cta.jpg"
                      alt="Logging foreman reviewing paperwork on a truck tailgate at a forest landing"
                      className="w-full h-[340px] md:h-[420px] object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-5 -left-4 bg-white rounded-2xl shadow-lift border border-border p-5 max-w-[14rem]">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-forest-gradient text-white">
                        <TreePine className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-display font-semibold text-foreground text-lg leading-none">Est. 2005</p>
                        <p className="text-xs text-muted-foreground mt-1">Contractors Choice Agency</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Why we're different */}
        <section className="bg-background py-20 md:py-24">
          <div className="container-wide">
            <FadeIn className="max-w-3xl mb-12">
              <span className="eyebrow">
                <span className="h-px w-8 bg-accent" />
                What makes us different
              </span>
              <h2 className="mt-3 h-section">
                The niche most agents decline,{" "}
                <span className="text-primary">we write every day</span>.
              </h2>
              <p className="mt-4 lead">
                Most insurance agencies are generalists. They write roofing, restaurants, retail —
                and when a logger calls, they submit to a standard market that declines on the class
                code. We&apos;ve spent two decades in the trades other agents won&apos;t touch.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-6">
              {ABOUT_POINTS.map((p, i) => (
                <FadeIn key={p.title} delay={(i % 2) * 0.06}>
                  <div className="h-full rounded-3xl bg-white border border-border p-7 shadow-card hover:shadow-lift transition-all duration-300">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                      <p.icon className="h-6 w-6" strokeWidth={2.2} />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground leading-tight">{p.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{p.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <Stats />

        {/* The founder note */}
        <section className="bg-warm-radial-sand py-20 md:py-24">
          <div className="container-tight max-w-3xl">
            <FadeIn>
              <span className="eyebrow">
                <span className="h-px w-8 bg-accent" />
                From the founder
              </span>
              <blockquote className="mt-5 font-display text-2xl md:text-3xl text-foreground leading-snug italic">
                &ldquo;I ran crews before I sold insurance. I know what a feller buncher costs to
                replace because I&apos;ve written them, and I know what a chainsaw claim looks like
                because I&apos;ve seen them. That&apos;s the difference between an agent who logs your
                operation into a form, and one who actually understands it.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-forest-gradient flex items-center justify-center text-white font-display font-semibold">
                  JC
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">Josh Cotner</p>
                  <p className="text-sm text-muted-foreground">Founder, Contractors Choice Agency · NPN #{SITE.npn}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <CTABand
          title="Ready to insure your logging operation?"
          description="Real quotes from real specialty markets — in about a day. Licensed all 50 states."
        />
      </main>
      <Footer />
    </>
  );
}
