import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#00ff41",
        matrix: {
          light: "#00ff41",
          DEFAULT: "#008f11",
          dark: "#003b00",
        }
      },
    },
  },
  plugins: [],
};
export default config;
