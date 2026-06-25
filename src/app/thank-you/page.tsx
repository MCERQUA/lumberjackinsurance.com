import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You — We Got Your Request",
  description:
    "Thanks for reaching out to Lumberjack Insurance. A local Flagstaff agent will get back to you the same business day.",
  alternates: { canonical: `${SITE.url}/thank-you` },
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-[#F4F4F4] pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="container-tight">
            <FadeIn>
              <div className="max-w-2xl mx-auto rounded-sm bg-white border border-gray-200 shadow-lift p-10 md:p-14 text-center">
                <div className="w-16 h-16 rounded-full bg-[#E8B923]/10 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-8 h-8 text-[#E8B923]" />
                </div>
                <span className="inline-block font-display font-700 uppercase tracking-widest text-sm text-[#E8B923]">Request received</span>
                <h1 className="mt-5 font-display font-800 uppercase text-[#0F1C38] text-3xl md:text-4xl tracking-tight">
                  Thanks — we&apos;ve got it.
                </h1>
                <p className="mt-4 text-lg text-[#6B7280]">
                  A local Flagstaff agent will review your request and reach out the same
                  business day. We&apos;ll help you protect your home, car, or business here in
                  Northern Arizona — no pressure, no out-of-state call center.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/" className="btn-primary">
                    Back to Home
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <a href={SITE.phoneHref} className="btn-outline-navy">
                    <Phone className="h-5 w-5" />
                    Call {SITE.phone}
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
