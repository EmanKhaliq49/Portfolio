"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Gen Z Goofy F1 Emojis
    const emojis = ["🏎️", "🏎️", "💨", "🏁", "🏆", "🔥", "🚦", "⛽", "🏁", "👀", "🔥", "🏎️"];

    const fontSize = 28;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Initialize drops
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * -100; // Start at random heights offscreen
    }

    const draw = () => {
      // Clear previous frame completely so the carbon track background from page shows through perfectly!
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px sans-serif`;

      for (let i = 0; i < drops.length; i++) {
        // Random emoji
        const text = emojis[Math.floor(Math.random() * emojis.length)];

        // Draw the emoji
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }

        // Variable speed based on column
        drops[i] += Math.random() < 0.2 ? 2 : 1; 
      }
    };

    const interval = setInterval(draw, 50); // ~20fps for emoji drawing to look like a goof stream

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 bg-transparent opacity-80"
    />
  );
}
