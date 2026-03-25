"use client";

import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import { useRace } from "./RaceContext";
import { motion, AnimatePresence } from "framer-motion";

export default function F1Lights() {
  const [lightsCount, setLightsCount] = useState(0);
  const { raceStart, setRaceStart, sequenceComplete, setSequenceComplete } = useRace();
  
  // Note: Placeholders for sound files
  const [playBeep] = useSound("/sounds/beep.wav", { volume: 0.5 });
  const [playDrift] = useSound("/sounds/drift.wav", { volume: 0.8 });

  useEffect(() => {
    if (sequenceComplete) return;

    let timer: NodeJS.Timeout;

    if (lightsCount < 5) {
      // Turn on one light every second
      timer = setTimeout(() => {
        setLightsCount((prev) => prev + 1);
        try { playBeep(); } catch (e) {}
      }, 1000);
    } else if (lightsCount === 5 && !raceStart) {
      // 6th second: Turn out all lights and trigger raceStart
      timer = setTimeout(() => {
        setRaceStart(true);
        try { playDrift(); } catch(e) {}
        
        // Hide lights UI after a delay
        setTimeout(() => setSequenceComplete(true), 1500);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [lightsCount, raceStart, sequenceComplete]);

  if (sequenceComplete) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/80 backdrop-blur-md transition-opacity duration-1000"
      >
        <div className="flex gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(255,24,1,0.2)]">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className={`w-16 h-16 rounded-full border-4 transition-all duration-100 ${
                lightsCount > i && !raceStart 
                  ? "bg-neonRed border-neonRed shadow-[0_0_30px_#FF1801]" 
                  : "bg-black border-neutral-800"
              }`} 
            />
          ))}
        </div>
        <div className="mt-8 text-neutral-400 font-mono tracking-widest uppercase">
          {raceStart ? "GO GO GO!" : "Preparing to launch..."}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
