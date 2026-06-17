import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Compile .mdx files as routes/pages
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // Required for JamBot canvas iframe embedding (cross-origin dev server)
  allowedDevOrigins: ["*.jam-bot.com"],
  images: {
    remotePatterns: [
      // Add client's image CDN or CMS domain here if needed
    ],
  },
};

// MDX wrapper — allows `@next/mdx` to compile .mdx content files.
// (Blog posts are still parsed with gray-matter + rendered to HTML via
// src/lib/markdown.ts; this wiring lets us author MDX generally and
// keeps the build standard-aligned.)
const withMDX = createMDX({
  // Add remark/rehype plugins here if needed
  options: {},
});

export default withMDX(nextConfig);
