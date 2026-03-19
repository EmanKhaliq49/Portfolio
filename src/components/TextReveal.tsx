"use client";

import { motion } from "framer-motion";
import React from "react";

export const RevealTitle = ({ children, className }: { children: string; className?: string }) => {
  const chars = children.split("");
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.03 },
        },
      }}
      className={`inline-block ${className || ""}`}
    >
      {chars.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 80, rotate: 10 },
            visible: { 
              opacity: 1, 
              y: 0, 
              rotate: 0, 
              transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } 
            },
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const RevealText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
