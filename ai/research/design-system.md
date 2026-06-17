# Design System — lumberjackinsurance.com
## "Rugged Forest Professional" (LIGHT)

Distinct from every sibling site in the 2026-06-17 batch. Outdoorsy / forestry
heritage, but crisp, light and corporate — NOT dark, NOT rustic-clipart.

## Palette (exact hex + HSL tokens in globals.css)
| Token | Hex | Use |
|---|---|---|
| background (paper) | `#FAF8F4` | page bg — warm birch/paper |
| card | `#FFFFFF` | cards, form fields, nav |
| paper-warm | `#F4F0E7` | subtle bands, hover surfaces |
| paper-sand | `#EBE6D8` | chips, dividers |
| **primary (hunter green)** | `#14532D` | headings accent, buttons, CTA bands |
| primary-dark | `#0F3F22` | gradients (deeper forest) |
| **accent (rust / timber copper)** | `#9A3412` | highlights, rules, icons, links hover |
| accent-light | `#D27D4F` | hover / lighter rust |
| foreground (ink) | `#1F2A22` | body text (warm charcoal-green) |
| muted-foreground | `#5B6B5F` | secondary text (sage gray) |
| border | `#E6E0D1` | hairlines (warm) |

Brand ramp helpers: `forest-50..900` (hunter green), `rust-50..900`, `paper.{warm,sand,ink}`.

## Typography
- **Display / headings:** *Fraunces* (variable, optical sizing; weights 400–900,
  incl. italic). Warm high-contrast serif → "heritage timber company" editorial feel.
  Distinct from the all-sans sister sites while staying professional and light.
- **Body / UI:** *Inter*. Neutral, highly legible workhorse.
- Headings use tight tracking (-0.018em). Eyebrow labels: Inter, uppercase, 0.18em tracking.

## Motif / shape language
- **Topographic contour lines** faint in hero/section backgrounds (`.bg-topo`).
- **Concentric timber-log growth rings** (`.bg-log-rings`) — signature motif.
- **Timber grain** subtle vertical texture on bands (`.bg-grain`).
- **Forestry stamp badges** for trust elements (licensed/est. badge).
- **Thin rust rules** as section dividers; rounded `xl` cards with soft warm shadow.
- **Forest-gradient CTA bands** (`.bg-forest-gradient`) for contrast moments.
- **Pine-chevron / bucksaw divider** (`.pine-divider`).
- Buttons: solid hunter green, rust hover ring; secondary: outlined ink; accent: rust.

## Imagery
Real generated photography (FLUX.1-schnell): PNW forest / logging operation,
logging truck on forest road, feller buncher / skidder in stand, sawmill yard,
crew in PPE, erosion control near water. Treatment: natural daylight, slightly
muted greens and warm wood tones, professional editorial (not stock-cheesy).
10 images in `public/images/`. No emoji. Icons = `lucide-react` inline SVG only.

## Motion
- `lenis` smooth scroll (root), `motion` scroll-reveals (FadeIn/Stagger),
  animated counters for stats, hover lift on cards, FAQ accordion.
- Respects `prefers-reduced-motion`.

## Conversion (local-service CRO rules applied)
- Sticky nav: phone number always visible (tel: link) + "Get a Quote".
- Hero: service + value prop + primary CTA + trust bar (licensed 50 states, 20+ yrs, 2-hr claims).
- Quote form: sensible fields, 15-min turnaround promise, honeypot + Netlify attrs + webhook.
