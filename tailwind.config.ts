import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {
      colors: {
        // === Lumberjack / Flagstaff mountain-town palette ===
        background: "#faf7f1", // warm birch page
        foreground: "#1f2a24", // deep pine charcoal (text)
        border: "#e6dfd2", // soft birch line
        muted: {
          DEFAULT: "#6b7a70",
          foreground: "#5b6b61", // text-muted-foreground
        },
        // Primary — deep pine green
        primary: {
          DEFAULT: "#166534",
          foreground: "#ffffff",
        },
        // Accent — burnt-rust / plaid red
        accent: {
          DEFAULT: "#9a3412",
          light: "#c2410c",
          foreground: "#ffffff",
        },
        // Forest green scale (higher = deeper pine)
        forest: {
          50: "#eef6f0",
          100: "#d6e9db",
          200: "#aed3b8",
          300: "#7fb890",
          400: "#4f9968",
          500: "#2f6b46",
          600: "#1f5536",
          700: "#14532d",
          800: "#103f23",
          900: "#0b2c19",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 8px -2px rgba(20, 40, 30, 0.06), 0 1px 3px -1px rgba(20, 40, 30, 0.04)",
        lift: "0 24px 60px -18px rgba(20, 83, 45, 0.22), 0 10px 24px -10px rgba(20, 40, 30, 0.10)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
