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

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24">
        
        <motion.div
          style={{ opacity: opacity1, y: y1, scale: scale1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-auto"
        >
          <div className="text-center group">
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-matrix drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">
              WAKE UP, NEO...
            </h1>
            <div className="mt-6 inline-block bg-matrix-dark p-[2px] rounded-none border border-matrix">
               <div className="bg-black backdrop-blur-md px-6 py-2">
                 <p className="text-sm md:text-lg text-matrix font-medium tracking-widest uppercase">
                   SYSTEM ADMINISTRATOR // EMAN KHALIQ
                 </p>
               </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex items-center justify-start px-8 md:px-24 pointer-events-auto"
        >
          <div className="max-w-3xl text-left">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-matrix drop-shadow-[0_0_20px_rgba(0,255,65,0.5)] leading-[0.9]">
              THE MATRIX <br />
              <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">HAS YOU.</span> <br />
              FOLLOW THE WHITE RABBIT.
            </h2>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex items-center justify-end px-8 md:px-24 pointer-events-auto"
        >
          <div className="max-w-3xl text-right flex flex-col items-end">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-matrix drop-shadow-[0_0_20px_rgba(0,255,65,0.5)] leading-[0.9]">
              CONSTRUCT <br />
              <span className="text-white">INITIATED.</span>
            </h2>
            <div className="mt-8 border-l-4 border-matrix pl-6 max-w-lg text-left">
              <p className="text-matrix-light text-xl">
                &gt; Accessing central database...<br/>
                &gt; Loading skill protocols...<br/>
                &gt; Establishing secure connection...
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
