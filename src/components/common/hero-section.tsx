"use client";

import { Button } from "@/components/ui/button";
import { FlashingText } from "@/components/ui/light-streaks";
import Image from "next/image";
import OrnamentPattern from "@/assets/ornaments/Pattern.svg";
import SmileMascot from "@/assets/mascots/smile.svg";
import SmileMascot2 from "@/assets/mascots/smile2.svg";
import SmileMascot3 from "@/assets/mascots/smile3.svg";
import Bg from "@/assets/bg.svg";
import { motion as Motion } from "motion/react";
import Link from "next/link";
import { BlurFade } from "../ui/blur-fade";

export function HeroSection() {
  const text = "2K25".split("");
  return (
    <section className="bg-[radial-gradient(101.34%_99.57%_at_50.02%_0.43%,#010030_7%,#7226FF_55%,#3243A6_100%)] text-center flex min-h-[1000px] h-screen w-full flex-col items-center justify-center gap-y-6 relative overflow-hidden px-4">
      <BlurFade delay={0.25} inView>
        {/* Mobile Headline */}
        <div className=" sm:hidden z-[5] mt-20">
          <h1 className="font-ethno text-white text-[32px] [text-shadow:0_0_8px_#8166E3]">EXPLORING MABIM WITH</h1>
          <FlashingText text="FUTURE TECH" flashesCount={10} flashLength={150} flashThickness={4} className="font-ethno text-white text-[32px] [text-shadow:0_0_8px_#8166E3]" />
        </div>
        {/* Desktop Headline */}
        <div className=" hidden sm:block z-[5] mt-60">
          <h1 className="font-ethno text-white sm:text-[46px] lg:text-[58px] [text-shadow:0_0_8px_#8166E3]">EXPLORING MABIM</h1>
          <FlashingText text="WITH FUTURE TECH" flashesCount={10} flashLength={150} flashThickness={4} className="font-ethno text-white sm:text-[46px] lg:text-[58px] [text-shadow:0_0_8px_#8166E3]" />
        </div>
      </BlurFade>
      {/* Description */}
      <div className="w-full max-w-[343px] md:max-w-[680px]  z-[6]">
        <BlurFade delay={0.25 * 2} inView className="flex flex-col gap-3">
          <h4 className="font-montserrat text-[16px] md:text-[20px] text-white font-semibold">&quot;Cyber Root: Menembus Dunia Digital, Berakar Dalam Jati Diri&quot;</h4>
          <p className="font-montserrat text-[14px]/[18px] md:text-[16px]/[22px] text-[#FFE5F1]">
            Melalui kegiatan MABIM, diharapkan mahasiswa baru dapat mengenal lebih dekat rekan-rekan seangkatannya, kakak tingkat, dosen, serta budaya yang ada di program studi.
          </p>
          <p className="font-montserrat text-[14px]/[18px] md:text-[16px]/[22px] text-[#FFE5F1]">
            Selain itu, kegiatan ini juga bertujuan untuk menumbuhkan rasa memiliki terhadap jurusan serta memupuk jiwa kepemimpinan dan keorganisasian sejak dini.
          </p>
        </BlurFade>
      </div>
      <BlurFade delay={0.25 * 3} inView>
        <div className="flex items-center gap-10 mt-[32px] z-[5] lg:gap-50">
          <Link href="https://drive.google.com/drive/folders/1NdPNBcVjaBGGTo-4Q-Zb_rQQdtUB_Ame" target="_blank">
            <Button title="Twibbon" classN="md:w-[180px] md:h-[50px]" />
          </Link>
          <Link href="https://drive.google.com/drive/folders/1pgsNdC6gbFA9PIvhSUvj6O5ySA8SPiHk" target="_blank">
            <Button title="Booklet" classN="md:w-[180px] md:h-[50px]" />
          </Link>
        </div>
      </BlurFade>
      {/* Mascot */}
      <BlurFade delay={0.25 * 4} inView className=" w-full z-[6]">
        <div className="w-full flex justify-center relative">
          <Motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} className="z-[6] absolute left-20 bottom-0 hidden xl:block">
            <Image src={SmileMascot2} alt="Mascot" className="w-[360px] " />
          </Motion.div>

          <div className="flex items-center justify-center select-none gap-0 relative">
            <Image src={SmileMascot} alt="Mascot" className="w-[204px] sm:w-[204px] md:w-[260px] lg:w-[380px] h-auto z-[6]" />
            <div className="z-[3] leading-none -ml-12 md:-ml-18 lg:-ml-22 relative">
              <p className="font-montserrat font-black bg-gradient-to-r from-white/50 via-white to-white/50 bg-clip-text text-transparent text-[52px] md:text-[62px] lg:text-[96px] z-[1] text-start left-[160px] mr-15">MABIM</p>
              <span className="flex items-baseline">
                <p className="font-montserrat font-black bg-gradient-to-r from-white/50 via-white to-white/50 bg-clip-text text-transparent text-[52px] md:text-[62px] lg:text-[96px] z-[1] text-start left-[160px]">RPL</p>
                <div className="flex z-[6] mr-10 -ml-2 lg:-ml-4">
                  {text.map((char, i) => (
                    <span
                      key={i}
                      className="bg-[radial-gradient(101.34%_99.57%_at_50.02%_0.43%,#010030_7%,#7226FF_55%,#87F5F5_100%)]
                          text-transparent bg-clip-text font-jumbo 
                          text-[48.42px] md:text-[70px] lg:text-[90px] [-webkit-text-stroke:0.8px_white] not-last:mr-[-16px] sm:not-last:mr-[-16px] md:not-last:mr-[-22] lg:not-last:mr-[-32px]"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </span>
            </div>
          </div>
          <Motion.div className="z-[6] absolute right-15 -top-5 hidden xl:block" animate={{ x: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
            <Image src={SmileMascot3} alt="Mascot" className="w-[380px] " />
          </Motion.div>
        </div>
      </BlurFade>
      {/* Backgrounds */}
      <Image src={Bg} alt="bg pattern" className="absolute left-20 top-5 opacity-[8%]  inset-0  w-full h-full object-cover z-[1] scale-[175%] bg-center" />{" "}
      <Image src={OrnamentPattern} alt="ornaments" className="absolute bottom-0 left-0  w-full h-fit z-[1] scale-[320%] sm:hidden" />
      <div className="absolute bottom-0  bg-gradient-to-b from-[#010030] to-[#030096] w-[534px] h-[234px] rounded-full blur-2xl sm:hidden"></div>
    </section>
  );
}
