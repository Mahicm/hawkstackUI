import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Testimonials from "../components/Testimonials/Testimonials";
import HeroFooter from "../components/Testimonials/HeroFooter";
import ApproachSection from "../components/ApproachSection/ApproachSection";
function HeroSectionPage() {
  return (
    <div className="w-full min-h-screen bg-[#02020a] text-white">
      <HeroSection />
      <ApproachSection />
      <Testimonials />
      <HeroFooter />
    </div>
  );
}

export default HeroSectionPage;
