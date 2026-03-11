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
      description: "AI counterfeit detection via OCR & LLAMA-3 with voice chatbot.",
      tech: ["LLAMA-3", "OCR", "Python"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "CheapestBuy.AI",
      description: "Multi-agent shopping using Mistral & CrewAI with Solana Pay.",
      tech: ["CrewAI", "Solana", "Mistral"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "SafePath",
      description: "PWA emergency system with real-time location tracking.",
      tech: ["PWA", "Maps API", "JS"],
      color: "from-[#00ff87] to-[#60efff]"
    },
    {
      title: "SkillSense AI",
      description: "Gen AI platform mapping 'Skill DNA' for custom learning paths.",
      tech: ["FastAPI", "React", "Gen AI"],
      color: "from-[#ff0f7b] to-[#f89b29]"
    },
    {
      title: "EcoLearn AI",
      description: "Multilingual climate tutor using Groq & Hugging Face vision.",
      tech: ["Groq", "HF Vision", "AI"],
      color: "from-green-400 to-emerald-600"
    },
  ];

  return (
    <motion.section 
      ref={sectionRef} 
      className="min-h-screen bg-[#000000] text-white py-40 px-8 md:px-24 relative z-30 overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] -mt-12 md:-mt-24" 
      id="projects"
    >
      {/* Background noise texture or grid could go here */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

      <motion.div style={{ y: parallaxY }} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6 drop-shadow-2xl">
            Shipped.
          </h2>
          <p className="text-2xl text-gray-500 max-w-xl font-medium tracking-tight">
            Proof of work.
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
              className="group relative bg-[#09090b] rounded-[2.5rem] p-8 border border-white/10 flex flex-col h-full hover:border-white/30 transition-all duration-300"
            >
              {/* Vibrant Top Border Glow */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r ${project.color} opacity-50 group-hover:opacity-100 transition-opacity blur-[2px]`} />
              
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-black tracking-tight leading-none">{project.title}</h3>
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shrink-0">
                    <ArrowUpRight size={20} strokeWidth={3} />
                  </a>
                </div>
                
                <p className="text-gray-400 font-medium text-lg leading-relaxed flex-grow mb-8">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#1c1c1f] text-gray-300 group-hover:bg-white group-hover:text-black transition-colors duration-300"
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
