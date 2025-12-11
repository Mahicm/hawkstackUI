import { Award } from "lucide-react";
export default function HeroBadge() {
  return (
    <div
      className="
        w-[216px]
        h-[38px]
        rounded-full
        bg-[#5373FF1A]
        border
        border-[#5373FF3A]
        flex items-center justify-center
        gap-2"
    >
      <Award className="w-[16px] h-[16px]  text-[#5373ff]" />
      <p className="font-[Arial] font-normal text-[13px] leading-[20px] tracking-[0px] text-white">
        Red Hat Certified Training
      </p>
    </div>
  );
}
