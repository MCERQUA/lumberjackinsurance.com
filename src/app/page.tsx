import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { CoverageMap } from "@/components/sections/CoverageMap";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getAllPosts } from "@/lib/blog";
import { SITE } from "@/lib/site";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        q: "Is logging really that dangerous to insure?",
        a: "Yes — logging is consistently ranked among the most dangerous jobs in America. We work with A-rated specialty markets that underwrite logging class codes.",
      },
      {
        q: "What does a logging insurance program cost?",
        a: "It depends on payroll, equipment value, truck count, and loss history. The fastest way to a real number is a 15-minute call.",
      },
      {
        q: "Can you write coverage if my EMOD is above 1.0?",
        a: "Yes. We have access to specialty excess-and-surplus markets and group self-insurance funds that write climbing-mod operators.",
      },
    ].map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <WhyChooseUs />
        <Process />
        <CoverageMap />
        <Stats />
        <Testimonials />
        <BlogPreview posts={posts} />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
