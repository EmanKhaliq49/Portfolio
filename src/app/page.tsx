import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen font-sans">
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <About />
      <Projects />
      <Experience />

      {/* Footer */}
      <footer className="bg-[#121212] text-white py-12 px-8 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold tracking-tight">Eman Khaliq</h2>
          <p className="text-gray-400">ekhaliq409@gmail.com | +92 318 1817510</p>
          <div className="flex gap-6 mt-4">
            <a href="https://linkedin.com/in/eman-khaliq/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="mailto:ekhaliq409@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              Email
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-8">
            © {new Date().getFullYear()} Eman Khaliq. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
