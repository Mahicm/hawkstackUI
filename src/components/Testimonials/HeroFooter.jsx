import { FaArrowRight, FaEnvelope, FaTwitter } from "react-icons/fa";
import { Shield, Linkedin, Twitter, Github } from "lucide-react";
export default function HeroFooter() {
  return (
    <div className="w-full bg-[#02020A] text-white">
      <section className="w-full py-20 flex flex-col items-center text-center px-4">
        <div
          className="
        w-[180px]
        h-[38px]
        rounded-full
        bg-[#5373FF1A]
        border
        border-[#5373FF3A]
        flex items-center justify-center
        gap-2"
        >
          <p
            className="font-poppins font-normal text-[14px] leading-[20px] tracking-[0px] text-center bg-clip-text text-transparent bg-gradient-to-r from-[#5472FE] to-[#E90510] text-transparent bg-clip-text 
       font-poppins"
          >
            Ready to Get Started?
          </p>
        </div>

        <h1 className="mt-6 text-[42px] md:text-[54px] font-bold leading-tight">
          Secure Your Cloud Infrastructure
        </h1>
        <h1 className="text-[42px] md:text-[54px] font-bold bg-gradient-to-r from-[#FF4D4D] to-[#6A38FF] bg-clip-text text-transparent -mt-2">
          Today
        </h1>

        <p className="mt-4 text-[#FFFFFFB2] max-w-2xl text-[16px] font-normal">
          Join industry leaders in building secure, AI-powered cloud
          infrastructure
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center items-center">
          <button
            className="
              px-8 py-3 rounded-xl font-normal flex items-center gap-2
              bg-gradient-to-r from-[#5373FF] to-[#3D5AE6]
              shadow-[0_0_40px_rgba(83,115,255,0.5)]
              hover:scale-105 transition "
          >
            Start Free Trial <FaArrowRight />
          </button>

          <button
            className="
              px-8 py-3 rounded-xl font-normal flex items-center gap-2
              border border-white/20 bg-white/5 backdrop-blur
              hover:border-[#5373FF] transition
            "
          >
            <FaEnvelope /> Contact Sales
          </button>
        </div>
      </section>

      <footer className="py-14 px-6 md:px-20">
        <div className=" text-gray-500 text-sm border-t border-white/10 py-14 px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#5373FF] rounded-xl items-center justify-center flex">
                  <Shield className="text-white" />
                </div>
                <h2 className="text-lg text-white font-normal">HawkStack</h2>
              </div>

              <p className="mt-5 text-white/60 text-[12px]">
                Enterprise AI & Cloud Security Solutions for modern businesses
              </p>
            </div>

            <div>
              <h3 className="font-normal text-[16px] text-white mb-3">
                Product
              </h3>
              <ul className="space-y-2 text-white/60 text-[12px]">
                <li>Features</li>
                <li>Pricing</li>
                <li>Documentation</li>
                <li>API Reference</li>
              </ul>
            </div>

            <div>
              <h3 className="font-normal text-[16px] text-white mb-3">
                Company
              </h3>
              <ul className="space-y-2 text-white/60 text-[12px]">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h3 className="font-normal text-[16px] text-white mb-3">Legal</h3>
              <ul className="space-y-2 text-white/60 text-[12px]">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Security</li>
                <li>Compliance</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-between items-center text-gray-500 text-sm border-t border-white/10 py-5 px-2">
          <p>© 2024 HawkStack × RedHat. All rights reserved.</p>

          <div className="flex gap-4 text-lg">
            <Linkedin className="text-[#5373FF] w-5 h-5 cursor-pointer" />
            <Twitter className="text-[#5373FF]  w-5 h-5 cursor-pointer" />
            <Github className="text-[#5373FF]  w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}
