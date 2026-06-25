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

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
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
