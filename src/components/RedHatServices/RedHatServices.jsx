import { Box, Server, Brain, Network } from "lucide-react";

export default function RedHatServices() {
  const services = [
    {
      icon: <Box size={36} className="text-white" />,
      bg: "from-[#FF1A1A] to-[#C40000]",
      title: "Red Hat OpenShift",
      sub: "Build & deploy at scale",
    },
    {
      icon: <Server size={36} className="text-white" />,
      bg: "from-[#4C7EFF] to-[#365BFF]",
      title: "Red Hat Enterprise Linux",
      sub: "Flexible, reliable platform",
    },
    {
      icon: <Brain size={36} className="text-white" />,
      bg: "from-[#2FA772] to-[#1D6F4A]",
      title: "Red Hat AI",
      sub: "Deliver AI value with your own data",
    },
    {
      icon: <Network size={36} className="text-white" />,
      bg: "from-[#FF003D] to-[#7A00FF]",
      title: "Red Hat Ansible Automation Platform",
      sub: "Enterprise automation",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#292929] text-white px-6 py-20">
        <div
        className="absolute bottom-40 left-100 w-[300px] h-[300px] 
                  bg-[rgba(83,115,255,0.35)] 
                  rounded-full blur-[100px] opacity-50"
      />

      <div
        className="absolute top-10 right-40 w-[300px] h-[300px] 
                  bg-[rgba(238,0,0,0.35)] 
                  rounded-full blur-[100px] opacity-50"
      />

    
      {/* <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-red-900/20 via-purple-900/10 to-blue-900/20 blur-3xl opacity-70"></div> */}

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-normal mb-16 tracking-tight">
          Explore Red Hat Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 w-360">
          {services.map((s, index) => (
            <div
              key={index}
              className="backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.3)]"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, #FFFFFF0D, transparent 60%), radial-gradient(circle at 70% 80%, rgba(20, 80, 255, 0.15), transparent 60%), #1c1c1c",
              }}
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${s.bg} flex items-center justify-center shadow-xl`}
              >
                {s.icon}
              </div>

              <h3 className="mt-6 text-[20px] font-normal text-white">
                {s.title}
              </h3>

              <p className="mt-2 text-gray-400 text-sm">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
