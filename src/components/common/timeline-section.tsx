"use client";
import Image from "next/image";
import Bg from "@/assets/bg.svg";
import OrnamentPattern from "@/assets/ornaments/Pattern.svg";
import { useScroll, motion as Motion } from "motion/react";
import { useRef } from "react";
const timeline = [
  {
    date: "2025-07-27",
    title: "Technical Meeting",
    desc: "",
  },
  {
    date: "2025-10-04",
    title: "Day-I",
    desc: "",
  },
  {
    date: "2025-10-05",
    title: "Day-II",
    desc: "",
  },
  {
    date: "2025-10-11",
    title: "Day-III",
    desc: "",
  },
  {
    date: "2025-10-18",
    title: "Day-IV",
    desc: "",
  },
];

export function TimelineSection() {
  return (
    <section id="timeline" className="bg-[radial-gradient(101.34%_99.57%_at_50.02%_100%,#010030_7%,#7226FF_55%,#3243A6_100%)] text-center flex  min-h-[812px] w-full flex-col items-center pt-[104px] relative overflow-clip h-screen">
      <h3 className="font-ethno text-white text-[32px] z-[6]">TIMELINE</h3>
      <ul className="z-[7] mt-10">
        {timeline.map((item, index) => {
          const nextDate = timeline[index + 1]?.date;
          return <TimelineItem item={item} key={index} index={index} curDate={new Date()} nextDate={nextDate} />;
        })}
      </ul>
      <Image src={Bg} alt="bg pattern" className="absolute left-20 top-5 opacity-[8%]  inset-0  w-full h-full object-cover z-[1] scale-[175%] bg-center" />{" "}
      <Image src={OrnamentPattern} alt="ornaments" className="absolute top-0 rotate-[320deg] w-full h-fit z-[1] scale-[350%]" />
      <div className="absolute -top-14  bg-gradient-to-b from-[#010030] to-[#030096] w-[534px] h-[234px] rounded-full blur-2xl z-[2] opacity-90"></div>
    </section>
  );
}
interface TimelineItemProps {
  date: string;
  title: string;
  desc: string;
}

interface TimelineItemComponentProps {
  item: TimelineItemProps;
  index: number;
  curDate: Date;
  nextDate?: string;
}

function TimelineItem({ item, index, curDate, nextDate }: TimelineItemComponentProps) {
  const isFutureDate = curDate.getTime() < new Date(item.date).getTime();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div key={index} ref={ref} className="flex items-start gap-6">
      <div className="flex items-center flex-col">
        {isFutureDate ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M6.66663 21.9459L15.7751 28L24.6666 21.9459L24.6666 9.62162L15.7751 4L6.66663 9.62162L6.66663 21.9459Z" stroke="url(#paint1_linear_463_244)" strokeWidth="0.428571" />
            <defs>
              <linearGradient id="paint1_linear_463_244" x1="15.6666" y1="28" x2="15.6666" y2="4" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.5" />
                <stop offset="0.5" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M8.80945 19.9099L15.784 24.5715L22.738 19.9099L22.738 11.7896L15.784 7.42868L8.80945 11.7896L8.80945 19.9099Z" fill="url(#paint0_linear_463_244)" />
            <path d="M6.66663 21.9459L15.7751 28L24.6666 21.9459L24.6666 9.62162L15.7751 4L6.66663 9.62162L6.66663 21.9459Z" stroke="url(#paint1_linear_463_244)" strokeWidth="0.428571" />
            <defs>
              <linearGradient id="paint0_linear_463_244" x1="15.7737" y1="24.5715" x2="15.7737" y2="7.42868" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.5" />
                <stop offset="0.5" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="paint1_linear_463_244" x1="15.6666" y1="28" x2="15.6666" y2="4" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.5" />
                <stop offset="0.5" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        )}
        <Motion.div className="flex flex-col origin-top h-auto min-h-24  w-fit md:w-12" style={{ scaleY: scrollYProgress }}>
          <svg width="12" height="12" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fadeGradient" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <g transform="rotate(180, 100, 100)">
              <path d="M 0 0 H 200 V 200 L 100 150 L 0 200 Z" fill={isFutureDate ? "none" : "url(#fadeGradient)"} stroke="#D9D9D9" strokeWidth="2" strokeOpacity={isFutureDate ? "0.5" : "2"} />
            </g>
          </svg>

          {nextDate ? (
            <div className={`w-[12px] h-[60px] ${isFutureDate ? "border border-[#D9D9D9]" : "bg-[linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,1)_50%,rgba(255,255,255,0.5)_100%)]"} shadow-md`} />
          ) : (
            <div className={`w-[12px] h-[60px] ${isFutureDate ? "border border-[#D9D9D9]" : "bg-[linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,1)_50%,rgba(255,255,255,0.5)_100%)]"} shadow-md`} />
          )}

          <svg width="12" height="12" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fadeGradient" x1="100" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path d="M 0 0 H 200 V 200 L 100 150 L 0 200 Z" fill={isFutureDate ? "none" : "url(#fadeGradient)"} stroke="#D9D9D9" strokeWidth="2" strokeOpacity={isFutureDate ? "0.5" : "1"} />
          </svg>
        </Motion.div>
      </div>
      <Motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }} className="flex">
        <div className="flex flex-col text-left font-semibold">
          <span className="bg-gradient-to-r from-white/50 via-white to-white/50 bg-clip-text text-transparent font-ethno text-[24px]/[32px]">
            {new Date(item.date).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
          <li className="text-[16px] text-white [text-shadow:0_0_8px_#99AC8FDB] font-jumbo">{item.title}</li>
        </div>
        <div>
          <li className="ml-5 h-auto w-auto pb-10 pt-2 text-left text-neutral-600 md:text-lg">{item.desc}</li>
        </div>
      </Motion.div>
    </div>
  );
}
