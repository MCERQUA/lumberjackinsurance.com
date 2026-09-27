/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./mdx-components.tsx"],
  theme: {
    extend: {
      colors: {
        background: "#F4F4F4",
        foreground: "#2C180C",
        "muted-foreground": "#6B7280",
        border: "#E5E7EB",
        navy: {
          dark: "#2C180C",
          DEFAULT: "#402313",
          light: "#512C17",
        },
        gold: {
          DEFAULT: "#E8B923",
          dark: "#C9A020",
          light: "#F5CB50",
        },
        primary: { DEFAULT: "#E8B923", foreground: "#2C180C" },
        accent: { DEFAULT: "#2C180C", light: "#F5CB50", foreground: "#FFFFFF" },
        // Legacy "forest" alias remapped to the navy ramp so old gradient-text
        // spans (from-primary via-forest-500 to-accent) render gold→navy.
        forest: { 100: "#512C17", 500: "#402313", 700: "#2C180C" },
        paper: { warm: "#F4F4F4", ink: "#2C180C" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Barlow Condensed", "Impact", "ui-sans-serif"],
        body: ["var(--font-body)", "Barlow", "Inter", "ui-sans-serif"],
      },
      // Numeric weight keys so the sports-team CSS (font-700 / font-800) compiles
      fontWeight: {
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
      },
      spacing: { 4.5: "1.125rem", 18: "4.5rem" },
      opacity: { 8: "0.08", 12: "0.12", 15: "0.15", 85: "0.85" },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.12)",
        lift: "0 8px 30px rgba(0,0,0,0.2)",
      },
      maxWidth: { "7xl": "80rem" },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
