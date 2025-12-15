import { FaHospital, FaIndustry } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { MdSignalCellularAlt } from "react-icons/md";
import { RiBankFill } from "react-icons/ri";

export default function Industries() {
  const industries = [
    {
      iconBg: "from-[#EE0000] to-[#CC0000]",
      icon: <RiBankFill size={28} className="text-white" />,
      title: "Banking & Insurance",
      desc: "Secure, compliant infrastructure",
    },
    {
      iconBg: "from-[#5373FF] to-[#4060DD]",
      icon: <BsCart3 size={28} className="text-white" />,
      title: "E-commerce & Retail",
      desc: "Scalable customer experiences",
    },
    {
      iconBg: "from-[#468966] to-[#357755]",
      icon: <MdSignalCellularAlt size={28} className="text-white" />,
      title: "Telecom",
      desc: "High-performance networks",
    },
    {
      iconBg: "from-[#EE0000] to-[#5373FF]",
      icon: <FaIndustry size={28} className="text-white" />,
      title: "Manufacturing",
      desc: "Digital transformation",
    },
    {
      iconBg: "from-[#5373FF] to-[#468966]",
      icon: <FaHospital size={28} className="text-white" />,
      title: "Healthcare & Technology",
      desc: "Innovation & reliability",
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white relative">

      <div className="flex justify-center">
        <p
          className="px-6 py-1 rounded-full text-[12px] font-medium bg-white/70 backdrop-blur-sm border border-gray-200"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,220,220,0.3), rgba(220,240,255,0.3))",
          }}
        >
          <h4 className="bg-[linear-gradient(90deg,rgba(238,0,0,1)_0%,rgba(83,115,255,1)_50%,rgba(70,137,102,1)_100%)] text-transparent bg-clip-text 
       font-poppins text-[12px] px-4 tracking-[-1.5px]">Industry Solutions</h4>
        </p>
      </div>

      <h2
        class="text-center bg-gradient-to-r from-[#101828] to-[#4A5565] text-transparent bg-clip-text 
       font-poppins font-normal text-[42px]"
      >
        Powering Industries
      </h2>

      <p className="text-center text-[#4A5565] mt-4 max-w-2xl mx-auto">
        Delivering Red Hat consulting excellence across diverse sectors
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-14 place-items-center">

        {industries.map((item, index) => (
          <div
  key={index}
  className="w-[200px] h-[220px] p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition bg-white"
>
  <div
    className={`w-14 h-14 rounded-xl ml-[50px] flex items-center justify-center  overflow-hidden leading-none shrink-0 bg-gradient-to-br ${item.iconBg} shadow-md`}
  >
    <div className="flex items-center justify-center text-center leading-none">
      {item.icon}
    </div>
  </div>

  <h3 className="mt-6 font-normal text-[17px] text-center text-black">
    {item.title}
  </h3>

  <p className="text-gray-500 text-sm mt-2 text-center">
    {item.desc}
  </p>
</div>

        ))}
      </div>

      <div className="flex justify-center mt-16">
        <button className="px-8 py-3 rounded-xl text-white font-medium 
      bg-gradient-to-r from-[#EE0000] to-[#5373FF]
      shadow-lg transition-all duration-300
      hover:from-[#5373FF] hover:to-[#EE0000]">
          Discuss Your Industry Needs
        </button>
      </div>

    </section>
  );
}
