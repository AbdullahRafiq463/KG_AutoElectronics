import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | KG Auto Electronics",
  description:
    "Terms of Service for KG Auto Electronics Ltd. Read about our diagnostic rules, mail-in shipping policies, warranty terms, and No Fix No Fee details.",
  alternates: {
    canonical: "https://kgautoelectronics.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-[#090909] text-white pt-32 pb-24 relative overflow-hidden font-sans">
        {/* Subtle Ambient Red Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(255,45,45,0.08)_0%,transparent_80%)] pointer-events-none blur-3xl" />
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs md:text-sm font-body font-semibold tracking-wider text-muted-text uppercase mb-8 bg-[#141414]/50 border border-white/5 px-4 py-1.5 rounded-full backdrop-blur-sm w-fit">
            <Link href="/" className="hover:text-primary-red transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/20" />
            <span className="text-white">Terms of Service</span>
          </div>

          {/* Header */}
          <div className="border-b border-white/10 pb-8 mb-10">
            <div className="flex items-center gap-2 text-primary-red mb-3">
              <FileText className="w-5 h-5" />
              <span className="font-heading text-xs font-bold uppercase tracking-widest">
                Service Agreement & Guarantee rules
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
              Terms of Service
            </h1>
            <p className="font-body text-xs md:text-sm text-neutral-400">
              Last Updated: August 30, 2026
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8 font-body text-sm text-neutral-300 leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-heading text-lg md:text-xl font-bold uppercase text-white tracking-tight">
                1. Acceptance of Terms
              </h2>
              <p>
                By booking a repair, scheduling a diagnostic appointment, or mailing an electronic control module to KG Auto Electronics Ltd, you agree to be bound by the terms and conditions detailed below. These terms apply to all retail customers, independent workshops, and commercial fleets.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-lg md:text-xl font-bold uppercase text-white tracking-tight">
                2. Scope of Services
              </h2>
              <p>
                We provide precision micro-soldering, hardware diagnostic checks, coding, calibration, and component rebuilds for automotive electronics (e.g. steering column clock springs, ABS modules, instrument clusters, LED taillights, and ECUs). We act as a specialist rebuild facility, repairing your existing factory module rather than replacing it with an expensive new assembly.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-lg md:text-xl font-bold uppercase text-white tracking-tight">
                3. Mail-In Shipping & Transit Policy
              </h2>
              <p>
                For mail-in repairs, the customer is responsible for:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Safely packaging the module in anti-static ESD wrap and secure box to prevent physical transit damage.</li>
                <li>Purchasing appropriate postal tracking and transit insurance. We are not liable for modules lost or physically damaged during transit to our workshop.</li>
                <li>Providing accurate contact, vehicle registry, and return shipping address records inside the shipping package.</li>
              </ul>
              <p>
                All repaired modules are returned using tracked, insured couriers. Return delivery fees are quoted alongside the initial rebuild service cost.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-lg md:text-xl font-bold uppercase text-white tracking-tight">
                4. &ldquo;No Fix, No Fee&rdquo; & Payments
              </h2>
              <p>
                Our core service philosophy is built on clear customer confidence:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong className="text-white">No Fix, No Fee:</strong> If our engineering team runs diagnostics on your module and determines the module is beyond repair or cannot be fixed, no repair fee is charged. In such instances, customers are only responsible for return tracked postage costs if they request the return of the unrepaired item.
                </li>
                <li>
                  <strong className="text-white">Diagnostic Fee:</strong> Certain extensive complex diagnostics (e.g., highly damaged water-logged ECUs or pre-tampered components) may incur a basic benchmarking assessment fee, which is always agreed upon in advance.
                </li>
                <li>
                  <strong className="text-white">Payment Terms:</strong> Repaired items must be paid in full prior to return dispatch or upon drive-away completion. We accept direct bank transfer, PayPal, and approved card networks.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-lg md:text-xl font-bold uppercase text-white tracking-tight">
                5. Warranty Protection
              </h2>
              <p>
                We back our engineering standards with premium guarantees:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  Select rebuild services (such as LED tail light repairs) come with a standard <strong className="text-white">Lifetime Warranty</strong> on the specific components rebuilt.
                </li>
                <li>
                  Other electronics repairs carry a standard 12-month parts and labor warranty unless explicitly stated otherwise in writing.
                </li>
                <li>
                  The warranty is non-transferable and is voided in cases of water immersion, vehicle accidents, custom wiring modifications, or physical damage post-installation.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-lg md:text-xl font-bold uppercase text-white tracking-tight">
                6. Limitation of Liability
              </h2>
              <p>
                We take utmost care when servicing vehicles and modules. However, we are not responsible for any consequential damages, rental car costs, towing fees, lost revenue, workshop storage charges, or diagnostics labor fees charged by third-party dealerships or garages during the period your module is undergoing restoration.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-lg md:text-xl font-bold uppercase text-white tracking-tight">
                7. Governing Law
              </h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of England & Wales. Any disputes arising from our services shall be subject to the exclusive jurisdiction of the English courts.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
