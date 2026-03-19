"use client";
import { motion } from "framer-motion";

export default function TerminalGraphic() {
  const lines = [
    "INITIATING SECURE CONNECTION...",
    "HANDSHAKE PROTOCOL ACCEPTED.",
    "DECRYPTING NEURAL DATA PACKETS...",
    "ACCESS GRANTED.",
    "-> System Identity: Eman Khaliq",
    "-> Clearance: LEVEL 30",
    "-> Status: OPERATIVE_ACTIVE",
    "COMMENCING DATA STREAM...",
  ];

  return (
    <div className="w-full h-full min-h-[400px] border border-matrix p-6 rounded-none bg-black/80 shadow-[0_0_20px_rgba(0,255,65,0.1)] flex flex-col font-mono relative overflow-hidden group">
      <div className="flex gap-2 mb-6 border-b border-matrix/30 pb-4">
        <div className="w-3 h-3 bg-matrix/30 group-hover:bg-matrix transition-colors"></div>
        <div className="w-3 h-3 bg-matrix/30 group-hover:bg-matrix transition-colors delay-75"></div>
        <div className="w-3 h-3 bg-matrix/30 group-hover:bg-matrix transition-colors delay-150"></div>
      </div>
      
      <div className="flex-1 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none z-10" />
        
        <motion.div 
          initial={{ y: 200 }}
          animate={{ y: -200 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="space-y-4"
        >
          {lines.concat(lines).map((line, i) => (
            <div key={i} className="text-matrix-light font-medium tracking-tight opacity-80 flex items-start gap-3">
              <span className="text-matrix-dark shrink-0">~%</span>
              <span>{line}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-matrix/50 m-2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-matrix/50 m-2 pointer-events-none" />
    </div>
  );
}
