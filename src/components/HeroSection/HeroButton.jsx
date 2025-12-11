export default function HeroButtons() {
  return (
    <div className="flex gap-4 mt-4">
      <button className="w-[240.59px] h-[50px] 
         rounded-[14px]
         bg-gradient-to-br from-[#5373FF] to-[#3D5AE6]
         shadow-[0px_4px_6px_-4px_#2B7FFF80,0px_10px_15px_-3px_#2B7FFF80]
         text-white text-[15px] font-normal hover:w-[264px] hover:h-[62px]">
        Enroll for RHCSA / Training
      </button>

      <button className="bg-white/10 w-[160px] h-[50px] rounded-[14px] border border-white/10 hover:border-[#EE0000] transition">
        <span className="text-white text-[14px] font-[Arial] font-normal">View Courses</span>
      </button>
    </div>
  );
}
