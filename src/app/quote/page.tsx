"use client";

import { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { CheckCircle, Shield, ArrowRight, Phone, TreePine } from "lucide-react";
import { SITE } from "@/lib/site";

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

const SERVICE_TYPES = [
  "Logging — mechanized (feller buncher / skidder)",
  "Logging — cable / high-lead",
  "Logging — hand falling",
  "Sawmill / planing mill",
  "Log truck / hauling",
  "Tree service / arborist",
  "Multiple / full program",
  "Other / not sure",
];

const CREW_SIZE = [
  "Just me / owner-operator",
  "2–5 employees",
  "6–15 employees",
  "16–30 employees",
  "30+ employees",
];

const WEBHOOK_URL =
  "https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=lumberjackinsurance.com";

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    state: "",
    serviceType: "",
    crewSize: "",
    currentCoverage: "",
    message: "",
    "bot-field": "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData["bot-field"]) return; // honeypot triggered
    setSubmitting(true);
    setError("");

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form_name: "quote",
          source: "lumberjackinsurance.com",
          ...formData,
        }),
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us at 844-967-5247 or try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm";
  const labelClass = "block text-sm font-body font-semibold text-foreground mb-1.5";

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
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Free Quote · 15-Minute Turnaround</span>
                </div>
                <h1 className="font-display font-semibold text-foreground text-4xl md:text-5xl mb-4 tracking-tight">
                  Get Your{" "}
                  <span className="bg-gradient-to-r from-primary via-forest-500 to-accent bg-clip-text text-transparent">
                    Logging Insurance Quote
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Tell us about your operation and we&apos;ll come back within one business
                  day with a real program — workers&apos; comp, trucks, equipment, and GL.
                </p>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Trust sidebar */}
              <FadeIn direction="right" className="space-y-4">
                {[
                  { title: "Specialty markets that write logging", desc: "We don't submit you to generalists who decline class 2702 — we go straight to the A-rated programs that underwrite logging every day." },
                  { title: "Real turnaround", desc: "Most logging quotes within one business day of receiving loss runs and payroll data." },
                  { title: "No obligation", desc: "Get the quote and compare. No pressure, no commitment, no spam." },
                  { title: "All 50 states", desc: "Licensed everywhere — including OH, WA, ND, WY state funds, OR SAIF, and ID." },
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

              {/* Form */}
              <div className="lg:col-span-2">
                {submitted ? (
                  <div className="p-10 rounded-3xl text-center bg-white border border-border shadow-lift">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Quote Request Received</h2>
                    <p className="text-muted-foreground mb-2">
                      Thank you! We&apos;ll review your operation and reach out within one business
                      day with a real program for your logging crew.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Questions in the meantime? Call{" "}
                      <a href={SITE.phoneHref} className="text-accent font-body font-bold">
                        {SITE.phone}
                      </a>
                    </p>
                  </div>
                ) : (
                  <form
                    name="quote"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="rounded-3xl p-8 md:p-10 space-y-6 bg-white border border-border shadow-lift"
                  >
                    <input type="hidden" name="form-name" value="quote" />
                    <input
                      name="bot-field"
                      type="hidden"
                      value={formData["bot-field"]}
                      onChange={handleChange}
                      className="hidden"
                    />

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className={labelClass}>Full Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Josh Cotner"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="businessName" className={labelClass}>Business Name *</label>
                        <input
                          id="businessName"
                          name="businessName"
                          type="text"
                          required
                          value={formData.businessName}
                          onChange={handleChange}
                          placeholder="Ridgetop Logging LLC"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className={labelClass}>Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="josh@ridgetoplogging.com"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(541) 555-0100"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="state" className={labelClass}>Primary State of Operation *</label>
                        <select
                          id="state"
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select a state…</option>
                          {US_STATES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="serviceType" className={labelClass}>Operation Type *</label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          required
                          value={formData.serviceType}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select operation…</option>
                          {SERVICE_TYPES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="crewSize" className={labelClass}>Crew / Employee Size</label>
                        <select
                          id="crewSize"
                          name="crewSize"
                          value={formData.crewSize}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select…</option>
                          {CREW_SIZE.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="currentCoverage" className={labelClass}>Current Coverage Status</label>
                        <select
                          id="currentCoverage"
                          name="currentCoverage"
                          value={formData.currentCoverage}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select…</option>
                          <option>Currently insured, shopping renewal</option>
                          <option>Currently insured, unhappy with carrier</option>
                          <option>Uninsured / new operation</option>
                          <option>Dropped / declined by a carrier</option>
                          <option>Not sure</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className={labelClass}>
                        Tell us about your operation{" "}
                        <span className="text-muted-foreground font-normal">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Equipment owned, trucks in the fleet, current EMOD, type of timber sales you work, anything that helps us quote accurately…"
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {error && (
                      <p className="text-destructive text-sm font-medium">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-forest-gradient text-white font-body font-bold rounded-xl shadow-card hover:shadow-lift transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Sending…" : "Request My Free Quote"}
                      {!submitting && <ArrowRight className="w-5 h-5" />}
                    </button>

                    <p className="text-xs text-center text-muted-foreground">
                      No spam. No commitment. We&apos;ll contact you to discuss your specific operation.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
