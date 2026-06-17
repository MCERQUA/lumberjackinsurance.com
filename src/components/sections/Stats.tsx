"use client";

import { STATS } from "@/lib/site";
import { Counter } from "@/components/animations/Counter";
import { FadeIn } from "@/components/animations/FadeIn";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-forest-gradient text-white py-16 md:py-20">
      {/* warm radial accents on deep forest */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 18% 30%, rgba(154,52,18,0.22) 0%, transparent 45%), radial-gradient(circle at 82% 70%, rgba(20,83,45,0.30) 0%, transparent 50%)",
        }}
        aria-hidden
      />
      <div className="absolute top-0 inset-x-0 h-px pine-divider" aria-hidden />
      {/* concentric log rings motif, faint */}
      <div className="absolute inset-0 bg-log-rings opacity-40" aria-hidden />

      <div className="container-wide relative">
        <FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display font-semibold text-4xl md:text-5xl text-white leading-none">
                  <span className="bg-gradient-to-r from-white via-forest-100 to-accent-light bg-clip-text text-transparent">
                    <Counter target={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </span>
                </p>
                <p className="mt-3 text-sm md:text-base text-white/80 leading-snug max-w-[12rem] mx-auto">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
