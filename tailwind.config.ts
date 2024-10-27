import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        fullhd: "1920px",
      },
      maxWidth: {
        fullhd: "1920px",
      },
      colors: {
        main: "#0F172A",
        "main-dark": "#e4e9f5",
        primary: "#581C87",
        "primary-light": "#7E22CE",
        secondary: "#FCD34D",
        "secondary-dark": "#78350F",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        button: "0px 4px 4px 0px #00000040",
      },
    },
  },
  plugins: [],
};
export default config;
