# Design System — lumberjackinsurance.com
## "Rugged Forest Professional" (LIGHT)

Distinct from every sibling site in the 2026-06-17 batch. Outdoorsy / forestry
heritage, but crisp, light and corporate — NOT dark, NOT rustic-clipart.

## Palette (exact hex + HSL tokens in globals.css)
| Token | Hex | Use |
|---|---|---|
| background (paper) | `#FAF8F2` | page bg — warm birch/paper |
| card | `#FFFFFF` | cards, form fields, nav |
| secondary (sand) | `#F1ECDD` | subtle bands, hover surfaces |
| muted | `#EDE8DB` | chips, dividers |
| primary (deep pine) | `#1F4A33` | headings accent, buttons, CTA bands |
| accent (timber copper) | `#B8682A` | highlights, rules, icons, links hover |
| foreground (ink) | `#161C17` | body text (warm near-black) |
| muted-foreground | `#5C6B5C` | secondary text (sage gray) |
| border | `#E3DCC9` | hairlines |

Brand ramp helpers: `forest-50..900`, `timber-50..900`, `paper.{warm,sand,ink}`.

## Typography
- **Display / headings:** *Fraunces* (variable, optical sizing; weights 400–900,
  incl. italic). Warm high-contrast serif → "heritage timber company" editorial feel.
- **Body / UI:** *Inter**. Neutral, highly legible.
- Headings use tight tracking (-0.018em). Eyebrow labels: Inter, uppercase, 0.18em tracking.

## Motif / shape language
- **Topographic contour lines** faint in hero/section backgrounds (`.bg-topo`).
- **Timber grain** subtle vertical texture on bands (`.bg-grain`).
- **Forestry stamp badges** for trust elements (licensed/est. badge).
- **Thin copper rules** as section dividers; rounded `xl` cards with soft warm shadow.
- **Forest-gradient CTA bands** (`.bg-forest-gradient`) for contrast moments.
- Buttons: solid pine, copper hover ring; secondary: outlined ink.

## Imagery
Real generated photography: PNW forest / logging operation, logging truck on
forest road, feller buncher / skidder in stand, sawmill yard, crew in PPE.
Treatment: natural daylight, slightly muted greens, professional (not stock-cheesy).
No emoji. Icons = `lucide-react` inline SVG only.

## Motion
- `lenis` smooth scroll (root), `motion` scroll-reveals (FadeIn/Stagger),
  animated counters for stats, hover lift on cards, FAQ accordion.
- Respects `prefers-reduced-motion`.

## Conversion (local-service CRO rules applied)
- Sticky nav: phone number always visible (tel: link) + "Get a Quote".
- Hero: service + value prop + primary CTA + trust bar (licensed 50 states, 20+ yrs, 2-hr claims).
- Quote form: ≤ sensible fields, multi-step feel, 15-min turnaround promise.
