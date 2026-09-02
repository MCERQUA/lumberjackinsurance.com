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
                      <label htmlFor="state" className={labelClass}>State</label>
                      <input
                        id="state" name="state" type="text"
                        placeholder="AZ" className={inputClass}
                      />
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

                  {/*
                    insurance-agency-multiline: ONE detail section is shown,
                    chosen by the coverage select this form already had. Hidden
                    sections are DISABLED as well as hidden, so this native
                    Netlify POST carries only the section that was on screen —
                    a renter is neither asked for a FEIN nor submits an empty
                    one. public/__forms.html declares the union of both.
                    No life section: this agency's coverage list offers no life
                    product, so a life branch would invent a product line.
                  */}
                  <div data-branch="personal" hidden>
                    <p className="text-sm font-body font-semibold text-[#0F1C38] mb-3">About you and the property</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date_of_birth" className={labelClass}>Date of Birth *</label>
                      <input id="date_of_birth" name="date_of_birth" type="date" required className={inputClass} disabled />
                    </div>
                    <div>
                      <label htmlFor="drivers_license_number" className={labelClass}>Driver License Number</label>
                      <input id="drivers_license_number" name="drivers_license_number" type="text" className={inputClass} disabled />
                    </div>
                    <div>
                      <label htmlFor="mailing_address" className={labelClass}>Current Mailing Address *</label>
                      <input id="mailing_address" name="mailing_address" type="text" required className={inputClass} disabled />
                    </div>
                    <div>
                      <label htmlFor="city" className={labelClass}>City *</label>
                      <input id="city" name="city" type="text" required className={inputClass} disabled />
                    </div>
                    <div>
                      <label htmlFor="zip" className={labelClass}>ZIP *</label>
                      <input id="zip" name="zip" type="text" required className={inputClass} disabled />
                    </div>
                    <div>
                      <label htmlFor="property_street_address" className={labelClass}>Property Street Address *</label>
                      <input id="property_street_address" name="property_street_address" type="text" required className={inputClass} disabled />
                    </div>
                    <div>
                      <label htmlFor="current_carrier_name" className={labelClass}>Current Carrier *</label>
                      <input id="current_carrier_name" name="current_carrier_name" type="text" required className={inputClass} disabled />
                    </div>
                    <div>
                      <label htmlFor="current_policy_number" className={labelClass}>Current Policy Number *</label>
                      <input id="current_policy_number" name="current_policy_number" type="text" required className={inputClass} disabled />
                    </div>
                    <div>
                      <label htmlFor="current_policy_expiration_date" className={labelClass}>Current Policy Expires *</label>
                      <input id="current_policy_expiration_date" name="current_policy_expiration_date" type="date" required className={inputClass} disabled />
                    </div>
                    <div>
                      <label htmlFor="requested_effective_date" className={labelClass}>Requested Effective Date</label>
                      <input id="requested_effective_date" name="requested_effective_date" type="date" className={inputClass} disabled />
                    </div>
                    </div>
                  </div>
                  <div data-branch="business" hidden>
                    <p className="text-sm font-body font-semibold text-[#0F1C38] mb-3">About the business</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="street_address" className={labelClass}>Business Street Address *</label>
                      <input id="street_address" name="street_address" type="text" required className={inputClass} disabled />
                    </div>
                    <div>
                      <label htmlFor="city" className={labelClass}>City *</label>
                      <input id="city" name="city" type="text" required className={inputClass} disabled />
                    </div>
                    <div>
                      <label htmlFor="zip" className={labelClass}>ZIP *</label>
                      <input id="zip" name="zip" type="text" required className={inputClass} disabled />
                    </div>
                    <div>
                      <label htmlFor="fein" className={labelClass}>Federal Employer ID Number (FEIN) *</label>
                      <input id="fein" name="fein" type="text" required className={inputClass} disabled />
                    </div>
                    <div>
                      <label htmlFor="year_business_started" className={labelClass}>Year Business Started *</label>
                      <input id="year_business_started" name="year_business_started" type="number" required className={inputClass} disabled />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="business_description" className={labelClass}>Description of Business *</label>
                      <textarea id="business_description" name="business_description" rows={3} required className={`${inputClass} resize-none`} disabled />
                    </div>
                    <div>
                      <label htmlFor="prior_carrier_name" className={labelClass}>Prior Insurance Carrier *</label>
                      <input id="prior_carrier_name" name="prior_carrier_name" type="text" required className={inputClass} disabled />
                    </div>
                    <div>
                      <label htmlFor="prior_policy_number" className={labelClass}>Prior Policy Number *</label>
                      <input id="prior_policy_number" name="prior_policy_number" type="text" required className={inputClass} disabled />
                    </div>
                    <div>
                      <label htmlFor="prior_policy_expiration" className={labelClass}>Prior Policy Expiration Date *</label>
                      <input id="prior_policy_expiration" name="prior_policy_expiration" type="date" required className={inputClass} disabled />
                    </div>
                    </div>
                  </div>

                  <p className="text-xs text-center text-[#6B7280]">
                    No spam. No commitment. A local Flagstaff agent will reach out to discuss your needs.
                  </p>

                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Request My Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </button>
</form>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      {/* Branch switch. This page has no client state — a small inline script
          keeps it a server component. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var B={"Home insurance":"personal","Auto insurance":"personal","Business insurance":"business","Landlord / rental property insurance":"personal","Renters insurance":"personal","Bundle / multiple policies":"personal","Not sure — help me figure it out":"personal"};document.querySelectorAll('form[name="quote"]').forEach(function(f){var s=f.querySelector('[name="coverage"]'),n=f.querySelectorAll('[data-branch]');if(!s||!n.length)return;function y(){var w=B[s.value]||"";n.forEach(function(d){var on=d.getAttribute("data-branch")===w;d.hidden=!on;d.querySelectorAll("input,select,textarea").forEach(function(e){e.disabled=!on;});});}s.addEventListener("change",y);y();});})();`,
        }}
      />
      <Footer />
    </>
  );
}
