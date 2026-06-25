"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { HOME_FAQS } from "@/lib/content";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items?: FAQItem[];
  eyebrow?: string;
  title?: React.ReactNode;
  background?: "paper" | "warm";
}

export function FAQ({
  items = HOME_FAQS as unknown as FAQItem[],
  eyebrow = "Questions, answered",
  title,
  background = "warm",
}: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={cn("relative py-20 md:py-28", background === "warm" ? "bg-warm-radial-sand" : "bg-background")}>
      <div className="container-tight">
        <FadeIn className="max-w-2xl mb-10 md:mb-12">
          <span className="eyebrow">
            <span className="h-px w-8 bg-accent" />
            {eyebrow}
          </span>
          <h2 className="mt-3 h-section">
            {title ?? (
              <>
                Flagstaff insurance,{" "}
                <span className="text-accent">in plain English</span>.
              </>
            )}
          </h2>
        </FadeIn>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={item.q} delay={i * 0.04}>
                <div
                  className={cn(
                    "rounded-2xl border transition-all duration-300 overflow-hidden",
                    isOpen
                      ? "bg-white border-accent/30 shadow-card"
                      : "bg-white/70 border-border hover:bg-white"
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  >
                    <span className="font-display font-semibold text-foreground text-base md:text-lg leading-snug">
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        "flex-shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors",
                        isOpen ? "bg-navy-dark text-white" : "bg-paper-warm text-accent"
                      )}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
