import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | KG Auto Electronics",
  description:
    "Privacy Policy for KG Auto Electronics Ltd. Read about how we collect, use, and protect your personal and vehicle data in compliance with UK GDPR.",
  alternates: {
    canonical: "https://kgautoelectronics.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
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
            <span className="text-white">Privacy Policy</span>
          </div>

          {/* Header */}
          <div className="border-b border-white/10 pb-8 mb-10">
            <div className="flex items-center gap-2 text-primary-red mb-3">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-heading text-xs font-bold uppercase tracking-widest">
                Data Protection Commitment
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
              Privacy Policy
            </h1>
            <p className="font-body text-xs md:text-sm text-neutral-400">
              Last Updated: August 30, 2026
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8 font-body text-sm text-neutral-300 leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-heading text-lg md:text-xl font-bold uppercase text-white tracking-tight">
                1. Introduction
              </h2>
              <p>
                KG Auto Electronics Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates from 18 Halliwell Avenue, Oldham, OL8 3DL, UK. We are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, process, and safeguard the personal and vehicle information you provide when using our website or booking repairs.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-lg md:text-xl font-bold uppercase text-white tracking-tight">
                2. Information We Collect
              </h2>
              <p>
                We may collect and process the following types of information:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong className="text-white">Contact Information:</strong> Name, email address, postal address, and telephone number (for booking confirmations and shipping).
                </li>
                <li>
                  <strong className="text-white">Vehicle Data:</strong> Make, model, year, registration number (VRN), and specific electronic control module serial/part numbers.
                </li>
                <li>
                  <strong className="text-white">Communication Data:</strong> Records of correspondence via our online form, direct email, phone call, or WhatsApp message logs.
                </li>
                <li>
                  <strong className="text-white">Usage Analytics:</strong> IP address, browser type, operating system, and page exploration data via cookies to improve site performance.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-lg md:text-xl font-bold uppercase text-white tracking-tight">
                3. How We Use Your Information
              </h2>
              <p>
                Your data is processed strictly in accordance with UK GDPR and data protection standards for:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Executing, diagnostics-testing, and returning your rebuilt electronic modules.</li>
                <li>Managing bookings, scheduling drive-in appointments, and invoicing.</li>
                <li>Providing customer support, post-installation guidance, or updates on repair status.</li>
                <li>Complying with statutory legal obligations, tax filings, and fraud prevention.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-lg md:text-xl font-bold uppercase text-white tracking-tight">
                4. Data Sharing & Third Parties
              </h2>
              <p>
                We do not sell, rent, or trade your personal information. We only share details with trusted service partners under strict confidentiality guidelines, including:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong className="text-white">Postal & Courier Services:</strong> Royal Mail, DHL, DPD, or UPS (for tracked returning of your module).
                </li>
                <li>
                  <strong className="text-white">Billing & Payments:</strong> Secure transaction processors (PayPal, eBay, or direct bank transfer facilities).
                </li>
                <li>
                  <strong className="text-white">Legal Authorities:</strong> If required by UK law, government regulation, or court order.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-lg md:text-xl font-bold uppercase text-white tracking-tight">
                5. Data Retention & Security
              </h2>
              <p>
                We implement robust physical and digital security measures to prevent unauthorized access, alteration, or disclosure of your information. We retain personal and billing data only as long as necessary for tax records, accounting requirements, and maintaining lifetime product guarantees.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-lg md:text-xl font-bold uppercase text-white tracking-tight">
                6. Your Rights
              </h2>
              <p>
                Under UK GDPR, you have the right to request access to the personal data we hold about you, request corrections to incorrect data, object to processing, or request erasure of your data (subject to legal recordkeeping limitations). To exercise any of these rights, contact us at <a href="mailto:kgautoelectronics@gmail.com" className="text-primary-red hover:underline">kgautoelectronics@gmail.com</a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-lg md:text-xl font-bold uppercase text-white tracking-tight">
                7. Contact Us
              </h2>
              <p>
                For any questions regarding this Privacy Policy, please contact our data controller:
              </p>
              <div className="bg-[#141414]/80 border border-white/5 p-4 rounded-xl space-y-1 font-mono text-xs text-neutral-400 mt-2">
                <p className="text-white font-bold">KG Auto Electronics Ltd</p>
                <p>18 Halliwell Avenue, Oldham, OL8 3DL, UK</p>
                <p>Email: kgautoelectronics@gmail.com</p>
                <p>Phone: +44 730 5330916</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
