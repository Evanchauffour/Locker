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
        background: "#fbfefc",
        primary: "#2ed576",
        secondary: "#82f3b3",
        accent: "#49fe98",
        text: "#0b150f",
      },
    },
  },
  plugins: [],
};
export default config;
