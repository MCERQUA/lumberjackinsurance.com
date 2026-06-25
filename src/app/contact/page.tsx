import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Local Flagstaff Insurance Agents",
  description:
    "Talk to a real, local Flagstaff insurance agent about home, auto, business, landlord, or renters coverage. Call 844-967-5247 or send a note — serving Flagstaff & all of Northern Arizona.",
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: {
    title: "Contact Lumberjack Insurance | Flagstaff, Arizona",
    description:
      "Reach a local Flagstaff agent for home, auto, business, landlord, or renters insurance. Serving Flagstaff & Northern Arizona.",
    url: `${SITE.url}/contact`,
  },
};

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#0F1C38] placeholder-[#0F1C38]/40 focus:outline-none focus:border-[#E8B923] focus:ring-2 focus:ring-[#E8B923]/30 transition-all text-sm";
const labelClass = "block text-sm font-body font-semibold text-[#0F1C38] mb-1.5";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-[#0F1C38] pt-32 pb-20">
          <div className="container-wide">
            <FadeIn className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-[#E8B923]">
                <span className="h-px w-8 bg-[#E8B923]" />
                Get in touch
              </span>
              <h1 className="mt-5 font-display font-bold uppercase text-white text-4xl md:text-5xl tracking-tight">
                Talk to a{" "}
                <span className="text-[#E8B923]">local Flagstaff agent</span>
              </h1>
              <p className="mt-5 text-lg text-white/80 leading-relaxed">
                Questions about your home, car, business, rental, or a renters policy? Call us —
                usually answered live by a real person here in Northern Arizona. Or send a note and
                we&apos;ll get back to you the same business day.
              </p>
            </FadeIn>

            <div className="grid lg:grid-cols-5 gap-8">
              {/* Contact info column */}
              <FadeIn direction="right" className="lg:col-span-2 space-y-4">
                <a
                  href={SITE.phoneHref}
                  className="block p-6 rounded-3xl bg-[#0F1C38] text-white shadow-card hover:shadow-lift transition-all"
                >
                  <Phone className="h-7 w-7 text-[#E8B923] mb-3" />
                  <p className="text-xs uppercase tracking-wider text-white/70 mb-1">Call or text</p>
                  <p className="font-display font-bold text-2xl">{SITE.phone}</p>
                  <p className="text-sm text-white/75 mt-1">Serving Flagstaff &amp; Northern Arizona</p>
                </a>

                <a
                  href={`mailto:${SITE.email}`}
                  className="block p-6 rounded-3xl bg-white border border-gray-200 shadow-card hover:border-[#E8B923] hover:shadow-lift transition-all"
                >
                  <Mail className="h-7 w-7 text-[#E8B923] mb-3" />
                  <p className="text-xs uppercase tracking-wider text-[#0F1C38]/60 mb-1">Email</p>
                  <p className="font-body font-semibold text-[#0F1C38] break-all">{SITE.email}</p>
                </a>

                <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-card">
                  <MapPin className="h-7 w-7 text-[#E8B923] mb-3" />
                  <p className="text-xs uppercase tracking-wider text-[#0F1C38]/60 mb-1">Service area</p>
                  <p className="font-body font-semibold text-[#0F1C38]">
                    Flagstaff &amp; Northern Arizona
                  </p>
                  <p className="text-sm text-[#0F1C38]/70 mt-1">
                    Sedona · Williams · Cottonwood · Camp Verde · Page · Munds Park · Doney Park &amp; the
                    surrounding communities
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-card">
                  <Clock className="h-7 w-7 text-[#E8B923] mb-3" />
                  <p className="text-xs uppercase tracking-wider text-[#0F1C38]/60 mb-1">Hours</p>
                  <p className="font-body font-semibold text-[#0F1C38]">{SITE.hours}</p>
                  <p className="text-sm text-[#0F1C38]/70 mt-1">Claims help available 24/7</p>
                </div>
              </FadeIn>

              {/* Form column — native Netlify Forms submission (no JS fetch) */}
              <FadeIn direction="left" delay={0.1} className="lg:col-span-3">
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  action="/thank-you"
                  className="rounded-3xl p-8 md:p-10 space-y-6 bg-white border border-gray-200 shadow-lift"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className={labelClass}>Name *</label>
                      <input
                        id="name" name="name" type="text" required
                        placeholder="Your name" className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email *</label>
                      <input
                        id="email" name="email" type="email" required
                        placeholder="you@example.com" className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone</label>
                      <input
                        id="phone" name="phone" type="tel"
                        placeholder="(928) 555-0100" className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className={labelClass}>Topic</label>
                      <select id="subject" name="subject" defaultValue="" className={inputClass}>
                        <option value="">Select…</option>
                        <option>New quote</option>
                        <option>Home insurance</option>
                        <option>Auto insurance</option>
                        <option>Business insurance</option>
                        <option>Landlord insurance</option>
                        <option>Renters insurance</option>
                        <option>Existing policy / change</option>
                        <option>Claim</option>
                        <option>General question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>Message *</label>
                    <textarea
                      id="message" name="message" rows={5} required
                      placeholder="How can we help?" className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#E8B923] text-[#0F1C38] font-display font-bold uppercase tracking-widest rounded-xl shadow-card hover:bg-[#d4a91a] hover:shadow-lift transition-all"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </button>
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
