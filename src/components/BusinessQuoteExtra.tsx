"use client";
// Add-only ACORD-style GL quote fields (Tier 3) for the BUSINESS branch of /quote. Every name here is
// OPTIONAL and is registered in public/__forms.html. fein is NOT here: the page already has it.
// No policy-number fields exist on this site by rule. Donor: environmentalcontractorsinsurance.com quote-extra.tsx.
import { useEffect, useRef, useState } from "react";

export type QValues = Record<string, string>;
type Opt = string | [string, string];
export interface QField { name: string; label: string; type: string; options?: Opt[]; min?: number; max?: number; maxLength?: number; placeholder?: string; inputMode?: string; when?: [string, string] }
export interface QSection { title: string; fields: QField[] }

export const EXTRA_SECTIONS: QSection[] = [
 {
  "title": "Business details (all optional)",
  "fields": [
   {
    "name": "businessName",
    "label": "Business name",
    "type": "text"
   },
   {
    "name": "entityType",
    "label": "Business entity type",
    "type": "select",
    "options": [
     "Individual/Sole prop",
     "Partnership",
     "Corporation",
     "S-Corp",
     "LLC",
     "Joint venture",
     "Not for profit",
     "Trust"
    ]
   },
   {
    "name": "physicalCounty",
    "label": "County (physical location)",
    "type": "text"
   },
   {
    "name": "yearsInBusinessNumber",
    "label": "Years in business (number)",
    "type": "number",
    "min": 0
   },
   {
    "name": "annualRevenue",
    "label": "Annual revenue (exact, in dollars)",
    "type": "number",
    "inputMode": "decimal",
    "placeholder": "dollars, e.g. 85000"
   },
   {
    "name": "fullTimeEmployees",
    "label": "Full-time employees (exact number)",
    "type": "number",
    "min": 0
   },
   {
    "name": "partTimeEmployees",
    "label": "Part-time employees (exact number)",
    "type": "number",
    "min": 0
   },
   {
    "name": "annualPayroll",
    "label": "Annual payroll (in dollars)",
    "type": "number",
    "inputMode": "decimal",
    "placeholder": "dollars, e.g. 85000"
   },
   {
    "name": "usesSubcontractors",
    "label": "Do you use subcontractors?",
    "type": "radio",
    "options": [
     "Yes",
     "No"
    ]
   },
   {
    "name": "workSubcontractedPercent",
    "label": "Percent of work subcontracted out (0 to 100)",
    "type": "number",
    "min": 0,
    "max": 100
   }
  ]
 },
 {
  "title": "Mailing address (all optional)",
  "fields": [
   {
    "name": "mailing_same_as_physical",
    "label": "Is your mailing address the same as your physical address?",
    "type": "radio",
    "options": [
     "Yes",
     "No"
    ]
   },
   {
    "name": "mailing_street_address",
    "label": "Mailing street address",
    "type": "text",
    "when": [
     "mailing_same_as_physical",
     "No"
    ]
   },
   {
    "name": "mailing_city",
    "label": "Mailing city",
    "type": "text",
    "when": [
     "mailing_same_as_physical",
     "No"
    ]
   },
   {
    "name": "mailing_county",
    "label": "Mailing county",
    "type": "text",
    "when": [
     "mailing_same_as_physical",
     "No"
    ]
   },
   {
    "name": "mailing_state",
    "label": "Mailing state",
    "type": "select",
    "options": [
     "AL",
     "AK",
     "AZ",
     "AR",
     "CA",
     "CO",
     "CT",
     "DE",
     "DC",
     "FL",
     "GA",
     "HI",
     "ID",
     "IL",
     "IN",
     "IA",
     "KS",
     "KY",
     "LA",
     "ME",
     "MD",
     "MA",
     "MI",
     "MN",
     "MS",
     "MO",
     "MT",
     "NE",
     "NV",
     "NH",
     "NJ",
     "NM",
     "NY",
     "NC",
     "ND",
     "OH",
     "OK",
     "OR",
     "PA",
     "RI",
     "SC",
     "SD",
     "TN",
     "TX",
     "UT",
     "VT",
     "VA",
     "WA",
     "WV",
     "WI",
     "WY"
    ],
    "when": [
     "mailing_same_as_physical",
     "No"
    ]
   },
   {
    "name": "mailing_zip",
    "label": "Mailing ZIP",
    "type": "text",
    "maxLength": 10,
    "when": [
     "mailing_same_as_physical",
     "No"
    ]
   }
  ]
 },
 {
  "title": "Coverage requested (all optional)",
  "fields": [
   {
    "name": "desiredEffectiveDate",
    "label": "Desired policy effective date",
    "type": "date"
   },
   {
    "name": "limitsRequested",
    "label": "Liability limits wanted (summary)",
    "type": "select",
    "options": [
     "1M/2M",
     "1M/3M",
     "2M/4M",
     "Not sure"
    ]
   },
   {
    "name": "gl_each_occurrence",
    "label": "Each occurrence limit",
    "type": "select",
    "options": [
     "$500,000",
     "$1,000,000",
     "$2,000,000"
    ]
   },
   {
    "name": "gl_general_aggregate",
    "label": "General aggregate limit",
    "type": "select",
    "options": [
     "$1,000,000",
     "$2,000,000",
     "$3,000,000",
     "$4,000,000"
    ]
   },
   {
    "name": "gl_products_completed_ops_aggregate",
    "label": "Products / completed operations aggregate",
    "type": "select",
    "options": [
     "$1,000,000",
     "$2,000,000",
     "$3,000,000",
     "$4,000,000"
    ]
   },
   {
    "name": "gl_personal_advertising_injury",
    "label": "Personal and advertising injury limit",
    "type": "select",
    "options": [
     "$500,000",
     "$1,000,000",
     "$2,000,000"
    ]
   },
   {
    "name": "gl_rented_premises",
    "label": "Damage to rented premises limit",
    "type": "select",
    "options": [
     "$50,000",
     "$100,000",
     "$300,000"
    ]
   },
   {
    "name": "gl_medical_expense",
    "label": "Medical expense limit (any one person)",
    "type": "select",
    "options": [
     "$5,000",
     "$10,000"
    ]
   }
  ]
 },
 {
  "title": "Policy and premises details (all optional)",
  "fields": [
   {
    "name": "glTrigger",
    "label": "Occurrence or claims-made",
    "type": "select",
    "options": [
     "Occurrence",
     "Claims Made"
    ]
   },
   {
    "name": "glAggregateAppliesTo",
    "label": "How the aggregate applies",
    "type": "select",
    "options": [
     "Per Policy",
     "Per Project",
     "Per Location",
     "Other"
    ]
   },
   {
    "name": "premisesCityLimits",
    "label": "Premises inside or outside city limits",
    "type": "select",
    "options": [
     "Inside City Limits",
     "Outside City Limits"
    ]
   },
   {
    "name": "premisesInterest",
    "label": "Owner or tenant of the premises",
    "type": "select",
    "options": [
     "Owner",
     "Tenant"
    ]
   },
   {
    "name": "locationDescription",
    "label": "Describe the premises / location operations",
    "type": "text",
    "maxLength": 54
   },
   {
    "name": "billingPlan",
    "label": "Billing plan",
    "type": "select",
    "options": [
     "Direct Bill",
     "Agency Bill"
    ]
   }
  ]
 },
 {
  "title": "Loss history, last 3 years (all optional, leave blank if none)",
  "fields": [
   {
    "name": "lossesLast3Years",
    "label": "Any losses or claims in the last 3 years?",
    "type": "select",
    "options": [
     "Yes",
     "No"
    ]
   },
   {
    "name": "loss1Date",
    "label": "Loss 1: date",
    "type": "date"
   },
   {
    "name": "loss1LineOfBusiness",
    "label": "Loss 1: line of business",
    "type": "select",
    "options": [
     "General Liability",
     "Property",
     "Workers' Compensation",
     "Commercial Auto",
     "Pollution",
     "Other"
    ]
   },
   {
    "name": "loss1Amount",
    "label": "Loss 1: amount paid or reserved ($)",
    "type": "number",
    "inputMode": "decimal",
    "placeholder": "dollars, e.g. 85000"
   },
   {
    "name": "loss1Status",
    "label": "Loss 1: status",
    "type": "select",
    "options": [
     "Open",
     "Closed"
    ]
   },
   {
    "name": "loss2Date",
    "label": "Loss 2: date",
    "type": "date"
   },
   {
    "name": "loss2LineOfBusiness",
    "label": "Loss 2: line of business",
    "type": "select",
    "options": [
     "General Liability",
     "Property",
     "Workers' Compensation",
     "Commercial Auto",
     "Pollution",
     "Other"
    ]
   },
   {
    "name": "loss2Amount",
    "label": "Loss 2: amount paid or reserved ($)",
    "type": "number",
    "inputMode": "decimal",
    "placeholder": "dollars, e.g. 85000"
   },
   {
    "name": "loss2Status",
    "label": "Loss 2: status",
    "type": "select",
    "options": [
     "Open",
     "Closed"
    ]
   },
   {
    "name": "loss3Date",
    "label": "Loss 3: date",
    "type": "date"
   },
   {
    "name": "loss3LineOfBusiness",
    "label": "Loss 3: line of business",
    "type": "select",
    "options": [
     "General Liability",
     "Property",
     "Workers' Compensation",
     "Commercial Auto",
     "Pollution",
     "Other"
    ]
   },
   {
    "name": "loss3Amount",
    "label": "Loss 3: amount paid or reserved ($)",
    "type": "number",
    "inputMode": "decimal",
    "placeholder": "dollars, e.g. 85000"
   },
   {
    "name": "loss3Status",
    "label": "Loss 3: status",
    "type": "select",
    "options": [
     "Open",
     "Closed"
    ]
   }
  ]
 },
 {
  "title": "Certificate holder / additional insured (all optional)",
  "fields": [
   {
    "name": "additionalInsuredName",
    "label": "Additional insured / certificate holder name",
    "type": "text"
   },
   {
    "name": "additionalInsuredAddress",
    "label": "Address",
    "type": "text"
   },
   {
    "name": "additionalInsuredCity",
    "label": "City",
    "type": "text"
   },
   {
    "name": "additionalInsuredState",
    "label": "State",
    "type": "select",
    "options": [
     "AL",
     "AK",
     "AZ",
     "AR",
     "CA",
     "CO",
     "CT",
     "DE",
     "DC",
     "FL",
     "GA",
     "HI",
     "ID",
     "IL",
     "IN",
     "IA",
     "KS",
     "KY",
     "LA",
     "ME",
     "MD",
     "MA",
     "MI",
     "MN",
     "MS",
     "MO",
     "MT",
     "NE",
     "NV",
     "NH",
     "NJ",
     "NM",
     "NY",
     "NC",
     "ND",
     "OH",
     "OK",
     "OR",
     "PA",
     "RI",
     "SC",
     "SD",
     "TN",
     "TX",
     "UT",
     "VT",
     "VA",
     "WA",
     "WV",
     "WI",
     "WY"
    ]
   },
   {
    "name": "additionalInsuredZip",
    "label": "ZIP",
    "type": "text",
    "maxLength": 10
   },
   {
    "name": "certificateNeededBy",
    "label": "Certificate needed by",
    "type": "date"
   }
  ]
 }
];

const YES_NO_QUESTIONS: { key: string; label: string }[] = [
  { key: "buildingLeasedToOthers", label: "Is the building leased to others?" },
  { key: "applicantSubsidiary", label: "Is the applicant a subsidiary of another entity?" },
  { key: "applicantHasSubsidiaries", label: "Does the applicant have subsidiaries?" },
  { key: "safetyProgramsExist", label: "Do safety programs exist?" },
  { key: "exposureFlammables", label: "Any exposure to flammables, explosives or chemicals?" },
  { key: "otherInsurance", label: "Any other insurance with the proposed company?" },
  { key: "coverageTerminated", label: "Has any policy or coverage ever been terminated?" },
  { key: "pastAllegations", label: "Any past allegations of abuse, molestation or discrimination?" },
  { key: "indictedOrConvicted", label: "Any indictments or convictions?" },
  { key: "safetyViolations", label: "Any uncorrected fire and/or safety violations?" },
  { key: "negativeFinancialAction", label: "Any past negative financial action?" },
  { key: "judgementOrLien", label: "Any judgement or lien?" },
  { key: "businessInTrust", label: "Has the business been placed in a trust?" },
  { key: "foreignOperations", label: "Any foreign operations or products?" },
  { key: "otherVentures", label: "Do other ventures exist?" },
  { key: "possessDrones", label: "Does the applicant possess drones?" },
  { key: "hireDroneOperators", label: "Does the applicant hire drone operators?" },
  { key: "priorExclusionUninsured", label: "Has any product, work, accident or location been excluded, uninsured or self-insured from any previous coverage?" },
  { key: "tailCoveragePurchased", label: "Was tail coverage purchased under any previous policy?" },
  { key: "drawsPlansForOthers", label: "Does the applicant draw plans, designs or specifications for others?" },
  { key: "blastingOrExplosives", label: "Do any operations include blasting, or utilize or store explosive material?" },
  { key: "excavationOrEarthMoving", label: "Does any operation involve excavation, tunneling, underground work or earth moving?" },
  { key: "subsRequireLowerLimits", label: "Do subcontractors carry coverages or limits less than the applicant?" },
  { key: "subsWorkWithoutCOI", label: "Are subcontractors allowed to work without providing you a certificate of insurance?" },
  { key: "leaseEquipmentToOthers", label: "Does the applicant lease equipment to others, with or without operators?" },
  { key: "installServiceDemoProducts", label: "Does the applicant install, service or demonstrate products?" },
  { key: "foreignProducts", label: "Foreign products sold, distributed or used as components?" },
  { key: "researchAndDevelopment", label: "Research and development conducted, or new products planned?" },
  { key: "guaranteesWarranties", label: "Guarantees, warranties or hold harmless agreements?" },
  { key: "aircraftSpaceProducts", label: "Products related to the aircraft/space industry?" },
  { key: "productsRecalled", label: "Products recalled, discontinued or changed?" },
  { key: "productsRepackagedUnderLabel", label: "Products of others sold or repackaged under the applicant's label?" },
  { key: "productsUnderOthersLabel", label: "Products sold under the label of others?" },
  { key: "vendorsCoverageRequired", label: "Is vendors coverage required?" },
  { key: "sellsToOtherNamedInsured", label: "Does any named insured sell to another named insured?" },
  { key: "medicalFacilities", label: "Any medical facilities provided, or medical professionals employed or contracted?" },
  { key: "radioactiveExposure", label: "Any exposure to radioactive/nuclear materials?" },
  { key: "hazardousMaterialOps", label: "Do or did past, present or discontinued operations involve storing, treating, discharging, applying, disposing or transporting hazardous material?" },
  { key: "operationsSoldAcquired", label: "Any operations sold, acquired or discontinued in the last 5 years?" },
  { key: "rentOrLoanEquipment", label: "Do you rent or loan equipment to others?" },
  { key: "watercraftDocksFloats", label: "Any watercraft, docks or floats owned, hired or leased?" },
  { key: "parkingFacilities", label: "Any parking facilities owned or rented?" },
  { key: "parkingFeeCharged", label: "Is a fee charged for parking?" },
  { key: "recreationFacilities", label: "Recreation facilities provided?" },
  { key: "lodgingOperations", label: "Are there any lodging operations, including apartments?" },
  { key: "swimmingPool", label: "Is there a swimming pool on the premises?" },
  { key: "socialEvents", label: "Are social events sponsored?" },
  { key: "athleticTeams", label: "Are athletic teams sponsored?" },
  { key: "structuralAlterations", label: "Any structural alterations contemplated?" },
  { key: "demolitionExposure", label: "Any demolition exposure contemplated?" },
  { key: "activeJointVentures", label: "Has the applicant been active in, or is currently active in, joint ventures?" },
  { key: "leaseEmployees", label: "Do you lease employees to or from other employers?" },
  { key: "laborInterchange", label: "Is there a labor interchange with any other business or subsidiaries?" },
  { key: "dayCareFacilities", label: "Are day care facilities operated or controlled?" },
  { key: "crimesOnPremises", label: "Have any crimes occurred or been attempted on your premises within the last 3 years?" },
  { key: "formalSafetyPolicy", label: "Is there a formal, written safety and security policy in effect?" },
  { key: "promotionalSafetyClaims", label: "Does the business' promotional literature make any representation about the safety or security of the premises?" },
];


const EXPLAIN_KEYS = [
  "priorExclusionUninsured", "tailCoveragePurchased", "drawsPlansForOthers", "blastingOrExplosives", "excavationOrEarthMoving",
  "subsRequireLowerLimits", "subsWorkWithoutCOI", "leaseEquipmentToOthers", "watercraftDocksFloats", "formalSafetyPolicy",
  "installServiceDemoProducts", "researchAndDevelopment", "guaranteesWarranties", "aircraftSpaceProducts", "productsRecalled",
  "productsRepackagedUnderLabel", "productsUnderOthersLabel", "vendorsCoverageRequired", "sellsToOtherNamedInsured", "medicalFacilities",
  "radioactiveExposure", "hazardousMaterialOps", "operationsSoldAcquired", "rentOrLoanEquipment", "parkingFacilities",
  "parkingFeeCharged", "recreationFacilities", "socialEvents", "structuralAlterations", "demolitionExposure",
  "activeJointVentures", "laborInterchange", "dayCareFacilities", "crimesOnPremises", "promotionalSafetyClaims",
];

const EXPLAIN = new Set(EXPLAIN_KEYS);


// ---- Underwriting questionnaire: visible by default, every Yes/No REQUIRED, follow-ups shown and required after Yes.
// Follow-up names are the canonical ones map_quote_125.py reads (same as _shared/quote-component/quoteSpec.ts).
// A blank answer is never stored as "No": nothing here writes "No" for an unanswered question.
type DetailField = { key: string; label: string; kind?: "date" | "percent"; max?: number };
const DATES4: DetailField[] = [
  { key: "occurenceDate", label: "Occurrence Date", kind: "date" },
  { key: "explanation", label: "Explanation" },
  { key: "resolution", label: "Resolution" },
  { key: "resolutionDate", label: "Resolution Date", kind: "date" },
];
const GENERAL_DETAILS: Record<string, DetailField[]> = {
  applicantSubsidiary: [
    { key: "parentName", label: "Parent Company Name" },
    { key: "relationship", label: "Relationship Description", max: 39 },
    { key: "ownershipPercentage", label: "Ownership Percentage", kind: "percent" },
  ],
  applicantHasSubsidiaries: [
    { key: "subsidiaryName", label: "Subsidiary Company Name" },
    { key: "relationship", label: "Relationship Description" },
    { key: "ownershipPercentage", label: "Ownership Percentage", kind: "percent" },
  ],
  otherInsurance: [{ key: "lineOfBusiness", label: "Line of Business" }],
  negativeFinancialAction: DATES4,
  judgementOrLien: DATES4,
  safetyViolations: DATES4,
  exposureFlammables: [{ key: "description", label: "Exposure Description" }],
  pastAllegations: [{ key: "description", label: "Past Allegations Description" }],
  indictedOrConvicted: [{ key: "description", label: "Indicted or Convicted Description" }],
  businessInTrust: [{ key: "name", label: "Trust Name" }],
  otherVentures: [{ key: "description", label: "Description of Other Ventures" }],
  possessDrones: [{ key: "description", label: "Description of Drone Possession" }],
  hireDroneOperators: [{ key: "description", label: "Description of Drone Hiring" }],
};
const EXPLAIN_MAX: Record<string, number> = { rentOrLoanEquipment: 72 };
const NO_FREE_EXPLAIN = ["coverageTerminated", "safetyProgramsExist", "swimmingPool", "athleticTeams"];
const EXPLAIN_NEEDED = new Set(YES_NO_QUESTIONS.map((q) => q.key).filter((k) => !(k in GENERAL_DETAILS) && !NO_FREE_EXPLAIN.includes(k)));
const SAFETY_ELEMENTS = ["Safety Manual", "Safety Position", "Monthly Meetings", "OSHA Compliance", "Other"];
const POOL_FEATURES = ["Approved Fence", "Limited Access", "Diving Board", "Slide", "Life Guard"];
const RENT_TYPES = ["Small Tools", "Large Equipment"];
const TERM_REASONS: [string, string][] = [["nonPayment", "Non-Payment"], ["nonRenewal", "Non-Renewal"], ["agentStopRepresenting", "Agent No Longer Represents Carrier"], ["underwriting", "Underwriting"]];
const AGE_GROUPS = ["12 and Under", "13 Through 18", "Over 18"];
const POOL_CONSTRUCTION = ["Above Ground", "In Ground"];
const dname = (q: string, f: string) => `general_${q}__${f}`;
const listOf = (v: string | undefined) => (v ? v.split(", ").filter(Boolean) : []);

/** Every name a Yes answer can add. Registered in public/__forms.html. */
export const FOLLOWUP_FIELD_NAMES: string[] = [
  ...Object.entries(GENERAL_DETAILS).flatMap(([q, fs]) => fs.map((f) => dname(q, f.key))),
  ...[...TERM_REASONS.map((r) => r[0]), "conditionCorrected", "conditionCorrectedDescription"].map((k) => dname("coverageTerminated", k)),
  "safetyProgramElements", "safetyOtherText", "athleticSportDescription", "athleticContactSport", "athleticSponsorshipExtent",
  "athleticTeamAgeGroup", "poolConstruction", "poolSafetyFeatures", "rentEquipmentTypes", "rentEquipmentInstructionGiven",
  "leaseEmployeesWorkersCompCarried",
];

/** Names owned by one question, cleared when the visitor switches it to No (so a stale Yes detail is never posted). */
function ownedBy(key: string): string[] {
  const o = [`ynExplain_${key}`, ...(GENERAL_DETAILS[key] ?? []).map((f) => dname(key, f.key))];
  if (key === "coverageTerminated") o.push(...[...TERM_REASONS.map((r) => r[0]), "conditionCorrected", "conditionCorrectedDescription"].map((k) => dname(key, k)));
  if (key === "safetyProgramsExist") o.push("safetyProgramElements", "safetyOtherText");
  if (key === "athleticTeams") o.push("athleticSportDescription", "athleticContactSport", "athleticSponsorshipExtent", "athleticTeamAgeGroup");
  if (key === "swimmingPool") o.push("poolConstruction", "poolSafetyFeatures");
  if (key === "rentOrLoanEquipment") o.push("rentEquipmentTypes", "rentEquipmentInstructionGiven");
  if (key === "leaseEmployees") o.push("leaseEmployeesWorkersCompCarried");
  return o;
}

const needMsg = (m: string) => ({
  onInvalid: (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => e.currentTarget.setCustomValidity(m),
  onInput: (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => e.currentTarget.setCustomValidity(""),
});

/** Checkbox group that must have at least one box ticked. The boxes carry no name; the named hidden inputs carry the posted values. */
function Checks({ legend, options, picked, onToggle, ok, msg, hidden, labelClass }: { legend: string; options: [string, string][]; picked: string[]; onToggle: (id: string) => void; ok: boolean; msg: string; hidden: { name: string; value: string }[]; labelClass: string }) {
  const first = useRef<HTMLInputElement>(null);
  useEffect(() => { first.current?.setCustomValidity(ok ? "" : msg); }, [ok, msg]);
  return (
    <fieldset className="space-y-1">
      <legend className={labelClass}>{legend} *</legend>
      <div className="flex flex-wrap gap-x-6 gap-y-1">
        {options.map(([id, lab], i) => (
          <label key={id} className="inline-flex items-center gap-2 text-sm">
            <input ref={i === 0 ? first : undefined} type="checkbox" checked={picked.includes(id)} onChange={() => onToggle(id)} />
            <span>{lab}</span>
          </label>
        ))}
      </div>
      {hidden.map((h) => <input key={h.name} type="hidden" name={h.name} value={h.value} />)}
    </fieldset>
  );
}

function YnQuestionnaire({ values, onChange, inputClass, labelClass, headingClass }: { values: QValues; onChange: (name: string, value: string) => void; inputClass: string; labelClass: string; headingClass: string }) {
  const g = (n: string) => values[n] ?? "";
  const yes = (k: string) => g(`yn_${k}`) === "Yes";
  const setYn = (key: string, v: string) => {
    onChange(`yn_${key}`, v);
    if (v !== "Yes") ownedBy(key).forEach((n) => { if (g(n) !== "") onChange(n, ""); });
  };
  const text = (name: string, label: string, o: { type?: string; max?: number } = {}) => (
    <div key={name}>
      <label htmlFor={name} className={labelClass}>{label} *</label>
      <input id={name} name={name} type={o.type === "percent" ? "number" : o.type || "text"} min={o.type === "percent" ? 0 : undefined} max={o.type === "percent" ? 100 : undefined} step={o.type === "percent" ? "any" : undefined} maxLength={o.max} required value={g(name)} onChange={(e) => onChange(name, e.target.value)} {...needMsg(`Please fill in "${label}" because you answered Yes above.`)} className={inputClass} />
    </div>
  );
  const select = (name: string, label: string, options: string[]) => (
    <div key={name}>
      <label htmlFor={name} className={labelClass}>{label} *</label>
      <select id={name} name={name} required value={g(name)} onChange={(e) => onChange(name, e.target.value)} {...needMsg(`Please choose an option for "${label}".`)} className={inputClass}>
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
  const yesNo = (name: string, label: string) => (
    <fieldset key={name}>
      <legend className={labelClass}>{label} *</legend>
      <Radios name={name} value={g(name)} onChange={onChange} />
    </fieldset>
  );
  const toggleIn = (name: string, all: string[], id: string) => {
    const cur = listOf(g(name));
    const next = cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id];
    onChange(name, all.filter((x) => next.includes(x)).join(", "));
  };
  const list = (name: string, legend: string, all: string[], msg: string) => {
    const p = listOf(g(name));
    return <Checks key={name} legend={legend} options={all.map((x) => [x, x] as [string, string])} picked={p} onToggle={(id) => toggleIn(name, all, id)} ok={p.length > 0} msg={msg} hidden={[{ name, value: g(name) }]} labelClass={labelClass} />;
  };

  return (
    <fieldset className="space-y-4">
      <legend className={headingClass}>Underwriting questions (please answer Yes or No to every question)</legend>
      {YES_NO_QUESTIONS.map((q) => {
        const key = q.key;
        const name = `yn_${key}`;
        const extra: React.ReactNode[] = [];
        if (yes(key)) {
          if (EXPLAIN_NEEDED.has(key)) {
            const ex = `ynExplain_${key}`;
            extra.push(
              <textarea key={ex} name={ex} rows={2} maxLength={EXPLAIN_MAX[key] ?? 136} required value={g(ex)} placeholder="Please explain your Yes answer" aria-label={`Please explain your Yes answer: ${q.label}`} onChange={(e) => onChange(ex, e.target.value)} {...needMsg("Please explain your Yes answer.")} className={`${inputClass} mt-2`} />,
            );
          }
          if (GENERAL_DETAILS[key]) extra.push(<div key={`d-${key}`} className="space-y-3 mt-2">{GENERAL_DETAILS[key].map((f) => text(dname(key, f.key), f.label, { type: f.kind, max: f.max }))}</div>);
          if (key === "coverageTerminated") {
            const flag = (r: string) => dname(key, r);
            const ticked = (r: string) => g(flag(r)) === "Yes";
            const all: [string, string][] = [...TERM_REASONS, ["conditionCorrected", "Condition Corrected"]];
            extra.push(
              <div key="ct" className="space-y-3 mt-2">
                <Checks legend="Why was coverage terminated? (tick at least one)" options={all} picked={all.filter(([r]) => ticked(r)).map(([r]) => r)} onToggle={(r) => onChange(flag(r), ticked(r) ? "" : "Yes")} ok={TERM_REASONS.some(([r]) => ticked(r))} msg="Please tick at least one reason the coverage was terminated." hidden={all.map(([r]) => ({ name: flag(r), value: ticked(r) ? "Yes" : "No" }))} labelClass={labelClass} />
                {ticked("conditionCorrected") && text(flag("conditionCorrectedDescription"), "Describe how the condition was corrected")}
              </div>,
            );
          }
          if (key === "safetyProgramsExist") {
            extra.push(<div key="sp" className="mt-2">{list("safetyProgramElements", "Safety program elements", SAFETY_ELEMENTS, "Please tick at least one safety program element.")}</div>);
            if (listOf(g("safetyProgramElements")).includes("Other")) extra.push(text("safetyOtherText", "Other safety program", { max: 24 }));
          }
          if (key === "athleticTeams")
            extra.push(<div key="at" className="space-y-3 mt-2">{text("athleticSportDescription", "Sport", { max: 24 })}{yesNo("athleticContactSport", "Contact sport?")}{text("athleticSponsorshipExtent", "Extent of sponsorship", { max: 41 })}{select("athleticTeamAgeGroup", "Age group", AGE_GROUPS)}</div>);
          if (key === "swimmingPool")
            extra.push(<div key="pool" className="space-y-3 mt-2">{select("poolConstruction", "Pool construction", POOL_CONSTRUCTION)}{list("poolSafetyFeatures", "Pool safety features", POOL_FEATURES, "Please tick at least one pool safety feature.")}</div>);
          if (key === "rentOrLoanEquipment")
            extra.push(<div key="re" className="space-y-3 mt-2">{list("rentEquipmentTypes", "Type of equipment rented or loaned", RENT_TYPES, "Please tick the type of equipment rented or loaned.")}{yesNo("rentEquipmentInstructionGiven", "Is instruction given to renters?")}</div>);
          if (key === "leaseEmployees")
            extra.push(<div key="le" className="mt-2">{yesNo("leaseEmployeesWorkersCompCarried", "Workers compensation carried for leased employees?")}</div>);
        }
        return (
          <div key={key}>
            <p className={labelClass}>{q.label} *</p>
            <Radios name={name} value={g(name)} onChange={(n, v) => setYn(key, v)} />
            {extra}
          </div>
        );
      })}
    </fieldset>
  );
}

export const YN_FIELD_NAMES: string[] = YES_NO_QUESTIONS.flatMap((q) => [`yn_${q.key}`, ...(EXPLAIN.has(q.key) ? [`ynExplain_${q.key}`] : [])]);
export const EXTRA_FIELD_NAMES: string[] = [...EXTRA_SECTIONS.flatMap((s) => s.fields.map((f) => f.name)), ...YN_FIELD_NAMES, ...FOLLOWUP_FIELD_NAMES];
export const EXTRA_DEFAULTS: QValues = Object.fromEntries(EXTRA_FIELD_NAMES.map((n) => [n, ""]));

export function pruneEmpty(v: QValues): QValues {
  return Object.fromEntries(Object.entries(v).filter(([, x]) => x !== ""));
}

function Radios({ name, value, onChange }: { name: string; value: string; onChange: (n: string, v: string) => void }) {
  return (
    <div className="flex gap-6">
      {["Yes", "No"].map((o) => (
        <label key={o} className="inline-flex items-center gap-2 text-sm">
          <input type="radio" name={name} value={o} required checked={value === o} onChange={(e) => { e.currentTarget.setCustomValidity(""); onChange(name, o); }} onInvalid={(e) => e.currentTarget.setCustomValidity("Please choose Yes or No for this question.")} />
          <span>{o}</span>
        </label>
      ))}
    </div>
  );
}

export function QuoteExtraFields({ values, onChange, inputClass, labelClass, headingClass }: { values: QValues; onChange: (name: string, value: string) => void; inputClass: string; labelClass: string; headingClass?: string }) {
  const h = headingClass || "text-base font-bold mt-6 mb-1";
  return (
    <div className="space-y-4">
      {EXTRA_SECTIONS.map((s) => (
        s.fields.length === 0 ? null : (
        <fieldset key={s.title} className="space-y-4">
          <legend className={h}>{s.title}</legend>
          {s.fields.map((f) => {
            if (f.when && (values[f.when[0]] || "") !== f.when[1]) return null;
            const v = values[f.name] ?? "";
            return (
              <div key={f.name}>
                <label htmlFor={f.name} className={labelClass}>{f.label}</label>
                {f.type === "radio" ? (
                  <Radios name={f.name} value={v} onChange={onChange}/>
                ) : f.type === "select" ? (
                  <select id={f.name} name={f.name} value={v} onChange={(e) => onChange(f.name, e.target.value)} className={inputClass}>
                    <option value="">Select…</option>
                    {(f.options || []).map((o) => { const [val, lab] = Array.isArray(o) ? o : [o, o]; return <option key={val} value={val}>{lab}</option>; })}
                  </select>
                ) : (
                  <input id={f.name} name={f.name} type={f.type} value={v} min={f.min} max={f.max} maxLength={f.maxLength} inputMode={f.inputMode as never} placeholder={f.placeholder} onChange={(e) => onChange(f.name, e.target.value)} className={inputClass} />
                )}
              </div>
            );
          })}
        </fieldset>
        )
      ))}
      <YnQuestionnaire values={values} onChange={onChange} inputClass={inputClass} labelClass={labelClass} headingClass={h} />
    </div>
  );
}

/** Business-branch wrapper for the native-POST /quote form: owns the field state; inputs post natively by name. */
export default function BusinessQuoteExtra({ inputClass, labelClass }: { inputClass: string; labelClass: string }) {
  const [values, setValues] = useState<QValues>(EXTRA_DEFAULTS);
  return (
    <div className="mt-6 space-y-4">
      <QuoteExtraFields
        values={values}
        onChange={(n, v) => setValues((p) => ({ ...p, [n]: v }))}
        inputClass={inputClass}
        labelClass={labelClass}
        headingClass="text-sm font-body font-semibold text-[#2C180C] mt-6 mb-1"
      />
    </div>
  );
}
