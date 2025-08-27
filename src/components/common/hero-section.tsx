import { Button } from "@/components/ui/button";
import { FlashingText } from "@/components/ui/light-streaks";
import Image from "next/image";
import OrnamentPattern from "@/assets/ornaments/Pattern.svg";
import SmileMascot from "@/assets/mascots/smile.svg";
import Bg from "@/assets/bg.svg";

export function HeroSection() {
  const text = "2K25".split("");
  return (
    <section className="bg-[radial-gradient(101.34%_99.57%_at_50.02%_0.43%,#010030_7%,#7226FF_55%,#3243A6_100%)] text-center flex min-h-[812px] h-screen w-full flex-col items-center justify-center gap-y-6 relative overflow-hidden">
      <div className="w-[343px] z-[5]">
        <h1 className="font-ethno text-white text-[32px] [text-shadow:0_0_8px_#8166E3]">EXPLORING MABIM WITH </h1>
        <FlashingText text="FUTURE TECH" flashesCount={10} flashLength={150} flashThickness={4} className="font-ethno text-white text-[32px] [text-shadow:0_0_8px_#8166E3]" />
      </div>
      <div className="w-[343px] flex flex-col gap-3 z-[6]">
        <h4 className="font-montserrat text-[16px] text-white font-semibold">&quot;Cyber Root: Menembus Dunia Digital, Berakar Dalam Jati Diri&quot;</h4>
        <p className="font-montserrat text-[14px]/[18px] text-[#FFE5F1]">
          Melalui kegiatan MABIM, diharapkan mahasiswa baru dapat mengenal lebih dekat rekan-rekan seangkatannya, kakak tingkat, dosen, serta budaya yang ada di program studi.
        </p>
        <p className="font-montserrat text-[14px]/[18px] text-[#FFE5F1]">Selain itu, kegiatan ini juga bertujuan untuk menumbuhkan rasa memiliki terhadap jurusan serta memupuk jiwa kepemimpinan dan keorganisasian sejak dini.</p>
      </div>
      <div className="flex items-center gap-10 mt-[52px] z-[5]">
        <Button title="Twibbon" />
        <Button title="Booklet" />
      </div>
      <div className="flex items-center select-none gap-0 relative ">
        <Image src={SmileMascot} alt="Mascot" className="w-[204px]  h-[204px] z-[6]" />
        <span className="font-montserrat font-black bg-gradient-to-r from-white/50 via-white to-white/50 bg-clip-text text-transparent text-[52.42px]/[44px]  z-[5] w-[263px] text-start absolute left-[160px]">MABIM RPL</span>
        <span className=" text-transparent  text-[48.42px]/[44px]  z-[5] w-[263px] text-start ">MABIM RPL</span>

        <div className="absolute  flex left-[260px] bottom-[50px] z-[6]">
          {text.map((char, i) => (
            <span
              key={i}
              className="bg-[radial-gradient(101.34%_99.57%_at_50.02%_0.43%,#010030_7%,#7226FF_55%,#87F5F5_100%)]
                     text-transparent bg-clip-text font-jumbo 
                     text-[48.42px]/[44px] [-webkit-text-stroke:0.8px_white] not-last:mr-[-22px]"
            >
              {char}
            </span>
          ))}
        </div>
      </div>
      <Image src={Bg} alt="bg pattern" className="absolute left-20 top-5 opacity-[8%]  inset-0  w-full h-full object-cover z-[1] scale-[175%] bg-center" />{" "}
      <Image src={OrnamentPattern} alt="ornaments" className="absolute bottom-0 left-0  w-full h-fit z-[1] scale-[320%]" />
      <div className="absolute bottom-0  bg-gradient-to-b from-[#010030] to-[#030096] w-[534px] h-[234px] rounded-full blur-2xl"></div>
    </section>
  );
}
