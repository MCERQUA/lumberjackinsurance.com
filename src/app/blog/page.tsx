import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { getAllPosts } from "@/lib/blog";
import { SITE } from "@/lib/site";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Logging Insurance Blog — Guides & Insights",
  description:
    "Practical insurance guidance for logging and timber contractors: workers' comp class codes, log truck insurance, equipment coverage, forestry pollution, and sawmill programs.",
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: {
    title: "Logging Insurance Blog | Lumberjack Insurance",
    description:
      "Expert guides on logging workers' comp class codes, log truck insurance, equipment coverage, and forestry pollution liability.",
    url: `${SITE.url}/blog`,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main>
        <section className="relative bg-topo pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="container-tight text-center">
            <FadeIn>
              <span className="pill-accent">Blog &amp; insights</span>
              <h1 className="mt-5 font-display font-semibold text-foreground text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Logging insurance,{" "}
                <span className="bg-gradient-to-r from-primary via-forest-500 to-accent bg-clip-text text-transparent">
                  decoded
                </span>
              </h1>
              <p className="mt-5 lead max-w-2xl mx-auto">
                Plain-English guides on the coverage that matters for loggers — class
                codes, EMOD strategy, log truck filings, equipment claims, and pollution.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="bg-background py-12 md:py-16">
          <div className="container-wide">
            {posts.length === 0 ? (
              <p className="text-center text-muted-foreground py-16">Articles coming soon.</p>
            ) : (
              <>
                {featured && (
                  <FadeIn className="mb-12">
                    <Link href={`/blog/${featured.slug}`} className="group block">
                      <article className="grid md:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden bg-white border border-border shadow-card hover:shadow-lift transition-all">
                        <div className="relative overflow-hidden">
                          <img
                            src={featured.image || "/images/forest-tract.jpg"}
                            alt={featured.title}
                            className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="pill !bg-accent !text-white !border-accent-light">Featured</span>
                          </div>
                        </div>
                        <div className="p-8 md:p-10 flex flex-col justify-center">
                          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                            <span className="px-2.5 py-0.5 bg-primary/10 text-primary rounded-md font-body font-semibold">
                              {featured.category}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              {new Date(featured.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {featured.readTime}
                            </span>
                          </div>
                          <h2 className="font-display font-semibold text-foreground text-2xl md:text-3xl leading-tight group-hover:text-accent transition-colors">
                            {featured.title}
                          </h2>
                          <p className="mt-3 text-muted-foreground leading-relaxed">{featured.description}</p>
                          <span className="mt-5 inline-flex items-center gap-1 text-accent font-body font-bold group-hover:gap-2 transition-all">
                            Read article <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </article>
                    </Link>
                  </FadeIn>
                )}

                <div className="grid md:grid-cols-3 gap-6">
                  {rest.map((post, i) => (
                    <FadeIn key={post.slug} delay={i * 0.08}>
                      <Link href={`/blog/${post.slug}`} className="group block h-full">
                        <article className="rounded-3xl overflow-hidden bg-white border border-border shadow-card hover:shadow-lift transition-all h-full flex flex-col">
                          <div className="h-2 bg-forest-gradient" />
                          <div className="p-6 flex-grow flex flex-col">
                            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                              <span className="px-2.5 py-0.5 bg-primary/10 text-primary rounded-md font-body font-semibold">
                                {post.category}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />{post.readTime}
                              </span>
                            </div>
                            <h3 className="font-display font-semibold text-foreground text-lg leading-tight group-hover:text-accent transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-grow">
                              {post.description}
                            </p>
                            <span className="mt-4 inline-flex items-center gap-1 text-sm font-body font-bold text-accent group-hover:gap-2 transition-all">
                              Read <ArrowRight className="h-4 w-4" />
                            </span>
                          </div>
                        </article>
                      </Link>
                    </FadeIn>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        <CTABand
          title="Have a coverage question we didn't answer?"
          description="Get a straight answer — and a real quote — in about 15 minutes."
        />
      </main>
      <Footer />
    </>
  );
}
