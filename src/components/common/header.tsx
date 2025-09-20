import Image from "next/image";
import ShieldLogo from "@/app/icon.svg";

export default function Header() {
  return (
  <header className="fixed top-8 left-1/2 transform -translate-x-1/2 w-[90%] z-50 flex items-center justify-between pl-6 pr-10 py-2 shadow-lg bg-[#ffffff]/20 border border-[#6C2EF2]">
      <div className="flex items-center gap-3">
        <Image src={ShieldLogo} alt="Logo" className="w-15" />
        <span className="font-ethno text-xl sm:text-base md:text-lg lg:text-xl text-[#E5E5E5] tracking-wide">MABIMRPL 2025</span>
      </div>
      <nav className="flex gap-6 sm:gap-2 md:gap-4 lg:gap-6 text-sm sm:text-sm md:text-sm lg:text-sm font-medium text-[#E5E5E5]">
        <a href="#main" className="hover:text-white transition">Home</a>
        <a href="#kelompok" className="hover:text-white transition">Group</a>
        <a href="#countdown" className="hover:text-white transition">Countdown</a>
        <a href="#timeline" className="hover:text-white transition">Timeline</a>
        <a href="#documentation" className="hover:text-white transition">Documentation</a>
        <a href="#faq" className="hover:text-white transition">FAQ</a>
      </nav>
    </header>
  );
}