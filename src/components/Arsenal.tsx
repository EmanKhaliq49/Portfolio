"use client";

import { motion } from "framer-motion";

const skillsList = [
  "Python", "C", "SQL", "PWA", "TypeScript",
  "LLAMA-3", "Mistral AI", "CrewAI", "OCR", "Agents",
  "Coral MCP", "Solana", "Firebase", "Azure", "Netlify", "APIs"
];

export default function Arsenal() {
  return (
    <section 
      className="bg-black py-32 px-0 relative z-30 flex flex-col items-center border-t-2 border-matrix-dark shadow-[0_-10px_30px_rgba(0,143,17,0.2)]"
      id="skills"
    >
      <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-16 drop-shadow-[0_0_10px_#00ff41] text-matrix self-start max-w-7xl mx-auto w-full px-8 md:px-24">
        THE ARSENAL
      </h2>

      <div className="w-full relative overflow-hidden flex whitespace-nowrap bg-matrix-dark/10 border-y border-matrix/30 py-8">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          className="flex space-x-8 px-4 items-center"
        >
          {skillsList.concat(skillsList).map((skill, index) => (
            <div 
              key={index}
              className="px-8 py-4 border border-matrix text-matrix text-2xl font-bold uppercase tracking-widest bg-black hover:bg-matrix hover:text-black transition-colors shrink-0 cursor-default"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
