import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // لازم تكون هنا، مش جوه extend
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        mainColor: "#5900CA",
        btnColor: "#FF3366",
        textColor: "#888888",
        primryColor: "#1D1D3C",
      },
      fontSize: {
        h6: "14px",
        h5: "18px",
        h1: "24px",
      },
    },
  },
  plugins: [],
} satisfies Config;
