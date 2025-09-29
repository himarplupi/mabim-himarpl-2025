"use client";
import Bg from "@/assets/bg.svg";
import Image from "next/image";
import Orbit from "@/assets/ornaments/orbit.svg";
import Mascot from "@/assets/mascots/shield.svg";
import CountdownTimerTabs from "./countdown-timer";

import { motion as Motion } from "motion/react";
import { BlurFade } from "../ui/blur-fade";
export function CountdownSection() {
  return (
    <section
      id="countdown"
      className="bg-[radial-gradient(101.34%_99.57%_at_50.02%_0.43%,#010030_7%,#7226FF_55%,#3243A6_100%)] text-center flex h-screen min-h-[680px] md:min-h-[812px] w-full flex-col items-center pt-[80px] md:pt-[120px] relative overflow-clip px-2 md:px-6"
    >
      <BlurFade inView delay={0.25 * 2}>
        <h3 className="font-ethno text-white  z-[6] text-[28px] md:text-[40px]  mb-5">COUNTDOWN</h3>
      </BlurFade>
      <Image src={Bg} alt="bg pattern" className="absolute left-20 top-5 opacity-[8%]  inset-0  w-full sm:hidden h-full object-cover z-[1] scale-[175%] bg-center" />

      <BlurFade className="w-full z-10" inView delay={0.25 * 3}>
        <div className="relative z-[10] w-full flex justify-center mt-4 md:mt-8">
          <CountdownTimerTabs />
        </div>
      </BlurFade>
      <div className="absolute bottom-0 w-full h-[280px] md:h-[365px]">
        <Motion.div className="z-[2] rotate-[60deg] sm:-left-[500px] absolute bottom-0 hidden sm:block w-full h-full" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }}>
          <Image src={Orbit} alt="bg pattern" className="  w-full h-full  " />
        </Motion.div>

        <div className="z-[2] rotate-[60deg] absolute bottom-0 sm:hidden -left-52 w-full h-full">
          <Image src={Orbit} alt="bg pattern" className="  w-full h-full  " />
        </div>
        <Image src={Mascot} alt="mascot" className="absolute bottom-8 -right-6 md:bottom-10 md:-right-10 w-[180px] h-[180px] md:w-[245px] md:h-[245px] z-[6] scale-200" />
      </div>
      <div className="absolute -bottom-10 sm:hidden  bg-gradient-to-b from-[#030096] to-[#010030] w-[534px] h-[234px] rounded-full blur-2xl"></div>
    </section>
  );
}
