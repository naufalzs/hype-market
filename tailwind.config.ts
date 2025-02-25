import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        shimmer: {
          "0%": {
            backgroundPosition: "-300px 0",
          },
          "100%": {
            backgroundPosition: "300px 0",
          },
        },
      },
      animation: {
        shimmer: "shimmer 1.3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
