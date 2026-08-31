import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import ProcessHero from "@/components/process/ProcessHero";
import ProcessWorkflow from "@/components/process/ProcessWorkflow";
import Process from "@/components/process/Process";
import ProcessShippingGuide from "@/components/process/ProcessShippingGuide";
import Appointment from "@/components/booking/Appointment";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Our Repair Process | KG Auto Electronics - Micro-Soldering Workflow",
  description:
    "Explore our 6-step precision automotive repair process. From diagnostic load testing and micro-chip soldering to steering recalibration and tracked mail-in return delivery.",
  keywords: [
    "automotive repair process",
    "micro soldering workflow",
    "mail in car electronics repair",
    "clock spring diagnostic bench test",
    "abs module rebuild process",
    "oldham auto electronics laboratory",
  ],
  openGraph: {
    title: "Our Repair Process | KG Auto Electronics",
    description:
      "Step-by-step restoration workflow for luxury vehicle electronics. Drive-in and postal mail-in repair options with 24-48h turnaround.",
    url: "https://kgautoelectronics.com/process",
    siteName: "KG Auto Electronics",
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "https://kgautoelectronics.com/process",
  },
};

export default function ProcessPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://kgautoelectronics.com/process#breadcrumb",
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
            "name": "Our Process",
            "item": "https://kgautoelectronics.com/process",
          },
        ],
      },
      {
        "@type": "HowTo",
        "@id": "https://kgautoelectronics.com/process#howto",
        "name": "Automotive Electronics Module Repair Process",
        "description": "Step-by-step procedure for diagnosing, micro-soldering, and calibrating luxury car electronic components.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Book Appointment or Ship Module",
            "text": "Submit online booking or package failed module with anti-static wrapping for lab delivery.",
          },
          {
            "@type": "HowToStep",
            "name": "Oscilloscope & Thermal Diagnostics",
            "text": "Initial electrical load analysis to isolate failing micro-switches, processors, and ribbon cables.",
          },
          {
            "@type": "HowToStep",
            "name": "Micro-Soldering & Chip Replacement",
            "text": "Precision soldering of OEM replacement chipsets and optical sensors under lab magnification.",
          },
          {
            "@type": "HowToStep",
            "name": "Full Load Bench Testing",
            "text": "Simulated signal load trials to verify stability under extreme voltage and thermal conditions.",
          },
          {
            "@type": "HowToStep",
            "name": "Recalibration & Code Clearing",
            "text": "Factory zero-point calibration for steering angle sensors and fault memory clearing.",
          },
          {
            "@type": "HowToStep",
            "name": "Vehicle Delivery or Tracked Courier Return",
            "text": "On-site drive-away or tracked express postal return to client.",
          },
        ],
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
        <ProcessHero />
        <ProcessWorkflow />
        <Process />
        <ProcessShippingGuide />
        <Appointment />
      </main>
      <Footer />
    </>
  );
}
