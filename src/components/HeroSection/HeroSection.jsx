import React from "react";
import HeroBadge from "./HeroBadge";
import HeroTitle from "./HeroTitle";
import HeroButtons from "./HeroButton";
import HeroStats from "./HeroStats";
import HeroGraphics from "./HeroGraphics";
import HeroNavbar from "./HeroNavBar";

function HeroSection() {
  return (
    <section className="min-h-screen bg-[#02020a] text-white relative px-20 py-10 mb-[60px]">
      <HeroNavbar />

      <div className="flex w-full mt-[120px]">
        <div className="w-1/2 space-y-6">
          <HeroBadge />
          <HeroTitle />
          <HeroButtons />
          <HeroStats />
        </div>

        <div className="w-1/2 flex justify-center items-center relative">
          <HeroGraphics />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
