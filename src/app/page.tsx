import ScrollyCanvas from "@/components/ScrollyCanvas";
import MatrixRain from "@/components/MatrixRain";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Arsenal from "@/components/Arsenal";
import Footer from "@/components/Footer";
import F1Lights from "@/components/F1Lights";
import { RaceProvider } from "@/components/RaceContext";

export default function Home() {
  return (
    <main className="bg-carbon bg-carbon-pattern bg-fixed min-h-screen">
      <RaceProvider>
        <div className="relative border-b-[6px] border-f1Red shadow-[0_10px_30px_rgba(255,24,1,0.2)] z-50">
          <F1Lights />
          <ScrollyCanvas />
          <Overlay />
        </div>
      </RaceProvider>
      
      <div className="relative text-f1Red">
        {/* Matrix background pinned to the viewport while inside this section */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="sticky top-0 h-screen w-full">
            <MatrixRain />
          </div>
        </div>
        
        <div className="relative z-10 bg-transparent">
          <About />
          <Arsenal />
          <Projects />
          <Experience />
        </div>
      </div>

      <Footer />
    </main>
  );
}
