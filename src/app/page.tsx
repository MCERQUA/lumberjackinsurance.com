import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
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
        q: "Do you cover homes in Flagstaff's high country and pine forests?",
        a: "Absolutely. We live up here too, so we know ponderosa pines, wildfire risk, heavy snow loads, and high-country cabins. We'll shop local and regional carriers to get your Flagstaff or Northern Arizona home properly covered.",
      },
      {
        q: "Can you bundle my home and auto?",
        a: "Yes — bundling home and auto is one of the easiest ways to save, and we handle it all in one quick conversation. We'll compare carriers and find the bundle that fits your high-country life.",
      },
      {
        q: "Do you write renters and landlord policies in Northern Arizona?",
        a: "We do. Whether you're renting a place in Flagstaff, Sedona, or Prescott, or you own a rental property across Northern Arizona, we write both renters and landlord coverage — just give your local agent a call.",
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
        <Stats />
        <Process />
        <BlogPreview posts={posts} />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
