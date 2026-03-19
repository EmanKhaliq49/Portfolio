"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { RevealTitle, RevealText } from "./TextReveal";
import TerminalGraphic from "./TerminalGraphic";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

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
      className="bg-black text-matrix py-40 px-8 md:px-24 overflow-hidden relative z-20 rounded-t-[3rem] md:rounded-t-[4rem] border-t-2 border-matrix-light shadow-[0_-10px_30px_rgba(0,255,41,0.2)] -mt-12 md:-mt-24 min-h-screen flex flex-col justify-center"
      id="about"
    >
      {/* Background terminal grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff4110_1px,transparent_1px),linear-gradient(to_bottom,#00ff4110_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-20">
        
        {/* Terminal Graphic (aligns layout to right) */}
        <div className="hidden lg:block lg:w-1/2">
          <TerminalGraphic />
        </div>

        {/* About Me */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <RevealTitle className="text-2xl md:text-3xl tracking-[7px] uppercase text-matrix-light mb-8">
            SYSTEM OVERRIDE
          </RevealTitle>

          <RevealText className="text-3xl md:text-4xl lg:text-[2.2rem] font-semibold leading-tight md:leading-snug tracking-wide text-matrix-DEFAULT space-y-8">
            <p>
              I'm an operative at UET Taxila, obsessed with using <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">Data & AI</span> to hack the simulation. Straight A's (3.54 CGPA) + Harvard CS50x certified.
            </p>
            <p>
              I live at the intersection of <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">AI, Web3, and Protocol Integrity</span>. From anti-counterfeit Med-Tech to multi-agent Web3 shopping programs.
            </p>
            <p className="text-2xl md:text-3xl">
              Outside the mainframe? I'm the Hult Prize Campus Director and mentoring global nodes for GirlScript Summer of Code. Always compiling.
            </p>
          </RevealText>
        </div>
      </div>

      {/* Access Logs */}
      <div className="max-w-7xl mx-auto w-full relative z-10 mt-40">
        <RevealTitle className="text-2xl md:text-3xl tracking-[7px] uppercase text-matrix-light mb-12 border-b border-matrix/30 pb-4">
          ACCESS LOGS
        </RevealTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {achievements.map((item, idx) => (
            <RevealText key={idx} className="h-full">
              <motion.div 
                whileHover={{ scale: 1.02, x: 10 }}
                className="h-full p-6 bg-black/40 border border-matrix border-l-4 rounded-none flex items-center gap-4 cursor-default hover:bg-matrix-dark/40 backdrop-blur-sm"
              >
                <div className="w-8 h-8 flex items-center justify-center shrink-0 text-matrix-light font-bold">
                  {`[${idx < 9 ? '0' : ''}${idx + 1}]`}
                </div>
                <p className="text-lg font-medium text-matrix-light">
                  {item}
                </p>
              </motion.div>
            </RevealText>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
