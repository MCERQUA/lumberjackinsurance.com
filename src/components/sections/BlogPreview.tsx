"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import type { Post } from "@/lib/blog";

export function BlogPreview({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) return null;
  const [featured, ...rest] = posts;
  const display = rest.slice(0, 2);

  return (
    <section id="blog" className="relative bg-warm-radial-sand py-20 md:py-28">
      <div className="container-wide">
        <FadeIn className="max-w-3xl mb-12">
          <span className="eyebrow">
            <span className="h-px w-8 bg-accent" />
            From the logging desk
          </span>
          <h2 className="mt-3 h-section">
            Guides on the coverage that{" "}
            <span className="text-accent">actually matters to loggers</span>.
          </h2>
          <p className="mt-4 lead">
            Class codes, EMOD strategy, log truck filings, equipment claims —
            plain-English breakdowns of the policies that keep a logging operation
            running.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Featured */}
          {featured && (
            <FadeIn className="md:col-span-1">
              <Link href={`/blog/${featured.slug}`} className="group block h-full">
                <article className="rounded-3xl overflow-hidden bg-white border border-border shadow-card hover:shadow-lift transition-all h-full flex flex-col">
                  <div className="h-2 bg-forest-gradient" />
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="px-2.5 py-0.5 bg-primary/10 text-primary rounded-md font-body font-semibold">
                        {featured.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />{featured.readTime}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-lg leading-tight group-hover:text-accent transition-colors line-clamp-3">
                      {featured.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-grow">
                      {featured.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-body font-bold text-accent group-hover:gap-2 transition-all">
                      Read <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </article>
              </Link>
            </FadeIn>
          )}

          {display.map((post, i) => (
            <FadeIn key={post.slug} delay={0.08 * (i + 1)}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="rounded-3xl overflow-hidden bg-white border border-border shadow-card hover:shadow-lift transition-all h-full flex flex-col">
                  <div className="h-2 bg-accent/60" />
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="px-2.5 py-0.5 bg-accent/10 text-accent rounded-md font-body font-semibold">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />{post.readTime}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-lg leading-tight group-hover:text-accent transition-colors line-clamp-3">
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

        <FadeIn className="mt-10 text-center">
          <Link href="/blog" className="btn-secondary">
            All articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
