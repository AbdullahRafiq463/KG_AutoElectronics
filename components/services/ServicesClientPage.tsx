"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "./Hero";
import Search from "./Search";
import BrandFilters from "./BrandFilters";
import CategoryFilters from "./CategoryFilters";
import ServiceGrid from "./ServiceGrid";
import QuickViewModal from "./QuickViewModal";
import BookModal from "./BookModal";
import CTA from "./CTA";
import FAQ from "./FAQ";
import { SERVICES_DATA, filterServices, Service } from "@/src/data/services";

export default function ServicesClientPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [quickViewService, setQuickViewService] = useState<Service | null>(null);
  const [bookService, setBookService] = useState<Service | null>(null);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  // Filtered Services List
  const filteredServices = useMemo(() => {
    return filterServices(SERVICES_DATA, searchQuery, selectedBrand, selectedCategory);
  }, [searchQuery, selectedBrand, selectedCategory]);

  // Dynamic Brand Counts
  const brandCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    SERVICES_DATA.forEach((service) => {
      service.brand.forEach((b) => {
        counts[b] = (counts[b] || 0) + 1;
      });
    });
    return counts;
  }, []);

  // Dynamic Category Counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    SERVICES_DATA.forEach((service) => {
      counts[service.category] = (counts[service.category] || 0) + 1;
    });
    return counts;
  }, []);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedBrand("All");
    setSelectedCategory("All");
  };

  const handleOpenBooking = (service?: Service) => {
    setBookService(service || SERVICES_DATA[0]);
    setIsBookModalOpen(true);
  };

  return (
    <>
      <Navbar />

      <main className="flex-1 w-full bg-[#090909]">
        {/* 1. Hero Section */}
        <Hero
          onBrowseClick={() => {
            const el = document.getElementById("search-services");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          onContactClick={() => handleOpenBooking()}
        />

        <div className="py-6">
          {/* 2. Instant Search Bar */}
          <Search
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            totalResults={filteredServices.length}
          />

          {/* 3. Brand Pill Filters */}
          <BrandFilters
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            brandCounts={brandCounts}
          />

          {/* 4. Category Pill Filters */}
          <CategoryFilters
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categoryCounts={categoryCounts}
          />

          {/* 5. Responsive Services Grid (4-col Desktop / 2-col Tablet / 1-col Mobile) */}
          <ServiceGrid
            services={filteredServices}
            onLearnMore={(service) => setQuickViewService(service)}
            onBookRepair={(service) => handleOpenBooking(service)}
            onResetFilters={handleResetFilters}
          />
        </div>

        {/* 6. CTA Banner */}
        <CTA onOpenBooking={() => handleOpenBooking()} />

        {/* 7. FAQ Section */}
        <FAQ />
      </main>

      <Footer />

      {/* Quick View Modal */}
      {quickViewService && (
        <QuickViewModal
          service={quickViewService}
          onClose={() => setQuickViewService(null)}
          onBookRepair={(service) => handleOpenBooking(service)}
        />
      )}

      {/* Book Repair Modal */}
      {isBookModalOpen && (
        <BookModal
          service={bookService}
          onClose={() => {
            setIsBookModalOpen(false);
            setBookService(null);
          }}
        />
      )}
    </>
  );
}
