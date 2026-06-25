"use client";

import Link from "next/link";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Insurance", href: "/services" },
  { label: "Claims", href: "/contact" },
  { label: "Resources", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#0F1C38] py-14">
      <div className="container-wide">
        {/* Row 1 */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Col 1 — Brand */}
          <div>
            <img
              src="/images/lumberjack-logo.png"
              alt="Lumberjack Insurance"
              className="h-20 w-auto mb-4"
            />
            <p className="font-body text-sm text-white/70">Protecting What Matters.</p>
            <p className="font-body text-xs text-white/50 mt-1">
              Flagstaff&apos;s hometown insurance agency.
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#E8B923]">
              Quick Links
            </h4>
            <ul className="mt-4">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="block py-1 font-body text-sm text-white/70 hover:text-[#E8B923] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#E8B923]">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 font-body text-sm text-white/70">
              <li>12220 E Riggs Road Suite #105, Chandler, AZ 85249</li>
              <li>
                <a href="tel:+18449675247" className="hover:text-[#E8B923] transition-colors">
                  844-967-5247
                </a>
              </li>
              <li>
                <a
                  href="mailto:josh@contractorschoiceagency.com"
                  className="hover:text-[#E8B923] transition-colors break-all"
                >
                  josh@contractorschoiceagency.com
                </a>
              </li>
              <li>Mon–Fri 8am–5pm MST</li>
            </ul>
          </div>
        </div>

        {/* Row 2 — separator */}
        <div className="border-t border-[#E8B923]/20 my-6" />

        {/* Row 3 — legal */}
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between text-xs text-white/40">
          <p>
            © 2025 Lumberjack Insurance · A Contractors Choice Agency Brand · NPN #8608479 ·
            Licensed in Arizona
          </p>
          <p>Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
