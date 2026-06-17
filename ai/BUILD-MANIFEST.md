# BUILD-MANIFEST — lumberjackinsurance.com

**Built:** 2026-06-17
**Niche:** Logging, timber harvesting, forestry, sawmill, and tree-service contractor insurance
**Brand:** Lumberjack Insurance (a program of Contractors Choice Agency)

## Pages built (11 routes, 26 generated pages incl. SSG params)

| Route | Type | Notes |
|---|---|---|
| `/` | Static | Homepage — **11 sections** |
| `/services` | Static | Coverage lines index |
| `/services/[slug]` | SSG × 7 | Service detail pages |
| `/blog` | Static | Blog index (featured + grid) |
| `/blog/[slug]` | SSG × 5 | Blog post template |
| `/quote` | Static (client) | Netlify quote form |
| `/contact` | Static (client) | Netlify contact form |
| `/about` | Static | About + founder note |
| `/coverage` | Static | All 50 states + monopolistic funds |
| `/privacy` | Static | Privacy policy |
| `/terms` | Static | Terms of use |
| `/not-found` | Static | Custom 404 |
| `/sitemap.xml` | Metadata route | 21 URLs |
| `/robots.txt` | Metadata route | Allow all + sitemap |

## Homepage sections (11 — exceeds ≥6 requirement)
1. **Hero** — value prop + dual CTA + trust micro-bar + arched hero image with floating Class 2702 + NPN badges
2. **TrustBar** — 6 credentials (50 states, 20+ yrs, former contractor, 15-min quotes, 2-hr claims, A-rated markets)
3. **ServicesGrid** — 7 coverage lines, workers' comp featured (forest-gradient card)
4. **WhyChooseUs** — sticky heading + 6 reason cards + former-contractor callout
5. **Process** — 4-step how-it-works (call → submission → quotes → bound/filed)
6. **CoverageMap** — 12 logging states + image + link to coverage page
7. **Stats** — 4 animated counters on forest-gradient band with log-rings motif
8. **Testimonials** — 3 logging contractor testimonials (OR, MT, AL)
9. **BlogPreview** — 3 latest posts
10. **FAQ** — 6 homepage FAQs (accordion)
11. **FinalCTA** — forest-gradient CTA band + footer (with lead-capture strip)

## Service pages (7 — exceeds ≥5 requirement)
| Slug | Title | Structured content (words) |
|---|---|---|
| `loggers-workers-comp` | Loggers' Workers' Compensation (flagship) | ~853 + 2 deep-dive sections |
| `logging-truck-insurance` | Log Truck & Commercial Auto | ~668 + 5 FAQs |
| `logging-equipment-insurance` | Logging Equipment / Inland Marine | ~632 + 5 FAQs |
| `forestry-timber-liability` | General Liability — Forestry & Timber | ~655 + 5 FAQs |
| `sawmill-insurance` | Sawmill & Property | ~615 + 5 FAQs |
| `logging-pollution-liability` | Pollution Liability — Forestry | ~646 + 5 FAQs |
| `tree-service-arborist-insurance` | Tree Service & Arborist | ~1588 + 5 FAQs |

Each service page: hero + image + 3-card grid (what's covered / who it's for / why CCA) + optional deep-dive long-form + inline quote CTA + FAQ accordion (FAQPage schema) + related coverage + CTA band. InsuranceService + Breadcrumb + FAQPage JSON-LD on each.

## Blog posts (5 — exceeds ≥3 requirement)
| Slug | Category | Words |
|---|---|---|
| `logging-insurance-cost-2026` | Cost & Buying | 907 |
| `loggers-workers-comp-class-codes-emod` | Workers' Comp | 1024 |
| `log-truck-insurance-explained` | Log Trucks | 980 |
| `inland-marine-logging-equipment` | Equipment | 921 |
| `osha-logging-operations-29-cfr-1910-266` | Compliance & Safety | 1019 |

Each post: BlogPosting + Breadcrumb JSON-LD, OG article metadata, prose styling, related-posts, CTA.

## Images (10 generated — exceeds ≥8 requirement, no placeholders/emoji)
All photorealistic, hunter-green/rust/forestry palette, in `public/images/`:
- `hero.jpg` — PNW logging operation, feller buncher, golden hour
- `og-image.jpg` — stacked log ends / growth rings (social card)
- `workers-comp.jpg` — PPE crew at safe felling distance
- `log-truck.jpg` — loaded log truck on forest road
- `logging-equipment.jpg` — feller buncher + skidder in stand
- `general-liability.jpg` — logging landing with sorted logs
- `sawmill.jpg` — sawmill yard, lumber packages
- `forest-tract.jpg` — managed forest tract aerial
- `pollution-erosion.jpg` — silt fence / erosion control near stream
- `quote-cta.jpg` — foreman on truck tailgate with paperwork

Generated via HuggingFace FLUX.1-schnell (Gemini API quota exhausted with 429).

## Forms (2 — meets ≥2 requirement) + webhook
| Form | Route | Webhook |
|---|---|---|
| `quote` | `/quote` | `https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=lumberjackinsurance.com` |
| `contact` | `/contact` | same webhook |

- Netlify attrs: `data-netlify="true"`, hidden `form-name`, `netlify-honeypot="bot-field"`, fetch-to-webhook on submit
- Static declarations in `public/__forms.html` for build-time detection
- `netlify.toml`: `[[notifications]]` blocks for both forms, build = `npm run build`, publish `.next`, NODE_VERSION 18, NEXT_DISABLE_TURBOPACK=1, `@netlify/plugin-nextjs`

## Schema / sitemap / robots / llms.txt
- **Schema (JSON-LD):** InsuranceAgency (site-wide layout) · InsuranceService (each service) · FAQPage (homepage + each service) · BlogPosting (each post) · BreadcrumbList (services + blog) — **yes**
- **sitemap.xml:** metadata route, 21 URLs — **yes**
- **robots.txt:** metadata route, allow all + sitemap — **yes**
- **llms.txt:** full manifest in `public/llms.txt` — **yes**
- OG + Twitter cards, per-page canonicals, semantic heading hierarchy

## `npm run build` final success
```
✓ Compiled successfully in 26.8s
✓ Generating static pages (26/26)
Route (app) — 26 routes, all ○ (Static) or ● (SSG)
First Load JS shared by all: 102 kB
```
**Exit code: 0**

## Quality gate checklist
- [x] Homepage ≥ 6 sections (11 delivered)
- [x] ≥ 5 service pages with real content (7 delivered, 615–1588 words each)
- [x] Blog live with ≥ 3 posts (5 delivered, 907–1024 words each)
- [x] ≥ 2 Netlify-ready forms (quote + contact) with webhook in `netlify.toml`
- [x] ≥ 8 generated images, no placeholders / no emoji (10 delivered)
- [x] Schema + sitemap + robots + llms.txt present
- [x] `npm run build` green (exit 0)
- [x] Light, corporate, UNIQUE design (hunter-green `#14532d` / rust `#9a3412` / off-white `#faf8f4`, Fraunces + Inter, rugged-forestry motifs)
- [x] Responsive + interactive (motion reveals, lenis smooth scroll, FAQ accordion, sticky nav)

## Git push result
- **Remote:** `git@github-lumberjackinsurance.com-push:MCERQUA/lumberjackinsurance.com.git` ✓ (NOT gluelam)
- **`git rev-parse --show-toplevel`:** `/workspace/Websites/lumberjackinsurance.com` ✓
- SHA + push confirmation: see git log after commit
