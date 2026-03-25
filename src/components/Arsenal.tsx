"use client";

import { motion } from "framer-motion";

const skillsList = [
  "Python", "C", "SQL", "PWA", "TypeScript",
  "LLAMA-3", "Mistral AI", "CrewAI", "OCR", "Agents",
  "Coral MCP", "Solana", "Firebase", "Azure", "Netlify", "APIs"
];

const carColors = [
  "bg-[#e10600]", "bg-blue-600", "bg-purple-600",
  "bg-[#00D2BE]", "bg-yellow-500", "bg-orange-600",
  "bg-pink-600", "bg-emerald-500"
];

const F1CarProfile = ({ text, colorClass }: { text: string, colorClass: string }) => {
  return (
    <div className="relative h-24 flex items-end drop-shadow-2xl group shrink-0 w-[22rem] hover:scale-110 transition-transform duration-300">
      {/* Rear Wing */}
      <div className={`absolute right-2 bottom-4 w-12 h-14 ${colorClass} rounded-sm skew-x-[-15deg] border-t-4 border-white`} />
      
      {/* Main Body (Dynamically holds text) */}
      <div className={`absolute right-10 bottom-3 w-64 h-10 ${colorClass} rounded-full flex items-center justify-center border-b-4 border-black/20`}>
         <span className="text-white font-black italic tracking-widest text-sm md:text-base uppercase z-10 drop-shadow-md">
           {text}
         </span>
      </div>
      
      {/* Front Wing */}
      <div className={`absolute left-0 bottom-3 w-20 h-4 ${colorClass} rounded-l-full skew-x-[15deg] border-b-2 border-white`} />
      
      {/* Wheels */}
      <div className="absolute right-12 bottom-0 w-14 h-14 bg-neutral-900 border-[4px] border-neutral-700 rounded-full flex items-center justify-center z-20 animate-[spin_1s_linear_infinite]">
        <div className="w-5 h-5 border-[2px] border-neutral-500 rounded-full border-dashed" />
      </div>
      <div className="absolute left-8 bottom-0 w-12 h-12 bg-neutral-900 border-[4px] border-neutral-700 rounded-full flex items-center justify-center z-20 animate-[spin_1s_linear_infinite]">
        <div className="w-4 h-4 border-[2px] border-neutral-500 rounded-full border-dashed" />
      </div>
      
      {/* Cockpit & Driver */}
      <div className="absolute right-32 bottom-12 w-14 h-6 bg-neutral-950 rounded-t-full flex justify-start px-2 z-10">
        <div className="w-5 h-5 bg-white rounded-full mt-1 border-[3px] border-f1Red shadow-inner" />
      </div>
    </div>
  );
};

export default function Arsenal() {
  return (
    <section 
      className="bg-carbon/80 backdrop-blur-md py-32 px-0 relative z-30 flex flex-col items-center border-t-2 border-carbon shadow-[0_-10px_30px_rgba(225,6,0,0.2)]"
      id="skills"
    >
      <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-24 drop-shadow-[0_0_10px_#e10600] text-f1Red self-start max-w-7xl mx-auto w-full px-8 md:px-24">
        THE ARSENAL
      </h2>

      {/* Racetrack Container */}
      <div className="w-full relative overflow-hidden flex flex-col justify-center bg-[#1a1a1a] py-16"
           style={{
             borderTop: '12px solid transparent',
             borderBottom: '12px solid transparent',
             borderImage: 'repeating-linear-gradient(45deg, #e10600 0, #e10600 20px, #ffffff 20px, #ffffff 40px) 12'
           }}>
        
        {/* Dashed middle line of the road */}
        <div className="absolute top-1/2 left-0 w-full h-1 border-t-8 border-dashed border-white/20 -translate-y-1/2" />
        
        {/* Track fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-carbon to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-carbon to-transparent z-10 pointer-events-none" />
        
        <motion.div
           animate={{ x: ["0%", "-50%"] }}
           transition={{
             repeat: Infinity,
             ease: "linear",
             duration: 40,
           }}
           className="flex space-x-12 px-4 items-center pl-16 z-20"
        >
          {skillsList.concat(skillsList).map((skill, index) => (
            <F1CarProfile 
              key={index} 
              text={skill} 
              colorClass={carColors[index % carColors.length]} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
