// Detailed niche content for service pages, why-choose, process, FAQs.
// Niche-accurate logging/timber terminology throughout.

import {
  ShieldCheck, HardHat, Truck, Wrench, Building2, FlaskConical, Trees,
  Umbrella, AlertTriangle, HeartPulse, TreePine, Gauge, Sticker,
  FileCheck, PhoneCall, MapPinned, Banknote, Timer, Users, Target,
  ClipboardList, BadgeCheck, ArrowRight, ArrowLeft, CheckCircle2, Quote,
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
  "loggers-workers-comp": {
    heroBlurb:
      "Logging is consistently ranked one of the deadliest jobs in America — above roofing, steel, and trucking. Your workers' comp policy isn't a commodity; it's the policy most likely to sink or save your business. We write logging class codes (2702, 2710, 2712) with real EMOD strategy and A-rated specialty markets that actually know what a feller buncher does.",
    whatsCovered: [
      "Class code 2702 — logging (felling, bucking, skidding, yarding)",
      "Class code 2710 — sawmill or planing mill operations",
      "Class code 2712 — logging road construction & maintenance",
      "Cable logging / high-lead yarding crews",
      "Chainsaw operators, chokersetters, rigging slingers",
      "Feller buncher, skidder, forwarder, and loader operators",
      "Medical, indemnity, and rehab for work injuries",
      "EMOD / experience rating review and dispute strategy",
      "Alternative markets: self-insured groups, PEOs, captive options",
    ],
    whoItsFor: [
      "Independent logging contractors & timber harvesters",
      "Cable / high-lead logging operations on steep terrain",
      "Mechanized logging crews running feller bunchers + skidders",
      "Sawmill and planing mill operators (class 2710)",
      "Logging road builders and site prep contractors",
      "Forestry contractors with a climbing experience mod (1.10+)",
    ],
    whyCca: [
      {
        title: "We read your loss runs before we quote",
        body: "A bad mod year shouldn't follow you for three. We pull your experience rating sheet, walk through every claim, and build a submission that tells the real story — not just the numbers.",
      },
      {
        title: "Specialty markets that write logging",
        body: "The standard carriers decline class 2702 on sight. We have direct appointments with the A-rated specialty programs that underwrite logging operations every day — and we know what they need to see to offer their best terms.",
      },
      {
        title: "Safety program support that lowers the mod",
        body: "We help you build the documented safety program the underwriter wants to see — fall protection, chainsaw PPE, daily job-briefs — which translates into lower premiums and a falling experience mod.",
      },
    ],
    faqs: [
      {
        q: "What workers' comp class codes apply to logging?",
        a: "The three core logging class codes are 2702 (logging — felling, bucking, skidding, yarding, and related woods work), 2710 (sawmill or planing mill operations, including portable mills), and 2712 (logging road construction and maintenance). Your payroll must be assigned to the correct code for each operation; miscoding between 2702 and 2710 alone can shift your premium 30%+.",
      },
      {
        q: "Why is loggers' workers' comp so expensive?",
        a: "Because the losses are real. Logging has one of the highest fatal and severe-injury rates of any US occupation — struck-by-tree, chainsaw laceration, cable snap-back, and equipment rollover. Base rates for class 2702 are among the highest in the workers' comp manual. The good news: your experience modification factor (EMOD) lets a safe operator pay well below the manual rate, and we build submissions that show underwriters exactly that.",
      },
      {
        q: "My experience mod is over 1.0 — can I still get coverage?",
        a: "Yes. A mod above 1.0 means you pay more than the average logger, but it is not uninsurable. We work with specialty excess-and-surplus markets and group self-insurance pools that write climbing-mod operators. The key is getting ahead of it — the longer you stay uninsured or in the residual market, the harder and more expensive it gets.",
      },
      {
        q: "Do you write logging workers' comp in all 50 states?",
        a: "Yes. Contractors Choice Agency is licensed in all 50 states, including the four monopolistic-fund states (Ohio, Washington, North Dakota, Wyoming) where we coordinate coverage through the state fund and handle the UW and service. We also handle Oregon SAIF and Idaho submissions.",
      },
      {
        q: "How fast can I get a quote?",
        a: "Most logging workers' comp quotes are turned around within one business day of receiving your loss runs and payroll data — and we quote a complete program, not just a number. Call 844-967-5247 and ask for the logging desk.",
      },
    ],
    deepDive: [
      {
        heading: "The experience modification factor (EMOD): your single biggest lever",
        body: "Your EMOD is a multiplier applied to your workers' comp premium, calculated from your actual claims history over a rolling three-year period. A mod of 1.00 means you pay the manual rate; 0.80 means you pay 20% less; 1.30 means you pay 30% more. For a logging operation with a sizable class-2702 payroll, a single point of EMOD can mean tens of thousands of dollars a year. The levers that move it: documented safety programs, prompt injury reporting, a return-to-work policy, and aggressive claim management. We help you put all four in place — and we review your annual mod worksheets for errors before they cost you a year of inflated premium.",
      },
      {
        heading: "Why standard carriers decline logging — and who writes it instead",
        body: "Most standard workers' comp carriers decline logging class codes outright. The losses are severe and frequent, and the data shows it. The markets that write logging are a handful of A-rated specialty programs, regional mutual carriers, and in some states, self-insured group funds (SIGs). Contractors Choice Agency has direct appointments with these specialty markets. That means your submission goes straight to an underwriter who writes logging every day — not into a generalist queue where it gets declined on the class code alone.",
      },
    ],
  },

  "logging-truck-insurance": {
    heroBlurb:
      "Log trucks are not standard commercial auto. Loaded trailers with stake binders, long log overhang, forest-road approaches, and ICC/MC authority requirements all change the risk. We quote physical damage, cargo, bobtail, and filings as a single coordinated fleet program.",
    whatsCovered: [
      "Physical damage — collision, comprehensive, fire, theft, overturn",
      "Motor truck cargo — coverage for the logs in transit",
      "Bobtail / non-trucking liability (when dispatched or returning empty)",
      "Motor truck general liability (MTGC) for the for-hire operation",
      "ICC / MC authority filings (Form E & Form H) for interstate",
      "State-specific filings (Form H, SR22) where required",
      "Truckers' workers' comp for the driver class code",
      "Trailer interchange coverage (lowboys, pole trailers, log trailers)",
      "Rental reimbursement / downtime coverage",
    ],
    whoItsFor: [
      "For-hire log truck operators with ICC/MC authority",
      "Logging contractors running their own trucks to the mill",
      "Lowboy / heavy-haul operators moving logging equipment",
      "Single-truck owner-operators leased to larger carriers",
      "Fleets hauling poles, pulpwood, saw logs, or biomass",
    ],
    whyCca: [
      {
        title: "We handle the filings, not just the policy",
        body: "ICC/MC authority requires Form E (proof of financial responsibility) and Form H (cargo) filings with the FMCSA — and your state may require its own. We file them. You don't lose days on a load because a filing lapsed.",
      },
      {
        title: "Cargo built for logs, not pallets",
        body: "Most cargo forms are written for dry vans. Log cargo has its own exposures — binders slipping, logs rolling on unloading, and shifting loads on forest-road grades. We write cargo forms that actually contemplate how you load and haul.",
      },
      {
        title: "Fleet programs, not piecemeal quotes",
        body: "We quote your trucks, trailers, drivers, and cargo as one program — so there are no gaps between the auto and cargo when a loaded trailer overturns on a forest road.",
      },
    ],
    faqs: [
      {
        q: "Do I need a special endorsement to haul logs?",
        a: "If you cross state lines for-hire, you need FMCSA operating authority (MC number) plus Form E and Form H filings proving you carry the required auto liability and cargo limits. Some states also require state-level filings or permits for oversize/overweight loads (long logs often qualify). We file the federal forms as part of your policy and walk you through the state permit side.",
      },
      {
        q: "What's the difference between bobtail and non-trucking liability?",
        body: "",
        a: "Bobtail covers you when you're driving the truck without a trailer (often after dispatch, returning empty). Non-trucking liability is broader — it covers personal-use driving when you're not under dispatch. If you're leased to a carrier, your carrier's policy covers you under load; you need bobtail or non-trucking for everything else. We'll quote the right one for your lease setup.",
      },
      {
        q: "Does cargo cover the logs themselves?",
        a: "Yes — motor truck cargo covers the freight (the logs) against damage or loss in transit, up to the limit you carry. The exposures for logs are different than dry freight: binders and stakes can fail, logs can shift on grades, and unloading at the mill has its own hazards. We quote cargo limits that reflect the real value of your loads.",
      },
      {
        q: "Can you insure a single-truck owner-operator?",
        a: "Yes. We write owner-operators whether you're leased to a larger carrier or running your own authority. The package typically combines your primary auto liability (when you have your own authority) or bobtail/non-trucking (when leased), plus physical damage on the truck and trailer, and cargo. Drivers' workers' comp is quoted separately under the appropriate trucking class code.",
      },
      {
        q: "What does a log truck insurance quote cost?",
        a: "It depends on the truck, the driver's record, radius of operation, cargo limits, and whether you run your own authority. A single power unit with a clean record typically runs a few thousand dollars a year for liability plus physical damage; fleets get volume rating. The fastest way to a real number is a 15-minute call to the logging desk at 844-967-5247.",
      },
    ],
  },

  "logging-equipment-insurance": {
    heroBlurb:
      "A feller buncher is a $400,000 machine. A skidder or processor costs more. When the iron goes over on a slope, catches fire, or gets hit at the landing, your inland marine policy is what stands between you and a season-ending loss. We schedule every piece — in transit, at the landing, and in the woods.",
    whatsCovered: [
      "Scheduled equipment — feller bunchers, harvesters, processors",
      "Skidders (cable & grapple), forwarders, delimbers",
      "Knuckle-boom loaders, stroke delimbers, slash saws",
      "Cable yarders, tower skidders, carriage & rigging systems",
      "Chainsaws, power tools, and small equipment (scheduled)",
      "Perils: fire, theft, overturn, collision, flood, windstorm, vandalism",
      "In-transit coverage (lowboy haul between tracts)",
      "At-the-landing and in-the-woods coverage",
      "Rental reimbursement / extra expense to keep working",
    ],
    whoItsFor: [
      "Mechanized logging contractors running feller bunchers + skidders",
      "Cable / high-lead logging operations with yarders & carriages",
      "Logging contractors who move equipment between timber sales",
      "Operators financing equipment (lender will require listed loss payee)",
      "Crews with mixed owned/leased/rented iron",
    ],
    whyCca: [
      {
        title: "We know what a Tigercat vs a Deere costs to replace",
        body: "Inland marine claims go sideways fast when the adjuster doesn't know the equipment. We document make, model, hours, and attachments at bind — so when a machine goes down the conversation is about getting it back to work, not about what it was.",
      },
      {
        title: "Scheduled, not blanket",
        body: "Blanket coverage leaves gaps. We schedule every serial-numbered machine with its agreed value or replacement cost, list your lender as loss payee, and update the schedule every time you add or trade equipment.",
      },
      {
        title: "Coverage that follows the equipment",
        body: "Your equipment moves — from tract to tract, on a lowboy, parked at the landing. We write inland marine that follows the iron, not a property form tied to one address.",
      },
    ],
    faqs: [
      {
        q: "What's the difference between inland marine and equipment floater?",
        a: "They're often used interchangeably for logging equipment. 'Inland marine' is the broad line of insurance for property that moves or doesn't sit at a fixed address; an 'equipment floater' is the specific form within that line that schedules your mobile equipment. For logging, we write an inland marine equipment floater that covers your machines in transit, at the landing, and working in the woods.",
      },
      {
        q: "Does this cover a machine that goes over on a slope?",
        a: "Yes — overturn is a covered peril on a properly written equipment floater, and it's one of the most common logging losses. Steep-slope operations should be disclosed at bind (some markets surcharge or exclude above a certain slope grade); we'll find the market that fits how you actually work.",
      },
      {
        q: "My lender requires them as loss payee — can you do that?",
        body: "",
        a: "Yes. We list the bank, captive finance arm, or leasing company as loss payee on the schedule at bind and provide the evidence of insurance (ACORD 28) they require. If equipment is added or financed later, we update the schedule and reissue the evidence the same day.",
      },
      {
        q: "Should I carry actual cash value or replacement cost?",
        a: "For newer equipment, replacement cost (RC) is almost always worth it — a 3-year-old feller buncher has a lot of useful life left but heavy depreciation on an actual-cash-value (ACV) basis. For older machines near end-of-life, ACV may make economic sense. We'll model both on the schedule and show you the difference.",
      },
      {
        q: "Are chainsaws and small tools covered?",
        a: "Small unscheduled tools are typically covered under a tools-and-equipment schedule with a per-item and aggregate cap. High-value items (large saws, power tools) should be individually scheduled. Theft from an unsecured job site is a common exclusion to watch for — we write forms that cover job-site theft with reasonable security requirements.",
      },
    ],
  },

  "forestry-timber-liability": {
    heroBlurb:
      "General liability for loggers is not a standard contractor GL. You need the Loggers Broad Form endorsement (coverage for the trees you're cutting and the work you're doing), loading and unloading at the landing, and completed-operations protection. Generic contractor GL excludes most of what you do.",
    whatsCovered: [
      "Third-party bodily injury (hunters, hikers, adjoining landowners)",
      "Property damage — to others' land, structures, improvements",
      "Loggers Broad Form endorsement (LCP) — cutting/operations coverage",
      "Loading & unloading liability at the landing and mill",
      "Completed-operations coverage (post-harvest claims)",
      "Products / completed operations aggregate",
      "Personal & advertising injury",
      "Damage to rented premises (log decks, mill yards)",
      "Defense costs outside or inside the limit (market dependent)",
    ],
    whoItsFor: [
      "Logging contractors cutting on private, state, or federal timber sales",
      "Cable & mechanized operations near public access or adjoining land",
      "Loggers working under US Forest Service timber sale contracts",
      "Forestry operators with mill-delivery and unloading exposure",
      "Crews running their own log trucks with combined loading operations",
    ],
    whyCca: [
      {
        title: "The Loggers Broad Form is non-negotiable",
        body: "Standard contractor GL excludes the trees and logs themselves, plus the operations of cutting, yarding, and loading. The Loggers Broad Form endorsement (sometimes called LCP) adds that coverage back. We don't quote a logging GL without it.",
      },
      {
        title: "We handle US Forest Service contract requirements",
        body: "Federal timber sale contracts have specific insurance requirements — limits, additional insured wording, endorsement forms. We issue the certificates and endorsements the contracting officer needs to sign your contract.",
      },
      {
        title: "Coverage for the unloading exposure",
        body: "A surprising share of logging GL claims happen at the mill — logs rolling off the trailer, binders releasing under load. We write loading/unloading liability that follows the logs all the way to the debarker.",
      },
    ],
    faqs: [
      {
        q: "What is the Loggers Broad Form endorsement?",
        a: "The Loggers Broad Form (sometimes labeled LCP — Loggers Comprehensive Policy, or written as a broad-form endorsement to a standard GL) adds coverage for the property you're working on — the trees, logs, and the operations of felling, bucking, skidding, yarding, loading, and unloading. Without it, a standard contractor GL typically excludes the work itself and leaves the largest exposure in logging uncovered. We will not bind a logging GL without this endorsement in place.",
      },
      {
        q: "What GL limit should a logger carry?",
        a: "$1,000,000 per occurrence / $2,000,000 aggregate is the floor for almost every timber buyer, mill, and landowner that will hire you — and US Forest Service contracts often require more (typically $1M–$5M depending on contract size), frequently paired with an umbrella. We commonly write $1M GL plus a $1M–$5M umbrella/excess to reach the contract thresholds you'll actually see.",
      },
      {
        q: "Do I need to list the timber buyer or landowner as additional insured?",
        a: "Usually yes — virtually every private timber sale, state contract, and federal timber sale requires the landowner/buyer/contracting officer to be listed as additional insured, often with specific endorsement wording (CG 20 10, CG 20 37, or per-contract language). We issue additional insured certificates and the required endorsements at bind and on demand throughout the policy term.",
      },
      {
        q: "Does GL cover pollution from a fuel spill on the landing?",
        a: "No — standard GL excludes pollution. A hydraulic-line failure on a skidder or a fuel spill at the landing is a pollution loss and requires a separate Contractors Pollution Liability (CPL) policy. We almost always quote logging GL alongside a forestry CPL policy; see our Pollution Liability page.",
      },
      {
        q: "Does this cover damage to the timber itself if I cut the wrong trees?",
        a: "Cutting outside the marked boundary or the wrong tract is a real exposure (timber trespass), and it's often contested under GL. The Loggers Broad Form extends coverage for the trees being harvested under contract; timber trespass outside the sale boundary is a separate question we discuss at bind, sometimes addressed by an errors-and-omissions / professional policy.",
      },
    ],
  },

  "sawmill-insurance": {
    heroBlurb:
      "A sawmill combines property, equipment breakdown, and serious bodily-injury exposure in one site. Band saws, circular saws, planers, dry kilns, and lumber packages create fire, amputation, and drying-loss risks that generic property forms under-price and under-cover. We build sawmill programs for portable and stationary operations.",
    whatsCovered: [
      "Property — buildings, mill structures, kilns, dry sheds, offices",
      "Equipment breakdown — boilers, kilns, band mills, motors, electrical",
      "Business income / extra expense (downtime after a fire)",
      "Sawmill general liability — third-party bodily injury & property damage",
      "Products liability (sold lumber defects)",
      "Lumber yard stock coverage (inventory at risk of fire)",
      "Outdoor property — log decks, lumber packages, yard equipment",
      "Sawyers' & mill workers' workers' comp (class 2710)",
      "Pollution — boiler fuel, hydraulic oil, kiln combustion",
    ],
    whoItsFor: [
      "Stationary sawmills — band, circular, and planer mills",
      "Portable sawmill operators (Wood-Mizer, Lucas, similar)",
      "Custom sawyers serving local builders and landowners",
      "Mills with dry kilns (conventional and dehumidification)",
      "Lumber remanufacturers, planing mills, and treaters",
    ],
    whyCca: [
      {
        title: "Replacement cost on a mill that actually rebuilds",
        body: "A fire in a sawmill doesn't just damage a building — it takes out the head rig, the edger, and the kiln, and the business stops. We write replacement-cost property with realistic business-income coverage so a fire doesn't end the business.",
      },
      {
        title: "Equipment breakdown that covers the head rig",
        body: "Boiler and machinery (equipment breakdown) coverage is critical for mills — it covers the electrical and pressure damage standard property excludes. We schedule the head rig, resaw, planer, and kiln as covered objects.",
      },
      {
        title: "Class 2710 workers' comp under one roof",
        body: "Sawmill workers' comp (class code 2710) is one of the higher-rated manufacturing codes. We quote it alongside your property and GL so the whole program is coordinated — and we apply the same EMOD strategy we use for logging crews.",
      },
    ],
    faqs: [
      {
        q: "Do portable sawmills need different insurance than stationary mills?",
        a: "The coverages are similar (property, GL, workers' comp, equipment breakdown) but the property form differs. A portable mill moves between sites, so the equipment is insured on an inland marine floater rather than a fixed-location property form, and GL follows the operation wherever it's set up. We write both, depending on whether you're stationary, mobile, or both.",
      },
      {
        q: "Does sawmill property cover lumber yard stock fires?",
        a: "Yes — outdoor lumber packages and log decks are a real fire exposure and should be specifically scheduled on the property form. Stock coverage is written on either an actual-cash-value or replacement-cost basis (we model both), and high-value inventory should be reappraised annually as lumber prices move.",
      },
      {
        q: "What workers' comp class code is a sawmill?",
        a: "Class code 2710 covers sawmill or planing mill operations — the head rig, resaw, edger, planer, and kiln operations. It's one of the higher-rated manufacturing codes because of the amputation and struck-by exposures. We quote 2710 with the same EMOD review and specialty-market access we bring to logging class 2702.",
      },
      {
        q: "Do I need equipment breakdown if I don't have a boiler?",
        a: "Almost always yes. Equipment breakdown (formerly called boiler & machinery) covers electrical short circuits, motor burnout, and pressure-vessel failures — not just boilers. A band-mill motor failure or a kiln electrical fault is a covered loss under equipment breakdown and an exclusion under standard property.",
      },
      {
        q: "Can you bundle sawmill coverage with my logging operation?",
        body: "",
        a: "Yes — and we usually recommend it. If you harvest timber and mill it, bundling logging workers' comp (2702), sawmill workers' comp (2710), logging equipment, mill property, and a coordinated GL/CPL program gives you one renewal date, one broker, and no gaps between the woods and the mill.",
      },
    ],
  },

  "logging-pollution-liability": {
    heroBlurb:
      "Logging has real pollution exposure — hydraulic and fuel spills at the landing, sediment and erosion running into streams, wetlands disturbance during site prep, and stump-grinding debris. Standard general liability excludes pollution outright. A forestry Contractors Pollution Liability (CPL) policy is the only thing standing between a spill and a six-figure cleanup.",
    whatsCovered: [
      "On-site and off-site cleanup of fuel, hydraulic oil, and lubricant spills",
      "Bodily injury and property damage from a pollution condition",
      "Sediment / erosion runoff into streams and waterways",
      "Wetlands and riparian-area disturbance claims",
      "Third-party claims (downstream landowners, water users)",
      "Contractor-driven cleanup (you cause it, you clean it up)",
      "Loading-area and fueling-site spills",
      "Natural resource damages (where covered by the form)",
      "Defense costs for pollution claims",
    ],
    whoItsFor: [
      "Logging contractors working near streams, lakes, or wetlands",
      "Operations with on-site fueling or hydraulic equipment at the landing",
      "Crews on USFS / state timber sales with environmental stipulations",
      "Forestry contractors doing site prep, road building, or mechanical planting",
      "Loggers subject to state BMP (best management practice) requirements",
    ],
    whyCca: [
      {
        title: "Standard GL excludes pollution — we close that gap",
        body: "Virtually every standard general liability policy contains an absolute pollution exclusion. A hydraulic-line failure on a skidder, a fuel spill at the landing, or sediment into a classified stream — none are covered by GL alone. A forestry CPL policy is how you close the gap.",
      },
      {
        title: "We speak BMP, SMZ, and the federal contract language",
        body: "Streamside Management Zones, Best Management Practices, and the environmental stipulations in federal timber sale contracts all create pollution exposures the underwriter needs to understand. We translate your operation into language the CPL market prices correctly.",
      },
      {
        title: "Cleanup first, defense second",
        body: "Pollution claims move fast — a spill in a stream is a same-day problem. We write CPL forms that prioritize cleanup with experienced environmental contractors, not just legal defense.",
      },
    ],
    faqs: [
      {
        q: "What counts as a 'pollution condition' for a logging operation?",
        a: "The release of fuel, hydraulic fluid, lubricants, or other petroleum products at the landing or during fueling; sediment and erosion runoff into a stream, wetland, or waterway; disturbance of wetlands or riparian buffers during site prep or road building; and debris from grinding or mechanical site prep. Any of these can trigger a third-party claim, a state environmental enforcement action, or a federal timber sale contract issue.",
      },
      {
        q: "Doesn't my GL cover fuel spills?",
        a: "Generally no. Standard general liability contains a pollution exclusion that removes coverage for most releases of petroleum products. Some GL forms have a very limited 'hostile fire' exception, but it is narrow and unreliable. A forestry CPL policy is the only reliable way to cover fuel and hydraulic spills at a logging operation.",
      },
      {
        q: "Do federal timber sales require pollution liability insurance?",
        a: "Some do, depending on the tract and the contracting officer's stipulations. Even where it's not strictly required by the contract, federal timber sale environmental stipulations (SMZs, BMPs, sediment control) create real exposures that make a CPL policy prudent. We'll review your timber sale contract and quote the limits that match the actual exposure.",
      },
      {
        q: "What limit should I carry?",
        a: "$1,000,000 per occurrence is the common floor for forestry CPL, and many timber buyers and landowners require it. Operations near sensitive waterways or with significant on-site fuel storage often carry $2M–$5M, sometimes stacked with an excess policy. We'll quote to your contract requirements and your actual site exposure.",
      },
      {
        q: "Does CPL cover the cleanup if I cause the spill?",
        a: "Yes — that's the point. CPL covers pollution conditions arising from your contracting operations, whether the claim comes from a downstream landowner, a state agency, or your own discovery of a spill. Coverage includes the cleanup cost (often the largest component), third-party bodily injury and property damage, and defense.",
      },
    ],
  },

  "tree-service-arborist-insurance": {
    heroBlurb:
      "Tree care is the high-volume trade adjacent to logging — and it has its own class codes, exposures, and markets. Aerial lifts, chippers, climbing crews, and class code 0106 workers' comp mean a generic contractor policy won't do. We write tree service and arborist programs for pruning, removal, and plant-health-care operators.",
    whatsCovered: [
      "General liability — tree service & arborist (class 9102)",
      "Workers' comp — tree trimming (class 0106) and tree removal",
      "Aerial lift / bucket truck coverage (auto + equipment)",
      "Chipper inland marine (scheduled equipment)",
      "Climbing gear, chain saws, and rigging equipment",
      "Completed operations — tree falls after the job, property damage",
      "Property damage to the trees and plants being serviced",
      "Herbicide / pesticide application coverage (pollution extension)",
      "Professional liability (arborist consulting & reports)",
    ],
    whoItsFor: [
      "Residential & commercial tree service contractors",
      "ISA Certified Arborists and consulting arborists",
      "Line-clearance / utility tree care contractors",
      "Stump grinding and plant-health-care operators",
      "Tree care crews running bucket trucks and chippers",
    ],
    whyCca: [
      {
        title: "We know class 0106 from class 9102",
        body: "Tree trimming workers' comp (0106) is rated differently than tree removal, and both differ from logging. We assign codes correctly, document your operation, and route the submission to the tree-care specialists, not the generalist desk.",
      },
      {
        title: "Completed-operations is where tree claims live",
        body: "The classic tree-service claim is a tree that falls after the crew leaves — onto a house, a car, a power line. We write GL with real completed-operations coverage and talk through the contractual protection you need before the climb.",
      },
      {
        title: "Bucket trucks and chippers, together",
        body: "Most tree crews run a bucket truck and a chipper as their core iron. We quote the auto (bucket truck), the inland marine (chipper and climbing gear), and the GL/comp as one program — no gaps when the boom touches a power line.",
      },
    ],
    faqs: [
      {
        q: "What's the difference between tree service insurance and logging insurance?",
        a: "They overlap but use different class codes and markets. Logging (class 2702) covers timber harvesting — felling trees for lumber, in a forest setting, on a timber sale. Tree service / arborist work (class 9102 for GL, 0106 for workers' comp) covers pruning, removal, and plant health care, usually in residential or commercial settings. We write both, and many of our logging clients also run a tree-service arm.",
      },
      {
        q: "Do I need workers' comp if my climbers are subcontractors?",
        a: "In most states, yes — and even where it's not strictly required, the liability for an uninsured injured climber falls back on you. Tree climbing (class 0106) has a high fall severity, and most jurisdictions treat your subcontractors as employees for workers' comp if they don't carry their own policy. We'll review your crew structure and quote accordingly.",
      },
      {
        q: "Does tree service GL cover a tree that falls after we finish the job?",
        a: "Completed-operations coverage under your GL is what responds here, and it's one of the most important parts of a tree-care policy. We write GL with adequate completed-operations aggregate and talk through the pre-job documentation (photos, site conditions, neighbor notifications) that keeps a post-job claim defensible.",
      },
      {
        q: "Are herbicide and pesticide applications covered?",
        a: "Herbicide and pesticide application is a pollution exposure that standard GL typically excludes. We add a pollution extension or a limited-pollution endorsement to cover plant-health-care applications — and we ask up front whether you spray, because the question comes back from the underwriter every time.",
      },
      {
        q: "What does a tree service insurance program cost?",
        a: "It depends on revenue, crew size, class code mix (trimming vs removal), subcontractor use, and loss history. A small residential tree service commonly runs a few thousand dollars a year for GL; adding workers' comp, the bucket truck, and the chipper brings the total program higher. The fastest way to a real number is a 15-minute call to 844-967-5247.",
      },
    ],
  },
};

// === Why-choose-us cards (homepage) ===
export const WHY_CHOOSE = [
  {
    icon: HardHat,
    title: "Former contractor on staff",
    description:
      "Josh Cotner ran crews before founding CCA in 2005. He reads your loss runs, knows what a feller buncher costs to replace, and writes submissions that get the specialty market's best terms.",
  },
  {
    icon: Gauge,
    title: "EMOD strategy, not just a quote",
    description:
      "Your experience mod is the biggest single lever on logging workers' comp. We review your mod worksheet, flag errors, and build the safety documentation that pulls it back down.",
  },
  {
    icon: ShieldCheck,
    title: "Loggers Broad Form — standard",
    description:
      "We don't bind a logging GL without the Loggers Broad Form endorsement. The trees, the cutting, the loading — all back in coverage, where it belongs.",
  },
  {
    icon: Truck,
    title: "Log trucks & ICC filings handled",
    description:
      "Physical damage, cargo, bobtail, and the federal Form E & Form H filings — quoted as one fleet program and filed with the FMCSA so you don't lose a load to a lapsed filing.",
  },
  {
    icon: MapPinned,
    title: "All 50 states, including monopolistic",
    description:
      "Licensed everywhere — yes, including Ohio, Washington, North Dakota, and Wyoming state-fund work, plus Oregon SAIF and Idaho submissions.",
  },
  {
    icon: Timer,
    title: "15-minute quotes, 2-hour claims",
    description:
      "Most logging quotes turn around in a business day once we have loss runs. Claims reach a live person within two hours, 24/7 — because a downed machine or injured crew can't wait.",
  },
];

// === Process steps (homepage) ===
export const PROCESS = [
  {
    step: 1,
    icon: PhoneCall,
    title: "Tell us about your operation",
    description:
      "A 15-minute call or a quote form. We learn your class codes, your equipment, your mod, and how your crew actually works — the details the underwriter needs to see.",
  },
  {
    step: 2,
    icon: ClipboardList,
    title: "We build the submission",
    description:
      "We pull your loss runs, assemble the safety documentation, schedule the equipment, and frame the operation for the specialty markets that write logging.",
  },
  {
    step: 3,
    icon: Banknote,
    title: "Real quotes, real markets",
    description:
      "A-rated specialty program quotes — not a generic number. We compare options, explain the differences, and show you where the gaps were in your old program.",
  },
  {
    step: 4,
    icon: BadgeCheck,
    title: "Bound, filed, and serviced",
    description:
      "We bind coverage, file the certificates and ICC forms, list your lenders and landowners, and stay on the policy all term — claims, audits, adds, changes.",
  },
];

// === Homepage FAQ ===
export const HOME_FAQS = [
  {
    q: "Is logging really that dangerous to insure?",
    a: "Yes — logging is consistently ranked among the most dangerous jobs in America, with a fatal injury rate far above the all-occupation average. Struck-by-tree, chainsaw laceration, cable snap-back, and equipment rollover are real and frequent. That's why most standard carriers decline the class codes and why we work with the A-rated specialty markets that underwrite logging every day.",
  },
  {
    q: "What does a logging insurance program cost?",
    a: "It depends on payroll (workers' comp), equipment value (inland marine), truck count (auto), and your loss history. Logging workers' comp is the biggest line and the most sensitive to your experience mod (EMOD) — a safe operator with a mod below 1.0 pays substantially less than the manual rate. The fastest way to a real number is a 15-minute call to the logging desk at 844-967-5247.",
  },
  {
    q: "Can you write coverage if my EMOD is above 1.0?",
    a: "Yes. A climbing experience mod makes you more expensive but not uninsurable. We have access to specialty excess-and-surplus markets and group self-insurance funds that write climbing-mod operators — and we help you build the safety program that pulls the mod back down over time.",
  },
  {
    q: "Do you handle US Forest Service and state timber sale requirements?",
    a: "Yes. Federal and state timber sale contracts have specific insurance requirements — per-contract limits, additional insured wording, and endorsement forms. We issue the certificates and endorsements the contracting officer needs to sign your contract, and we list the timber buyer or landowner as additional insured.",
  },
  {
    q: "What's the difference between logging insurance and tree service insurance?",
    a: "Logging covers timber harvesting for lumber — felling trees in a forest, on a timber sale, under class code 2702 (workers' comp) and a Loggers Broad Form GL. Tree service / arborist work covers pruning, removal, and plant health care in residential or commercial settings, under class codes 9102 (GL) and 0106 (workers' comp). We write both, and many contractors run both operations.",
  },
  {
    q: "How fast can I get covered?",
    a: "Most logging programs are quoted within one business day of receiving your loss runs and payroll data, and bound the same week. We can issue evidence of insurance and certificates the same day coverage is bound. Call 844-967-5247 and ask for the logging desk.",
  },
];

// === About page team/credentials content ===
export const ABOUT_POINTS = [
  {
    icon: HardHat,
    title: "Former contractor credibility",
    body: "Josh Cotner ran crews before becoming an insurance specialist. He reads a loss run the way a logger reads a stand — and writes submissions that reflect how the operation actually works.",
  },
  {
    icon: ShieldCheck,
    title: "20+ years contractor-focused",
    body: "Founded in 2005, Contractors Choice Agency has spent two decades insuring the trades that standard carriers won't touch — spray foam, roofing, and now logging and forestry.",
  },
  {
    icon: MapPinned,
    title: "Licensed in all 50 states",
    body: "We write coast to coast, including the four monopolistic-fund states (OH, WA, ND, WY), Oregon SAIF, and Idaho. Wherever your timber sale is, we can write the coverage.",
  },
  {
    icon: HeartPulse,
    title: "Specialty-market access",
    body: "Direct appointments with the A-rated specialty programs that actually underwrite logging class codes, cable operations, and forestry pollution — not just the generalist markets.",
  },
];
