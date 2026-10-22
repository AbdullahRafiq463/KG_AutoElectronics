import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import GalleryShowcase from "@/components/gallery/GalleryShowcase";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Diagnostics & Repair Gallery | KG Auto Electronics Lab",
  description:
    "Explore real-world component repairs and bench diagnostics from our Oldham electronics workshop. Steering angle sensors, LED taillight circuit boards, instrument clusters, and ABS modules for Audi, Mercedes, BMW, and Porsche.",
  keywords: [
    "auto electronics gallery",
    "audi steering angle sensor repair",
    "mercedes w212 taillight fix oldham",
    "bmw szl clock spring repair",
    "vito instrument cluster rebuild",
    "micro soldering lab diagnostics uk",
    "automotive module rebuilding photos",
  ],
  openGraph: {
    title: "Diagnostics & Repair Gallery | KG Auto Electronics",
    description:
      "Documented electronics repairs from our diagnostics bench. See component-level micro-soldering, optical sensor calibrations, and restored automotive modules.",
    url: "https://kgautoelectronics.com/gallery",
    siteName: "KG Auto Electronics",
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "https://kgautoelectronics.com/gallery",
  },
};

export default function GalleryPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://kgautoelectronics.com/gallery#breadcrumb",
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
            "name": "Lab Gallery",
            "item": "https://kgautoelectronics.com/gallery",
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": "https://kgautoelectronics.com/gallery#webpage",
        "name": "KG Auto Electronics Repair & Diagnostics Gallery",
        "description": "Visual documentation of component-level repairs, micro-soldering, and oscilloscope testing for luxury automotive modules.",
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
        <GalleryShowcase />
      </main>
      <Footer />
    </>
  );
}
