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
      role: "Data Analytics Job Simulation",
      organization: "Deloitte, Australia",
      category: "Industry",
      description: "Data modeling, forensics, and data visualization using Tableau.",
    },
    {
      role: "Cybersecurity Simulation",
      organization: "Mastercard",
      category: "Industry",
      description: "Phishing email simulations, analysis, and response strategies.",
    },
    {
      role: "Program Graduate",
      organization: "McKinsey Forward & HBS Aspire",
      category: "Certification",
      description: "Harvard Business School and McKinsey leadership programs.",
    },
    {
      role: "Campus Director",
      organization: "Hult Prize UETT",
      category: "Leadership",
      description: "Organizing on-campus competitions and mentoring student startups.",
    },
    {
      role: "Mentor",
      organization: "GirlScript Summer of Code",
      category: "Open Source",
      description: "Guiding global contributors through open-source dev & code reviews.",
    },
    {
      role: "Campus Ambassador",
      organization: "Inspiring Women PK",
      category: "Advocacy",
      description: "Leading outreach to empower female students through networking.",
    },
  ];

  return (
    <motion.section 
      ref={sectionRef} 
      className="bg-[#09090b] text-white py-40 px-8 md:px-24 overflow-hidden relative z-40 rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] -mt-12 md:-mt-24 border-t-8 border-[#1c1c1f]"
    >
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ff0f7b]/10 rounded-full blur-[150px] pointer-events-none" />

      <motion.div style={{ y: parallaxY }} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mb-20"
        >
          <div className="inline-block bg-[#1c1c1f] text-white px-6 py-2 rounded-full font-black tracking-widest uppercase text-sm mb-6 border border-white/10">
            The Journey So Far ✦
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-4 leading-none">
            Experience <br/> <span className="text-gray-500">&</span> Influence.
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
              className="bg-[#121214] border border-white/5 p-8 rounded-[2rem] hover:bg-[#1c1c1f] hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-4 py-1.5 text-xs font-black uppercase tracking-widest bg-white text-black rounded-lg group-hover:bg-[#00ff87] group-hover:text-black transition-colors duration-300">
                  {exp.category}
                </span>
              </div>
              
              <h3 className="text-3xl font-black mb-2 tracking-tight">{exp.role}</h3>
              <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4 inline-block">
                @{exp.organization}
              </div>
              
              <p className="text-gray-400 font-medium text-lg leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
