"use client";

import { useState } from "react";
import { AnimatePresence, motion as Motion } from "motion/react";

export function Loading({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {children}

      <AnimatePresence mode="wait">
        {isLoading && (
          <Motion.div key="loader" className="fixed inset-0 z-[9999] flex h-screen flex-col items-center justify-center gap-y-4 bg-[#010030]" exit={{ opacity: 0 }} transition={{ duration: 0.5 }} onClick={setIsLoading.bind(null, false)}>
            {/* <Motion.svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} role="img" initial={"hidden"} animate={"visible"}>
              <defs>
                <radialGradient id="gradPurpleBlue" cx="50%" cy="40%" r="80%">
                  <stop offset="0%" stopColor="#7226FF" />
                  <stop offset="65%" stopColor="#5A38D6" />
                  <stop offset="100%" stopColor="#3243A6" />
                </radialGradient>

                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="18" result="b" />
                  <feBlend in="SourceGraphic" in2="b" mode="screen" />
                </filter>
              </defs>

              <circle cx={center} cy={center} r={center} fill="url(#gradPurpleBlue)" filter="url(#softGlow)" />

              <Motion.g
                initial={{ rotate: 0 }}
                animate={{ rotate: -360 }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 28,
                }}
                origin={`${center}px ${center}px`}
              >
                <Motion.circle cx={center} cy={center} r={192} fill="none" stroke="#FFFFFF" strokeOpacity={0.06} strokeWidth={1.6} />

                <Motion.circle
                  cx={center}
                  cy={center}
                  r={160}
                  fill="none"
                  stroke="#EDEBFF"
                  strokeOpacity={0.12}
                  strokeWidth={2}
                  strokeDasharray="6 8"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
              </Motion.g>

              <Motion.g initial={{ rotate: 0 }} animate={{ rotate: -360 }} transition={{ repeat: Infinity, ease: "linear", duration: 28 }} origin={`${center}px ${center}px`}>
                <Motion.path d={`M ${center - 120} ${center} A 120 80 0 1 0 ${center + 120} ${center}`} fill="none" stroke="#FFFFFF" strokeOpacity={0.08} strokeWidth={1.2} strokeDasharray="4 6" />

                <Motion.circle cx={center + 120} cy={center} r={5.2} fill="#FFFFFF" opacity={0.9} animate={{ x: 0, y: 0 }} transition={{ repeat: Infinity, duration: 1 }} />
              </Motion.g>

              <Motion.g initial={{ scale: 0.98 }} animate={{ scale: [0.98, 1.02, 0.98] }} transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }} origin={`${center}px ${center}px`}>
                <circle cx={center} cy={center} r={38} fill="#FFFFFF" fillOpacity={0.06} />
                <circle cx={center} cy={center} r={24} fill="#FFFFFF" fillOpacity={0.12} />

                <circle cx={center} cy={center} r={12} fill="url(#gradPurpleBlue)" />
              </Motion.g>

              <g>
                <circle cx={center + 88} cy={center - 52} r={2.2} fill="#FFFFFF" opacity={0.85} />
                <circle cx={center - 96} cy={center + 68} r={1.6} fill="#FFFFFF" opacity={0.7} />
              </g>
            </Motion.svg> */}

            <Motion.svg width="200" height="200" viewBox="0 0 801 801" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8A2BE2" />
                  <stop offset="100%" stopColor="#00CFFF" />
                </linearGradient>
              </defs>

              <Motion.line x1="0" y1="400.5" x2="801" y2="400.5" stroke="url(#grad)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
              <Motion.line x1="400.5" y1="0" x2="400.5" y2="801" stroke="url(#grad)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />

              <Motion.circle cx="400.5" cy="400.5" r="50" fill="url(#grad)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }} />

              <Motion.circle cx="400.5" cy="400.5" r="156" fill="none" stroke="url(#grad)" strokeWidth="10" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }} />
              <Motion.circle cx="400.5" cy="400.5" r="230" fill="none" stroke="url(#grad)" strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6, delay: 0.5 }} />
              <Motion.circle cx="400.5" cy="400.5" r="319" fill="none" stroke="url(#grad)" strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6, delay: 0.7 }} />
              <Motion.g animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} style={{ transformOrigin: "400.5px 400.5px" }}>
                {/* busur luar */}
                <path d="M720 400 A320 320 0 0 1 600 650" stroke="url(#grad)" strokeWidth="20" fill="none" />
                <path d="M80 400 A320 320 0 0 1 200 150" stroke="url(#grad)" strokeWidth="20" fill="none" />

                {/* busur dalam */}
                <path d="M400 244 A156 156 0 0 1 550 400" stroke="url(#grad)" strokeWidth="14" fill="none" />
                <path d="M400 556 A156 156 0 0 1 250 400" stroke="url(#grad)" strokeWidth="14" fill="none" />
              </Motion.g>
            </Motion.svg>

            <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-4 font-montserrat text-lg text-white">
              Tekan dimana saja untuk memulai
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
