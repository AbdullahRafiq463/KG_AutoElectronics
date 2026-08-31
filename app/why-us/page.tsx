import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import WhyUsHero from "@/components/why-us/WhyUsHero";
import WhyChooseUs from "@/components/why-us/WhyChooseUs";
import WhyUsComparison from "@/components/why-us/WhyUsComparison";
import WhyUsGuarantees from "@/components/why-us/WhyUsGuarantees";
import Appointment from "@/components/booking/Appointment";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Why Choose Us | KG Auto Electronics - Precision Rebuild Specialists",
  description:
    "Discover why luxury vehicle owners and independent mechanics choose KG Auto Electronics. Dealership-level diagnostics, lifetime component guarantees, 24-48h turnaround, and up to 80% savings over main dealer replacements.",
  keywords: [
    "why choose kg auto electronics",
    "automotive micro soldering oldham",
    "clock spring repair guarantee",
    "bmw squib rebuild vs dealer",
    "cheaper than mercedes main dealer",
    "ecu bench diagnostic specialists",
  ],
  openGraph: {
    title: "Why Choose Us | KG Auto Electronics",
    description:
      "Expert micro-electronics engineering for Porsche, BMW, Mercedes, Audi & VW. Lifetime guarantees, fast mail-in service, and dealership diagnostic equipment.",
    url: "https://kgautoelectronics.com/why-us",
    siteName: "KG Auto Electronics",
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "https://kgautoelectronics.com/why-us",
  },
};

export default function WhyUsPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://kgautoelectronics.com/why-us#breadcrumb",
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
            "name": "Why Choose Us",
            "item": "https://kgautoelectronics.com/why-us",
          },
        ],
      },
      {
        "@type": "AboutPage",
        "@id": "https://kgautoelectronics.com/why-us#webpage",
        "name": "Why Choose KG Auto Electronics",
        "description": "Information on KG Auto Electronics operational standards, lifetime component guarantees, and dealership comparison.",
        "publisher": {
          "@type": "AutoRepair",
          "name": "KG Auto Electronics Ltd",
          "telephone": "+447305330916",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Navbar />
      <main className="flex-1 w-full flex flex-col bg-[#090909]">
        <WhyUsHero />
        <WhyChooseUs />
        <WhyUsComparison />
        <WhyUsGuarantees />
        <Appointment />
      </main>
      <Footer />
    </>
  );
}
