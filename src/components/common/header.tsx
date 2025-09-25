"use client";
import Image from "next/image";
import ShieldLogo from "@/app/icon.svg";

import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import HamburgerIcon from "@/assets/ornaments/Hamburger.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "#main" },
    { name: "Group", href: "#kelompok" },
    { name: "Countdown", href: "#countdown" },
    { name: "Timeline", href: "#timeline" },
    { name: "Documentation", href: "#documentation" },
    { name: "FAQ", href: "#faq" },
  ];
  return (
    <header className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[95%] z-50 flex items-center justify-between md:pl-6 md:pr-10 px-5 md:py-2 py-2 shadow-lg bg-[#ffffff]/20 border border-[#6C2EF2]">
      <div className="flex items-center gap-3">
        <Image src={ShieldLogo} alt="Logo" className="w-12 sm:w-15" />
        <span className="font-ethno text-md sm:text-base md:text-lg lg:text-xl text-[#E5E5E5] tracking-wide">MABIMRPL 2025</span>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 sm:gap-2 md:gap-4 lg:gap-6 text-sm sm:text-xs md:text-xs lg:text-sm font-medium text-[#E5E5E5]">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-white transition"
          >
            {link.name}
          </a>
        ))}
      </nav>
      {/* Hamburger Icon */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none z-50"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Open navigation menu"
      >
        <Image 
          src={HamburgerIcon} 
          alt="Menu"
          width={24}
          height={24}
          className={`transition-transform duration-300 sm:w-8 sm:h-8 ${isOpen ? 'rotate-90' : ''}`}
        />
      </button>

      {/* Overlay and Drawer for Hamburger Menu */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed bg-black/90 w-full transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          ></div>
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-[280px] bg-[#010030] shadow-xl z-[10000] flex flex-col pt-4 border border-[#6C2EF2]/50"
          >
            {/* Close Button */}
            <button
              className="fixed top-2 right-4 text-[#E5E5E5] hover:text-white text-xl p-2 focus:outline-none"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            <div className="mt-12 flex flex-col bg-[#010030]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#E5E5E5]/80 hover:text-white text-base font-medium py-4 px-8 transition-all hover:bg-[#6C2EF2]/10 border-b border-[#6C2EF2]/10 first:border-t"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </header>
  );
}
