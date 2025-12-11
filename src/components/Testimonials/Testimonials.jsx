import "../../styles/Testimonials.css";
import { Quote } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
export default function Testimonials() {
  return (
    <div className="relative w-full py-20 overflow-hidden bg-[#02020A]">
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] 
                  bg-[rgba(83,115,255,0.35)] 
                  rounded-full blur-[180px] opacity-40"
      />

      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] 
                  bg-[rgba(238,0,0,0.35)] 
                  rounded-full blur-[150px] opacity-40"
      />

      <div className="relative z-10 flex items-center justify-center flex-col">
        <div
          className="w-[220px] h-[40px] rounded-full border border-transparent border-t-[#FFFFFF1A] 
               flex items-center justify-center"
          style={{
            background:
              "linear-gradient(90deg, rgba(238, 0, 0, 0.2) 0%, rgba(83, 115, 255, 0.2) 100%)",
          }}
        >
          <p className="font-normal text-[14px] text-white">
            Client Success Stories
          </p>
        </div>

        <h2 className="text-4xl font-normal mt-4">Client Testimonials</h2>
        <p className="text-[#99A1AF] text-md mt-2">
          Real results from enterprise leaders who trust HawkStack
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
          <div className="relative rounded-2xl bg-gradient-to-br from-[#24262F]/60 to-[#1A1B22]/40 p-8 border border-white/10 backdrop-blur-md shadow-xl">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#EE0000] font-bold">
              <Quote />
            </div>
            <div className="flex items-center gap-1 mt-3 ">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={16} className="text-[#EE0000]" />
              ))}
            </div>

            <p className="mt-5 text-[#FFFFFF] italic leading-relaxed text-[16px] font-normal">
              “HawkStack delivered exceptional results in our cloud migration
              project. Their Red Hat expertise was invaluable.”
            </p>

            <div className="mt-6">
              <span className="px-3 py-1 rounded-md text-sm bg-[#EE0000] text-[#FFFFFF] font-normal">
                Kyndl
              </span>

              <h4 className="mt-3 text-[#D1D5DC] font-normal">
                Technology Director
              </h4>
              <p className="text-gray-500 text-sm">
                Global Technology Services
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl bg-gradient-to-br from-[#282B36]/60 to-[#1A1B22]/40 p-8 border border-white/10 backdrop-blur-md shadow-xl">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#5373FF] font-bold">
              <Quote />
            </div>

            <div className="flex items-center gap-1 mt-3 ">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={16} className="text-[#EE0000]" />
              ))}
            </div>

            <p className="mt-5 text-[#FFFFFF] leading-relaxed italic text-[16px] font-normal">
              “Professional team with deep technical knowledge. They helped us
              modernize our infrastructure with confidence.”
            </p>

            <div className="mt-6">
              <span className="px-3 py-1 rounded-md text-sm bg-[#5373FF] text-[#FFFFFF] font-normal">
                HCL
              </span>

              <h4 className="mt-3 text-[] font-normal">
                IT Operations Manager
              </h4>
              <p className="text-gray-500 text-sm">Enterprise Infrastructure</p>
            </div>
          </div>
        </div>

        <div
          className="mt-20 w-full max-w-3xl rounded-2xl bg-gradient-to-br 
       from-[#2B3038]/60 to-[#1A1D23]/40 p-10 border border-white/10 shadow-xl text-center"
        >
          <h3 className="text-2xl font-normal">
            Ready to transform your infrastructure?
          </h3>

          <p className="text-[#99A1AF] mt-2">
            Join the ranks of successful enterprises powered by HawkStack
          </p>

          <div className="flex justify-center mt-6">
            <button
              className="px-8 py-3 rounded-xl font-normal
    bg-gradient-to-r from-[#FF4D4D] to-[#6A38FF] 
    shadow-lg hover:opacity-90 transition 
    flex items-center gap-2"
            >
              Get Started with HawkStack
              <FaArrowRight />
            </button>
          </div>
        </div>

        <p className="text-gray-500 text-[12px] mt-6">
          Trusted by Fortune 500 companies worldwide
        </p>
      </div>
    </div>
  );
}
