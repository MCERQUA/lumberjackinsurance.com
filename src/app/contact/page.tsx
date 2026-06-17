"use client";

import { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, TreePine } from "lucide-react";
import { SITE } from "@/lib/site";

const WEBHOOK_URL =
  "https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=lumberjackinsurance.com";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
    if (formData["bot-field"]) return;
    setSubmitting(true);
    setError("");
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form_name: "contact",
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
        <section className="relative bg-topo pt-32 pb-20">
          <div className="container-wide">
            <FadeIn className="text-center max-w-2xl mx-auto mb-12">
              <span className="pill-accent">Get in touch</span>
              <h1 className="mt-5 font-display font-semibold text-foreground text-4xl md:text-5xl tracking-tight">
                Talk to the{" "}
                <span className="bg-gradient-to-r from-primary via-forest-500 to-accent bg-clip-text text-transparent">
                  logging desk
                </span>
              </h1>
              <p className="mt-5 lead">
                Questions about class codes, an existing policy, a claim, or a timber sale
                requirement? Call us — usually answered live. Or send a note and we&apos;ll get
                back the same business day.
              </p>
            </FadeIn>

            <div className="grid lg:grid-cols-5 gap-8">
              {/* Contact info column */}
              <FadeIn direction="right" className="lg:col-span-2 space-y-4">
                <a
                  href={SITE.phoneHref}
                  className="block p-6 rounded-3xl bg-forest-gradient text-white shadow-card hover:shadow-lift transition-all"
                >
                  <Phone className="h-7 w-7 text-accent-light mb-3" />
                  <p className="text-xs uppercase tracking-wider text-white/70 mb-1">Primary phone</p>
                  <p className="font-display font-semibold text-2xl">{SITE.phone}</p>
                  <p className="text-sm text-white/75 mt-1">Alt: {SITE.phoneAlt}</p>
                </a>

                <a
                  href={`mailto:${SITE.email}`}
                  className="block p-6 rounded-3xl bg-white border border-border shadow-card hover:shadow-lift transition-all"
                >
                  <Mail className="h-7 w-7 text-accent mb-3" />
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Email</p>
                  <p className="font-body font-semibold text-foreground break-all">{SITE.email}</p>
                </a>

                <div className="p-6 rounded-3xl bg-white border border-border shadow-card">
                  <MapPin className="h-7 w-7 text-accent mb-3" />
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Headquarters</p>
                  <p className="font-body font-semibold text-foreground">
                    {SITE.address.street}<br />
                    {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-border shadow-card">
                  <Clock className="h-7 w-7 text-accent mb-3" />
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Hours</p>
                  <p className="font-body font-semibold text-foreground">{SITE.hours}</p>
                  <p className="text-sm text-muted-foreground mt-1">Claims: 24/7, 2-hour response SLA</p>
                </div>
              </FadeIn>

              {/* Form column */}
              <div className="lg:col-span-3">
                {submitted ? (
                  <div className="p-10 rounded-3xl text-center bg-white border border-border shadow-lift h-full flex flex-col justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Message Sent</h2>
                    <p className="text-muted-foreground">
                      Thanks for reaching out. We&apos;ll respond within one business day — or call us
                      anytime at <a href={SITE.phoneHref} className="text-accent font-body font-bold">{SITE.phone}</a>.
                    </p>
                  </div>
                ) : (
                  <form
                    name="contact"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="rounded-3xl p-8 md:p-10 space-y-6 bg-white border border-border shadow-lift"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <input
                      name="bot-field"
                      type="hidden"
                      value={formData["bot-field"]}
                      onChange={handleChange}
                      className="hidden"
                    />

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className={labelClass}>Name *</label>
                        <input
                          id="name" name="name" type="text" required
                          value={formData.name} onChange={handleChange}
                          placeholder="Your name" className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>Email *</label>
                        <input
                          id="email" name="email" type="email" required
                          value={formData.email} onChange={handleChange}
                          placeholder="you@example.com" className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className={labelClass}>Phone</label>
                        <input
                          id="phone" name="phone" type="tel"
                          value={formData.phone} onChange={handleChange}
                          placeholder="(541) 555-0100" className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className={labelClass}>Topic</label>
                        <select
                          id="subject" name="subject"
                          value={formData.subject} onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select…</option>
                          <option>New quote</option>
                          <option>Existing policy / endorsement</option>
                          <option>Claim</option>
                          <option>Timber sale / contract requirement</option>
                          <option>General question</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className={labelClass}>Message *</label>
                      <textarea
                        id="message" name="message" rows={5} required
                        value={formData.message} onChange={handleChange}
                        placeholder="How can we help?" className={`${inputClass} resize-none`}
                      />
                    </div>

                    {error && <p className="text-destructive text-sm font-medium">{error}</p>}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-forest-gradient text-white font-body font-bold rounded-xl shadow-card hover:shadow-lift transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Sending…" : "Send Message"}
                      {!submitting && <ArrowRight className="w-5 h-5" />}
                    </button>
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
