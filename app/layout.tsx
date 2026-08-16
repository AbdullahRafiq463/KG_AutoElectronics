import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KG Auto Electronics | Automotive Electronics & Diagnostics Experts",
  description:
    "Expert workshop for luxury car electronics in Oldham, UK. High-end repairs for Clock Springs, ABS Modules, Instrument Clusters, LED Tail Lights, and Steering Electronics for Porsche, BMW, Mercedes, Audi, and VW.",
  keywords: [
    "automotive electronics repair",
    "clock spring repair oldham",
    "instrument cluster repair",
    "abs module repair",
    "mercedes led tail light fix",
    "bmw steering electronics",
    "auto diagnostics oldham",
    "squib repair",
  ],
  authors: [{ name: "KG Auto Electronics", url: "https://kgautoelectronics.com" }],
  openGraph: {
    title: "KG Auto Electronics | Automotive Electronics Repairs",
    description:
      "Precision repairs for luxury automotive electronic components. Lifetime guarantees on selected items. Located in Oldham, UK.",
    url: "https://kgautoelectronics.com",
    siteName: "KG Auto Electronics",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KG Auto Electronics | Premium Auto Electronics Repair Specialists",
    description: "Expert engineering solutions for complex vehicle electronic failures.",
  },
  icons: {
    icon: "/images/logo/fav_icon.png",
    apple: "/images/logo/fav_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Local Business and Breadcrumb JSON-LD
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoRepair",
        "@id": "https://kgautoelectronics.com/#organization",
        "name": "KG Auto Electronics Ltd",
        "url": "https://kgautoelectronics.com",
        "logo": "https://kgautoelectronics.com/images/logo/kg_logo2.png",
        "image": "https://kgautoelectronics.com/images/logo/kg_logo2.png",
        "telephone": "+447305330916",
        "email": "kgautoelectronics@gmail.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "18 Halliwell Avenue",
          "addressLocality": "Oldham",
          "postalCode": "OL8 3DL",
          "addressCountry": "GB",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 53.5358,
          "longitude": -2.1158,
        },
        "sameAs": [
          "https://www.tiktok.com/@autosrepairs",
          "https://www.ebay.co.uk/usr/kgautoelectronics",
          "https://www.facebook.com/p/KG-Auto-Electronics-Ltd-100083765344316/"
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday"],
            "opens": "09:00",
            "closes": "14:00",
          },
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+447305330916",
          "email": "kgautoelectronics@gmail.com",
          "contactType": "customer service",
          "availableLanguage": "en",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://kgautoelectronics.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://kgautoelectronics.com",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />

      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} bg-[#090909] text-white font-sans antialiased`}
      >
        <SmoothScroll>
          <div className="noise-overlay" />
          <div className="relative min-h-screen flex flex-col z-10">{children}</div>
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
