"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -150]);
  const scale1 = useTransform(scrollYProgress, [0, 0.25], [1, 0.9]);

  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.4, 0.55], [150, 0, -150]);

  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.7, 0.9], [150, 0, -150]);

  const text = "Wake up, Eman";
  const sentenceVars = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const charVars = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-50">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24">
        
        <motion.div
          style={{ opacity: opacity1, y: y1, scale: scale1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-auto"
        >
          <div className="text-center group">
            <motion.h1 
              variants={sentenceVars}
              initial="hidden"
              animate="visible"
              className="text-6xl md:text-9xl font-bold tracking-tighter text-[#50fa7b] drop-shadow-[0_0_15px_rgba(80,250,123,0.3)] mb-4"
            >
              {Array.from(text).map((char, i) => (
                <motion.span key={i} variants={charVars}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="mt-6 inline-block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-[2px] rounded-full"
            >
               <div className="bg-[#121212]/80 backdrop-blur-md rounded-full px-6 py-2">
                 <p className="text-sm md:text-lg text-white font-medium tracking-wide uppercase">
                   CS STUDENT X AI DEVELOPER
                 </p>
               </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex items-center justify-start px-8 md:px-24 pointer-events-auto"
        >
          <div className="max-w-3xl text-left">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl leading-[0.9]">
              BUILDING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] to-[#60efff]">ROBUST</span> <br />
              APPS.
            </h2>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex items-center justify-end px-8 md:px-24 pointer-events-auto"
        >
          <div className="max-w-3xl text-right">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl leading-[0.9]">
              DATA & AI <br />
              FOR <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#ff0f7b] to-[#f89b29]">IMPACT.</span>
            </h2>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
