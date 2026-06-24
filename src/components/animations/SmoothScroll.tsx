"use client";

import type { ReactNode } from "react";

// Lightweight wrapper. Smooth scrolling is handled via CSS (`scroll-behavior`
// in globals.css), so this is a transparent passthrough with no extra deps.
export function SmoothScroll({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
