import Bg from "@/assets/bg.svg";
import Image from "next/image";
import Orbit from "@/assets/ornaments/orbit.svg";
import Mascot from "@/assets/mascots/shield.svg";
import CountdownTimerTabs from "./countdown-timer";
export function CountdownSection() {
  return (
    <section id="countdown" className="bg-[radial-gradient(101.34%_99.57%_at_50.02%_0.43%,#010030_7%,#7226FF_55%,#3243A6_100%)] text-center flex h-screen md:h-300 min-h-[812px] w-full flex-col items-center pt-[120px] relative overflow-clip">
      <h3 className="font-ethno text-white text-[40px] md:text-[60px] z-[6] mb-5">COUNTDOWN</h3>
      <Image src={Bg} alt="bg pattern" className="absolute left-20 top-5 opacity-[8%]  inset-0  w-full h-full object-cover z-[1] scale-[175%] bg-center" />
      <div className="relative z-[10] w-full flex justify-center mt-8">
        <CountdownTimerTabs />
      </div>
      <div className="absolute bottom-0 w-full h-[365px]">
        <Image src={Orbit} alt="bg pattern" className="absolute bottom-0 lg:-bottom-10 sm:-left-100 md:-left-100 w-full h-full md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px]  z-[2] rotate-[60deg] " />
        <Image src={Mascot} alt="mascot" className="absolute bottom-15 -right-10 w-[245px] h-[245px] z-[6] scale-200 md:w-[300px] md:h-[300px] md:mb-10" />
      </div>
      <div className="absolute -bottom-10  bg-gradient-to-b from-[#030096] to-[#010030] w-[534px] h-[234px] rounded-full blur-2xl"></div>
    </section>
  );
}
