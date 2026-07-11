"use client";

import { useEffect, useRef } from "react";

/**
 * AEO traffic-source capture (hidden; never rendered visibly).
 * Two hidden inputs that self-populate on mount with where the visitor came from
 * (utm_source / ref / referrer host / direct) + the landing URL, so each lead
 * submission carries its traffic source. Additive + invisible — no layout/design
 * impact. Spec: docs/jambot/aeo-traffic-capture-snippet.md
 */
export function AeoFields() {
  const srcRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const p = new URLSearchParams(window.location.search);
      let src = p.get("utm_source") || p.get("ref") || "";
      if (!src && document.referrer) {
        try {
          src = new URL(document.referrer).hostname;
        } catch {
          src = document.referrer;
        }
      }
      if (!src) src = "direct";
      if (srcRef.current) srcRef.current.value = src;
      if (urlRef.current) urlRef.current.value = window.location.href;
    } catch {
      /* no-op */
    }
  }, []);

  return (
    <>
      <input ref={srcRef} type="hidden" name="traffic_source" defaultValue="" />
      <input ref={urlRef} type="hidden" name="landing_url" defaultValue="" />
    </>
  );
}
