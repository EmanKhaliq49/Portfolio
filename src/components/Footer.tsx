import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-matrix pt-32 pb-16 px-8 md:px-24 border-t border-matrix/20 relative z-20" id="contact">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-5xl md:text-6xl font-normal uppercase tracking-tighter mb-16 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
          Contact
        </h3>
        
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
          
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="font-medium opacity-60 mb-2 uppercase tracking-widest text-sm">Email</h4>
              <a href="mailto:ekhaliq409@gmail.com" className="text-xl md:text-2xl hover:text-white transition-colors">
                ekhaliq409@gmail.com
              </a>
            </div>
            <div>
              <h4 className="font-medium opacity-60 mb-2 uppercase tracking-widest text-sm">Education</h4>
              <p className="text-xl md:text-2xl">BSc in Computer Science (UET Taxila)</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-medium opacity-60 mb-2 uppercase tracking-widest text-sm">Social</h4>
            <a href="https://linkedin.com/in/eman-khaliq/" target="_blank" rel="noreferrer" className="text-xl md:text-2xl flex items-center justify-between border-b border-matrix/30 pb-2 hover:text-white hover:border-white transition-all group">
              LinkedIn <ArrowUpRight size={24} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://github.com/emankhaliq" target="_blank" rel="noreferrer" className="text-xl md:text-2xl flex items-center justify-between border-b border-matrix/30 pb-2 hover:text-white hover:border-white transition-all group">
              GitHub <ArrowUpRight size={24} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="flex flex-col justify-end text-right md:text-left mt-12 md:mt-0">
            <h2 className="text-xl md:text-2xl font-light mb-4">
              Designed and Developed <br /> by <span className="text-matrix-light font-bold">Eman Khaliq</span>
            </h2>
            <h5 className="text-lg font-medium opacity-50 flex items-center gap-2 md:justify-start justify-end">
              © {new Date().getFullYear()}
            </h5>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
