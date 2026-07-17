import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import HistoryTimeline from "@/components/about/HistoryTimeline";
import TeamOrbit from "@/components/about/TeamOrbit";
import CTA from "@/components/about/CTA";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Us | KG Auto Electronics - Precision Rebuild Specialists",
  description:
    "Learn about KG Auto Electronics, Birmingham's premier luxury automotive diagnostics and module restoration lab. Specializing in clock springs, clusters, ECUs, ABS modules, and custom LED circuits.",
  keywords: [
    "about kg auto electronics",
    "birmingham auto electronics specialists",
    "ahmad raza founder",
    "umer shahid lead engineer",
    "european automotive diagnostics uk",
  ],
  openGraph: {
    title: "About Us | KG Auto Electronics",
    description:
      "Pinpoint micro-soldering repairs and programming for luxury vehicles in Birmingham, UK. Meet our expert engineering team.",
    url: "https://kgautoelectronics.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full flex flex-col bg-[#090909]">
        <AboutHero />
        <CompanyStory />
        <HistoryTimeline />
        <TeamOrbit />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
