import type { Metadata } from "next";
import { displayFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE, SERVICES } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Lumberjack Insurance — Flagstaff & Northern Arizona Insurance Agency",
    template: "%s | Lumberjack Insurance",
  },
  description: SITE.description,
  keywords: [
    "flagstaff insurance",
    "flagstaff insurance agency",
    "northern arizona insurance",
    "home insurance flagstaff",
    "homeowners insurance flagstaff az",
    "car insurance flagstaff",
    "auto insurance flagstaff az",
    "business insurance flagstaff",
    "landlord insurance flagstaff",
    "renters insurance flagstaff",
    "renters insurance nau",
    "nau student insurance",
    "wildfire home insurance arizona",
    "local insurance agent flagstaff",
    "insurance sedona williams cottonwood",
    "lumberjack insurance",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "Lumberjack Insurance — Flagstaff & Northern Arizona Insurance Agency",
    description: SITE.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lumberjack Insurance — local Flagstaff & Northern Arizona insurance agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumberjack Insurance — Flagstaff & Northern Arizona Insurance Agency",
    description:
      "Local Flagstaff insurance agents for home, auto, business, landlord, and renters coverage. Hometown service, multiple carriers shopped for you.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    alternateName: "Contractors Choice Agency",
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phoneHref.replace("tel:", ""),
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.1983,
      longitude: -111.6513,
    },
    employee: {
      "@type": "Person",
      name: "Josh Cotner",
      jobTitle: "Founder & Insurance Agent",
    },
    areaServed: [
      { "@type": "City", name: "Flagstaff, Arizona" },
      { "@type": "City", name: "Sedona, Arizona" },
      { "@type": "City", name: "Williams, Arizona" },
      { "@type": "City", name: "Cottonwood, Arizona" },
      { "@type": "City", name: "Camp Verde, Arizona" },
      { "@type": "City", name: "Page, Arizona" },
      { "@type": "City", name: "Munds Park, Arizona" },
      { "@type": "City", name: "Doney Park, Arizona" },
      { "@type": "AdministrativeArea", name: "Coconino County, Arizona" },
      { "@type": "AdministrativeArea", name: "Northern Arizona" },
    ],
    serviceType: SERVICES.map((s) => s.title),
    parentOrganization: {
      "@type": "InsuranceAgency",
      name: "Contractors Choice Agency",
      url: "https://contractorschoiceagency.com",
      foundingDate: "2005",
      foundingLocation: { "@type": "Place", name: "Chandler, Arizona" },
    },
  };

  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
