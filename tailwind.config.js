/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {
      colors: {
        // Flagstaff mountain-town palette
        background: "#faf7f1", // cream / birch paper
        foreground: "#1f1a16", // warm charcoal ink
        "muted-foreground": "#6b6157",
        border: "#e7ddcd",
        primary: {
          DEFAULT: "#14532d", // deep pine / forest green
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#b1241f", // warm plaid / flannel red
          light: "#e0584a",
          foreground: "#ffffff",
        },
        forest: {
          100: "#dceee2",
          500: "#2f6b46",
          700: "#1b4332",
        },
        paper: {
          warm: "#f2ead9", // birch
          ink: "#1c1714", // dark charcoal (footer)
        },
        amber: {
          warm: "#d99a2b",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Fraunces", "ui-serif", "Georgia", "serif"],
        body: ["var(--font-body)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      spacing: {
        4.5: "1.125rem",
        18: "4.5rem",
      },
      // Non-standard opacity steps referenced via slash modifiers in globals.css
      // (@apply bg-accent/8 …) and components (text-foreground/85 …). Required so
      // those bare opacity utilities resolve at build time.
      opacity: {
        8: "0.08",
        12: "0.12",
        15: "0.15",
        85: "0.85",
      },
      boxShadow: {
        card: "0 1px 2px rgba(28,23,20,.04), 0 4px 16px rgba(28,23,20,.06)",
        lift: "0 8px 30px rgba(20,83,45,.12), 0 2px 8px rgba(28,23,20,.08)",
      },
      maxWidth: {
        "7xl": "80rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
