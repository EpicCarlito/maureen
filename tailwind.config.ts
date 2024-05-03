import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ["var(--font-unbounded)"],
        tilt_warp: ["var(--font-tilt_warp)"],
        secular_one: ["var(--font-secular_one)"],
      },
    },
  },
  plugins: [],
};

export default config;
