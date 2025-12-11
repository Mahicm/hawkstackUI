import React from "react";
import logo from "../../assets/hero/redHat.png";
import hawkstack from "../../assets/hero/hawkstack.png";

const HeroNavbar = () => {
  return (
    <nav className="w-full h-[45px] flex items-center gap-[60px]">
      <div className="flex items-center gap-[10px] w-[241px]">
        <button className="bg-white w-[150px] h-[36px] rounded-[3px] flex items-center justify-center">
          <img
            src={hawkstack}
            alt="Hawkstack Logo"
            className="w-[99px] h-[30px] object-contain"
          />
        </button>

        <button className="bg-white w-[150px] h-[36px] rounded-[3px] flex items-center justify-center">
          <img
            src={logo}
            alt="RedHat Logo"
            className="w-[90px] h-[18px] object-contain"
          />
        </button>
      </div>

      <ul className="flex items-center gap-[30px] text-center ml-10">
        <li className="text-white text-[12px] cursor-pointer hover:text-white-400 transition">
          Home
        </li>
        <li className="text-white text-[12px]  cursor-pointer hover:text-white-400 transition">
          HawkStack's Approach
        </li>
        <li className="text-white text-[12px] cursor-pointer hover:text-white-400 transition">
          Red Hat Services
        </li>
        <li className="text-white text-[12px] cursor-pointer hover:text-white-400 transition">
          RHCSA Certification
        </li>
      </ul>
      <div className="flex items-center gap-[16px] text-end ml-auto">
        <button className="bg-white/10 w-[104.72px] h-[46px] rounded-full border border-white/20 hover:border-[#EE0000] transition">
          <span className="text-white text-[14px] font-[Arial] font-normal">
            Contact
          </span>
        </button>
        <button
          className="w-[190px] h-[44px] flex items-center justify-center rounded-full bg-[#5373FF] transition-all duration-300 ease-out
    hover:w-[210px] hover:h-[49px] hover:rounded-full"
        >
          <span className="text-white text-[14px] font-[Arial] font-normal">
            Talk to Learning Team
          </span>
        </button>
      </div>
    </nav>
  );
};

export default HeroNavbar;
