"use client";

import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site";
import { FadeIn } from "@/components/animations/FadeIn";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-background py-20 md:py-28">
      <div className="container-wide">
        <FadeIn className="max-w-3xl mb-12 md:mb-16">
          <span className="eyebrow">
            <span className="h-px w-8 bg-accent" />
            From logging &amp; timber contractors
          </span>
          <h2 className="mt-3 h-section">
            Contractors who stopped fighting{" "}
            <span className="text-accent">their insurance company</span>.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <figure className="relative h-full rounded-3xl bg-white border border-border p-7 shadow-card hover:shadow-lift transition-all duration-300 flex flex-col">
                <Quote className="absolute top-6 right-6 h-9 w-9 text-accent/25" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-foreground/85 leading-relaxed text-[0.97rem] flex-grow">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 pt-5 border-t border-border">
                  <p className="font-display font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.role} · {t.location}
                  </p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
