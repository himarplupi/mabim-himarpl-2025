import { CountdownSection } from "@/components/common/countdown-section";
import { HeroSection } from "@/components/common/hero-section";
import { KelompokSection } from "@/components/common/kelompok-section";
import { TimelineSection } from "@/components/common/timeline-section";

export default function Home() {
  return (
    <main id="main" className="relative min-h-screen overflow-hidden ">
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
    </main>
  );
}
