import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const nextConfig: NextConfig = {
  // Static HTML export — required so Netlify Forms POSTs are captured.
  // The @netlify/plugin-nextjs runtime intercepts and silently drops form
  // POSTs; a static `out/` deploy lets Netlify's form handler record them.
  output: "export",
  // Pin the file-tracing root to this project — sibling sites under
  // /workspace/Websites share a parent lockfile, which otherwise makes
  // Next infer the wrong workspace root.
  outputFileTracingRoot: dirname(fileURLToPath(import.meta.url)),
  // Required for JamBot canvas iframe embedding (cross-origin dev server)
  allowedDevOrigins: ["*.jam-bot.com"],
  images: {
    // Static export has no image optimization server.
    unoptimized: true,
    remotePatterns: [
      // Add client's image CDN or CMS domain here if needed
    ],
  },
};

export default nextConfig;
