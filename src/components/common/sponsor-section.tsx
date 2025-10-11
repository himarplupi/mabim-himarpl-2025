import Image, { type StaticImageData } from "next/image";
import Bg from "@/assets/bg.svg";
import Mascot from "@/assets/mascots/smile.svg";
import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";
import Dijait from "@/assets/sponsors/Dijait.png";
import dapus from "@/assets/sponsors/DAPUS.jpeg";
import fokus from "@/assets/sponsors/fokus.png";
import hmve from "@/assets/sponsors/HMVE.png";
import pgsd from "@/assets/sponsors/pgsd.png";
import tekkom from "@/assets/sponsors/tekkom.png";
import pedia from "@/assets/sponsors/pedia.png";
import perslima from "@/assets/sponsors/PERSLIMA.png";
import kanght from "@/assets/sponsors/kanght.png";
import rekapstore from "@/assets/sponsors/rekapstore.png";
import dicoding from "@/assets/sponsors/dicoding.png";
import oppa from "@/assets/sponsors/oppa.png";
import { BlurFade } from "../ui/blur-fade";
type SponsorMediaPartner = {
  name: string;
  logo: StaticImageData | null;
};

const sponsorMediaPartners: SponsorMediaPartner[] = [
  {
    name: "Dicoding",
    logo: dicoding,
  },
  {
    name: "Oppa",
    logo: oppa,
  },
  {
    name: "Dijait",
    logo: Dijait,
  },
  {
    name: "KANGHT",
    logo: kanght,
  },
  {
    name: "Rekap Store",
    logo: rekapstore,
  },
  {
    name: "Fokus",
    logo: fokus,
  },
  {
    name: "Dapus",
    logo: dapus,
  },
  {
    name: "Perslima",
    logo: perslima,
  },
  {
    name: "hmve",
    logo: hmve,
  },
  {
    name: "pgsd",
    logo: pgsd,
  },
  {
    name: "pedia",
    logo: pedia,
  },
  {
    name: "tekkom",
    logo: tekkom,
  },
];

const firstRow = sponsorMediaPartners.slice(0, 5);
const secondRow = sponsorMediaPartners.slice(5);

const SponsorMediaPartnerCard = ({ logo, size = "md" }: { logo: StaticImageData | null; size?: "md" | "lg" }) => {
  return (
    <figure className={cn("relative flex  cursor-pointer items-center justify-center overflow-hidden  aspect-video rounded-xl object-center p-4", size === "lg" ? "h-40" : "h-24")}>
      {logo && <Image src={logo} alt="Sponsor or Media Partner Logo" style={{ height: "100%", width: "auto" }} />}
    </figure>
  );
};

export function SponsorSection() {
  return (
    <section className="bg-[radial-gradient(101.34%_99.57%_at_50.02%_100%,#010030_7%,#7226FF_55%,#3243A6_100%)] text-center flex  min-h-[812px] w-full flex-col items-center pt-[220px] relative overflow-clip h-screen">
      <BlurFade inView delay={0.25 * 2}>
        <span className=" bg-gradient-to-r from-white/50 via-white to-white/50 bg-clip-text text-transparent font-ethno text-[40px]/[40px]">
          Sponsor <br /> & <br /> Medpart
        </span>
      </BlurFade>
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
