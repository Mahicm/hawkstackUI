export default function HeroStats() {
  return (
    <div className="flex gap-12 pt-2 w-[400px] h-[60px]">
      <div>
        <h2 className="font-poppins font-medium 
         text-[26px] leading-[36px]
         bg-gradient-to-r from-[#5373FF] to-[#8EC5FF]
         text-transparent bg-clip-text">99.9%</h2>
        <p className="text-[#BEDBFF99] text-[12px] ">Uptime SLA</p>
      </div>
      <div>
        <h2 className="font-poppins font-medium 
         text-[26px] leading-[36px]
         bg-gradient-to-r from-[#EE0000] to-[#FFA2A2]
         text-transparent bg-clip-text">500K+</h2>
        <p className="text-[#BEDBFF99] text-[12px]">Threats Blocked</p>
      </div>
      <div>
        <h2 className="font-poppins font-medium 
         text-[26px] leading-[36px]
         bg-gradient-to-r from-[#05DF72] to-[#B7FFDB]
         text-transparent bg-clip-text">24/7</h2>
        <p className="text-[#BEDBFF99] text-[12px]">Monitoring</p>
      </div>
    </div>
  );
}
