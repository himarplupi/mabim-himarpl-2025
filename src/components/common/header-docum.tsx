"use client";
import dokumSvg from "@/assets/ornaments/dokumentasi.svg";
import logo from "@/app/icon.svg";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion as Motion } from "motion/react";
import { useLenis } from "lenis/react";

export default function HeaderDocum() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const ref = useRef(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    function onScroll({ scroll }: { scroll: number }) {
      if (scroll > lastScroll && scroll > 100) {
        setShowHeader(false);
      } else if (scroll < lastScroll - 10) {
        setShowHeader(true);
      }
      setLastScroll(scroll);
    }

    lenis.on("scroll", onScroll);

    return () => lenis.off("scroll", onScroll);
  }, [lenis, lastScroll]);
  return (
    <Motion.header
      ref={ref}
      initial={{ y: -100 }}
      animate={{ y: showHeader ? 0 : -100 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 1,
      }}
      className="w-full absolute inset-0"
    ></Motion.header>
  );
}
