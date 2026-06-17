import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Lumberjack Insurance website.",
  alternates: { canonical: `${SITE.url}/terms` },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-warm-radial-sand pt-32 pb-20 md:pt-40">
          <div className="container-tight max-w-3xl">
            <FadeIn>
              <span className="pill-accent">Legal</span>
              <h1 className="mt-5 font-display font-semibold text-foreground text-4xl md:text-5xl tracking-tight">
                Terms of Use
              </h1>
              <p className="mt-3 text-sm text-muted-foreground">Last updated: June 17, 2026</p>

              <div className="prose-paper prose-warm mt-10">
                <p>
                  These terms govern your use of lumberjackinsurance.com (the &ldquo;Site&rdquo;),
                  operated by Contractors Choice Agency (&ldquo;CCA,&rdquo; &ldquo;we,&rdquo;
                  &ldquo;us&rdquo;). By using the Site, you agree to these terms.
                </p>

                <h2>License to use</h2>
                <p>
                  You may view, download, and print content from this Site for your personal,
                  non-commercial use. You may not republish, redistribute, or otherwise
                  commercially exploit the content without our written permission.
                </p>

                <h2>No insurance advice or quote</h2>
                <p>
                  The content on this Site is provided for general informational purposes only and
                  does not constitute insurance advice, a quote, an offer of coverage, or a binding
                  indication. Insurance coverage is subject to the terms, conditions, and
                  underwriting requirements of the issuing carrier. A quote is only an offer of
                  coverage once issued in writing by a licensed agent and accepted by you with
                  payment of premium.
                </p>

                <h2>Quotes and submissions</h2>
                <p>
                  Submitting a quote request or contact form through this Site does not guarantee
                  coverage. We use the information you provide to seek quotes from insurance
                  markets and to contact you about your insurance needs. Quote turnarounds and
                  claims response times are service goals, not contractual guarantees, unless
                  otherwise stated in a bound policy.
                </p>

                <h2>Professional licensing</h2>
                <p>
                  Contractors Choice Agency is a licensed insurance agency (NPN #{SITE.npn}),
                  licensed to transact insurance in all 50 states. Insurance products are
                  underwritten by unaffiliated third-party insurance carriers.
                </p>

                <h2>Disclaimer of warranties</h2>
                <p>
                  The Site and its content are provided &ldquo;as is&rdquo; without warranties of
                  any kind, express or implied, including accuracy, completeness, or fitness for a
                  particular purpose.
                </p>

                <h2>Limitation of liability</h2>
                <p>
                  To the maximum extent permitted by law, CCA shall not be liable for any
                  indirect, incidental, or consequential damages arising from your use of, or
                  inability to use, the Site.
                </p>

                <h2>Third-party links</h2>
                <p>
                  This Site may contain links to third-party websites. We are not responsible for
                  the content or practices of those sites.
                </p>

                <h2>Governing law</h2>
                <p>
                  These terms are governed by the laws of the State of Arizona, without regard to
                  its conflict-of-law principles.
                </p>

                <h2>Contact</h2>
                <p>
                  Contractors Choice Agency<br />
                  {SITE.address.street}<br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}<br />
                  Phone: {SITE.phone} · Email: {SITE.email}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
