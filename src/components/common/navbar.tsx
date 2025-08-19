"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { motion as Motion, useInView } from "motion/react";

import LogoMabim from "@/app/icon.svg";
import VectorNav from "@/assets/ornaments/VectorNav.svg";
import ContainerNav from "@/assets/ornaments/Container.svg";
import { url } from "inspector";
import { cn } from "@/lib/utils";
const navLinks = [
  {
    name: "Beranda",
    href: "#main",
  },
  {
    name: "Kelompok",
    href: "#kelompok",
  },
  {
    name: "Countdown",
    href: "#countdown",
  },
  {
    name: "Timeline",
    href: "#timeline",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
];

export function Navbar() {
  const lenis = useLenis();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5, margin: "100px" });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Motion.div
      ref={ref}
      className="fixed left-0 right-0 top-0 z-50 md:left-2 md:right-2 md:top-2 mx-4 mt-4"
      initial={{ y: -100 }}
      animate={{ y: isClient && pathname === "/" && isInView ? 0 : -100 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 1,
      }}
    >
      <nav className="container flex items-center justify-between   bg-[#7226FF]/40 border-[#be8aff] border-2">
        <Image src={VectorNav} alt="ornaments" className="absolute left-0  w-[150%] h-[150%]" />

        <div className="flex items-center gap-1 ml-4 my-2">
          <Image src={LogoMabim} alt="Logo Mabim" className="w-12 h-12" />
          <span className="text-transparent w-[125px] bg-clip-text bg-gradient-to-r from-white/50 via-white to-white/50 font-ethno text-[16px]">MABIMRPL 2025</span>
        </div>

        <div className="hidden items-center md:flex gap-x-4 ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="p-1 font-montserrat text-neutral-200 lg:text-lg"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                lenis?.scrollTo(link.href, {
                  offset: link.href !== "#main" ? -96 : 0,
                });
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </Motion.div>
  );
}
