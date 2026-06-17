// Centralized site data — used across nav, footer, schema, CTAs
// Niche: insurance for LOGGING CONTRACTORS / timber harvesters / lumberjacks / forestry operations.

export const SITE = {
  name: "Lumberjack Insurance",
  legalName: "Lumberjack Insurance (by Contractors Choice Agency)",
  domain: "lumberjackinsurance.com",
  url: "https://lumberjackinsurance.com",
  tagline: "Logging & Forestry Contractor Insurance",
  description:
    "Specialty insurance for logging contractors, timber harvesters, and forestry operations. Workers' comp for logging class codes, log truck insurance, equipment & inland marine, pollution, and sawmill coverage. Licensed all 50 states. 15-minute quotes.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm Arizona (MST) · 24/7 claims",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage Area", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

// 7 service pages — keyword targets from DataForSEO (US)
export const SERVICES = [
  {
    slug: "loggers-workers-comp",
    title: "Loggers' Workers' Compensation",
    short: "Workers' comp — the flagship",
    description:
      "Logging is one of America's deadliest jobs. We write workers' comp for logging class codes (2702, 2710, 2712) — chainsaw, felling, cable/yarding, skidder, and sawmill crews — with EMOD strategy that keeps your experience mod from sinking the business.",
    icon: "HardHat",
    keywords: ["loggers workers comp", "logging workers compensation", "logger workers comp class code", "logging EMOD", "timber workers comp"],
    featured: true,
  },
  {
    slug: "logging-truck-insurance",
    title: "Log Truck & Commercial Auto",
    short: "Log trucks, lowboys & bobtail",
    description:
      "Coverage for log trucks on forest roads and highways — physical damage, cargo, bobtail, non-trucking liability, and ICC/MC filings. Loaded trailers, stake binders, and long log overhang are standard, not afterthoughts.",
    icon: "Truck",
    keywords: ["log truck insurance", "logging truck insurance", "commercial auto logging", "log truck cargo insurance", "bobtail logging"],
  },
  {
    slug: "logging-equipment-insurance",
    title: "Logging Equipment / Inland Marine",
    short: "Feller bunchers, skidders & yarders",
    description:
      "Inland marine coverage for the iron that makes logging work — feller bunchers, skidders, forwarders, delimbers, knuckle-boom loaders, cable yarders, and chain saws. Scheduled equipment, in transit or at the landing.",
    icon: "Wrench",
    keywords: ["logging equipment insurance", "inland marine logging", "feller buncher insurance", "skidder insurance", "logging equipment coverage"],
  },
  {
    slug: "forestry-timber-liability",
    title: "General Liability — Forestry & Timber",
    short: "GL for logging operations",
    description:
      "General liability built around logging operations and practices — the Loggers Broad Form endorsement, loading/unloading, third-party bodily injury, and completed-operations claims. Standard contractor GL excludes most of what you do.",
    icon: "ShieldCheck",
    keywords: ["forestry insurance", "timber insurance", "logging liability insurance", "loggers broad form", "logging operations insurance"],
  },
  {
    slug: "sawmill-insurance",
    title: "Sawmill & Property Insurance",
    short: "Mills, kilns & lumber yards",
    description:
      "Property and liability for portable and stationary sawmills — band mills, circular saws, planer mills, dry kilns, and lumber storage yards. Fire, equipment breakdown, and sawyer bodily injury are the real exposures.",
    icon: "Building2",
    keywords: ["sawmill insurance", "saw mill insurance", "lumber mill insurance", "portable sawmill insurance", "sawmill property insurance"],
  },
  {
    slug: "logging-pollution-liability",
    title: "Pollution Liability — Forestry",
    short: "Fuel spills, erosion & wetlands",
    description:
      "Pollution coverage for the environmental risks of forestry work — fuel and hydraulic spills on the landing, erosion and sediment runoff into streams, wetlands disturbance, and stump grinding. Standard GL excludes pollution outright.",
    icon: "FlaskConical",
    keywords: ["logging pollution liability", "forestry pollution insurance", "erosion insurance logging", "fuel spill logging insurance", "forestry CPL"],
  },
  {
    slug: "tree-service-arborist-insurance",
    title: "Tree Service & Arborist Insurance",
    short: "Adjacent high-volume trade",
    description:
      "Coverage for tree care, pruning, removal, and arborist work — the high-volume trade adjacent to logging. Workers' comp (class code 0106), GL, aerial-lift bucket trucks, and chipper inland marine.",
    icon: "Trees",
    keywords: ["tree service insurance", "arborist insurance", "tree care insurance", "tree removal insurance", "arborist workers comp"],
  },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Former contractor on staff", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response SLA", icon: "Zap" },
  { label: "A-rated specialty markets", icon: "Award" },
] as const;

export const STATS = [
  { value: 20, suffix: "+", label: "Years insuring contractors", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 2, suffix: " hr", label: "Claims response guarantee", prefix: "" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Logging workers' comp was killing us — three carriers had dropped us over a single EMOD hit. CCA placed us with a specialty program that actually knew class code 2702 and got our mod trending back down. We're bidding timber sales again.",
    name: "Dale W.",
    role: "Owner, logging operation",
    location: "Eugene, OR",
  },
  {
    quote:
      "When my feller buncher went over on a steep slope, the inland marine claim was settled in days. No games about the hours or the depreciation. Josh's crew knows what a Tigercat costs to replace because they've written them before.",
    name: "Rick T.",
    role: "Timber harvester",
    location: "Missoula, MT",
  },
  {
    quote:
      "I needed ICC authority and cargo on three log trucks fast for a federal timber sale. They quoted the whole fleet — physical damage, cargo, and filings — in one afternoon. Cleaner and cheaper than the national carrier I'd been with for years.",
    name: "Marcus B.",
    role: "Owner, log truck fleet",
    location: "Birmingham, AL",
  },
] as const;
