import ScrollyCanvas from "@/components/ScrollyCanvas";
import MatrixRain from "@/components/MatrixRain";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Arsenal from "@/components/Arsenal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <div className="relative border-b-2 border-matrix-dark shadow-[0_10px_30px_rgba(0,143,17,0.3)] z-50">
        <ScrollyCanvas />
        <Overlay />
      </div>
      
      <div className="relative text-matrix">
        {/* Matrix background pinned to the viewport while inside this section */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="sticky top-0 h-screen w-full">
            <MatrixRain />
          </div>
        </div>
        
        <div className="relative z-10 bg-black/40 backdrop-blur-[2px]">
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
