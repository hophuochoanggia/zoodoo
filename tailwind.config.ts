import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {},
        green: {
          default: "#14532D",
          light: "#39B33A",
        },
        orange: {
          default: "#FDBC11",
          light: "#FDCB4D",
        },
        gray: {
          default: "#D1D5DB",
          light: "#F3F4F6",
        },
        text: {
          default: "#1F2937",
          title: "#111827",
          description: "#6B7280",
          gray: "#807E73",
        },
      },
    },
  },
  plugins: [],
};
export default config;
