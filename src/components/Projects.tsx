"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const projects = [
    {
      title: "Medical Patrol",
      description: "Counterfeit detection subroutine via OCR & Neural Net with voice interface.",
      tech: ["LLAMA-3", "OCR", "Python"],
      color: "border-matrix-light shadow-[0_0_15px_rgba(0,255,65,0.3)]"
    },
    {
      title: "CheapestBuy.AI",
      description: "Multi-agent procurement protocol using Mistral & CrewAI with Solana Pay integration.",
      tech: ["CrewAI", "Solana", "Mistral"],
      color: "border-matrix-DEFAULT shadow-[0_0_15px_rgba(0,143,17,0.3)]"
    },
    {
      title: "SafePath",
      description: "PWA emergency tracking grid with real-time location mapping.",
      tech: ["PWA", "Maps API", "JS"],
      color: "border-matrix-dark shadow-[0_0_15px_rgba(0,59,0,0.3)]"
    },
    {
      title: "SkillSense AI",
      description: "Gen AI construct mapping 'Skill DNA' for custom traversal paths.",
      tech: ["FastAPI", "React", "Gen AI"],
      color: "border-matrix-light shadow-[0_0_15px_rgba(0,255,65,0.3)]"
    },
    {
      title: "EcoLearn AI",
      description: "Multilingual climate analysis bot using Groq & HF vision constructs.",
      tech: ["Groq", "HF Vision", "AI"],
      color: "border-matrix-DEFAULT shadow-[0_0_15px_rgba(0,143,17,0.3)]"
    },
  ];

  return (
    <motion.section 
      ref={sectionRef} 
      className="min-h-screen bg-black text-matrix py-40 px-8 md:px-24 relative z-30 overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem] border-t-2 border-matrix-light shadow-[0_-10px_30px_rgba(0,255,41,0.2)] -mt-12 md:-mt-24" 
      id="projects"
    >
      {/* Background terminal grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff4110_1px,transparent_1px),linear-gradient(to_bottom,#00ff4110_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <motion.div style={{ y: parallaxY }} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6 drop-shadow-[0_0_10px_#00ff41]">
            LOADED CONSTRUCTS.
          </h2>
          <p className="text-2xl text-matrix-dark max-w-xl font-medium tracking-tight animate-pulse">
            &gt; verifying executed protocols...
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10 }}
              className={`group relative bg-black rounded-none p-8 border ${project.color} flex flex-col h-full hover:bg-matrix-dark/20 transition-all duration-300 gap-4`}
            >
              
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6 border-b border-matrix/30 pb-4">
                  <h3 className="text-2xl font-bold tracking-tight leading-none text-white drop-shadow-[0_0_5px_#fff]">
                    &gt; {project.title}
                  </h3>
                  <a href="#" className="w-10 h-10 border border-matrix text-matrix flex items-center justify-center hover:bg-matrix hover:text-black transition-colors shrink-0">
                    <ArrowUpRight size={20} strokeWidth={2} />
                  </a>
                </div>
                
                <p className="text-matrix-light font-medium text-lg leading-relaxed flex-grow mb-8">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider border border-matrix text-matrix group-hover:bg-matrix group-hover:text-black transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
