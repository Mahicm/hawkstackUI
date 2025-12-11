import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection';
import Testimonials from '../components/Testimonials/Testimonials';


function HeroSectionPage() {
  return (
     <div className="w-full min-h-screen bg-[#02020a] text-white">
      <HeroSection />
      <Testimonials />
    </div>
  )
}

export default HeroSectionPage
