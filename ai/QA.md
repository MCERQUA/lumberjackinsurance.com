# QA Report — lumberjackinsurance.com

**Build date:** 2026-06-17
**Site:** Logging & Forestry Contractor Insurance (by Contractors Choice Agency)

## Build status
- `npm run build` → **EXIT 0** ✓
- 26 routes generated (static + SSG)
- Compiled in ~27s, type-checked clean

## Routes verified (production server `next start`)
All HTTP 200 unless noted:

| Route | Status | Notes |
|---|---|---|
| `/` | 200 | Homepage, 11 sections render, JSON-LD present |
| `/services` | 200 | 7 coverage lines, featured card (workers' comp) |
| `/services/loggers-workers-comp` | 200 | Deep-dive + 5 FAQs, InsuranceService schema |
| `/services/logging-truck-insurance` | 200 | ICC filings, cargo, bobtail content |
| `/services/logging-equipment-insurance` | 200 | Feller buncher/skidder/yarder content |
| `/services/forestry-timber-liability` | 200 | Loggers Broad Form / LCP content |
| `/services/sawmill-insurance` | 200 | Class 2710, kilns, equipment breakdown |
| `/services/logging-pollution-liability` | 200 | Spills, erosion, wetlands |
| `/services/tree-service-arborist-insurance` | 200 | Class 9102/0106 |
| `/blog` | 200 | 5 posts, featured + grid |
| `/blog/[slug]` × 5 | 200 | BlogPosting + Breadcrumb schema |
| `/quote` | 200 | Netlify form, webhook, honeypot, 9 fields |
| `/contact` | 200 | Netlify form, webhook, honeypot |
| `/about` | 200 | Founder note, stats, about points |
| `/coverage` | 200 | All 50 states + monopolistic fund callout |
| `/privacy` | 200 | Full privacy policy |
| `/terms` | 200 | Full terms of use |
| `/sitemap.xml` | 200 | Static + service + blog URLs |
| `/robots.txt` | 200 | Allows all, points to sitemap |
| `/llms.txt` | 200 | Full LLM manifest |
| `/nonexistent` | 404 | Custom 404 page renders |

## Content sanity
- Homepage strings present: "Logging Insurance", "written for the woods", "Class 2702", "Get a Free Quote"
- Workers' comp service page: class code 2702/2710/2712, EMOD, Tigercat reference — all present
- Niche-accurate terminology confirmed: class codes, EMOD, Loggers Broad Form/LCP, ICC/MC Form E & Form H, monopolistic funds, SAIF

## Images (10 generated)
All in `public/images/`, all valid JPEGs (FLUX.1-schnell via HuggingFace, Gemini quota exhausted 429):
hero, og-image, workers-comp, log-truck, logging-equipment, general-liability, sawmill, forest-tract, pollution-erosion, quote-cta.

## Forms
- **Quote form** (`/quote`): `name="quote"`, `data-netlify="true"`, honeypot `bot-field`, hidden `form-name`, fetch-to-webhook (lumberjackinsurance.com tenant). 9 fields (name, businessName, email, phone, state, serviceType, crewSize, currentCoverage, message).
- **Contact form** (`/contact`): `name="contact"`, same Netlify attrs + webhook. 5 fields.
- **Static declarations** in `public/__forms.html` for Netlify build-time detection.
- **`netlify.toml`**: `[[notifications]]` blocks for both `quote` and `contact` forms → webhook.

## SEO
- Per-page title/meta descriptions, canonicals, OG + Twitter cards
- JSON-LD: InsuranceAgency (site-wide in layout), InsuranceService (each service), FAQPage (homepage + each service), BlogPosting (each post), BreadcrumbList (services + blog)
- `sitemap.xml` (metadata route) — 21 URLs
- `robots.txt` (metadata route) — allows all, sitemap reference
- `llms.txt` — full manifest with coverage lines, blog guides, contact
- Heading hierarchy: single H1 per page, semantic H2/H3

## Design
- LIGHT theme (mandatory override of dark workspace defaults)
- Palette: hunter green `#14532d` primary, rust `#9a3412` accent, off-white `#faf8f4` background, charcoal-green `#1f2a22` text
- Typography: Fraunces (display) + Inter (body) — distinct from sibling sites
- Rugged-forestry motifs: topo contour lines, log growth rings, timber grain, pine-divider, forest-gradient CTA bands
- Responsive: mobile-first, sticky nav with mobile menu
- Interactive: motion scroll-reveals (FadeIn/Stagger), lenis smooth scroll, animated counters, FAQ accordion, hover lifts

## Animations / interaction
- `motion/react` scroll reveals on every section (FadeIn, StaggerChildren)
- `lenis` smooth scroll root wrapper
- Animated stat counters
- FAQ accordion (homepage + each service page)
- Hover lift on all cards, gradient text on headings
- `prefers-reduced-motion` respected throughout

## Stack
- Next.js 15.5.19 (App Router), React 19, TypeScript, Tailwind v3, `@tailwindcss/typography`
- `@next/mdx` + `@mdx-js/loader` + `@mdx-js/react` wired (`pageExtensions: ["ts","tsx","md","mdx"]`, `mdx-components.tsx` at root)
- Blog via gray-matter + reading-time + custom dependency-free markdown→HTML renderer (matches tucsonfoam gold-standard pattern)
- `motion` ^12, `lenis` ^1.3, `lucide-react` ^0.500, clsx, tailwind-merge, class-variance-authority

## Known notes
- DataForSEO Labs refresh deferred (API returned 529 overload during batch); existing keyword/competitor data retained as accurate (reviewed + stamped 2026-06-17).
- Image generation used HuggingFace FLUX.1-schnell fallback (Gemini quota exhausted with 429). All 10 images generated successfully on first attempt.
