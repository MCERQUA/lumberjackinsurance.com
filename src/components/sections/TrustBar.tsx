"use client";

import Link from "next/link";
import { InfiniteMarquee } from "@/components/animations/InfiniteMarquee";
import { CREDENTIALS } from "@/lib/site";
import {
  MapPin, CalendarCheck, HardHat, Timer, Zap, Award,
} from "lucide-react";

const ICONS = { MapPin, CalendarCheck, HardHat, Timer, Zap, Award } as const;

export function TrustBar() {
  return (
    <section className="relative bg-white border-y border-border py-6">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-4">
          {CREDENTIALS.map((c) => {
            const Icon = ICONS[c.icon as keyof typeof ICONS] ?? Award;
            return (
              <div key={c.label} className="flex items-center gap-2.5 justify-center md:justify-start">
                <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary">
                  <Icon className="h-4.5 w-4.5" strokeWidth={2.2} />
                </span>
                <span className="text-[0.82rem] font-body font-semibold text-foreground/80 leading-tight">
                  {c.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
