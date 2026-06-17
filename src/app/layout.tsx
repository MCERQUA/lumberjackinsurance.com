import type { Metadata } from "next";
import { displayFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Lumberjack Insurance — Logging & Forestry Contractor Insurance",
    template: "%s | Lumberjack Insurance",
  },
  description: SITE.description,
  keywords: [
    "logging insurance",
    "logger insurance",
    "lumberjack insurance",
    "logging truck insurance",
    "log truck insurance",
    "forestry insurance",
    "timber insurance",
    "sawmill insurance",
    "logging equipment insurance",
    "logger workers comp",
    "timber harvesting insurance",
    "logging contractor insurance",
    "tree service insurance",
    "arborist insurance",
    "feller buncher insurance",
    "skidder insurance",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "Lumberjack Insurance — Logging & Forestry Contractor Insurance",
    description:
      "Specialty insurance for logging contractors, timber harvesters, and forestry operations. Workers' comp for logging class codes, log trucks, equipment, pollution, and sawmills. Licensed all 50 states. 15-minute quotes.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lumberjack Insurance — logging & forestry contractor insurance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumberjack Insurance — Logging & Forestry Contractor Insurance",
    description:
      "Specialty insurance for logging contractors, timber harvesters, and forestry operations. 15-minute quotes, 2-hour claims response, licensed all 50 states.",
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
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
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
      latitude: 33.2622,
      longitude: -111.7826,
    },
    employee: {
      "@type": "Person",
      name: "Josh Cotner",
      jobTitle: "Founder & Insurance Agent",
    },
    areaServed: [
      { "@type": "State", name: "Oregon" },
      { "@type": "State", name: "Washington" },
      { "@type": "State", name: "Idaho" },
      { "@type": "State", name: "Montana" },
      { "@type": "State", name: "Maine" },
      { "@type": "State", name: "Alabama" },
      { "@type": "State", name: "Georgia" },
      { "@type": "State", name: "Mississippi" },
      { "@type": "State", name: "Arkansas" },
      { "@type": "Country", name: "United States" },
    ],
    serviceType: [
      "Loggers' Workers' Compensation",
      "Log Truck & Commercial Auto Insurance",
      "Logging Equipment / Inland Marine Insurance",
      "General Liability — Forestry & Timber",
      "Sawmill & Property Insurance",
      "Pollution Liability — Forestry",
      "Tree Service & Arborist Insurance",
    ],
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
