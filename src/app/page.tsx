import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Facilities from "@/components/Facilities";
import PricingSection from "@/components/PricingSection";
import BmiCalculator from "@/components/BmiCalculator";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-emerald-500 selection:text-zinc-950 pb-14 md:pb-0">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Stats Counter Bar */}
      <StatsBar />

      {/* Facilities & Workout Zones */}
      <Facilities />

      {/* Official Membership & PT Pricing */}
      <PricingSection />

      {/* Free Interactive BMI Fitness Calculator */}
      <BmiCalculator />

      {/* Real Google Maps 4.9⭐ Testimonials */}
      <Testimonials />

      {/* Location, Google Maps & Directions */}
      <LocationSection />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button (Desktop & Tablet) */}
      <div className="hidden sm:block">
        <WhatsAppFloating />
      </div>

      {/* Mobile Sticky Quick-Action Bar */}
      <MobileStickyBar />
    </main>
  );
}
