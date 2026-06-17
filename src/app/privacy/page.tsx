import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Lumberjack Insurance and how we handle your information.",
  alternates: { canonical: `${SITE.url}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-warm-radial-sand pt-32 pb-20 md:pt-40">
          <div className="container-tight max-w-3xl">
            <FadeIn>
              <span className="pill-accent">Legal</span>
              <h1 className="mt-5 font-display font-semibold text-foreground text-4xl md:text-5xl tracking-tight">
                Privacy Policy
              </h1>
              <p className="mt-3 text-sm text-muted-foreground">Last updated: June 17, 2026</p>

              <div className="prose-paper prose-warm mt-10">
                <p>
                  Lumberjack Insurance (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) is a
                  logging and forestry insurance program operated by Contractors Choice Agency
                  (&ldquo;CCA&rdquo;). This policy explains how we collect, use, and protect
                  information you provide through lumberjackinsurance.com.
                </p>

                <h2>Information we collect</h2>
                <p>
                  We collect the information you voluntarily provide when you request a quote,
                  contact us, or otherwise interact with our site. This typically includes your
                  name, business name, email address, phone number, state of operation, and
                  details about your logging operation you choose to share (crew size, equipment,
                  current coverage). We may also collect limited technical information (such as IP
                  address and browser type) for security and analytics.
                </p>

                <h2>How we use your information</h2>
                <ul>
                  <li>To prepare insurance quotes and respond to your inquiries.</li>
                  <li>To communicate with you about coverage, policies, endorsements, and claims.</li>
                  <li>To provide certificates of insurance and filings required by your contracts.</li>
                  <li>To improve our website, services, and the quotes we provide.</li>
                  <li>To comply with legal and regulatory obligations as a licensed insurance agency.</li>
                </ul>

                <h2>How we share your information</h2>
                <p>
                  We share your information with insurance carriers, wholesale brokers, and
                  underwriting markets for the purpose of quoting and binding coverage; with
                  lenders or contract counterparties when you request a certificate or filing; and
                  with service providers (such as our website host and form-processing vendors)
                  who help us operate this site. We do not sell your personal information.
                </p>

                <h2>Cookies and analytics</h2>
                <p>
                  Our site may use cookies and standard analytics to understand how visitors use
                  the site and to improve it. You can control cookies through your browser
                  settings. Quote and contact forms are processed through Netlify and a secure
                  webhook to our internal lead system.
                </p>

                <h2>Data retention</h2>
                <p>
                  We retain the information you provide for as long as necessary to provide
                  quotes and service, and as required by insurance licensing and recordkeeping
                  rules.
                </p>

                <h2>Your rights</h2>
                <p>
                  Depending on your state of residence, you may have rights to access, correct, or
                  request deletion of your personal information. To exercise any of these rights,
                  contact us at {SITE.email} or {SITE.phone}.
                </p>

                <h2>Contact</h2>
                <p>
                  Contractors Choice Agency<br />
                  {SITE.address.street}<br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}<br />
                  Phone: {SITE.phone} · Email: {SITE.email}
                </p>

                <p className="text-sm text-muted-foreground mt-8">
                  This privacy policy may be updated from time to time. Material changes will be
                  reflected by the &ldquo;last updated&rdquo; date above.
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
