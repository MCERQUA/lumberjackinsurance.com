import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const nextConfig: NextConfig = {
  // Pin the file-tracing root to this project — sibling sites under
  // /workspace/Websites share a parent lockfile, which otherwise makes
  // Next infer the wrong workspace root.
  outputFileTracingRoot: dirname(fileURLToPath(import.meta.url)),
  // Required for JamBot canvas iframe embedding (cross-origin dev server)
  allowedDevOrigins: ["*.jam-bot.com"],
  images: {
    remotePatterns: [
      // Add client's image CDN or CMS domain here if needed
    ],
  },
};

export default nextConfig;
