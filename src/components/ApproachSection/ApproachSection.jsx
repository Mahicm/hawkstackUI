import React from "react";
import { FaCogs, FaRocket, FaBullseye } from "react-icons/fa";
import { LuRocket } from "react-icons/lu";

export default function ApproachSection() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold text-black">
          <span className="bg-gradient-to-r from-[#5373FF] to-[#EE0000] bg-clip-text text-transparent">
            HawkStack's
          </span>{" "}
          Approach
        </h2>

        <p className="mt-4 text-[#4A5565] text-[18px] leading-relaxed">
          HawkStack Technologies accelerates digital evolution with DevOps,
          Cloud, Automation, and Security expertise—driving innovation and
          faster time-to-market.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
        <div
          className="p-8 rounded-2xl border border-gray-200 shadow-sm 
            hover:shadow-md transition relative group"
        >
          <div
            className="w-12 h-12 flex items-center justify-center 
               bg-gradient-to-r from-[#EE0000] to-[#CC0000] 
               text-white rounded-xl 
               transition-transform duration-300 
               group-hover:translate-x-2 group-hover:rotate-45"
          >
            <FaCogs size={24} />
          </div>
          <h3 className="mt-6 text-xl font-normal text-black">
            Logic’s Framework
          </h3>
          <p className="text-gray-500 mt-2 text-sm">
            Precision-engineered structures & analytics
          </p>
        </div>

        <div
          className="p-8 rounded-2xl border border-gray-200 shadow-sm 
            hover:shadow-md transition relative group"
        >
          <div
            className="w-12 h-12 flex items-center justify-center 
               bg-gradient-to-r from-[#5373FF] to-[#4060DD] 
               text-white rounded-xl 
               transition-transform duration-300 
               group-hover:translate-x-2 group-hover:rotate-45"
          >
            <LuRocket size={24} />
          </div>

          <h3 className="mt-6 text-xl font-normal text-black">
            Innovation’s Leap
          </h3>

          <p className="text-gray-500 mt-2 text-sm">
            Data-driven, agile methodologies
          </p>
        </div>

        <div
          className="p-8 rounded-2xl border border-gray-200 shadow-sm 
            hover:shadow-md transition relative group"
        >
          <div
            className="w-12 h-12 flex items-center justify-center 
               bg-gradient-to-r from-[#468966] to-[#357755] 
               text-white rounded-xl 
               transition-transform duration-300 
               group-hover:translate-x-2 group-hover:rotate-45"
          >
            <FaBullseye size={24} />
          </div>
          <h3 className="mt-6 text-xl font-normal text-black">
            Insight’s Depth
          </h3>
          <p className="text-gray-500 mt-2 text-sm">
            Predictive modeling & deep analytics
          </p>
        </div>
      </div>
    </section>
  );
}
