// Centralized site data — used across nav, footer, schema, CTAs
// Niche: LOCAL Flagstaff, Arizona insurance agency. Friendly lumberjack mascot
// (NAU Lumberjacks / mountain-town spirit). Personal + small-commercial lines
// for Flagstaff & Northern Arizona residents — home, auto, business, landlord, renters.

export const SITE = {
  name: "Lumberjack Insurance",
  legalName: "Lumberjack Insurance (by Contractors Choice Agency)",
  domain: "lumberjackinsurance.com",
  url: "https://lumberjackinsurance.com",
  tagline: "Flagstaff's Hometown Insurance",
  description:
    "Personal and business insurance for Flagstaff & Northern Arizona — home, auto, business, landlord, and renters. Local licensed agents who shop multiple carriers to protect your mountain-town life. Proudly serving Flagstaff and the surrounding high country.",
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
  hours: "Mon–Fri 8am–5pm Arizona (MST) · Fast quotes",
  claimsSla: "Friendly local claims help",
  quoteSla: "Fast, no-pressure quotes",
  statesLicensed: "Flagstaff & Northern Arizona",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage Area", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

// 5 service pages — personal + small-commercial lines for the Flagstaff area
export const SERVICES = [
  {
    slug: "homeowners-insurance",
    title: "Homeowners Insurance",
    short: "Protect your Flagstaff home",
    description:
      "Flagstaff homes face risks the flatlands never see — wildfire in the ponderosa pines, heavy winter snow loads on the roof, monsoon wind and water, and theft. We shop multiple carriers to protect your house, your stuff, and your peace of mind at 7,000 feet.",
    icon: "Home",
    keywords: ["flagstaff homeowners insurance", "home insurance flagstaff az", "wildfire home insurance arizona", "northern arizona home insurance", "snow load home insurance"],
  },
  {
    slug: "auto-insurance",
    title: "Auto & Car Insurance",
    short: "Coverage for mountain roads",
    description:
      "From icy I-17 grades to elk on the back roads at dusk, driving in the high country is its own thing. We build auto coverage that fits real Northern Arizona driving — winter weather, mountain commutes, and uninsured drivers — at a price a local agent fought for.",
    icon: "Car",
    keywords: ["flagstaff auto insurance", "car insurance flagstaff az", "northern arizona car insurance", "cheap auto insurance flagstaff", "arizona full coverage auto"],
  },
  {
    slug: "business-insurance",
    title: "Business Insurance",
    short: "GL, BOP & commercial property",
    description:
      "Downtown shops, NAU-area cafes, breweries, trades, and offices — we insure the small businesses that make Flagstaff feel like Flagstaff. General liability, Business Owners Policies, and commercial property, right-sized for a Main Street budget.",
    icon: "Building2",
    keywords: ["flagstaff business insurance", "small business insurance flagstaff az", "general liability flagstaff", "business owners policy arizona", "commercial property insurance flagstaff"],
  },
  {
    slug: "landlord-insurance",
    title: "Landlord Insurance",
    short: "Rentals, NAU & vacation homes",
    description:
      "Renting out a Flagstaff property — an NAU student rental, a Grand Canyon-gateway vacation home, or a multi-family unit? We cover the dwelling, your liability, and lost rental income when winter, fire, or water takes a unit offline.",
    icon: "KeyRound",
    keywords: ["flagstaff landlord insurance", "rental property insurance flagstaff az", "nau student rental insurance", "vacation rental insurance flagstaff", "airbnb insurance arizona"],
  },
  {
    slug: "renters-insurance",
    title: "Renters Insurance",
    short: "Affordable protection for tenants",
    description:
      "For NAU students and Flagstaff renters, renters insurance protects your gear, your ski setup, and your savings for about the price of a couple coffees a month. We make it fast and easy — and yes, it covers that burst winter pipe.",
    icon: "ShieldCheck",
    keywords: ["flagstaff renters insurance", "renters insurance flagstaff az", "nau renters insurance", "cheap renters insurance arizona", "student renters insurance flagstaff"],
  },
] as const;

export const CREDENTIALS = [
  { label: "Serving Flagstaff & Northern Arizona", icon: "MapPin" },
  { label: "Local licensed agents", icon: "BadgeCheck" },
  { label: "We shop multiple carriers", icon: "Award" },
  { label: "Home + Auto bundle savings", icon: "Banknote" },
  { label: "Fast, no-pressure quotes", icon: "Timer" },
  { label: "Hometown service, real people", icon: "HeartPulse" },
] as const;

export const STATS = [
  { value: 7000, suffix: " ft", label: "Insuring life at altitude", prefix: "" },
  { value: 5, suffix: "", label: "Coverage lines under one roof", prefix: "" },
  { value: 100, suffix: "%", label: "Flagstaff & Northern Arizona focused", prefix: "" },
  { value: 1, suffix: "", label: "Local agent who shops for you", prefix: "" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "After two carriers non-renewed us over wildfire risk, I figured we were stuck. Lumberjack shopped it around and found a policy that actually covered our place up by the Peaks — and explained snow-load coverage I didn't even know I was missing.",
    name: "Sarah M.",
    role: "Homeowner",
    location: "Flagstaff, AZ",
  },
  {
    quote:
      "I hit an elk on 89 north of town in November. Total claim, but the comprehensive coverage Josh's team set me up with made it painless. They knew exactly what mountain driving up here actually puts you through.",
    name: "Derek H.",
    role: "Driver & NAU staff",
    location: "Flagstaff, AZ",
  },
  {
    quote:
      "We run a little cafe near campus and a couple of student rentals. Having one local agent handle our BOP and the landlord policies — and bundle my home and auto on top — saved real money and a lot of phone tag.",
    name: "Maria T.",
    role: "Small business owner & landlord",
    location: "Flagstaff, AZ",
  },
] as const;
