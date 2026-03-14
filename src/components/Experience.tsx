"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const experiences = [
    {
      role: "Data Analytics Simulation Node",
      organization: "Deloitte, Australia",
      category: "Sys.Industry",
      description: "Data modeling protocols, network forensics, and Tableau data visualization arrays.",
    },
    {
      role: "Cybersecurity Training Construct",
      organization: "Mastercard",
      category: "Sys.Industry",
      description: "Simulating phishing breaches, threat analysis, and rapid response overrides.",
    },
    {
      role: "Leadership Program Agent",
      organization: "McKinsey Forward & HBS Aspire",
      category: "Protocol.Cer",
      description: "Harvard Business School and McKinsey leadership algorithm processing.",
    },
    {
      role: "Node Administrator",
      organization: "Hult Prize UETT",
      category: "Protocol.Lead",
      description: "Coordinating network sub-nodes and mentoring new system initiatives.",
    },
    {
      role: "Global Mentor",
      organization: "GirlScript Summer of Code",
      category: "Open.Source",
      description: "Directing worldwide traffic through open-source repos & code syntax reviews.",
    },
    {
      role: "Advocacy Agent",
      organization: "Inspiring Women PK",
      category: "Sys.Advocacy",
      description: "Generating outreach packets to upgrade female nodes via secure networking.",
    },
  ];

  return (
    <motion.section 
      ref={sectionRef} 
      className="bg-black text-matrix py-40 px-8 md:px-24 overflow-hidden relative z-40 rounded-t-[3rem] md:rounded-t-[4rem] border-t-2 border-matrix-light shadow-[0_-10px_30px_rgba(0,255,41,0.2)] -mt-12 md:-mt-24"
    >
      {/* Background terminal grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff4110_1px,transparent_1px),linear-gradient(to_bottom,#00ff4110_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <motion.div style={{ y: parallaxY }} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mb-20"
        >
          <div className="inline-block bg-black text-matrix px-6 py-2 border border-matrix font-bold tracking-widest uppercase text-sm mb-6 shadow-[0_0_10px_rgba(0,255,65,0.5)]">
            &gt; /usr/local/logs 
          </div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-4 leading-none drop-shadow-[0_0_10px_#00ff41]">
            SYSTEM <br/> <span className="text-matrix-dark">&</span> ACCESS LOGS.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 120 }}
              className="bg-black border border-matrix p-8 rounded-none hover:bg-matrix-dark/30 hover:shadow-[0_0_15px_rgba(0,255,65,0.4)] transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest border border-matrix text-matrix group-hover:bg-matrix group-hover:text-black transition-colors duration-300">
                  {exp.category}
                </span>
                <span className="text-matrix-dark text-sm">[000{idx+1}]</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-2 tracking-tight text-white drop-shadow-[0_0_5px_#fff]">{exp.role}</h3>
              <div className="text-xl font-bold text-matrix-light mb-4 inline-block">
                @{exp.organization}
              </div>
              
              <p className="text-matrix font-medium text-lg leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
