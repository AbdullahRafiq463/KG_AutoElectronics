import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import TrustBar from "@/components/common/TrustBar";
import Services from "@/components/services/Services";
import About from "@/components/about/About";
import WhyChooseUs from "@/components/why-us/WhyChooseUs";
import Process from "@/components/process/Process";
import Gallery from "@/components/gallery/Gallery";
import BeforeAfter from "@/components/before-after/BeforeAfter";
import Stats from "@/components/stats/Stats";
import Testimonials from "@/components/testimonials/Testimonials";
import Faq from "@/components/faq/Faq";
import Appointment from "@/components/booking/Appointment";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <WhyChooseUs />
        <Process />
        <Gallery />
        <BeforeAfter />
        <Stats />
        <Testimonials />
        <Faq />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
