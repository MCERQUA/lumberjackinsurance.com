import Link from "next/link";
import { Check, Phone } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const REASONS = [
  "Local agents who care",
  "Coverage tailored to your needs",
  "Fast, reliable claims service",
  "Competitive rates",
  "Proudly serving our community",
];

const COVERAGE_TYPES = [
  "Home Insurance",
  "Auto Insurance",
  "Business Insurance",
  "Farm & Ranch",
  "Life Insurance",
];

export function WhyChooseUs() {
  return (
    <section id="why" className="grid md:grid-cols-3">
      {/* Left column — Why Choose */}
      <FadeIn direction="right" className="bg-[#F4F4F4] p-8 md:p-10">
        <h3 className="font-display font-extrabold uppercase text-2xl text-[#0F1C38] leading-tight">
          Why Choose Lumberjack?
        </h3>
        <ul className="mt-6 space-y-3">
          {REASONS.map((reason, i) => (
            <li key={reason}>
              <FadeIn delay={0.15 + i * 0.08} direction="up">
                <div className="group flex items-start gap-3">
                  <Check
                    className="h-5 w-5 flex-shrink-0 text-[#E8B923] mt-0.5 transition-transform duration-300 group-hover:scale-150"
                    strokeWidth={3}
                  />
                  <span className="font-body text-[#0F1C38] text-base">{reason}</span>
                </div>
              </FadeIn>
            </li>
          ))}
        </ul>
        <Link
          href="/about"
          className="inline-block mt-8 border-2 border-[#0F1C38] text-[#0F1C38] px-6 py-3 font-display font-bold uppercase text-sm hover:bg-[#0F1C38] hover:text-white transition"
        >
          Learn More About Us
        </Link>
      </FadeIn>

      {/* Center column — Quote form */}
      <FadeIn
        direction="up"
        delay={0.1}
        className="bg-[#0F1C38] p-8 md:p-10 border border-[#E8B923]/30 shadow-[0_0_40px_-8px_rgba(232,185,35,0.45)]"
      >
        <h3 className="font-display font-extrabold uppercase text-2xl text-[#E8B923]">
          Get a Quote
        </h3>
        <p className="mt-2 font-body text-sm text-white/80">It&apos;s fast, free and easy.</p>

        <form name="quote-quick" data-netlify="true" method="POST" action="/thank-you" className="mt-6 space-y-4">
          <input type="hidden" name="form-name" value="quote-quick" />

          <select
            name="coverage-type"
            className="w-full py-3 px-4 bg-[#0F1C38] border border-white/40 text-white font-body transition focus:outline-none focus:border-[#E8B923] focus:ring-2 focus:ring-[#E8B923]/30"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select Coverage Type
            </option>
            {COVERAGE_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            className="w-full py-3 px-4 bg-[#0F1C38] border border-white/40 text-white placeholder:text-white/50 font-body transition focus:outline-none focus:border-[#E8B923] focus:ring-2 focus:ring-[#E8B923]/30"
            required
          />

          <button
            type="submit"
            className="lj-btn-shine w-full py-3 bg-[#E8B923] text-[#0F1C38] font-display font-bold uppercase text-sm transition-transform duration-200 hover:scale-[1.02] hover:brightness-95"
          >
            Get Started
          </button>
        </form>

        <div className="mt-6">
          <p className="font-body text-sm text-white/80">Prefer to talk to someone?</p>
          <a
            href="tel:+18449675247"
            className="mt-2 inline-flex items-center gap-2 font-display font-bold text-white text-lg hover:text-[#E8B923] transition"
          >
            <Phone className="h-5 w-5 text-[#E8B923]" />
            844-967-5247
          </a>
        </div>
      </FadeIn>

      {/* Right column — Built on trust */}
      <FadeIn direction="left" delay={0.2} className="bg-white p-8 md:p-10">
        <h3 className="font-display font-extrabold uppercase text-2xl text-[#0F1C38] leading-tight">
          Built on Trust.
          <br />
          Focused on You.
        </h3>
        <p className="mt-4 font-body text-base text-[#0F1C38]/70">
          We&apos;re here to protect what you&apos;ve built and help you keep moving forward
          with confidence.
        </p>
        <FadeIn delay={0.5} direction="up">
          <p className="lj-shine-text mt-6 font-display italic text-xl">
            – The LumberJack Team
          </p>
        </FadeIn>
      </FadeIn>
    </section>
  );
}
