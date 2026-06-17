"use client";

import { ShieldCheck } from "lucide-react";
import { WHY_CHOOSE } from "@/lib/content";
import { FadeIn } from "@/components/animations/FadeIn";

export function WhyChooseUs() {
  return (
    <section id="why" className="relative bg-warm-radial-sand py-20 md:py-28">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Sticky heading column */}
          <FadeIn className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="eyebrow">
              <span className="h-px w-8 bg-accent" />
              Why loggers switch to us
            </span>
            <h2 className="mt-3 h-section">
              The coverage gaps that{" "}
              <span className="text-accent">cost logging contractors</span> the most.
            </h2>
            <p className="mt-4 lead">
              Most agents hand a logger a generic contractor policy and call it done.
              Then a chainsaw claim hits, or a skidder goes over on a slope, and the
              exclusion kicks in. We underwrite the parts of your work everyone else
              leaves out.
            </p>

            <div className="mt-8 rounded-3xl bg-white border border-border shadow-card p-6">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-forest-gradient text-white">
                  <ShieldCheck className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    Former contractor on staff
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    Josh Cotner ran crews before founding CCA in 2005. He reads your
                    loss runs and knows exactly what a Tigercat feller buncher costs
                    to replace.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Reasons grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {WHY_CHOOSE.map((item, i) => (
              <FadeIn key={item.title} delay={(i % 2) * 0.06}>
                <div className="h-full rounded-3xl bg-white border border-border p-6 shadow-card hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-4">
                    <item.icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
