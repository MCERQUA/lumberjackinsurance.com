import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight, TreePine } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-topo pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="container-tight text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-forest-gradient text-white mb-6 shadow-card">
              <TreePine className="h-8 w-8" strokeWidth={2.2} />
            </div>
            <p className="font-display font-semibold text-7xl md:text-8xl bg-gradient-to-r from-primary via-forest-500 to-accent bg-clip-text text-transparent leading-none">
              404
            </p>
            <h1 className="mt-5 font-display font-semibold text-foreground text-3xl md:text-4xl tracking-tight">
              This trail runs cold.
            </h1>
            <p className="mt-4 lead max-w-lg mx-auto">
              The page you&apos;re looking for isn&apos;t here — but the logging insurance you need
              is. Head back to the homepage or start a quote.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/" className="btn-primary">
                Back to home
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/quote" className="btn-secondary">Get a quote</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
