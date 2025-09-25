import Image, { type StaticImageData } from "next/image";
import Bg from "@/assets/bg.svg";
import Mascot from "@/assets/mascots/smile.svg";
import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";
import Mokaku from "@/assets/Mokaku.png";

type SponsorMediaPartner = {
  name: string;
  logo: StaticImageData | null;
};

const sponsorMediaPartners: SponsorMediaPartner[] = [
  {
    name: "PT Dicoding Akademi Indonesia",
    logo: Mokaku,
  },
  {
    name: "PT Allo Bank Indonesia Tbk",
    logo: Mokaku,
  },
  {
    name: "Ruru Snack",
    logo: Mokaku,
  },
  {
    name: "PT Paragon Technology and Innovation",
    logo: Mokaku,
  },
  {
    name: "Menyala by OCBC",
    logo: Mokaku,
  },
];

const firstRow = sponsorMediaPartners.slice(0, 3);
const secondRow = sponsorMediaPartners.slice(3);

const SponsorMediaPartnerCard = ({ logo, size = "md" }: { logo: StaticImageData | null; size?: "md" | "lg" }) => {
  return (
    <figure className={cn("relative flex aspect-video cursor-pointer items-center justify-center overflow-hidden rounded-xl object-center p-4", size === "lg" ? "h-36 w-full" : "h-24 w-48")}>
      {logo && <Image src={logo} alt="Sponsor or Media Partner Logo" style={{ maxHeight: "100%", maxWidth: "100%" }} />}
    </figure>
  );
};

export function SponsorSection() {
  return (
    <section className="bg-[radial-gradient(101.34%_99.57%_at_50.02%_100%,#010030_7%,#7226FF_55%,#3243A6_100%)] text-center flex  min-h-[812px] w-full flex-col items-center pt-[220px] relative overflow-clip h-screen">
      <span className=" bg-gradient-to-r from-white/50 via-white to-white/50 bg-clip-text text-transparent font-ethno text-[40px]/[40px]">
        Sponsor <br /> & <br /> Medpart
      </span>
      <Marquee pauseOnHover direction="left" className="mt-16 z-[6]">
        {Array(3)
          .fill(firstRow)
          .flat()
          .map((sponsorMediaPartner, idx) => (
            <SponsorMediaPartnerCard size="lg" key={sponsorMediaPartner.name + idx} logo={sponsorMediaPartner.logo} />
          ))}
      </Marquee>
      <Marquee pauseOnHover direction="right" className="z-[6]">
        {Array(3)
          .fill(secondRow)
          .flat()
          .map((sponsorMediaPartner, idx) => (
            <SponsorMediaPartnerCard size="lg" key={sponsorMediaPartner.name + idx} logo={sponsorMediaPartner.logo} />
          ))}
      </Marquee>
      <Image src={Mascot} alt="mascot" className="absolute top-0 -left-[70px] w-[245px] h-[245px] z-[6] rotate-[345deg]" />
      <Image src={Bg} alt="bg pattern" className="absolute left-20 top-5 opacity-[8%]  inset-0 sm:hidden w-full h-full object-cover z-[1] scale-[175%] bg-center" />{" "}
    </section>
  );
}
