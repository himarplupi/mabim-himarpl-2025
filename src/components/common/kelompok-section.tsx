import Image from "next/image";
import Bg from "@/assets/bg.svg";
import card from "@/assets/cardKelompok.svg";
import { Button } from "../ui/button";
import Mascot from "@/assets/mascots/default.svg";
export function KelompokSection() {
  return (
    <section
      className="bg-[radial-gradient(101.34%_99.57%_at_50.02%_100%,#010030_7%,#7226FF_55%,#3243A6_100%)]
 text-center flex min-h-screen h-[812px] w-full flex-col items-center pt-[140px] relative overflow-clip"
    >
      <div className="relative flex w-full items-center flex-col gap-6 z-[6]">
        <Image src={card} alt="card" className="absolute -bottom-10 w-[343px] z-[5]" />

        <div className="w-[311px] z-[6]">
          <span className=" bg-gradient-to-r from-white/50 via-white to-white/50 bg-clip-text text-transparent font-ethno text-[34px]/[42.3px]">Temukan Kelompok Mabim-mu</span>
          <p className="z-[6] font-montserrat font-bold text-white">Cari dengan menuliskan nama lengkap kamu!</p>
        </div>

        <div
          className="z-[6] bg-white/20 gap-[-8px] w-[311px] py-3 px-4 border-[#a2a2a2] border-[0.3px] flex items-start 
"
        >
          <input type="text" placeholder="Ketik disini..." className="w-full outline-0 font-montserrat font-bold text-[12px] placeholder:text-[#DAC2FF] text-white" />
        </div>

        <Button title="Launch" />
      </div>
      <Image src={Bg} alt="bg pattern" className="absolute left-20 top-5 opacity-[8%]  inset-0  w-full h-full object-cover z-[1] scale-[175%] bg-center" />{" "}
      <div className="absolute -top-28  bg-gradient-to-b from-[#010030] to-[#030096] w-full h-[234px] rounded-b-full blur-2xl"></div>
      <div className="absolute bottom-0 w-full h-[200px]">
        <Image src={Mascot} alt="mascot" className="absolute bottom-0 -left-8 w-[245px] h-[245px] z-[6] scale-150" />

        <div className="w-[22px] h-[22px] bg-white absolute right-8 top-0"></div>
        <div className="w-[22px] h-[22px] bg-[#AC8FDB] absolute right-13 top-6"></div>
        <div className="w-[48px] h-[48px] bg-[#8166E3] absolute right-20 top-20"></div>
        <div className="w-[22px] h-[22px] bg-white absolute right-0 bottom-5"></div>
      </div>
    </section>
  );
}
