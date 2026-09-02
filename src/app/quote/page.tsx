import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { CheckCircle, Shield, ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { AeoFields } from "@/components/AeoFields";

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
  "w-full px-4 py-3 rounded-sm border border-gray-200 bg-white text-[#0F1C38] placeholder-gray-400 focus:outline-none focus:border-[#E8B923] focus:ring-2 focus:ring-[#E8B923]/30 transition-all text-sm";
const labelClass = "block text-sm font-body font-semibold text-[#0F1C38] mb-1.5";

export default function QuotePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-[#F4F4F4] pt-32 pb-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn>
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#0F1C38] mb-6">
                  <Shield className="w-4 h-4 text-[#E8B923]" />
                  <span className="text-xs font-bold text-[#E8B923] uppercase tracking-wider">
                    Free Quote · Local Flagstaff Agents
                  </span>
                </div>
                <h1 className="font-display font-800 uppercase text-[#0F1C38] text-4xl md:text-5xl mb-4 tracking-tight">
                  Get Your{" "}
                  <span className="text-[#E8B923]">
                    Free Insurance Quote
                  </span>
                </h1>
                <p className="text-lg text-[#6B7280] max-w-xl mx-auto">
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
                    className="flex gap-3 p-4 rounded-sm bg-white border border-gray-200 hover:border-[#E8B923] shadow-card transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-[#E8B923] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-body font-bold text-[#0F1C38] text-sm">{item.title}</p>
                      <p className="text-[#6B7280] text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}

                <div className="p-5 rounded-sm text-center bg-[#0F1C38] text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#E8B923] mb-2">Prefer to call?</p>
                  <a
                    href={SITE.phoneHref}
                    className="flex items-center justify-center gap-2 text-white font-display font-semibold text-lg hover:text-[#E8B923] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {SITE.phone}
                  </a>
                  <p className="text-xs text-white/75 mt-1">{SITE.hours}</p>
                </div>
              </FadeIn>

              {/* Form — native Netlify Forms submission (no JS fetch) */}
              <FadeIn direction="left" delay={0.1} className="lg:col-span-2">
                <form
                  name="quote"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  action="/thank-you"
                  className="rounded-sm p-8 md:p-10 space-y-6 bg-white border border-gray-200 shadow-lift"
                >
                  <input type="hidden" name="form-name" value="quote" />
                  <AeoFields />
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
                      <span className="text-[#6B7280] font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="message" name="message" rows={4}
                      placeholder="Address or neighborhood, year/type of home, vehicles, business details, rental property — anything that helps us quote accurately…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Request My Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-center text-[#6B7280]">
                    No spam. No commitment. A local Flagstaff agent will reach out to discuss your needs.
                  </p>
                
        {/* complete contractor field set — forms-required-fields.json */}
        <div className="mb-4">
          <label className={labelClass}>Street address</label>
          <input type="text" name="street_address" className={inputClass} />
        </div>
        <div className="mb-4">
          <label className={labelClass}>State</label>
          <input type="text" name="state" className={inputClass} />
        </div>
        <div className="mb-4">
          <label className={labelClass}>ZIP code</label>
          <input type="text" name="zip" className={inputClass} />
        </div>
        <div className="mb-4">
          <label className={labelClass}>Federal Employer ID Number (FEIN)</label>
          <input type="text" name="fein" className={inputClass} />
        </div>
        <div className="mb-4">
          <label className={labelClass}>Year business started</label>
          <input type="number" name="year_business_started" className={inputClass} />
        </div>
        <div className="mb-4">
          <label className={labelClass}>Description of business</label>
          <textarea name="business_description" rows={3} className={inputClass}></textarea>
        </div>
        <div className="mb-4">
          <label className={labelClass}>Prior insurance carrier name</label>
          <input type="text" name="prior_carrier_name" className={inputClass} />
        </div>
        <div className="mb-4">
          <label className={labelClass}>Prior policy number</label>
          <input type="text" name="prior_policy_number" className={inputClass} />
        </div>
        <div className="mb-4">
          <label className={labelClass}>Prior policy expiration date</label>
          <input type="date" name="prior_policy_expiration" className={inputClass} />
        </div>
</form>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
