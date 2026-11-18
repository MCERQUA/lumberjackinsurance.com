import localFont from "next/font/local";

export const displayFont = localFont({
  src: [
    { path: "./fonts/BarlowCondensed-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/BarlowCondensed-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/BarlowCondensed-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/BarlowCondensed-800.woff2", weight: "800", style: "normal" },
  ],
  display: "swap",
  variable: "--font-display",
});

export const bodyFont = localFont({
  src: [
    { path: "./fonts/Barlow-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Barlow-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Barlow-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Barlow-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-body",
});
