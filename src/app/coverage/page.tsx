import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Coverage Area — Logging Insurance in All 50 States",
  description:
    "Lumberjack Insurance writes logging and forestry coverage in all 50 states, including the four monopolistic-fund states (OH, WA, ND, WY), Oregon SAIF, and Idaho. Wherever your timber sale is, we can write the coverage.",
  alternates: { canonical: `${SITE.url}/coverage` },
  openGraph: {
    title: "Coverage Area — Logging Insurance in All 50 States",
    description: "Licensed in all 50 states, including monopolistic-fund coordination.",
    url: `${SITE.url}/coverage`,
  },
};

const ALL_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

const MONOPOLISTIC = [
  { state: "Ohio", note: "Ohio Bureau of Workers' Compensation (BWC) — we coordinate" },
  { state: "Washington", note: "WA Dept of Labor & Industries (L&I) — we coordinate" },
  { state: "North Dakota", note: "ND Workforce Safety & Insurance (WSI) — we coordinate" },
  { state: "Wyoming", note: "Wyoming Workers' Safety (WCSF) — we coordinate" },
];

export default function CoveragePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-topo pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-tight text-center">
            <FadeIn>
              <span className="pill-accent">Coverage area</span>
              <h1 className="mt-5 font-display font-semibold text-foreground text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Logging insurance in{" "}
                <span className="bg-gradient-to-r from-primary via-forest-500 to-accent bg-clip-text text-transparent">
                  all 50 states
                </span>
              </h1>
              <p className="mt-5 lead max-w-2xl mx-auto">
                Timber grows everywhere — and so do we. From the cable-logging slopes of the
                Pacific Northwest and Appalachia to the southern yellow-pine belt and the Maine
                woods, Contractors Choice Agency writes logging and forestry coverage nationwide.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Map image */}
        <section className="bg-background pb-16">
          <div className="container-wide">
            <FadeIn direction="up">
              <div className="rounded-[2rem] overflow-hidden border-4 border-white shadow-lift">
                <img
                  src="/images/forest-tract.jpg"
                  alt="Managed forest tract with pine rows and a logging access road"
                  className="w-full h-[280px] md:h-[400px] object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Monopolistic fund callout */}
        <section className="bg-warm-radial-sand py-16 md:py-20">
          <div className="container-wide">
            <FadeIn className="max-w-3xl mb-10">
              <span className="eyebrow">
                <span className="h-px w-8 bg-accent" />
                Monopolistic state funds — handled
              </span>
              <h2 className="mt-3 h-section">
                Four states run their own workers&apos; comp fund.{" "}
                <span className="text-primary">We coordinate all of them.</span>
              </h2>
              <p className="mt-4 lead">
                If you log in Ohio, Washington, North Dakota, or Wyoming, workers&apos; comp goes
                through the state fund — but you still need the rest of your program (GL, equipment,
                auto, pollution) and someone to handle the UW, certificates, and service. We do all
                of it, plus Oregon SAIF and Idaho submissions.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {MONOPOLISTIC.map((m, i) => (
                <FadeIn key={m.state} delay={(i % 4) * 0.05}>
                  <div className="h-full rounded-3xl bg-white border border-border p-6 shadow-card">
                    <MapPin className="h-7 w-7 text-accent mb-3" strokeWidth={2.2} />
                    <p className="font-display font-semibold text-lg text-foreground">{m.state}</p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{m.note}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* All states grid */}
        <section className="bg-background py-16 md:py-20">
          <div className="container-wide">
            <FadeIn className="max-w-3xl mb-8">
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-foreground">
                Licensed everywhere
              </h2>
              <p className="mt-2 text-muted-foreground">
                We write logging insurance in every US state — including the high-volume timber
                states below and everywhere else.
              </p>
            </FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {ALL_STATES.map((s, i) => (
                <FadeIn key={s} delay={(i % 5) * 0.03}>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-border">
                    <MapPin className="h-4 w-4 text-accent flex-shrink-0" strokeWidth={2.4} />
                    <span className="text-sm font-body font-semibold text-foreground">{s}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <CTABand
          title="Logging in a state not listed?"
          description="We're licensed in all 50. Call us with your timber sale location and we'll confirm coverage."
        />
      </main>
      <Footer />
    </>
  );
}
