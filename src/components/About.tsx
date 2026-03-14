"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const stack = [
    {
      category: "SYS.CORE",
      skills: ["Python (FastAPI)", "C", "SQL", "PWA", "TypeScript"],
      color: "border-matrix-light shadow-[0_0_15px_rgba(0,255,65,0.3)]"
    },
    {
      category: "NEURAL.NET",
      skills: ["LLAMA-3", "Mistral AI", "CrewAI", "OCR", "Computer Vision", "Agents"],
      color: "border-matrix-DEFAULT shadow-[0_0_15px_rgba(0,143,17,0.3)]"
    },
    {
      category: "EXTERNAL.LINK",
      skills: ["Coral MCP", "Solana Pay", "Firebase", "Azure", "Netlify", "Google APIs"],
      color: "border-matrix-dark shadow-[0_0_15px_rgba(0,59,0,0.3)]"
    },
  ];

  const achievements = [
    "Security Clearance Level 30: Huawei ICT Competition",
    "Bronze Access Token: International CS Competition '25",
    "9/9 Data Packets Decrypted: Harvard CS50 Puzzle Day",
    "Open Source Operative: Hacktoberfest",
    "12x Global Simulation Participant",
    "Harvard HBS Aspire & McKinsey Forward Graduate",
  ];

  return (
    <motion.section 
      ref={sectionRef} 
      className="bg-black text-matrix py-40 px-8 md:px-24 overflow-hidden relative z-20 rounded-t-[3rem] md:rounded-t-[4rem] border-t-2 border-matrix-light shadow-[0_-10px_30px_rgba(0,255,41,0.2)] -mt-12 md:-mt-24"
    >
      {/* Background terminal grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff4110_1px,transparent_1px),linear-gradient(to_bottom,#00ff4110_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <motion.div style={{ y: parallaxY }} className="max-w-7xl mx-auto space-y-32 relative z-10">
        
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase drop-shadow-[0_0_10px_#00ff41]">
              SYSTEM OVERRIDE
            </h2>
            <span className="text-4xl animate-pulse">_</span>
          </div>
          <div className="text-xl md:text-2xl text-matrix-DEFAULT max-w-4xl leading-relaxed font-medium">
            <p className="mb-6">
              I'm an operative at UET Taxila, obsessed with using <span className="text-matrix-light font-bold">Data & AI</span> to hack the simulation. Straight A's (3.54 CGPA) + Harvard CS50x certified.
            </p>
            <p className="mb-6">
              I live at the intersection of <span className="text-white drop-shadow-[0_0_5px_#fff]">AI, Web3, and Protocol Integrity</span>. From anti-counterfeit Med-Tech to multi-agent Web3 shopping programs.
            </p>
            <p>
              Outside the mainframe? I'm the Hult Prize Campus Director and mentoring global nodes for GirlScript Summer of Code. Always compiling. 
            </p>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-12 drop-shadow-[0_0_10px_#00ff41]">
            THE ARSENAL
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {stack.map((group, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-black border ${group.color} p-8 rounded-none relative overflow-hidden group hover:bg-matrix-dark/20 transition-all duration-300`}
              >
                <div className="absolute top-0 right-0 p-2 text-matrix opacity-30 text-xs">
                  0x{Math.random().toString(16).substr(2, 6).toUpperCase()}
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-8 text-white drop-shadow-[0_0_5px_#fff]">
                  &gt; {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-4 py-2 bg-black rounded-none text-sm font-bold text-matrix border border-matrix hover:bg-matrix hover:text-black transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-baseline gap-4 mb-12 border-b border-matrix pb-4">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase drop-shadow-[0_0_10px_#00ff41]">
              ACCESS LOGS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl">
            {achievements.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-black border border-matrix border-l-4 rounded-none flex items-center gap-4 cursor-default hover:bg-matrix-dark/50"
              >
                <div className="w-8 h-8 flex items-center justify-center shrink-0 text-matrix-light font-bold">
                  {`[${idx < 9 ? '0' : ''}${idx + 1}]`}
                </div>
                <p className="text-lg font-bold text-matrix-light">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </motion.section>
  );
}
