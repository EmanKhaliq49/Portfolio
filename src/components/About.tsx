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
      category: "CORE",
      skills: ["Python (FastAPI)", "C", "SQL", "PWA", "TypeScript"],
      color: "from-blue-400 to-cyan-300"
    },
    {
      category: "AI / ML",
      skills: ["LLAMA-3", "Mistral AI", "CrewAI", "OCR", "Computer Vision", "Agents"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "WEB / TOOLS",
      skills: ["Coral MCP", "Solana Pay", "Firebase", "Azure", "Netlify", "Google APIs"],
      color: "from-[#00ff87] to-[#60efff]"
    },
  ];

  const achievements = [
    "Top 30 Finalist: Huawei ICT Competition",
    "Bronze Honour: International CS Competition '25",
    "9/9 Puzzles Solved: Harvard CS50 Puzzle Day",
    "Open Source Contributor: Hacktoberfest",
    "12x International AI Hackathon Participant",
    "Harvard HBS Aspire & McKinsey Forward Graduate",
  ];

  return (
    <motion.section 
      ref={sectionRef} 
      className="bg-[#09090b] text-white py-40 px-8 md:px-24 overflow-hidden relative z-20 rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] -mt-12 md:-mt-24"
    >
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <motion.div style={{ y: parallaxY }} className="max-w-7xl mx-auto space-y-32 relative z-10">
        
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              Main Character Energy
            </h2>
            <span className="text-4xl">✨</span>
          </div>
          <div className="text-xl md:text-2xl text-gray-400 max-w-4xl leading-relaxed font-medium">
            <p className="mb-6">
              I'm a CS student at UET Taxila, obsessed with using <span className="text-white hover:text-cyan-400 transition-colors">Data & AI</span> to build things that actually matter. Straight A's (3.54 CGPA) + Harvard CS50x certified.
            </p>
            <p className="mb-6">
              I live at the intersection of <span className="text-white hover:text-purple-400 transition-colors">AI, Web3, and Social Impact</span>. From anti-counterfeit Med-Tech to multi-agent Web3 shopping bots.
            </p>
            <p>
              Outside the IDE? I'm the Hult Prize Campus Director and mentoring global devs for GirlScript Summer of Code. Always shipping. 🚀
            </p>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-12">
            The Arsenal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {stack.map((group, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-[#121214] border border-white/5 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group"
              >
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${group.color} rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                <h3 className="text-2xl font-black tracking-tight mb-8">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className={`px-4 py-2 bg-[#1c1c1f] rounded-xl text-sm font-bold text-gray-300 border border-white/5 hover:border-white/20 transition-all`}
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
          <div className="flex items-baseline gap-4 mb-12">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              Hall of Fame
            </h2>
            <span className="text-4xl">🏆</span>
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
                className="p-6 bg-[#121214] border border-white/5 rounded-2xl flex items-center gap-4 cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#00ff87] shadow-[0_0_15px_#00ff87]" />
                </div>
                <p className="text-lg font-bold text-gray-200">
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
