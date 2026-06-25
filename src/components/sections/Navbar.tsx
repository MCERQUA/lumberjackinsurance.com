"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ChevronDown, Menu, X, Lock, CreditCard } from "lucide-react";
import { SITE } from "@/lib/site";

const NAV = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "INSURANCE", href: "/services", dropdown: true },
  { label: "CLAIMS", href: "/claims" },
  { label: "RESOURCES", href: "/blog", dropdown: true },
  { label: "CONTACT", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50"
      initial={prefersReduced ? undefined : { y: -100 }}
      animate={prefersReduced ? undefined : { y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top utility bar — dark navy, gold text */}
      <div className="bg-[#0F1C38] text-[#E8B923]">
        <div className="container-wide flex h-9 items-center justify-between gap-4">
          {/* spacer to balance the right links on desktop */}
          <span className="hidden lg:block w-[260px]" aria-hidden />

          <p className="hidden md:block flex-1 text-center font-display font-600 text-[0.7rem] uppercase tracking-[0.18em]">
            Protecting What Matters. Supporting What Builds Your Future.
          </p>

          <div className="flex items-center gap-5 text-[0.7rem] font-display font-700 uppercase tracking-widest">
            <Link
              href="/client-login"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-gold-light"
            >
              <Lock className="h-3.5 w-3.5" />
              Client Login
            </Link>
            <Link
              href="/pay"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-gold-light"
            >
              <CreditCard className="h-3.5 w-3.5" />
              Pay My Bill
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav — white, border-bottom; gains shadow on scroll */}
      <nav
        className={[
          "bg-white transition-shadow duration-300",
          scrolled
            ? "border-b-2 border-gray-200 shadow-md"
            : "border-b border-gray-200 shadow-none",
        ].join(" ")}
      >
        <div className="container-wide flex h-20 items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            aria-label={`${SITE.name} home`}
            className="flex items-center transition-transform duration-200 hover:scale-105"
          >
            <img
              src="/images/lumberjack-logo.png"
              alt={SITE.name}
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV.map((item) => {
              const active = item.href === "/";
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={active ? "true" : undefined}
                  className="lj-underline inline-flex items-center gap-1 font-display font-700 text-sm uppercase tracking-wide text-navy-dark transition-colors hover:text-gold-dark"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="h-4 w-4" />}
                </Link>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-sm border-2 border-navy-dark text-navy-dark"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay — dark navy, gold links */}
      <div
        className={[
          "lg:hidden fixed inset-0 z-50 bg-[#0F1C38] transition-opacity duration-300",
          open ? "opacity-100 visible" : "pointer-events-none invisible opacity-0",
        ].join(" ")}
      >
        <div className="container-wide flex h-20 items-center justify-between">
          <img
            src="/images/lumberjack-logo.png"
            alt={SITE.name}
            className="h-12 w-auto"
          />
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border-2 border-gold text-gold"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="container-wide mt-6 flex flex-col gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 border-b border-white/10 py-4 font-display font-700 text-2xl uppercase tracking-wide text-[#E8B923] transition-colors hover:text-gold-light"
            >
              {item.label}
              {item.dropdown && <ChevronDown className="h-5 w-5" />}
            </Link>
          ))}

          <div className="mt-6 flex flex-col gap-4 text-sm font-display font-700 uppercase tracking-widest text-[#E8B923]">
            <Link
              href="/client-login"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2"
            >
              <Lock className="h-4 w-4" />
              Client Login
            </Link>
            <Link
              href="/pay"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2"
            >
              <CreditCard className="h-4 w-4" />
              Pay My Bill
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
