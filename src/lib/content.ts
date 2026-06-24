// Detailed niche content for service pages, why-choose, process, FAQs.
// Niche: LOCAL Flagstaff, Arizona insurance agency (friendly lumberjack mascot).
// Personal + small-commercial lines for Flagstaff & Northern Arizona —
// home, auto, business, landlord, renters. Friendly, locally-flavored copy.

import {
  ShieldCheck, Home, Car, Building2, KeyRound,
  MapPin, Banknote, HeartPulse, Timer, BadgeCheck,
  PhoneCall, ClipboardList, Users,
} from "lucide-react";

// === Service detail (one per service slug) ===
export interface ServiceDetail {
  heroBlurb: string;
  whatsCovered: string[];
  whoItsFor: string[];
  whyCca: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  /** Optional long-form body sections (MD rendered) for depth, keyed by heading */
  deepDive?: { heading: string; body: string }[];
}

export const SERVICE_DETAIL: Record<string, ServiceDetail> = {
  "homeowners-insurance": {
    heroBlurb:
      "When you own a home at 7,000 feet beneath the San Francisco Peaks, your insurance has to understand mountain living the way you do — the ponderosas you love are also the wildfire fuel insurers worry about, and that first heavy snow can sit a long time on a Flagstaff roof. Lumberjack Insurance is your local Flagstaff agency, built for Northern Arizona homeowners who deal with real wildfire exposure, deep winter snow loads, and monsoon downpours every single year. As an independent agent we shop multiple carriers on your behalf — so when the fire-zone market gets tight, you have a real person fighting to keep you covered. Friendly as a flannel, serious about protecting your home.",
    whatsCovered: [
      "Dwelling coverage that rebuilds your home at altitude-adjusted replacement cost — not lowball market value",
      "Wildfire and smoke damage protection, with carriers that still write in ponderosa-forest and brush-exposed zones",
      "Winter snow-load and roof-collapse damage, including ice dams and the weight of a long Flagstaff snowpack",
      "Monsoon-season wind and hail damage to roofs, siding, windows, and skylights (July–September storms)",
      "Sudden water damage and water backup through drains and sump pumps after heavy rain or snowmelt",
      "Personal property coverage for your furniture, electronics, gear, and belongings, on or off the premises",
      "Personal liability if someone is injured on your property or you're held responsible for damage",
      "Loss of use / additional living expenses to pay for a hotel and meals if you're displaced during repairs",
      "Detached structures like garages, sheds, cabins, workshops, and barns on your lot",
      "Theft and vandalism coverage for primary homes, cabins, and seasonally vacant second homes",
    ],
    whoItsFor: [
      "Flagstaff and Northern Arizona homeowners who want a local agent, not an 800-number out of state",
      "Owners of older homes, historic downtown houses, and mountain cabins that need replacement-cost done right",
      "Anyone in or near the ponderosa forest with real wildfire and brush exposure who's worried about coverage",
      "Second-home and vacation-home owners whose property sits empty part of the year",
      "Homeowners who've been non-renewed or rate-shocked in the fire-zone hard market and need carriers re-shopped",
      "New buyers closing on a Flagstaff home who need a solid policy bound before move-in",
    ],
    whyCca: [
      {
        title: "We Shop, You Don't Settle",
        body: "As an independent agency we represent multiple carriers, not just one. When a single insurer non-renews or jacks your rate because you're in a fire zone, we re-shop the whole market to find someone who still wants your business. You get options instead of an ultimatum.",
      },
      {
        title: "We Actually Live Up Here",
        body: "We know what a Flagstaff winter does to a roof and what the Museum and Pipeline fires taught this community about defensible space. That local knowledge means we size your dwelling coverage for mountain rebuild costs and flag the exposures out-of-state agents miss. Your policy reflects how homes actually get damaged at 7,000 feet.",
      },
      {
        title: "A Real Person, Same Number",
        body: "Call 844-967-5247 and you reach people who handle Northern Arizona homes every day — at quote time, at renewal, and when you have a claim. We walk you through coverage in plain English and stay in your corner when it matters most. No phone-tree roulette, no being handed off across three states.",
      },
    ],
    faqs: [
      {
        q: "My insurer just non-renewed me because I'm in a wildfire zone. Can you still get me covered?",
        a: "Very often, yes. Flagstaff is in a hard market for fire-exposed homes, but different carriers draw their risk maps differently, so a property one company drops is still writable by another. As an independent agency we shop multiple carriers to find that fit, and we'll also point out defensible-space and home-hardening steps that can improve your eligibility and pricing.",
      },
      {
        q: "Does standard homeowners insurance cover snow and ice damage to my roof?",
        a: "Generally yes — damage from the sheer weight of ice and snow, and the structural collapse it can cause, is typically a covered peril on a homeowners policy. Ice dams that force water under shingles and into your home are usually covered too. We'll make sure your dwelling limit is high enough to actually rebuild a Flagstaff roof and confirm there are no surprise snow-related exclusions before you sign.",
      },
      {
        q: "What about monsoon damage — wind, hail, and flash flooding in July and August?",
        a: "Wind and hail damage from monsoon storms is normally covered under your homeowners policy, including roof, siding, and window damage. Sudden water intrusion from a storm-damaged roof is typically covered as well. Flash flooding that rises from the ground, however, requires separate flood insurance — homeowners policies exclude flood, so if you're near a wash or in a low spot, ask us about adding it.",
      },
      {
        q: "Why does my agent talk about replacement cost instead of what my home is worth?",
        a: "Market value is what someone would pay to buy your home; replacement cost is what it takes to rebuild it from the studs up — and at 7,000 feet, with mountain labor and material costs, rebuilding often costs more than the sale price. You want your dwelling coverage set to replacement cost so a total loss actually rebuilds your home. We calculate this for Flagstaff construction rather than guessing off a Zillow estimate.",
      },
      {
        q: "I own a cabin or second home that sits empty part of the year. Is that a problem?",
        a: "It can be, because vacant and seasonally unoccupied homes carry higher risk of undetected water leaks, freeze damage, theft, and vandalism — and some carriers restrict or surcharge them. The good news is we know which carriers write second homes and cabins comfortably, and we'll structure the policy around how often you're actually there. Simple steps like a monitored alarm or a freeze sensor can also help your rate.",
      },
    ],
    deepDive: [
      {
        heading: "Living With Wildfire Risk in the Ponderosa Forest",
        body: "The same ponderosa pines that make Flagstaff beautiful also make it one of Arizona's more wildfire-exposed places to own a home, and the Museum Fire and Pipeline Fire are recent reminders that the threat is real, not theoretical. Insurers have responded by tightening underwriting in forested and brush-exposed zones, which is why some longtime homeowners have seen non-renewals or steep increases through no fault of their own. The single most useful thing you can do is create and maintain defensible space — clearing brush, trimming branches away from the roof, and keeping the first few feet around your foundation lean — because many carriers now weigh this directly in their decisions. Home-hardening choices like a Class-A fire-rated roof, ember-resistant vents, and non-combustible siding can further improve both your eligibility and your premium. As an independent agency, we don't just hand you one company's verdict; we shop the market to find a carrier that still wants forest-zone homes and we help you present your property in its best light. The goal is simple: keep you continuously insured even as the fire-zone market keeps shifting.",
      },
      {
        heading: "What a Northern Arizona Winter Does to Your Policy",
        body: "Flagstaff routinely sees more snow than almost anywhere else in Arizona, and that snow has a way of staying on your roof through repeated freeze-thaw cycles all winter long. The two big risks are snow-load — the accumulated weight that can stress or collapse a roof — and ice dams, where snowmelt refreezes at the eaves and backs water up under the shingles and into your ceilings and walls. Both of these perils are generally covered on a well-built homeowners policy, but the coverage only helps if your dwelling limit is high enough to rebuild and your deductible fits your budget. We pay close attention to roof age, pitch, and construction when we place your policy, because those details drive both your risk and your rate. We'll also talk through practical prevention — attic insulation, proper ventilation, and clearing snow buildup — since fewer claims means more stable pricing over time. When the weather does cause damage, having a local agent who understands Flagstaff winters makes the claim conversation a whole lot smoother.",
      },
    ],
  },

  "auto-insurance": {
    heroBlurb:
      "Driving in Flagstaff means mountain grades, surprise spring snow on the way up Highway 89, and a stretch of I-17 down to Phoenix where the weather can flip three times in an hour. Lumberjack Insurance is your local Flagstaff agency, built for the everyday driver who deals with black ice, monsoon flash floods, and the occasional elk stepping onto the road at dusk. As an independent agent we shop multiple carriers to find you the right coverage at the right price — and we are a phone call away at 844-967-5247 when you need us.",
    whatsCovered: [
      "Liability coverage (bodily injury & property damage) that meets — and exceeds — Arizona's 25/50/15 minimums",
      "Collision coverage for fender-benders, spin-outs on icy switchbacks, and at-fault accidents",
      "Comprehensive coverage for elk and deer strikes, falling rocks, hail dents, and monsoon flood damage",
      "Uninsured & underinsured motorist coverage — critical protection given how many Arizona drivers carry no insurance",
      "Medical payments (MedPay) for you and your passengers regardless of fault",
      "Roadside assistance and towing built for remote forest roads around Williams, Sedona, and Page",
      "Rental reimbursement so you stay mobile while your vehicle is in the shop",
      "Gap coverage that pays the difference if a totaled car is worth less than your loan or lease balance",
      "Glass and windshield coverage for rock chips off I-40 gravel and winter sanding trucks",
      "Full-coverage and liability-only options tailored to your vehicle's age and value",
    ],
    whoItsFor: [
      "Flagstaff and Northern Arizona residents who drive mountain roads and winter weather year-round",
      "NAU students and staff commuting across town, up the hill, or home for the weekend",
      "Long-distance commuters running the I-17 Phoenix corridor or I-40 east toward Winslow",
      "Families who want higher-than-minimum limits and real protection against uninsured drivers",
      "Drivers in rural and forested areas where a breakdown means a long wait for a tow",
      "Anyone financing or leasing a newer vehicle who needs gap and full coverage",
    ],
    whyCca: [
      {
        title: "We Shop, You Save",
        body: "As an independent local agency, we are not tied to a single insurance company. We compare quotes across multiple top carriers to find the best fit for your driving, your vehicle, and your budget. When rates change, we re-shop so you are never overpaying.",
      },
      {
        title: "Local and Reachable",
        body: "We live and drive the same Flagstaff roads you do, so we understand mountain winters, elk season, and monsoon flooding firsthand. You get a real person who answers the phone at 844-967-5247 — not a call center reading from a script.",
      },
      {
        title: "Coverage Built for Up Here",
        body: "We know Arizona's minimum limits leave most drivers dangerously exposed, especially against the state's many uninsured motorists. We help you right-size comprehensive, collision, and uninsured-motorist coverage for the real hazards of Northern Arizona, not a one-size-fits-all checklist.",
      },
    ],
    faqs: [
      {
        q: "Does my insurance cover hitting an elk or deer?",
        a: "Yes — collisions with elk, deer, and other animals are covered under comprehensive coverage, not collision. This is exactly why we steer Northern Arizona drivers away from liability-only policies. Wildlife strikes are a genuine and costly hazard on roads around Flagstaff, especially at dawn and dusk, and comprehensive is what pays to repair or replace your vehicle.",
      },
      {
        q: "Is Arizona's 25/50/15 minimum coverage enough?",
        a: "It is the legal minimum, but it is rarely enough. A single serious accident on I-17 can easily produce medical and vehicle costs that blow past 25/50/15, leaving you personally on the hook for the rest. We almost always recommend higher liability limits plus strong uninsured/underinsured motorist coverage, which is affordable and protects you from Arizona's large pool of uninsured drivers.",
      },
      {
        q: "Do I need full coverage or is liability-only fine?",
        a: "If you are financing or leasing your vehicle, your lender will require full coverage (comprehensive plus collision). Even on a paid-off car, full coverage is worth considering up here, because hail, flooding, and wildlife strikes can total a vehicle without any other car being involved. We walk you through the trade-off based on your car's value and your budget.",
      },
      {
        q: "What happens if I break down on a remote forest road?",
        a: "Our roadside assistance and towing coverage is designed for exactly that — a flat or breakdown on a backroad near Williams, Sedona, or out toward Page where help is not around the corner. Coverage can include towing to the nearest qualified shop, fuel delivery, lockout service, and jump-starts. We will make sure the towing mileage limits actually match how far out you drive.",
      },
      {
        q: "Why use a local independent agent instead of buying online?",
        a: "An online quote shops one company; we shop several to find your best rate and the right coverage for mountain-town driving. We also catch the gaps a website misses — like under-buying uninsured-motorist coverage or skipping gap insurance on a financed car. And when you have a claim, you call a local person at 844-967-5247 who already knows your policy.",
      },
    ],
    deepDive: [
      {
        heading: "Winter Driving, Comprehensive, and Why Coverage Matters Up Here",
        body: "Flagstaff sits at 7,000 feet, and winter driving here is a different animal than the rest of Arizona. Black ice forms on shaded curves and bridge decks, sudden whiteouts can drop visibility to nothing on I-40, and the steep grades down toward Phoenix on I-17 punish worn tires and overconfidence. Collision coverage protects you when a spin-out or icy slide leads to an at-fault crash or a hit against a guardrail. Comprehensive picks up the events that are not a collision at all — hail pitting your hood during a summer storm, monsoon flash flooding submerging a parked car, or a rock kicked up off a sanding truck cracking your windshield. We help you set deductibles you can actually afford to pay in the moment, so a winter claim does not turn into a second emergency. The goal is simple: keep you legally covered, financially protected, and back on the road fast.",
      },
      {
        heading: "Uninsured Motorists, Long Commutes, and Right-Sizing Your Limits",
        body: "Arizona consistently ranks among the states with the most uninsured drivers, which means a meaningful share of the cars sharing your commute carry no coverage at all. If one of them causes a crash, uninsured/underinsured motorist coverage is what pays for your injuries and damage when they cannot. For Flagstaff drivers racking up long miles — the I-17 run to Phoenix, the I-40 stretch toward Winslow, or weekend trips to Sedona and Page — those miles add up to more exposure on the road. That is also where gap coverage earns its keep: if you total a financed or leased vehicle, gap pays the difference between what you owe and what the car is actually worth, so you are not making payments on a car you can no longer drive. We sit down with how and where you actually drive, then right-size your liability, uninsured-motorist, and gap coverage to match. Higher limits cost far less than most people expect, and they are the difference between a covered claim and a personal financial hit.",
      },
    ],
  },

  "business-insurance": {
    heroBlurb:
      "Running a small business in Flagstaff means owning your block on a snowy January morning and a packed July afternoon all in the same year. Lumberjack Insurance is your local, independent agency built for the shops, cafes, trades, and tourism outfits that make downtown and the NAU area run. We shop the carriers for you and right-size a policy to your storefront, your season, and your budget. Real coverage, plain talk, one phone call away at 844-967-5247.",
    whatsCovered: [
      "Business Owners Policy (BOP) bundling your commercial property and general liability into one right-sized, cost-effective package",
      "General liability for third-party slip-and-fall claims — including the icy-sidewalk and packed-snow falls that come with a Flagstaff winter",
      "Commercial property coverage for your building, fixtures, and inventory against snow load, wildfire, and monsoon water damage",
      "Business interruption coverage that keeps income flowing when a wildfire evacuation or road closure shuts your doors",
      "Arizona-required workers' compensation for your employees, with on-the-job injury and medical protection",
      "Liquor liability for the breweries, bars, restaurants, and tasting rooms serving downtown and Route 66",
      "Professional liability (errors and omissions) for offices, consultants, salons, and service providers",
      "Equipment and tools coverage for the trades, plus contents protection for shop and kitchen gear",
      "Exterior signage, awnings, and storefront glass coverage for your Route 66 and downtown frontage",
      "Cyber liability and hired/non-owned auto for the data you hold and the vehicles your team drives on the job",
    ],
    whoItsFor: [
      "Downtown Flagstaff and historic Route 66 storefronts — retail shops, boutiques, and galleries",
      "Restaurants, cafes, coffee houses, breweries, and tasting rooms serving locals and seasonal crowds",
      "Contractors and trades — electricians, plumbers, HVAC, handymen, and finish crews working across Northern Arizona",
      "Salons, barbershops, spas, studios, and personal-care businesses near campus and around town",
      "Offices, consultants, and professional service firms that need liability and E&O protection",
      "Tourism and outdoor operators — guides, outfitters, rental shops, and Snowbowl-season businesses",
    ],
    whyCca: [
      {
        title: "We're local, not a 1-800 quote engine",
        body: "We know Flagstaff because we work here — the winters, the wildfire seasons, the tourism swings, and the way a road closure on I-17 or a Snowbowl weekend changes everything. That context goes into every policy we build. You get an agent who picks up the phone, not a call center reading a script.",
      },
      {
        title: "We shop carriers so you don't overpay",
        body: "As an independent agency, we aren't tied to one company. We compare multiple carriers and put their offers side by side to find the right coverage at the right price for your business. When your needs change, we re-shop instead of leaving you on autopilot.",
      },
      {
        title: "Right-sized for a Main Street budget",
        body: "Small businesses shouldn't pay for coverage built for a national chain. We bundle smart with a BOP, trim what you don't need, and keep the protection that actually matters for your storefront. The goal is a policy that fits your revenue and your real-world risks.",
      },
    ],
    faqs: [
      {
        q: "What does a Business Owners Policy (BOP) actually cover for my Flagstaff shop?",
        a: "A BOP bundles your commercial property and general liability into one package, usually at a lower combined cost than buying them separately. For a downtown or Route 66 storefront, that means coverage for your building or contents against things like snow load and water damage, plus liability if a customer is injured on your property. Many BOPs also include business interruption, which replaces lost income if you have to close. We tailor the limits to your square footage, inventory, and seasonal revenue.",
      },
      {
        q: "Do I really need workers' compensation in Arizona?",
        a: "Yes — Arizona requires employers to carry workers' compensation for their employees, even if you only have one. It covers medical bills and lost wages when a worker is injured on the job, and it protects you from being sued directly over that injury. If you have a team behind the counter, in the kitchen, or out on a job site, this is not optional. We'll set it up alongside the rest of your coverage so nothing falls through the cracks.",
      },
      {
        q: "Does my property policy cover wildfire, snow, and monsoon damage?",
        a: "A properly built commercial property policy can cover wildfire damage, roof and structure damage from heavy snow load, and water intrusion from monsoon storms — the three weather risks that define a Northern Arizona year. The key is making sure your limits reflect what it would actually cost to rebuild and restock at today's prices. We also recommend business interruption coverage so a wildfire evacuation or extended closure doesn't sink your income. We'll walk through each risk so there are no surprises at claim time.",
      },
      {
        q: "I run a brewery / bar / restaurant that serves alcohol. What extra coverage do I need?",
        a: "If you serve alcohol, you'll want liquor liability coverage on top of your general liability. It protects your business if an intoxicated patron causes harm after being served — a real exposure for the breweries, tasting rooms, and restaurants packed along downtown and Route 66. Standard general liability usually excludes alcohol-related claims, so this is a gap worth closing. We'll match the coverage to your license type and how much of your sales come from the bar.",
      },
      {
        q: "My business is way busier in summer and ski season — can my coverage flex with that?",
        a: "It should. Tourism swings around Snowbowl and the summer season mean your revenue, foot traffic, and even staffing change throughout the year, and your coverage should reflect that reality. We can structure limits and review your policy so you're not underinsured during your peak months or overpaying in the slow ones. Because we're independent, we re-shop and adjust as your business grows. Just call us when your situation shifts and we'll right-size it.",
      },
    ],
    deepDive: [
      {
        heading: "Why a local independent agent beats a national quote site for Flagstaff businesses",
        body: "A national quote engine sells you the same template whether you're in Phoenix, Portland, or Flagstaff — and that's exactly the problem. Flagstaff small businesses face a specific mix of risks: black ice and snow-packed sidewalks driving winter slip-and-fall claims, wildfire seasons that can trigger evacuations and road closures, and monsoon storms that push water into basements and storerooms. On top of that, tourism around Arizona Snowbowl and the summer season makes revenue swing hard from month to month. As an independent agency, we represent multiple carriers and put their quotes side by side, so you get coverage shaped around your block, your season, and your budget instead of a one-size-fits-all bundle. And when something changes — you add staff, expand the patio, or pick up a second location — you call a person who already knows your business, not a queue.",
      },
      {
        heading: "Building the right coverage stack for a Main Street small business",
        body: "Most Flagstaff small businesses start with a Business Owners Policy, which bundles commercial property and general liability into one cost-effective package — the foundation that protects your building or contents and covers third-party injury claims like a customer slipping on an icy entryway. From there, we layer in the pieces your specific operation needs: Arizona-required workers' compensation if you have employees, liquor liability if you pour, professional liability if you give advice or provide a service, and equipment or tools coverage for the trades. We also look at the gaps owners forget — exterior signage and storefront glass, cyber liability for the customer data and card payments you handle, and hired/non-owned auto for the times your team runs an errand or makes a delivery. Then we add business interruption so a wildfire closure or a road shutdown doesn't drain your savings while you're closed. The result is a layered policy that's thorough where it counts and trimmed everywhere it doesn't, sized for a Main Street budget.",
      },
    ],
  },

  "landlord-insurance": {
    heroBlurb:
      "Owning a rental in Flagstaff means working with NAU students one semester and Grand Canyon-bound vacationers the next — and weather that swings from monsoon to four feet of Snowbowl powder. Lumberjack Insurance is your local independent agent for landlord and rental-dwelling coverage built around how property actually gets rented up here. We match the right dwelling policy to your single-family rental, multi-family building, or short-term Airbnb, then make sure the rent keeps flowing even when a unit goes dark after a fire, burst pipe, or snow-load claim. One call to 844-967-5247 and you talk to a neighbor, not a call center.",
    whatsCovered: [
      "Dwelling and structure coverage on a replacement-cost basis, so a damaged rental gets rebuilt to today's Flagstaff construction costs — not a depreciated check",
      "Landlord liability / premises liability for tenant or guest injuries on your property, including the classic icy-step or unshoveled-walkway slip-and-fall in winter",
      "Loss of rental income (fair rental value) that pays your lost rent while a unit is uninhabitable after a covered fire, snow, or water-damage loss",
      "Wildfire and smoke damage protection — critical for rentals in and around the Coconino National Forest wildland-urban interface",
      "Snow-load damage to roofs, decks, and structures from heavy Northern Arizona winter accumulation",
      "Frozen and burst pipe water damage, including losses during vacant winter stretches between tenants",
      "Vandalism and malicious mischief coverage, including damage from high-turnover or problem tenants",
      "Other-structures coverage for detached garages, sheds, fences, carports, and casitas on the rental property",
      "Optional short-term rental endorsements that extend coverage to Airbnb / VRBO use standard landlord policies otherwise exclude",
      "Choice of DP-1, DP-2, or DP-3 dwelling policy forms so coverage breadth matches your property and budget",
    ],
    whoItsFor: [
      "Owners of single-family rental homes in Flagstaff and the surrounding mountain communities",
      "Landlords of NAU off-campus student housing dealing with high tenant turnover and seasonal vacancies",
      "Short-term rental hosts running Airbnb / VRBO properties for Grand Canyon, Sedona, and Snowbowl travelers",
      "Multi-family owners with duplexes, triplexes, fourplexes, or small apartment buildings",
      "First-time and out-of-area investors who bought a Flagstaff rental and need it insured correctly",
      "Owners converting a former primary residence or second home into a long-term or seasonal rental",
    ],
    whyCca: [
      {
        title: "Local, not a 1-800 script",
        body: "We live and work in Northern Arizona, so we know what a Flagstaff winter, monsoon season, and wildfire risk actually do to a rental property. You reach a real local agent at 844-967-5247 who has walked properties just like yours. That means coverage advice grounded in this market, not a generic national template.",
      },
      {
        title: "Independent — we shop for you",
        body: "Because we're an independent agency, we compare landlord and dwelling policies across multiple carriers instead of pushing one company's product. We line up DP-1, DP-2, and DP-3 options side by side and match the form to your property and budget. You get the right fit, not whatever a single insurer happens to sell.",
      },
      {
        title: "Built for how Flagstaff rents",
        body: "Student rentals, seasonal vacancies, and short-term stays each create gaps a basic landlord policy can miss. We structure your coverage around turnover, winter vacancy, and Airbnb / VRBO use so you're not exposed between tenants. It's the difference between a policy that technically exists and one that actually pays.",
      },
    ],
    faqs: [
      {
        q: "Do I need a special policy if I rent my Flagstaff place on Airbnb or VRBO?",
        a: "Yes — most standard landlord and homeowners policies exclude or limit short-term rental activity, so a claim during a paid guest stay can be denied. We add a short-term rental endorsement, or place a policy built for vacation rentals, so your Grand Canyon and Snowbowl guests are covered. We also review premises liability limits, since transient guests raise your exposure compared to a year-long tenant.",
      },
      {
        q: "What happens to my rent if a covered loss makes the unit unlivable?",
        a: "That's what loss of rental income, or fair rental value, coverage is for. If a covered event like a fire, burst pipe, or snow-load roof failure forces tenants out, the policy reimburses the rent you would have collected during repairs. We set that limit to match your actual monthly rents and realistic Flagstaff rebuild timelines, which can run long in winter.",
      },
      {
        q: "What's the difference between DP-1, DP-2, and DP-3 dwelling policies?",
        a: "DP-1 is the most basic, covering a short named list of perils, often at actual cash value. DP-2 broadens the covered perils and adds more protection, while DP-3 is the strongest — an open-perils form that typically pays replacement cost on the structure. For most Flagstaff rentals we recommend DP-3, but we'll walk you through the tradeoffs and price each option.",
      },
      {
        q: "Should I require my tenants to carry renters insurance?",
        a: "We strongly recommend it and can help you write it into your lease. Your landlord policy covers the building, but not your tenants' belongings or their personal liability — renters insurance handles those and reduces the chance a tenant turns to your policy after a loss. For student rentals especially, it sets clear expectations from day one.",
      },
      {
        q: "How is my rental protected during a vacant Flagstaff winter between tenants?",
        a: "Vacancy is a real exposure here — frozen pipes, snow load, and undetected leaks do the most damage when no one is in the unit. We make sure your policy addresses vacancy terms up front, since many policies restrict coverage after a property sits empty too long. We'll also talk through simple steps like maintaining heat and winterizing that keep both your property and your coverage intact.",
      },
    ],
    deepDive: [
      {
        heading: "Insuring rentals through Flagstaff's seasons and wildfire risk",
        body: "Flagstaff rentals face a weather and risk profile most of Arizona never sees. Heavy snow loads stress roofs and decks, monsoon rains drive water intrusion, and freezing temperatures threaten pipes — especially in units that sit empty between tenants. On top of that, properties near the Coconino National Forest carry genuine wildfire and smoke exposure in the wildland-urban interface. We build your dwelling coverage to respond to all of it, from snow-load structural damage to wildfire rebuilds, on a replacement-cost basis that reflects what it actually costs to rebuild here. The goal is simple: a policy that holds up to a real Northern Arizona year, not a fair-weather one.",
      },
      {
        heading: "Matching coverage to how your property earns",
        body: "A duplex full of NAU students, a single-family long-term rental, and a vacation home rented to weekend skiers are three different businesses, and they shouldn't share a one-size-fits-all policy. Student rentals bring high turnover, vacancy gaps, and a higher chance of vandalism or accidental damage. Short-term Airbnb and VRBO properties bring constant guest traffic and liability that standard landlord forms often exclude without an endorsement. Multi-family buildings need liability limits and loss-of-rent figures scaled to multiple units and tenants. As your local independent agent, we map your coverage — dwelling form, liability, loss of rental income, and endorsements — to the way each property actually generates income, then shop carriers to land the right protection at the right price.",
      },
    ],
  },

  "renters-insurance": {
    heroBlurb:
      "Renters insurance in Flagstaff that actually fits a mountain-town budget — often just $10–20 a month for the peace of mind that your stuff, and your wallet, are protected. Whether you are an NAU student in off-campus housing near downtown or a young professional renting up in the pines, we cover your laptop, your bike, your ski and snowboard gear, and everything in between. As a local independent agency, Contractors Choice makes getting covered fast and painless, and we will help you check the box your landlord requires for your lease. Real coverage, real local people, no runaround.",
    whatsCovered: [
      "Personal property protection for your electronics, laptop, TV, furniture, clothes, and outdoor gear — at home or while you are traveling",
      "Theft coverage, including belongings stolen from your car, storage unit, or a break-in at your Flagstaff rental",
      "Personal liability if someone is injured in your unit or you accidentally damage someone else's property",
      "Additional living expenses (loss of use) to pay for a hotel and meals if your unit becomes uninhabitable after a covered loss",
      "Water damage from a burst frozen pipe — a very real risk during cold Flagstaff winters",
      "Fire and smoke damage to your belongings and the cost of replacing them",
      "Wildfire and evacuation displacement coverage so you are not stranded if Northern Arizona fire season forces you out",
      "Guest medical payments to cover minor injuries to visitors regardless of fault",
      "Snow and weather-related water damage to your personal property from a covered event",
      "Optional scheduled coverage for high-value items like e-bikes, jewelry, skis, snowboards, and gaming rigs",
    ],
    whoItsFor: [
      "NAU students living in off-campus housing, apartments, or shared houses around Flagstaff",
      "Young professionals and first-time renters settling into a place in the pines",
      "Roommates who each need their own separate policy to protect their own belongings",
      "Renters whose landlord or property manager requires proof of insurance to sign the lease",
      "Outdoor folks with valuable ski, snowboard, climbing, or bike gear they cannot afford to replace out of pocket",
      "Anyone who wants serious protection for around the price of a couple of coffees a month",
    ],
    whyCca: [
      {
        title: "Local & Independent",
        body: "We are right here in Flagstaff and Northern Arizona, not a faceless 1-800 line. Because we are independent, we shop multiple carriers to find you the lowest rate instead of pushing one company's product.",
      },
      {
        title: "Fast & Lease-Ready",
        body: "Landlords often need proof of renters insurance before you can move in, and we make that easy. We can usually quote and bind same-day, then send the certificate straight to your property manager.",
      },
      {
        title: "Built for Real Budgets",
        body: "Renters insurance is one of the most affordable policies you will ever buy — frequently $10–20 a month. We help you pick the right coverage limits so you are protected without paying for more than you need.",
      },
    ],
    faqs: [
      {
        q: "How much does renters insurance cost in Flagstaff?",
        a: "For most Flagstaff renters and NAU students, a policy runs about $10–20 a month, depending on your coverage limits and deductible. That small amount protects thousands of dollars of belongings plus personal liability. We will quote a few carriers to land you the best price for the coverage you actually need.",
      },
      {
        q: "My landlord says I have to have renters insurance — what do I do?",
        a: "This is extremely common with Flagstaff and NAU-area leases. Most landlords just need proof of a policy with a minimum liability limit, often $100,000, and want to be listed as an additional interested party. We can set that up and send the certificate of insurance directly to your property manager, usually the same day.",
      },
      {
        q: "Does my roommate's policy cover my stuff too?",
        a: "No — a renters policy only covers the person named on it and their belongings. If you have roommates, each of you should carry your own separate policy so everyone's property and liability are protected. The good news is that individual policies are cheap, and we can get each roommate quoted quickly.",
      },
      {
        q: "Will it cover my laptop, ski gear, or e-bike if they get stolen?",
        a: "Yes. Personal property coverage follows your belongings even outside your apartment, so a laptop stolen from the library or gear taken from your car is generally covered. High-value items like e-bikes, jewelry, and premium ski or snowboard setups can have category limits, so we often recommend scheduling them for full, deductible-free protection. We will flag anything worth scheduling when we build your policy.",
      },
      {
        q: "What happens if a pipe bursts in winter and I cannot live in my unit?",
        a: "A burst frozen pipe is one of the most common cold-climate claims in Flagstaff. Your policy covers the resulting damage to your personal property, and loss-of-use coverage pays for a hotel, meals, and other extra costs while your place is being repaired. The same loss-of-use protection applies if a fire or wildfire evacuation makes your unit uninhabitable.",
      },
    ],
    deepDive: [
      {
        heading: "Why Flagstaff Renters Need Coverage More Than Most",
        body: "Living at 7,000 feet comes with risks that flatland renters never think about. Hard winter freezes can burst pipes and flood a unit overnight, snowmelt and ice dams cause water damage, and Northern Arizona's fire seasons can trigger sudden evacuations that leave you displaced for days or weeks. Renters insurance answers all of these with personal property coverage for your belongings and loss-of-use coverage that pays for somewhere to stay when your unit is uninhabitable. For NAU students especially, a single laptop, phone, and ski setup can easily add up to more than your entire semester's rent. Replacing all of that out of pocket after a fire or theft is the kind of hit a $15-a-month policy is designed to prevent.",
      },
      {
        heading: "Replacement Cost vs. Actual Cash Value — and Scheduling High-Value Gear",
        body: "When you file a claim, how your policy values your stuff makes a huge difference. Actual cash value pays what your three-year-old laptop is worth today after depreciation, which is often far less than what a new one costs. Replacement cost coverage pays to buy a comparable new item instead, and for just a little more in premium it is almost always worth it for renters. Standard policies also cap certain categories — jewelry, bikes, and electronics frequently have sub-limits — so a stolen e-bike or engagement ring might only be partially covered. That is where scheduling comes in: we list those specific items on the policy at their full appraised value, often with no deductible, so your most valuable gear is fully protected. When we build your quote, we will walk through exactly which items to schedule so there are no surprises at claim time.",
      },
    ],
  },
};

// === Why-choose (homepage) ===
export const WHY_CHOOSE = [
  {
    icon: MapPin,
    title: "Hometown Flagstaff agency",
    description:
      "We live, work, and insure right here in Northern Arizona. We know what wildfire season, monsoon storms, and a 7,000-foot winter actually do to your home, car, and business — and we build coverage around it.",
  },
  {
    icon: ShieldCheck,
    title: "Independent — we shop for you",
    description:
      "We aren't tied to one company. We compare multiple A-rated carriers and put their offers side by side, so you get the right coverage at the right price instead of whatever a single insurer happens to sell.",
  },
  {
    icon: Banknote,
    title: "Bundle and save",
    description:
      "Home and auto under one roof usually means real savings and one less thing to juggle. Add landlord, renters, or business coverage and we'll keep it all coordinated — and keep an eye out for every discount you qualify for.",
  },
  {
    icon: Home,
    title: "Every line you need locally",
    description:
      "Homeowners, auto, business, landlord, and renters — five coverage lines under one friendly roof. Whatever stage of Flagstaff life you're in, we have you covered without the runaround.",
  },
  {
    icon: HeartPulse,
    title: "Real people, real service",
    description:
      "Call 844-967-5247 and reach a person who knows your name and your policy — at quote time, at renewal, and when you have a claim. No phone-tree roulette, no being handed across three states.",
  },
  {
    icon: Timer,
    title: "Fast, no-pressure quotes",
    description:
      "Tell us what you need and we'll come back with real options quickly — no jargon, no hard sell. We can often quote and bind same-day and send proof of coverage straight to whoever needs it.",
  },
];

// === Process steps (homepage) ===
export const PROCESS = [
  {
    step: 1,
    icon: PhoneCall,
    title: "Tell us about you",
    description:
      "A quick call or a short quote form. We learn about your home, your vehicles, your business, or your rental — and what matters most to you about protecting them.",
  },
  {
    step: 2,
    icon: ClipboardList,
    title: "We shop the carriers",
    description:
      "As an independent agency, we compare multiple A-rated carriers and line up the options — looking for the best fit on coverage, price, and the bundle discounts you qualify for.",
  },
  {
    step: 3,
    icon: Banknote,
    title: "Real quotes, plain English",
    description:
      "We walk you through your options side by side, explain the differences without the jargon, and right-size the coverage to your Flagstaff life and your budget.",
  },
  {
    step: 4,
    icon: BadgeCheck,
    title: "Covered and looked after",
    description:
      "We bind your coverage, send proof to your lender or landlord, and stay on your policy all year — renewals, changes, claims, and re-shopping when your needs change.",
  },
];

// === Homepage FAQ ===
export const HOME_FAQS = [
  {
    q: "What kinds of insurance does Lumberjack Insurance offer?",
    a: "We're a local Flagstaff agency covering five core lines for Northern Arizona residents: homeowners, auto, business, landlord, and renters insurance. Whether you're protecting a home up by the Peaks, a car that braves I-17 in winter, a downtown shop, a student rental, or your apartment near campus, we can help — and bundle it to save you money.",
  },
  {
    q: "Are you a local Flagstaff agency?",
    a: "Yes. We proudly serve Flagstaff and Northern Arizona, so we understand the real risks up here — wildfire in the ponderosa forest, heavy winter snow loads, monsoon storms, elk on the roads, and the tourism swings that drive local business. When you call 844-967-5247, you reach real people who know this community.",
  },
  {
    q: "How does an independent agency save me money?",
    a: "Because we're independent, we aren't locked into one insurance company. We shop multiple A-rated carriers and compare their quotes side by side to find you the best coverage at the best price — then look for every discount you qualify for, including home-and-auto bundle savings. When rates change, we re-shop so you're never stuck overpaying.",
  },
  {
    q: "Can I bundle my home and auto?",
    a: "Absolutely — bundling home and auto is one of the easiest ways to lower your total premium, and it means one local agent handling both. We can layer in landlord, renters, or business coverage too, and keep everything coordinated so nothing falls through the cracks.",
  },
  {
    q: "Does my coverage handle Flagstaff's wildfire, snow, and monsoon risks?",
    a: "It should, and that's exactly what we focus on. We make sure your home, business, or rental policy responds to the perils that define a Northern Arizona year — wildfire and smoke, snow-load and ice damage, and monsoon wind and water — with limits high enough to actually rebuild at mountain construction costs. We'll flag any gaps, like separate flood coverage, before you sign.",
  },
  {
    q: "How fast can I get a quote?",
    a: "Fast. Tell us what you need and we'll come back with real options quickly — often same day — and we can usually bind coverage and send proof to your lender or landlord right away. Call 844-967-5247 or request a quote online to get started.",
  },
];

// === About page team/credentials content ===
export const ABOUT_POINTS = [
  {
    icon: MapPin,
    title: "Proudly serving Flagstaff & Northern Arizona",
    body: "We're focused on the high country — Flagstaff, the surrounding mountain communities, and Northern Arizona. We know the risks because we live with them too, from wildfire season to the deepest snow in the state.",
  },
  {
    icon: ShieldCheck,
    title: "Independent agency, on your side",
    body: "As an independent agency we represent multiple A-rated carriers, not just one. That means we shop the market for you and recommend what's genuinely right for your home, family, or business — not whatever one company is selling.",
  },
  {
    icon: Users,
    title: "Backed by Contractors Choice Agency",
    body: "Lumberjack Insurance is operated by Contractors Choice Agency, founded by Josh Cotner in 2005. That gives our friendly local service the strength and carrier access of an established agency behind it.",
  },
  {
    icon: HeartPulse,
    title: "Real people, hometown service",
    body: "Call 844-967-5247 and you'll reach someone who knows your name and your policy — at quote time, at renewal, and when you need to file a claim. That's the difference between an 800-number and a hometown agent.",
  },
];
