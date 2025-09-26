"use client";

import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { motion as Motion } from "motion/react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { cn } from "@/lib/utils";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const faqs = [
  {
    id: "item-1",
    question: "Berapa Lama MABIM Dilaksanakan?",
    answer: "MABIM dilaksanakan selama 4 hari dalam kurun waktu 1 bulan, dimana setiap pelaksanaannya diadakan pada hari Minggu, kecuali day 2 yang dilaksanakan pada hari Sabtu.",
  },
  {
    id: "item-2",
    question: "Apa Kepanjangan dari MABIM RPL?",
    answer: "Kepanjangan dari Mabim adalah Masa Bimbingan. Jadi, Mabim RPL artinya Masa Bimbingan yang dilaksanakan untuk mahasiswa baru dengan Prodi RPL atau Rekayasa Perangkat Lunak",
  },
  {
    id: "item-3",
    question: "Apa manfaat dari MABIM RPL?",
    answer: "Mabim sangat berguna untuk memperdalam pemahaman mahasiswa baru terkait prodi yang tengah mereka tempuh, jadi jangan sampai ga ikut ya!",
  },
  {
    id: "item-4",
    question: "Apakah MABIM RPL Wajib?",
    answer: "Mabim ini diwajibkan untuk seluruh mahasiswa baru Rekayasa Perangkat Lunak di Universitas Pendidikan Indonesia, jadi siap-siap ya!!",
  },
  {
    id: "item-5",
    question: "Apa yang Perlu Disiapkan untuk MABIM RPL?",
    answer: "Untuk ikut Mabim itu sebenernya cuma perlu satu hal, yaitu Niat. Sisanya tinggal ikutin instruksi dari Mentornya aja deh :D",
  },
  {
    id: "item-6",
    question: "MABIM RPL itu Santai apa Serius Banget?",
    answer: "Mabim ini ada waktunya santai, tapi juga ada waktu seriusnya. Jadi ga usah khawatir, ga akan seserius itu kok :)",
  },
];

export function FAQAccordions() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState("");

  return (
    <AccordionPrimitive.Root defaultValue="item-1" onValueChange={setActiveIndex} type="single" collapsible className="w-full max-w-4xl mx-auto px-6 font-montserrat text-white z-[6]">
      {faqs.map((faq) => (
        <AccordionPrimitive.Item value={faq.id} key={faq.id} className="accordionItem  overflow-hidden rounded-md border border-white/20">
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="group flex flex-1 cursor-pointer items-center justify-between bg-[#010030]/10 px-4 py-3 text-left font-semibold transition-all hover:bg-[#010030]/20">
              {faq.question}
              <ChevronDownIcon className="h-4 w-4 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>

          <AccordionPrimitive.Content className="accordionContent data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden">
            <div className="bg-white/20 px-4 py-3">
              <div className="text-sm">{faq.answer}</div>
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
