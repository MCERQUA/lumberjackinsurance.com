import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, TreePine } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-[#F4F4F4] pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="container-tight text-center">
            <FadeIn>
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#0F1C38] text-[#E8B923] mb-6 shadow-card">
                <TreePine className="h-8 w-8" strokeWidth={2.2} />
              </div>
              <p className="font-display font-800 text-7xl md:text-8xl text-[#E8B923] leading-none drop-shadow-[0_0_22px_rgba(232,185,35,0.35)]">
                404
              </p>
              <h1 className="mt-5 font-display font-800 uppercase text-[#0F1C38] text-3xl md:text-4xl tracking-tight">
                This trail runs cold.
              </h1>
              <p className="mt-4 text-lg text-[#6B7280] max-w-lg mx-auto">
                The page you&apos;re looking for isn&apos;t here — but your Flagstaff insurance
                coverage is. Head back to the homepage or start a quote.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/" className="btn-primary">
                  Back to home
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/quote" className="btn-outline-navy">Get a quote</Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
