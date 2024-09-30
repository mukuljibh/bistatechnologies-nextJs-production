import type { Config } from "tailwindcss";

const config: Config = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./wrapper/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      scale: {
        '10': '0.1',
        '15': '0.15',
        '35': '0.35',
        '60': '0.6',
      },
      height: {
        '128': '32rem',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
