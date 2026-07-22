import type { Metadata } from "next";
import ServicesClientPage from "@/components/services/ServicesClientPage";
import { SERVICES_DATA } from "@/src/data/services";

export const metadata: Metadata = {
  title: "Professional Auto Electronics Repairs | KG Auto Electronics",
  description:
    "Specialists in Mercedes, BMW, Audi, VW, Volvo, Ford, Jaguar and Land Rover electronic repairs including clock springs, ABS modules, instrument clusters, dashboards, LED taillights and ECUs.",
  keywords: [
    "auto electronics repair",
    "mercedes clock spring repair",
    "bmw squib slip ring fix",
    "audi abs module rebuild",
    "ford instrument cluster repair",
    "mercedes led tail light fix",
    "volvo bcm repair",
    "ecu remapping and bench repair",
    "auto electronics birmingham",
  ],
  openGraph: {
    title: "Professional Auto Electronics Repairs | KG Auto Electronics",
    description:
      "Specialists in Mercedes, BMW, Audi, VW, Volvo, Ford, Jaguar and Land Rover electronic repairs including clock springs, ABS modules, instrument clusters, dashboards, LED taillights and ECUs.",
    url: "https://kgautoelectronics.com/services",
    siteName: "KG Auto Electronics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://kgautoelectronics.com/images/hero_car.png",
        width: 1200,
        height: 630,
        alt: "KG Auto Electronics Workshop & Diagnostic Bench",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Auto Electronics Repairs | KG Auto Electronics",
    description:
      "Specialists in Mercedes, BMW, Audi, VW, Volvo, Ford, Jaguar and Land Rover electronic repairs.",
    images: ["https://kgautoelectronics.com/images/hero_car.png"],
  },
  alternates: {
    canonical: "https://kgautoelectronics.com/services",
  },
};

export default function ServicesPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://kgautoelectronics.com/services#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://kgautoelectronics.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://kgautoelectronics.com/services",
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": "https://kgautoelectronics.com/services#itemlist",
        "name": "KG Auto Electronics Repair Services",
        "description": "Comprehensive list of automotive electronic component rebuilding services",
        "itemListElement": SERVICES_DATA.map((service, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Service",
            "name": service.title,
            "description": service.description,
            "provider": {
              "@type": "AutoRepair",
              "name": "KG Auto Electronics BRUM Ltd",
              "telephone": "+447886480622",
            },
            "offers": {
              "@type": "Offer",
              "url": service.ebayUrl,
              "priceCurrency": "GBP",
              "itemCondition": "https://schema.org/RefurbishedCondition",
              "availability": "https://schema.org/InStock",
            },
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <ServicesClientPage />
    </>
  );
}
