import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Area — Local Insurance for Flagstaff & Northern Arizona",
  description:
    "Lumberjack Insurance is your hometown agency for Flagstaff and Northern Arizona — home, auto, business, landlord, and renters coverage from neighbors who know 7,000-ft mountain living. Serving Flagstaff, Sedona, Williams, Cottonwood, Camp Verde, Page, and the surrounding communities.",
  alternates: { canonical: `${SITE.url}/coverage` },
  openGraph: {
    title: "Service Area — Local Insurance for Flagstaff & Northern Arizona",
    description:
      "A hometown insurance agency serving Flagstaff and the surrounding mountain-town communities of Northern Arizona.",
    url: `${SITE.url}/coverage`,
  },
};

const TOWNS = [
  "Flagstaff","Sedona","Williams","Cottonwood","Camp Verde","Page",
  "Munds Park","Bellemont","Doney Park","Kachina Village","Mountainaire",
  "Parks","Winona","Mormon Lake",
];

const TRUST_SIGNALS = [
  {
    title: "Built for 7,000 feet",
    note: "At a mile and a half up, beneath the San Francisco Peaks, homes here face real mountain weather. We write coverage that fits how Flagstaff is actually built and lived in.",
  },
  {
    title: "A true college town",
    note: "With NAU right downtown, we write renters and landlord policies every single day — the kind of coverage students, parents, and local property owners actually need.",
  },
  {
    title: "We know Northern Arizona's risks",
    note: "Wildfire season, heavy winter snow load, and summer monsoon storms aren't theoretical to us — they're the risks we help our neighbors plan for year after year.",
  },
  {
    title: "Hometown service",
    note: "We're a local agency, not an 800-number routed to another state. When you call, you reach people who live here, drive these roads, and know your part of the mountain.",
  },
];

export default function CoveragePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-[#0F1C38] pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-tight text-center">
            <FadeIn>
              <span className="inline-block font-display font-700 uppercase tracking-widest text-sm text-[#E8B923]">Service area</span>
              <h1 className="mt-5 font-display font-800 uppercase text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Local insurance for{" "}
                <span className="text-[#E8B923]">
                  Flagstaff &amp; Northern Arizona
                </span>
              </h1>
              <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto">
                We&apos;re a hometown agency, born and based in the mountains. From the pines of
                Flagstaff to the red rocks of Sedona and the towns in between, we&apos;re your
                neighbors — people who know what it takes to live, drive, and do business at 7,000
                feet, and who&apos;ll be here when you need us.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Local scenery image */}
        <section className="bg-[#F4F4F4] pb-16 pt-16">
          <div className="container-wide">
            <FadeIn direction="up">
              <div className="rounded-[2rem] overflow-hidden border-4 border-white shadow-lift">
                <img
                  src="/images/forest-tract.jpg"
                  alt="Ponderosa pine forest below the San Francisco Peaks near Flagstaff, Arizona"
                  className="w-full h-[280px] md:h-[400px] object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Local trust signals */}
        <section className="bg-white py-16 md:py-20">
          <div className="container-wide">
            <FadeIn className="max-w-3xl mb-10">
              <span className="inline-flex items-center gap-2 font-display font-700 uppercase tracking-widest text-sm text-[#E8B923]">
                <span className="h-px w-8 bg-[#E8B923]" />
                Neighbors who know the mountain
              </span>
              <h2 className="mt-3 font-display font-800 uppercase text-[#0F1C38] text-3xl md:text-4xl leading-tight">
                We don&apos;t just sell policies here.{" "}
                <span className="text-[#E8B923]">We live here.</span>
              </h2>
              <p className="mt-4 text-lg text-[#6B7280]">
                Insurance is a lot easier when the person on the other end of the line knows your
                town. We understand how homes are built for Flagstaff winters, what a college town
                needs, and the real risks of life in Northern Arizona — because it&apos;s our home too.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {TRUST_SIGNALS.map((t, i) => (
                <FadeIn key={t.title} delay={(i % 4) * 0.05}>
                  <div className="h-full rounded-sm bg-white border border-gray-200 hover:border-[#E8B923] p-6 shadow-card transition-colors">
                    <MapPin className="h-7 w-7 text-[#E8B923] mb-3" strokeWidth={2.2} />
                    <p className="font-display font-700 uppercase text-lg text-[#0F1C38]">{t.title}</p>
                    <p className="mt-1 text-sm text-[#6B7280] leading-relaxed">{t.note}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Communities grid */}
        <section className="bg-[#F4F4F4] py-16 md:py-20">
          <div className="container-wide">
            <FadeIn className="max-w-3xl mb-8">
              <h2 className="font-display font-800 uppercase text-2xl md:text-3xl text-[#0F1C38]">
                Communities we serve
              </h2>
              <p className="mt-2 text-[#6B7280]">
                Proudly local across Northern Arizona — from Flagstaff and the surrounding high
                country down through the Verde Valley. If your town is on the mountain, chances are
                we&apos;re already here for it.
              </p>
            </FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {TOWNS.map((town, i) => (
                <FadeIn key={town} delay={(i % 5) * 0.03}>
                  <div className="flex items-center gap-2 p-3 rounded-sm bg-white border border-gray-200 hover:border-[#E8B923] transition-colors">
                    <MapPin className="h-4 w-4 text-[#E8B923] flex-shrink-0" strokeWidth={2.4} />
                    <span className="text-sm font-body font-semibold text-[#0F1C38]">{town}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <CTABand
          title="Live in the Flagstaff area?"
          description="Let's protect your home, car, and business — talk to a local agent who knows the mountain. Call 844-967-5247."
        />
      </main>
      <Footer />
    </>
  );
}
