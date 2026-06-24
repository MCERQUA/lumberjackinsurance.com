import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { CheckCircle, Shield, ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Quote — Flagstaff Home, Auto & Business Insurance",
  description:
    "Get a free local insurance quote for your Flagstaff or Northern Arizona home, car, business, rental property, or apartment. A real local agent — no out-of-state call center. Call 844-967-5247.",
  alternates: { canonical: `${SITE.url}/quote` },
  openGraph: {
    title: "Get a Free Quote | Lumberjack Insurance — Flagstaff, AZ",
    description:
      "Home, auto, business, landlord, and renters insurance for Flagstaff & Northern Arizona. Free, no-obligation quote.",
    url: `${SITE.url}/quote`,
  },
};

const TOWNS = [
  "Flagstaff",
  "Sedona",
  "Williams",
  "Cottonwood",
  "Camp Verde",
  "Page",
  "Munds Park",
  "Bellemont",
  "Doney Park",
  "Kachina Village",
  "Mountainaire",
  "Parks",
  "Winona",
  "Mormon Lake",
  "Other (Northern Arizona)",
];

const COVERAGE_LINES = [
  "Home insurance",
  "Auto insurance",
  "Business insurance",
  "Landlord / rental property insurance",
  "Renters insurance",
  "Bundle / multiple policies",
  "Not sure — help me figure it out",
];

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm";
const labelClass = "block text-sm font-body font-semibold text-foreground mb-1.5";

export default function QuotePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-topo pt-32 pb-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn>
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 mb-6">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    Free Quote · Local Flagstaff Agents
                  </span>
                </div>
                <h1 className="font-display font-semibold text-foreground text-4xl md:text-5xl mb-4 tracking-tight">
                  Get Your{" "}
                  <span className="bg-gradient-to-r from-primary via-forest-500 to-accent bg-clip-text text-transparent">
                    Free Insurance Quote
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Tell us what you need to protect here in Flagstaff or Northern Arizona — home,
                  car, business, rental, or apartment — and a local agent will follow up the same
                  business day with a real quote.
                </p>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Trust sidebar */}
              <FadeIn direction="right" className="space-y-4">
                {[
                  {
                    title: "A real local agency",
                    desc: "We live in Northern Arizona too. You get a neighbor who knows 7,000-ft living — not an out-of-state 800-number.",
                  },
                  {
                    title: "All your coverage in one place",
                    desc: "Home, auto, business, landlord, and renters — one local agent, often bundled to save you money.",
                  },
                  {
                    title: "We know the real risks",
                    desc: "Wildfire, snow load, monsoon storms, and elk on the highway — we build coverage around how Flagstaff actually lives.",
                  },
                  {
                    title: "No obligation",
                    desc: "Get the quote and compare. No pressure, no commitment, no spam.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 p-4 rounded-2xl bg-white border border-border shadow-card"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-body font-bold text-foreground text-sm">{item.title}</p>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}

                <div className="p-5 rounded-2xl text-center bg-forest-gradient text-white relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-50"
                    style={{ background: "radial-gradient(circle at 80% 0%, rgba(154,52,18,0.25) 0%, transparent 55%)" }}
                    aria-hidden
                  />
                  <div className="relative">
                    <p className="text-xs font-bold uppercase tracking-wider mb-2">Prefer to call?</p>
                    <a
                      href={SITE.phoneHref}
                      className="flex items-center justify-center gap-2 text-white font-display font-semibold text-lg hover:text-accent-light transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      {SITE.phone}
                    </a>
                    <p className="text-xs text-white/75 mt-1">{SITE.hours}</p>
                  </div>
                </div>
              </FadeIn>

              {/* Form — native Netlify Forms submission (no JS fetch) */}
              <div className="lg:col-span-2">
                <form
                  name="quote"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  action="/thank-you"
                  className="rounded-3xl p-8 md:p-10 space-y-6 bg-white border border-border shadow-lift"
                >
                  <input type="hidden" name="form-name" value="quote" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className={labelClass}>Full Name *</label>
                      <input
                        id="name" name="name" type="text" required
                        placeholder="Jane Doe" className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="coverage" className={labelClass}>Coverage Needed *</label>
                      <select id="coverage" name="coverage" required defaultValue="" className={inputClass}>
                        <option value="">Select coverage…</option>
                        {COVERAGE_LINES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className={labelClass}>Email Address *</label>
                      <input
                        id="email" name="email" type="email" required
                        placeholder="jane@example.com" className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                      <input
                        id="phone" name="phone" type="tel" required
                        placeholder="(928) 555-0100" className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="town" className={labelClass}>Your Community *</label>
                      <select id="town" name="town" required defaultValue="" className={inputClass}>
                        <option value="">Select your town…</option>
                        {TOWNS.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="currentCoverage" className={labelClass}>Current Coverage Status</label>
                      <select id="currentCoverage" name="currentCoverage" defaultValue="" className={inputClass}>
                        <option value="">Select…</option>
                        <option>Currently insured, shopping for a better rate</option>
                        <option>Currently insured, unhappy with my carrier</option>
                        <option>New home / car / business — need coverage</option>
                        <option>Not currently insured</option>
                        <option>Not sure</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Tell us what you need{" "}
                      <span className="text-muted-foreground font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="message" name="message" rows={4}
                      placeholder="Address or neighborhood, year/type of home, vehicles, business details, rental property — anything that helps us quote accurately…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-forest-gradient text-white font-body font-bold rounded-xl shadow-card hover:shadow-lift transition-all"
                  >
                    Request My Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-center text-muted-foreground">
                    No spam. No commitment. A local Flagstaff agent will reach out to discuss your needs.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
