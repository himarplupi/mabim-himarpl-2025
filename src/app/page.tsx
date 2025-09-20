import Header from "@/components/common/header";
import { CountdownSection } from "@/components/common/countdown-section";
import { FaqSection } from "@/components/common/faq-section";
import { Footer } from "@/components/common/footer";
import { GlobalFooter } from "@/components/common/global-footer";
import { HeroSection } from "@/components/common/hero-section";
import { KelompokSection } from "@/components/common/kelompok-section";
import { SponsorSection } from "@/components/common/sponsor-section";
import { TimelineSection } from "@/components/common/timeline-section";
import React from "react";

export default function Home() {
  return (
  <main id="main" className="relative min-h-screen overflow-hidden">
      <div>
        <Header />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <KelompokSection />
      </div>
      <div>
        <CountdownSection />
      </div>
      <div>
        <TimelineSection />
      </div>
      <div>
        <FaqSection />
      </div>
      <div>
        <SponsorSection />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <GlobalFooter />
      </div>
      {/* ...existing page content... */}
    </main>
  );
}
