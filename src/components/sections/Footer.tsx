"use client";

import Link from "next/link";
import { TreePine, Phone, Mail, MapPin, Clock } from "lucide-react";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative bg-paper-ink text-white">
      <div className="absolute top-0 inset-x-0 h-px pine-divider" aria-hidden />

      {/* Lead-capture strip */}
      <div className="border-b border-white/10">
        <div className="container-wide py-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="font-display font-semibold text-xl md:text-2xl text-white">
              Ready to protect what matters in Flagstaff?
            </h3>
            <p className="mt-1 text-white/70 text-sm">
              Fast, no-pressure quotes · a real local agent · home, auto, business &amp; more.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
            <Link href="/quote" className="btn-accent">
              Get a Free Quote
            </Link>
            <a
              href={SITE.phoneHref}
              className="btn-secondary !bg-white/10 !text-white !border-white/20 hover:!bg-white/20"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-wide py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2.5" aria-label="Lumberjack Insurance home">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-forest-gradient">
              <TreePine className="h-5 w-5 text-white" strokeWidth={2.4} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display font-semibold text-white text-[1.05rem] tracking-tight">
                Lumberjack
              </span>
              <span className="font-body font-semibold text-accent-light text-[0.65rem] uppercase tracking-[0.18em]">
                Insurance
              </span>
            </span>
          </Link>
          <p className="mt-5 text-sm text-white/70 leading-relaxed">
            Your friendly, local independent insurance agency in Flagstaff, Arizona —
            home, auto, business, landlord, and renters coverage for the high country
            and all of Northern Arizona.
          </p>
          <p className="mt-4 text-xs text-white/50">
            An independent agency serving Northern Arizona · NPN #{SITE.npn}
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
            Coverage lines
          </h4>
          <ul className="space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-white/70 hover:text-accent-light transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
            Company
          </h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.filter((l) => l.href !== "/").map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/70 hover:text-accent-light transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
            <li><Link href="/privacy" className="text-sm text-white/70 hover:text-accent-light transition-colors">Privacy</Link></li>
            <li><Link href="/terms" className="text-sm text-white/70 hover:text-accent-light transition-colors">Terms</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
            Get in touch
          </h4>
          <ul className="space-y-3">
            <li>
              <a href={SITE.phoneHref} className="flex items-start gap-3 text-sm text-white/80 hover:text-accent-light transition-colors">
                <Phone className="h-4 w-4 text-accent-light flex-shrink-0 mt-0.5" />
                <span>
                  {SITE.phone}
                  <span className="block text-xs text-white/50">Primary · {SITE.phoneAlt} alt</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 text-sm text-white/80 hover:text-accent-light transition-colors">
                <Mail className="h-4 w-4 text-accent-light flex-shrink-0 mt-0.5" />
                <span className="break-all">{SITE.email}</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm text-white/80">
              <MapPin className="h-4 w-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span>
                {SITE.address.street}<br />
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </span>
            </li>
            <li className="flex items-start gap-3 text-sm text-white/80">
              <Clock className="h-4 w-4 text-accent-light flex-shrink-0 mt-0.5" />
              <span>{SITE.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved. Licensed Arizona insurance agency.</p>
          <p>Home · Auto · Business · Landlord · Renters · Flagstaff, Arizona</p>
        </div>
      </div>
    </footer>
  );
}
